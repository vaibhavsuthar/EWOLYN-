
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#funding', label: 'Funding' },
  { href: '/#impact', label: 'Impact' },
  { href: '/#contact', label: 'Contact' },
];

const AnimatedRocket = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  return (
    <div
      className="fixed top-0 right-1/2 text-6xl z-[100] animate-rocket-fly"
      onAnimationEnd={onAnimationEnd}
      style={{ transform: 'rotate(90deg)' }}
    >
      🚀
    </div>
  );
};


export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRocketAnimating, setIsRocketAnimating] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop - 80, // Adjust for fixed header height
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  const handleLaunchClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsRocketAnimating(true);
  };
  
  const handleAnimationEnd = () => {
    setIsRocketAnimating(false);
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const NavLinksComponent = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6', className)}>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={(e) => handleLinkClick(e, href)}
          className="text-sm font-medium text-black hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
       {isRocketAnimating && <AnimatedRocket onAnimationEnd={handleAnimationEnd} />}
      <div className="hidden md:flex items-center gap-4">
        <NavLinksComponent className="text-black" />
        <Button asChild className="group rounded-full font-bold shadow-lg transition-transform hover:scale-105 bg-black text-white hover:bg-black/90 overflow-hidden">
          <Link href="/#contact" onClick={handleLaunchClick} className="relative">
            <span className="transition-transform duration-300 group-hover:-translate-y-8">Get Consultation</span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
              <Rocket className="mr-2 h-5 w-5" />
              Launch!
            </span>
          </Link>
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
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
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleLinkClick(e, href)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg">
                  <Link href="/#contact" onClick={(e) => {
                    handleLinkClick(e, '/#contact');
                    setIsOpen(false);
                  }}>Get Consultation</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
