import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, MessageSquare, Send, CheckCircle2, MapPin, Calendar, Building2, User, Mail, FileText, Loader2 } from 'lucide-react';
import { business } from '../config/business';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Deep Cleaning',
    propertyType: 'Apartment / Flat',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello Neat Clean Services! I want a free quote for my property.\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service}\nProperty: ${formData.propertyType}\nDate: ${formData.preferredDate || 'Flexible'}\nNotes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/918208899429?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#04060a] text-white overflow-hidden border-t border-white/10"
    >
      {/* Background radial illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Dramatic Headline */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT ESTIMATE & SCHEDULING</span>
          </div>

          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white max-w-4xl mx-auto mb-6">
            <span>READY FOR A</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
              CLEANER SPACE?
            </span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Experience the transformation. Connect with owners Arjun & Karan Gagre directly or request your customized quote below.
          </p>
        </div>

        {/* Grid: Contact Info / Actions & Animated Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Agency Contact & Phone Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b101c] border border-white/10 shadow-2xl relative overflow-hidden">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-2 font-semibold">
                LOCAL HEADQUARTERS
              </span>
              <h3 className="font-display font-bold text-3xl text-white uppercase mb-2">
                {business.displayName}
              </h3>
              <div className="flex items-center gap-2 text-slate-300 text-sm mb-6">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{business.location}</span>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Direct Owner Hotlines:
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:+918208899429"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors group"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">Arjun Gagre</span>
                      <span className="text-base font-semibold text-white group-hover:text-sky-400 transition-colors">
                        +91 82088 99429
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono uppercase">
                      CALL NOW
                    </span>
                  </a>

                  <a
                    href="tel:+918446500939"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors group"
                  >
                    <div>
                      <span className="text-xs text-slate-400 block">Karan Gagre</span>
                      <span className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        +91 84465 00939
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono uppercase">
                      CALL NOW
                    </span>
                  </a>
                </div>
              </div>

              {/* Big Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <a
                  href="tel:+918208899429"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg shadow-sky-500/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            {/* Service Promise Pill */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>RAPID LOCAL DISPATCH</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Same-day evaluations available across Gangapur Rd, College Rd, Indira Nagar, Govind Nagar, and all Nashik sectors.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Animated Quote Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0b101c] border border-white/10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-white">
                      Thank you! We'll contact you soon.
                    </h3>

                    <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base">
                      Arjun and Karan Gagre have received your request. We will review your property requirements and reach out promptly.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={handleWhatsAppInstant}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp now</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            service: 'Deep Cleaning',
                            propertyType: 'Apartment / Flat',
                            preferredDate: '',
                            message: '',
                          });
                        }}
                        className="text-xs uppercase tracking-wider text-slate-400 hover:text-white underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase mb-1">
                        REQUEST A FREE QUOTE
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        Fill in your details below for a prompt estimate tailored to your space.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-sky-400" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Patil"
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                            errors.name ? 'border-red-400' : 'border-white/10 focus:border-sky-400'
                          } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all`}
                        />
                        {errors.name && <p className="text-red-400 text-[11px]">{errors.name}</p>}
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border ${
                            errors.phone ? 'border-red-400' : 'border-white/10 focus:border-sky-400'
                          } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all`}
                        />
                        {errors.phone && <p className="text-red-400 text-[11px]">{errors.phone}</p>}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Email Field */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-teal-400" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-sky-400 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                        />
                      </div>

                      {/* Service Selector */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                          <span>Service Desired</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111827] border border-white/10 focus:border-sky-400 text-white text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                        >
                          <option value="Residential Cleaning">Residential Cleaning</option>
                          <option value="Deep Cleaning">Deep Cleaning</option>
                          <option value="Commercial Cleaning">Commercial Cleaning</option>
                          <option value="Office Cleaning">Office Cleaning</option>
                          <option value="Move-In Cleaning">Move-In Cleaning</option>
                          <option value="Move-Out Cleaning">Move-Out Cleaning</option>
                        </select>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Property Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-sky-400" />
                          <span>Property Type</span>
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#111827] border border-white/10 focus:border-sky-400 text-white text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                        >
                          <option value="Apartment / Flat">Apartment / Flat (1BHK / 2BHK / 3BHK+)</option>
                          <option value="Bungalow / Row House">Bungalow / Row House / Villa</option>
                          <option value="Commercial Office">Commercial Office / Workspace</option>
                          <option value="Showroom / Retail">Showroom / Retail Center</option>
                          <option value="Other">Other Unique Space</option>
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Preferred Date</span>
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-sky-400 text-white text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                        />
                      </div>

                    </div>

                    {/* Message / Details */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>Additional Details / Area in Sq. Ft.</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. 3BHK deep cleaning, post-painting dust, sofa shampooing required..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-sky-400 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor="open"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-white font-semibold text-sm uppercase tracking-widest shadow-xl shadow-sky-500/25 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>PROCESSING YOUR REQUEST...</span>
                        </>
                      ) : (
                        <>
                          <span>REQUEST A FREE QUOTE</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
