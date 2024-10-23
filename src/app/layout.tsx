import type { Metadata } from 'next';
import './globals.css';
import { HeaderNav } from '@/components/Nav/Header';
import { Footer } from '@/components/footer';
import { BackTop } from '@/components/common/BackTop';

export const metadata: Metadata = {
  title: '科曼生物',
  description: '科曼生物官网',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className=" mx-auto">
        <HeaderNav />

        {children}
        <Footer />
        <BackTop />
      </body>
    </html>
  );
}
