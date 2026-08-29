import React from 'react';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} font-sans`}>
      <body className="bg-black text-stone-200 min-h-screen selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  )
}
