'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

// ─── Schéma de validation strict ──────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long')
    .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Le nom contient des caractères non autorisés'),
  phone: z
    .string()
    .min(10, 'Numéro de téléphone invalide')
    .max(20, 'Numéro de téléphone invalide')
    .regex(/^[\d\s\+\-\.\(\)]+$/, 'Format de téléphone invalide'),
  email: z
    .string()
    .email('Adresse e-mail invalide')
    .max(254, 'Adresse e-mail trop longue'),
  city: z
    .string()
    .min(2, 'Veuillez indiquer votre ville')
    .max(100, 'Nom de ville trop long'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Le message est trop long (2000 caractères maximum)'),
  // Champ honeypot — doit rester vide
  _website: z.string().max(0, 'Formulaire invalide').optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  compact?: boolean;
  className?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm({ compact = false, className }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitCount, setSubmitCount] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    // Anti-spam : limiter à 3 soumissions par session
    if (submitCount >= 3) {
      setSubmitStatus('error');
      return;
    }

    // Vérification honeypot côté client
    if (data._website && data._website.length > 0) {
      return;
    }

    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          city: data.city,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error('Trop de tentatives. Veuillez réessayer plus tard.');
        }
        throw new Error(errorData.message ?? 'Erreur lors de l\'envoi');
      }

      setSubmitStatus('success');
      setSubmitCount((c) => c + 1);
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={cn('flex flex-col items-center justify-center text-center py-10 gap-4', className)}>
        <CheckCircle className="w-14 h-14 text-green-500" aria-hidden="true" />
        <h3 className="text-xl font-bold text-gray-900">Message envoyé !</h3>
        <p className="text-gray-600 max-w-sm">
          Merci pour votre message. Nous vous répondons dans les plus brefs délais, généralement sous 2 heures en journée.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus('idle')}
          className="text-brand-600 hover:text-brand-800 font-semibold underline underline-offset-2"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-4', className)}
      noValidate
      aria-label="Formulaire de contact"
    >
      {/* Champ honeypot — caché visuellement et des lecteurs d'écran */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }}
        tabIndex={-1}
      >
        <label htmlFor="_website">Ne pas remplir ce champ</label>
        <input
          id="_website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register('_website')}
        />
      </div>

      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className={cn('input-field', errors.name && 'border-red-400 focus:ring-red-500')}
            placeholder="Jean Dupont"
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            className={cn('input-field', errors.phone && 'border-red-400 focus:ring-red-500')}
            placeholder="06 12 34 56 78"
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={cn('input-field', errors.email && 'border-red-400 focus:ring-red-500')}
            placeholder="jean@exemple.fr"
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-city" className="block text-sm font-medium text-gray-700 mb-1">
            Ville <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-city"
            type="text"
            autoComplete="address-level2"
            className={cn('input-field', errors.city && 'border-red-400 focus:ring-red-500')}
            placeholder="Nice"
            aria-required="true"
            aria-describedby={errors.city ? 'city-error' : undefined}
            {...register('city')}
          />
          {errors.city && (
            <p id="city-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.city.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
          Votre demande <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={compact ? 3 : 5}
          className={cn('input-field resize-none', errors.message && 'border-red-400 focus:ring-red-500')}
          placeholder="Décrivez votre problème ou votre demande..."
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === 'error' && (
        <div
          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            {submitCount >= 3
              ? 'Trop de tentatives. Veuillez nous appeler directement.'
              : 'Une erreur s\'est produite. Veuillez réessayer ou nous appeler directement.'}
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500">
        <span className="text-red-500">*</span> Champs obligatoires. Vos données sont utilisées uniquement pour répondre à votre demande.
      </p>

      <Button
        as="button"
        type="submit"
        variant="primary"
        disabled={isSubmitting || submitStatus === 'loading'}
        size={compact ? 'md' : 'lg'}
        icon={<Send className="w-4 h-4" aria-hidden="true" />}
        className="self-start"
      >
        {isSubmitting || submitStatus === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </Button>
    </form>
  );
}
