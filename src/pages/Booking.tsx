import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Users, MapPin, Send } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { SectionBg, GlassPanel } from '../components/ui/SectionBg';
import { destinations } from '../data';
import { bg } from '../images';

export function Booking() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    destination: '',
    dates: '',
    guests: '2',
    budget: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const steps = ['Journey', 'Details', 'Confirm'];

  return (
    <>
      {/* Header */}
      <SectionBg image={bg.bookingHeader} overlay={0.70} className="pt-32 pb-12">
        <div className="container-lux">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Booking' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-display-2 text-white mt-6 mb-4"
          >
            Plan Your Journey
          </motion.h1>
          <p className="text-secondary max-w-xl leading-relaxed">
            Tell us a little about what you have in mind. We will design the rest.
          </p>
        </div>
      </SectionBg>

      {/* Content */}
      <SectionBg image={bg.airplane} overlay={0.78}>
        <div className="container-lux max-w-2xl py-20">
          <Reveal delay={0.2}>
            <GlassPanel>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="h-16 w-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-ink-900" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">Request received</h3>
                  <p className="text-secondary max-w-sm mx-auto">
                    Thank you, {form.name || 'traveler'}. Your personal travel designer will be in touch within 24 hours to begin crafting your journey.
                  </p>
                </div>
              ) : (
                <>
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-10">
                    {steps.map((s, i) => (
                      <div key={i} className="flex items-center flex-1 last:flex-none">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                              step > i + 1
                                ? 'bg-gold-gradient text-ink-900'
                                : step === i + 1
                                ? 'bg-white text-ink-900'
                                : 'bg-white/5 text-white/40 border border-white/10'
                            }`}
                          >
                            {step > i + 1 ? <Check className="h-4 w-4" /> : i + 1}
                          </div>
                          <span className={`text-sm font-medium hidden sm:block ${
                            step >= i + 1 ? 'text-white' : 'text-white/40'
                          }`}>
                            {s}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-px mx-4 ${step > i + 1 ? 'bg-gold-400' : 'bg-white/10'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="field-label">Destination</label>
                        <select
                          value={form.destination}
                          onChange={(e) => setForm({ ...form, destination: e.target.value })}
                          className="field"
                        >
                          <option value="">Select a destination</option>
                          {destinations.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name}, {d.country}
                            </option>
                          ))}
                          <option value="other">Somewhere else — surprise me</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="field-label">Preferred dates</label>
                          <input
                            value={form.dates}
                            onChange={(e) => setForm({ ...form, dates: e.target.value })}
                            className="field"
                            placeholder="e.g. Oct 10–20"
                          />
                        </div>
                        <div>
                          <label className="field-label">Guests</label>
                          <input
                            type="number"
                            min="1"
                            value={form.guests}
                            onChange={(e) => setForm({ ...form, guests: e.target.value })}
                            className="field"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="field-label">Budget per person</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {['$5k–10k', '$10k–20k', '$20k–50k', '$50k+'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm({ ...form, budget: b })}
                              className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                                form.budget === b
                                  ? 'border-gold-400 bg-gold-400/15 text-gold-300'
                                  : 'border-white/10 text-secondary hover:border-white/20 bg-white/5'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Button onClick={() => setStep(2)} variant="primary" className="w-full">
                        Continue
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="field-label">Full name</label>
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
                        <label className="field-label">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="field"
                          placeholder="Optional"
                        />
                      </div>
                      <div>
                        <label className="field-label">Tell us about your dream journey</label>
                        <textarea
                          rows={4}
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          className="field resize-none"
                          placeholder="Interests, occasions, must-haves, anything we should know..."
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                          Back
                        </Button>
                        <Button onClick={() => setStep(3)} variant="primary" className="flex-1">
                          Review
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <div className="space-y-3 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {[
                          { icon: MapPin, label: 'Destination', value: form.destination || 'Not specified' },
                          { icon: Calendar, label: 'Dates', value: form.dates || 'Flexible' },
                          { icon: Users, label: 'Guests', value: form.guests },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <item.icon className="h-4 w-4 text-gold-400 shrink-0" />
                            <span className="text-sm text-secondary w-24">{item.label}</span>
                            <span className="text-sm text-white font-medium">{item.value}</span>
                          </div>
                        ))}
                        {form.budget && (
                          <div className="flex items-center gap-3">
                            <span className="h-4 w-4 rounded-full bg-gold-400 shrink-0" />
                            <span className="text-sm text-secondary w-24">Budget</span>
                            <span className="text-sm text-white font-medium">{form.budget} /person</span>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="h-4 w-4 rounded-full bg-gold-400 shrink-0" />
                          <span className="text-sm text-secondary w-24">Name</span>
                          <span className="text-sm text-white font-medium">{form.name || '—'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-4 w-4 rounded-full bg-gold-400 shrink-0" />
                          <span className="text-sm text-secondary w-24">Email</span>
                          <span className="text-sm text-white font-medium">{form.email || '—'}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                          Back
                        </Button>
                        <Button onClick={() => setSubmitted(true)} variant="gold" className="flex-1">
                          Submit request
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </GlassPanel>
          </Reveal>
        </div>
      </SectionBg>
    </>
  );
}
