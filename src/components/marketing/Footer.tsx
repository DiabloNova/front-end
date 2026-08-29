import React from 'react';
import Link from 'next/link';
import { Search as Twitter, Search as Linkedin, Search as Instagram, Search as Facebook, Search as Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4">

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-white">Searchable</span>
            </Link>
            <p className="text-stone-400 text-sm max-w-xs mb-8 leading-relaxed">
              تیم Searchable Limited<br />
              واحد B1، خیابان Tanner 9<br />
              لندن، SE1 3LE<br />
              انگلستان
            </p>
            <div className="flex items-center gap-4 text-stone-400">
              <Link href="#" className="hover:text-white transition-colors"><span>IN</span></Link>
              <Link href="#" className="hover:text-white transition-colors"><span>TW</span></Link>
              <Link href="#" className="hover:text-white transition-colors"><span>IG</span></Link>
              <Link href="#" className="hover:text-white transition-colors"><span>FB</span></Link>
              <Link href="#" className="hover:text-white transition-colors"><span>YT</span></Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">محصول</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">بینش‌های AEO</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">ترافیک جستجوی هوش مصنوعی</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">همه ویژگی‌ها</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">استودیوی محتوا</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">هوش مصنوعی Prompt</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">بهینه‌سازی فنی</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">منابع</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">داده‌های جستجوی هوش مصنوعی</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">عامل خرید هوش مصنوعی</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">مقاله‌ها و راهنماها</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">مستندات</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">رویدادها</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">شرکت</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">درباره ما</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">همکاران فروش</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">نویسندگان</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">فرصت‌های شغلی</Link></li>
              <li><Link href="#" className="text-stone-400 hover:text-white text-sm transition-colors">تماس با ما</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-xs text-center md:text-right max-w-2xl leading-relaxed">
            © ۲۰۲۶ Searchable Limited. "Searchable" و لوگوی Searchable علائم تجاری ثبت شده این شرکت هستند.<br />
            سلب مسئولیت: محتوای این وب‌سایت فقط برای اهداف اطلاعاتی عمومی ارائه شده است و به عنوان مشاوره حرفه‌ای در نظر گرفته نشده است.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-stone-500 hover:text-white text-xs transition-colors">شرایط خدمات</Link>
            <Link href="#" className="text-stone-500 hover:text-white text-xs transition-colors">حریم خصوصی</Link>
            <Link href="#" className="text-stone-500 hover:text-white text-xs transition-colors">کوکی‌ها</Link>
            <Link href="#" className="text-stone-500 hover:text-white text-xs transition-colors">خط‌مشی هوش مصنوعی</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
