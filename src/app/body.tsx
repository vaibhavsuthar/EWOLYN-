
"use client";

import { useEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedBackground } from '@/components/animated-background';
import { AiAssistant } from '@/components/ai-assistant';

export function Body({
  children,
  ptSansClassName
}: Readonly<{
  children: React.ReactNode;
  ptSansClassName: string;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <body className={`${ptSansClassName} font-sans bg-light-gray`}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
        {isClient && <Toaster />}
        {isClient && <AiAssistant />}
      </div>
    </body>
  );
}
