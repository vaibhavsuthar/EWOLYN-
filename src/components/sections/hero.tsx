"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';

const founders = [
  { name: 'Jay Rana', title: 'Founder, Evvolyn Group' },
  { name: 'Devraj Desai', title: 'CEO & Co-Founder' },
];

const stats = [
  { number: '121', label: 'Sales Team' },
  { number: '50', label: 'Admin Team' },
  { number: '17', label: 'IT Development' },
  { number: '15', label: 'Marketing' },
  { number: '11', label: 'Accounts' },
  { number: '18', label: 'Legal' },
];

export function Hero() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#services');
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white text-center py-24 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-white to-accent animated-gradient z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <AnimateOnScroll startVisible>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-4 text-foreground">
            Revolutionizing Indian Startups & MSMEs
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={200}>
          <p className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-6 font-headline">
            EAGLE WOLF LION - The Trio that stands with you, means EVVOLYN stands with you!!
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={400}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-foreground/80">
            Comprehensive support for startups and MSMEs with registration,
            certification, funding, and business growth services.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={600}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
            <a href="#services" onClick={handleScrollToServices}>Explore Our Services</a>
          </Button>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <AnimateOnScroll key={founder.name} delay={800 + index * 100}>
              <div className="bg-foreground/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-foreground/20 hover:-translate-y-1 text-background">
                <h4 className="font-bold">{founder.name}</h4>
                <p className="text-sm opacity-80">{founder.title}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={1200 + index * 100}>
              <div className="bg-foreground/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-foreground/20 hover:scale-105 text-background">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
