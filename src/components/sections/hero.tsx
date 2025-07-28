"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AnimateOnScroll } from '../animate-on-scroll';

const founders = [
  { name: 'Jay Rana', title: 'Founder, Evvolyn Group' },
  { name: 'Devraj Desai', title: 'CEO & Co-Founder' },
  { name: 'Jaypalsinh Sisodiya', title: 'Director' },
  { name: 'Kripalsinh Sisodiya', title: 'Executive' },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white text-center py-24 pt-32">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Business meeting background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="business analytics"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/80 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <AnimateOnScroll startVisible>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-4">
            Revolutionizing Indian Startups & MSMEs
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={200}>
          <p className="text-2xl md:text-3xl font-bold text-accent/90 mb-6 font-headline">
            EAGLE WOLF LION - तीनों आपके साथ मतलब EVVOLYN आपके साथ!!
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={400}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-gray-200">
            Comprehensive support for startups and MSMEs with registration,
            certification, funding, and business growth services.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={600}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold shadow-lg transition-transform hover:scale-105">
            <a href="#services" onClick={handleScrollToServices}>Explore Our Services</a>
          </Button>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <AnimateOnScroll key={founder.name} delay={800 + index * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                <h4 className="font-bold text-white">{founder.name}</h4>
                <p className="text-sm text-gray-300">{founder.title}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={1200 + index * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <div className="text-3xl font-bold text-accent">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
