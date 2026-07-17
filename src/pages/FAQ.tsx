import { motion } from 'framer-motion';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Accordion } from '../components/ui/Accordion';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { LinkButton } from '../components/ui/Button';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

const faqs = [
  {
    question: 'What makes Maison Voyage different from a regular travel agency?',
    answer:
      'We are a small house of travel, not a booking engine. Each journey is designed by a single dedicated travel designer who knows you and your preferences. We do not compete on volume or price — we compete on the depth of our craft and the quality of our relationships.',
  },
  {
    question: 'How do I become a member?',
    answer:
      'There is no formal membership fee. You become part of the Maison Voyage circle by planning your first journey with us. From that point, you have a dedicated travel designer for life.',
  },
  {
    question: 'Can I customize a package, or are they fixed?',
    answer:
      'Every package is a starting point. We encourage you to tailor it — change the duration, swap destinations, add experiences, or combine elements from different journeys. Your designer will adjust every detail to fit you.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'For peak-season travel (June–August, December–January), we recommend 4–6 months. For complex, multi-country journeys, 6–9 months. We can arrange shorter-notice trips, but the best experiences require time to secure.',
  },
  {
    question: 'What is included in a typical journey?',
    answer:
      'Each journey includes accommodations, ground transfers, daily breakfast, selected meals, private guides, curated experiences, and 24/7 concierge support. Flights are arranged on request. Every inclusion is listed on the package page.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Cancellation terms vary by journey and are confirmed at booking. Generally, deposits are refundable up to 90 days before departure. We recommend travel insurance, which we can arrange on your behalf.',
  },
  {
    question: 'Do you arrange travel for solo travelers?',
    answer:
      'Absolutely. Many of our members travel alone. We design solo journeys with the same care and attention, and can arrange private guides, small-group experiences, or complete privacy — as you prefer.',
  },
  {
    question: 'Can you accommodate dietary restrictions or accessibility needs?',
    answer:
      'Yes. Tell us about any requirements when you book. We work with partners who can accommodate most needs, and we will confirm every detail before you depart.',
  },
];

export function FAQ() {
  return (
    <>
      {/* Header */}
      <SectionBg image={bg.faqHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Frequently Asked
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            Answers to the questions we hear most. If you do not find what you are looking for, we are a message away.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.forest} overlay={0.78}>
        <div className="container-lux max-w-3xl py-20">
          <Reveal>
            <GlassPanel>
              <Accordion items={faqs} />
            </GlassPanel>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center glass p-10">
              <SectionHeading
                eyebrow="Still curious?"
                title="Speak with a travel designer"
                subtitle="No question is too small. We are here to help you decide."
              />
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <LinkButton to="/contact" variant="gold">
                  Contact us
                </LinkButton>
                <LinkButton to="/booking" variant="outline">
                  Plan a journey
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionBg>
    </>
  );
}
