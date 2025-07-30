"use client";

import { Button } from '../ui/button';
import { AnimateOnScroll } from '../animate-on-scroll';

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
    <section id="home" className="relative pt-32 pb-24 text-center overflow-hidden h-screen flex flex-col justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/123.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll startVisible>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Revolutionizing Indian Startups & MSMEs
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={200}>
          <p className="text-2xl md:text-3xl font-bold text-white/90 mb-6">
            EAGLE WOLF LION - The trio that stands with you, means EWOLYN stands with you!!
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={400}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-white/80">
            Comprehensive support for startups and MSMEs with registration,
            certification, funding, and business growth services.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll startVisible delay={600}>
          <Button asChild size="lg" className="rounded-full font-bold shadow-lg transition-transform hover:scale-105">
            <a href="#services" onClick={handleScrollToServices}>Explore Our Services</a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
