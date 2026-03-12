import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// ─── Schéma de validation côté serveur ────────────────────────────────────────
// La validation est intentionnellement stricte et indépendante du client.
const contactSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/),
  phone: z
    .string()
    .min(10)
    .max(20)
    .regex(/^[\d\s\+\-\.\(\)]+$/),
  email: z.string().email().max(254),
  city: z.string().min(2).max(100),
  message: z.string().min(10).max(2000),
});

// Stockage en mémoire simple pour limiter les soumissions par IP
// En production, utiliser Redis ou une base de données
const submissionMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = submissionMap.get(ip);

  if (!existing || now - existing.timestamp > RATE_LIMIT_WINDOW_MS) {
    submissionMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return false;
  }

  submissionMap.set(ip, { count: existing.count + 1, timestamp: existing.timestamp });
  return true;
}

// Nettoyer la map périodiquement (toutes les heures en mémoire)
setInterval(
  () => {
    const now = Date.now();
    for (const [key, value] of submissionMap.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW_MS) {
        submissionMap.delete(key);
      }
    }
  },
  60 * 60 * 1000,
);

export async function POST(request: NextRequest) {
  // Headers de sécurité supplémentaires
  const headers = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
  };

  // Rate limiting par IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (!getRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Trop de tentatives. Réessayez dans 15 minutes.' },
      { status: 429, headers },
    );
  }

  // Vérification Content-Type
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { success: false, message: 'Format invalide.' },
      { status: 400, headers },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Données invalides.' },
      { status: 400, headers },
    );
  }

  // Validation des données
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Données invalides.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422, headers },
    );
  }

  const { name, phone, email, city, message } = parsed.data;

  // ─── Envoi de l'email ────────────────────────────────────────────────────────
  // Ce bloc est un exemple avec un service d'envoi générique.
  // En production, intégrez votre solution préférée :
  //   - Resend (https://resend.com) — recommandé
  //   - SendGrid
  //   - Nodemailer avec SMTP
  //   - Mailgun
  //
  // Exemple avec Resend :
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.EMAIL_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@votre-domaine.fr',
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `Nouvelle demande de ${name} – ${siteConfig.company.name}`,
  //   html: `<p><b>Nom :</b> ${name}</p><p><b>Téléphone :</b> ${phone}</p>...`,
  // });

  // Pour l'instant, on logue et on retourne un succès fictif.
  // IMPORTANT : remplacez par un vrai envoi d'email avant la mise en production.
  if (process.env.NODE_ENV === 'development') {
    console.log('[Contact Form] Nouvelle soumission :', { name, phone, email, city, message });
  }

  // Simulation du succès (à remplacer par l'appel réel)
  return NextResponse.json(
    {
      success: true,
      message: 'Votre message a bien été envoyé. Nous vous répondrons rapidement.',
    },
    { status: 200, headers },
  );
}

// Rejeter toutes les méthodes non autorisées
export async function GET() {
  return NextResponse.json({ message: 'Méthode non autorisée.' }, { status: 405 });
}
