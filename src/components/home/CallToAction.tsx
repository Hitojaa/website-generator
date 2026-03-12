import Link from 'next/link';
import { Phone, FileText, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ContactForm } from '@/components/shared/ContactForm';

export function CallToAction() {
  return (
    <section
      className="section-padding bg-gradient-to-br from-brand-900 to-brand-950"
      aria-labelledby="cta-title"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Colonne gauche — texte & appel */}
          <div className="text-white">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white/10 text-brand-200 px-3 py-1 rounded-full mb-4">
              Contact rapide
            </span>
            <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Besoin d&apos;un plombier à {siteConfig.mainCity} ?
            </h2>
            <p className="text-brand-200 text-lg mb-8 leading-relaxed">
              Ne restez pas avec une fuite, un débouchage urgent ou un chauffe-eau en panne.
              Appelez-nous maintenant ou envoyez-nous votre demande.
              Nous revenons vers vous rapidement.
            </p>

            {/* CTA téléphone */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-4 bg-white rounded-xl p-5 hover:bg-gray-50 transition-colors group mb-4"
              aria-label={`Appeler le ${siteConfig.contact.phone}`}
            >
              <div className="p-3 bg-accent-500 rounded-lg group-hover:bg-accent-600 transition-colors">
                <Phone className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Appel direct</p>
                <p className="text-xl font-bold text-brand-900">{siteConfig.contact.phone}</p>
                <p className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                  {siteConfig.hours.emergency}
                </p>
              </div>
            </a>

            {/* WhatsApp optionnel */}
            {siteConfig.contact.whatsapp && (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 rounded-xl p-5 transition-colors group"
                aria-label="Contacter par WhatsApp"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white">WhatsApp</p>
                  <p className="text-green-100 text-sm">Envoyez-nous un message</p>
                </div>
              </a>
            )}

            {/* Horaires */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10 text-sm text-brand-200">
              <p className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" aria-hidden="true" />
                Horaires d&apos;ouverture
              </p>
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.saturday}</p>
              <p className="text-accent-300 font-medium mt-1">{siteConfig.hours.emergency}</p>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-brand-700" aria-hidden="true" />
              <h3 className="font-bold text-brand-900 text-lg">Demande de devis gratuit</h3>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
