"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-stone-950 border-t border-white/5">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-stone-400 uppercase mb-4">
            مورد اعتماد تیم‌های پیشرو
          </h2>
        </div>

        {/* Trust Badges placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold text-white">Acme Corp</div>
          <div className="text-xl font-bold text-white">GlobalTech</div>
          <div className="text-xl font-bold text-white">Nexus Industries</div>
          <div className="text-xl font-bold text-white">Stark Enterprises</div>
          <div className="text-xl font-bold text-white">Wayne Tech</div>
        </div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <p className="text-2xl md:text-3xl text-stone-200 font-medium leading-relaxed mb-8 relative z-10 text-center">
              "برندهایی که از Searchable استفاده می‌کنند، شاهد افزایش ۴۰ درصدی در دیده شدن، بهبود ۲۰۶ درصدی در سهم صدا و ایجاد بیش از ۱ میلیون پوند در خط لوله واجد شرایط از طریق جستجوی هوش مصنوعی بوده‌اند."
            </p>

            <div className="flex items-center justify-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right"> {/* text-right for RTL alignment logic inside flex */}
                <div className="text-white font-medium">سارا چن</div>
                <div className="text-stone-400 text-sm">مدیر بازاریابی، Specialized</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
