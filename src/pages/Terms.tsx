import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Reveal } from '../components/ui/Reveal';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function Terms() {
  return (
    <>
      {/* Header */}
      <SectionBg image={bg.termsHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Terms' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Terms &amp; Conditions
          </motion.h1>
          <p className="text-secondary text-sm">Last updated: January 2025</p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.patagonia} overlay={0.80}>
        <div className="container-lux max-w-3xl py-20">
          <Reveal>
            <GlassPanel>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">1. Acceptance</h2>
                  <p className="text-secondary leading-relaxed">
                    By engaging Maison Voyage to design or book travel on your behalf, you agree to these terms. If you do not agree, please do not proceed.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">2. Our services</h2>
                  <p className="text-secondary leading-relaxed">
                    Maison Voyage acts as a travel designer and arranger. We coordinate accommodations, transport, experiences, and guides through third-party providers. We are not the provider of these services ourselves.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">3. Bookings &amp; payment</h2>
                  <p className="text-secondary leading-relaxed">
                    A deposit is required to begin design work and secure reservations. Final payment is due 60 days before departure. We accept major credit cards and bank transfers.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">4. Cancellations &amp; refunds</h2>
                  <p className="text-secondary leading-relaxed">
                    Cancellation terms vary by journey and provider. Deposits are generally refundable up to 90 days before departure. After that, cancellation charges apply on a sliding scale. We strongly recommend travel insurance.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">5. Travel documents</h2>
                  <p className="text-secondary leading-relaxed">
                    You are responsible for ensuring you hold valid passports, visas, and any required documentation. We will advise on requirements but cannot guarantee issuance.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">6. Liability</h2>
                  <p className="text-secondary leading-relaxed">
                    Maison Voyage acts in good faith as an arranger. We are not liable for the acts or omissions of third-party providers, nor for circumstances beyond our control, including weather, political events, or health advisories.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">7. Contact</h2>
                  <p className="text-secondary leading-relaxed">
                    Questions about these terms? Write to us at concierge@maisonvoyage.com.
                  </p>
                </div>
              </div>
            </GlassPanel>
          </Reveal>
        </div>
      </SectionBg>
    </>
  );
}
