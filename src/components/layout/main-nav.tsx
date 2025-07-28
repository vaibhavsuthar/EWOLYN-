"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#partners', label: 'Partners' },
  { href: '#funding', label: 'Funding' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offsetTop = (targetElement as HTMLElement).offsetTop;
        window.scrollTo({
          top: offsetTop - 80, // Adjust for fixed header height
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  const NavLinksComponent = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6', className)}>
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => handleLinkClick(e, href)}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <div className="hidden md:flex items-center gap-4">
        <NavLinksComponent />
        <Button asChild className="rounded-full font-bold shadow-lg transition-transform hover:scale-105">
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Get Consultation</a>
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-2">
                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                 </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg">
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Get Consultation</a>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
