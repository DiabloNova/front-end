import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/product" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            محصول
          </Link>
          <Link href="/resources" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            منابع
          </Link>
          <Link href="/solutions" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            راهکارها
          </Link>
          <Link href="/enterprise" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            سازمانی
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            قیمت‌گذاری
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-white">Searchable</span>
          {/* We'll use text for logo as requested not to download actual assets if possible, but visually matching */}
        </Link>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-stone-200 hover:text-white transition-colors">
            ورود
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-stone-200 transition-colors"
          >
            شروع رایگان
          </Link>
        </div>
      </div>
    </header>
  );
};
