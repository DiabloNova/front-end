"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-black to-black -z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            دیده شدن و آنالیز <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-500">
              در جستجوی هوش مصنوعی
            </span>
            <br className="hidden md:block" />
            و اقداماتی برای رشد
          </h1>

          <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            میلیون‌ها کلیک از مشتریانی که محصولات و برندهای جدید را از طریق
            <span className="text-white mx-1">ChatGPT</span>
            و موتورهای جستجوی هوش مصنوعی کشف می‌کنند، جذب کنید.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-stone-200 transition-colors"
            >
              شروع رایگان
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 border border-stone-800 transition-colors"
            >
              درخواست دمو
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl backdrop-blur-sm p-2">
            <div className="rounded-lg overflow-hidden border border-white/5 relative aspect-[16/9] bg-stone-950 flex items-center justify-center">
               {/* Hotlink placeholder matching the vibe */}
               <img
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                 alt="Dashboard Preview"
                 className="absolute inset-0 w-full h-full object-cover opacity-50"
               />
               <div className="relative z-10 text-center">
                 <p className="text-stone-400 text-sm mb-2">پیش‌نمایش داشبورد</p>
                 <h3 className="text-xl font-medium text-white">Searchable Agent Workspace</h3>
               </div>

               {/* Mock UI Elements */}
               <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-stone-800" />
                  <div className="w-3 h-3 rounded-full bg-stone-800" />
                  <div className="w-3 h-3 rounded-full bg-stone-800" />
               </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -inset-x-4 -bottom-4 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
