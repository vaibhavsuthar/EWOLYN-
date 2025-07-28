import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Evvolyn | Startup & MSME Support Services | Revolutionizing Indian Businesses',
  description: 'Evvolyn provides comprehensive support for Indian startups & MSMEs - registration, certification, funding, marketing & business advisory services.',
  keywords: 'startup support, MSME services, business registration, funding schemes, startup certification, business advisory, India startups',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
