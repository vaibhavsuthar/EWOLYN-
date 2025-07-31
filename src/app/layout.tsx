
import type { Metadata } from 'next';
import './globals.css';
import { PT_Sans } from 'next/font/google';
import { Body } from './body';

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
      <Body ptSansClassName={ptSans.variable}>
        {children}
      </Body>
    </html>
  );
}
