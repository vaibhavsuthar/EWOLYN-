"use client";

import Link from 'next/link';
import { ArrowUp, Phone, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { EwolynLogo } from '../ewolyn-logo';

const footerLinks = {
  company: [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ],
  support: [
    { href: '#', label: 'Case Studies' },
    { href: '#', label: 'Partners' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms & Conditions' },
  ],
};

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-40 bg-accent hover:bg-accent/90"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-7 w-7" />
    </Button>
  );
};

export function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:info.ewolyn@gmail.com?subject=Newsletter Subscription&body=Please add me to the newsletter list. My email is: ${newsletterEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Section */}
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <EwolynLogo className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 mb-6 max-w-xs">
                Revolutionizing Indian Startups & MSMEs with end-to-end business solutions.
              </p>
            </div>

            {/* Middle Sections */}
            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Newsletter */}
            <div className="md:col-span-4">
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Enter your email to get the latest updates from Ewolyn.</p>
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none flex-grow"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center">
            <p className="mb-2">
              Disclaimer: Ewolyn is a business consultancy and service provider. We are not a government body. All information provided is for guidance and informational purposes only.
            </p>
            <p>&copy; {new Date().getFullYear()} Ewolyn Services Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {isClient && (
        <>
          <div className="fixed bottom-6 left-6 z-40 hidden md:block">
            <Button asChild className="rounded-full font-bold shadow-2xl h-14" size="lg">
              <a href="#contact">
                <CalendarPlus className="mr-2 h-5 w-5"/>
                Book Consultation
              </a>
            </Button>
          </div>
          <div className="fixed bottom-6 right-24 z-40 hidden md:block">
            <Button asChild size="icon" className="rounded-full h-14 w-14 shadow-2xl">
                <a href="tel:7777941611">
                    <Phone className="h-6 w-6"/>
                </a>
            </Button>
          </div>
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}
