import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { bg } from '../images';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  return (
    <>
      {/* Header */}
      <SectionBg image={bg.contactHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Contact
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            Tell us where you dream of going. We will respond within one business day.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.hotelLobby} overlay={0.78}>
        <div className="container-lux py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: MapPin, title: 'Visit', lines: ['12 Rue de la Paix', 'Paris 7502, France'] },
                { icon: Phone, title: 'Call', lines: ['+1 800 555 0100', 'Mon–Fri, 9am–7pm CET'] },
                { icon: Mail, title: 'Email', lines: ['concierge@maisonvoyage.com', 'We reply within 24 hours'] },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="card-lux p-6">
                    <div className="h-11 w-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-gold-400" />
                    </div>
                    <h3 className="font-display text-lg text-white mb-1">{item.title}</h3>
                    {item.lines.map((l, j) => (
                      <p key={j} className="text-sm text-secondary">{l}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-2">
              <Reveal delay={0.2}>
                <GlassPanel>
                  {sent ? (
                    <div className="text-center py-16">
                      <div className="h-16 w-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-ink-900" />
                      </div>
                      <h3 className="font-display text-2xl text-white mb-2">Message received</h3>
                      <p className="text-secondary">We will be in touch within one business day.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSent(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="field-label">Name</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="field"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="field-label">Email</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="field"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="field-label">Subject</label>
                        <input
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="field"
                          placeholder="How can we help?"
                        />
                      </div>
                      <div>
                        <label className="field-label">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="field resize-none"
                          placeholder="Tell us about the journey you have in mind..."
                        />
                      </div>
                      <Button type="submit" variant="gold" size="lg" className="w-full">
                        Send message
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </GlassPanel>
              </Reveal>
            </div>
          </div>
        </div>
      </SectionBg>
    </>
  );
}
