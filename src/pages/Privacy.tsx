import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Reveal } from '../components/ui/Reveal';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function Privacy() {
  return (
    <>
      {/* Header */}
      <SectionBg image={bg.privacyHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-secondary text-sm">Last updated: January 2025</p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.marrakech} overlay={0.80}>
        <div className="container-lux max-w-3xl py-20">
          <Reveal>
            <GlassPanel>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">Our commitment to you</h2>
                  <p className="text-secondary leading-relaxed">
                    Maison Voyage respects your privacy. We collect only what we need to design and deliver your journeys, and we never sell your data. This policy explains what we collect, why, and how we protect it.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">Information we collect</h2>
                  <p className="text-secondary leading-relaxed mb-3">We may collect:</p>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start gap-2"><span className="text-gold-400 mt-1.5">•</span> Contact details you provide (name, email, phone)</li>
                    <li className="flex items-start gap-2"><span className="text-gold-400 mt-1.5">•</span> Travel preferences and journey requirements</li>
                    <li className="flex items-start gap-2"><span className="text-gold-400 mt-1.5">•</span> Payment information, processed through secure third-party providers</li>
                    <li className="flex items-start gap-2"><span className="text-gold-400 mt-1.5">•</span> Anonymous analytics about how you use our site</li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">How we use it</h2>
                  <p className="text-secondary leading-relaxed">
                    We use your information to design and deliver your journeys, communicate with you, improve our service, and comply with legal obligations. We do not use your data for advertising, and we do not share it with third parties beyond what is necessary to fulfill your journey.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">Your rights</h2>
                  <p className="text-secondary leading-relaxed">
                    You may request access to, correction of, or deletion of your personal data at any time. Contact us at concierge@maisonvoyage.com and we will respond within 30 days.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">Security</h2>
                  <p className="text-secondary leading-relaxed">
                    We use industry-standard encryption and security measures. Payment information is never stored on our servers — it is handled entirely by our certified payment partners.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-white mb-3">Contact</h2>
                  <p className="text-secondary leading-relaxed">
                    Questions about this policy? Write to us at concierge@maisonvoyage.com.
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
