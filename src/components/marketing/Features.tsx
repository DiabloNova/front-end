import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Settings, TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'ببینید در نتایج هوش مصنوعی کجا ظاهر می‌شوید',
    description: 'ردیابی نام و استنادات برند خود در ChatGPT، Claude، Perplexity، Google AI Overviews و Microsoft Copilot. ما نظارت می‌کنیم که موتورهای هوش مصنوعی چگونه به پرسش‌های مربوط به محصولات، خدمات و صنعت شما پاسخ می‌دهند—به شما نشان می‌دهیم دقیقاً کجا ظاهر می‌شوید، کجا رقبا از شما پیشی می‌گیرند و چه فرصت‌هایی را از دست می‌دهید.',
    icon: <Search className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'مرکز فرماندهی رشد شما برای دیده شدن در هوش مصنوعی',
    description: 'عامل هوش مصنوعی ما داده‌های دیده شدن شما را تجزیه و تحلیل می‌کند و توصیه‌های عملی متناسب با برند شما تولید می‌کند. خلاصه‌های محتوای بهینه‌شده برای استناد هوش مصنوعی، اصلاحات فنی برای خزش بهتر، و بینش‌های استراتژیک که نظارت را به رشد قابل اندازه‌گیری تبدیل می‌کند دریافت کنید.',
    icon: <TrendingUp className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'تولید محتوای بهینه‌شده با هوش مصنوعی',
    description: 'پست‌های وبلاگ، صفحات فرود و توضیحات محصول مهندسی شده برای استناد هوش مصنوعی ایجاد کنید. موتور محتوای ما درک می‌کند که چه چیزی باعث می‌شود موتورهای هوش مصنوعی به منابع استناد کنند—داده‌های ساختاریافته، لحن معتبر، پوشش جامع—و این اصول را در هر قطعه محتوایی که ایجاد می‌کند به کار می‌گیرد.',
    icon: <PenTool className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'ممیزی‌های فنی سئو برای جستجوی هوش مصنوعی',
    description: 'موتورهای جستجوی هوش مصنوعی وب‌سایت‌ها را متفاوت از جستجوی سنتی پردازش می‌کنند. ممیزی‌های فنی ما فرصت‌های نشانه‌گذاری طرحواره، بهبود ساختار محتوا و اصلاحات خزش را شناسایی می‌کند که به ChatGPT، Claude و Perplexity کمک می‌کند محتوای شما را بهتر درک کرده و به آن استناد کنند.',
    icon: <Settings className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            تسلط بر نتایج هوش مصنوعی
          </h2>
          <p className="text-lg text-stone-400">
            پلتفرم ما ابزارهایی را که برای درک، بهینه‌سازی و رشد حضور خود در عصر جدید جستجوی مبتنی بر هوش مصنوعی نیاز دارید، فراهم می‌کند.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-stone-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-stone-950 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/50 to-transparent z-10" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-xl opacity-80"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
