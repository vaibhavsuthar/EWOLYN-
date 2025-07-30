import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PT_Sans } from 'next/font/google';
import { AnimatedBackground } from '@/components/animated-background';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Ewolyn | Startup & MSME Support Services | Revolutionizing Indian Businesses',
  description: 'Ewolyn provides comprehensive support for Indian startups & MSMEs - registration, certification, funding, marketing & business advisory services.',
  keywords: 'startup support, MSME services, business registration, funding schemes, startup certification, business advisory, India startups',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} font-sans bg-light-gray`}>
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
