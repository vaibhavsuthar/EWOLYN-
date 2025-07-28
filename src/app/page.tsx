import { Hero } from '@/components/sections/hero';
import { Partners } from '@/components/sections/partners';
import { Services } from '@/components/sections/services';
import { Funding } from '@/components/sections/funding';
import { Impact } from '@/components/sections/impact';
import { Values } from '@/components/sections/values';
import { Process } from '@/components/sections/process';
import { Offices } from '@/components/sections/offices';
import { Contact } from '@/components/sections/contact';
import { AiAssistant } from '@/components/ai-assistant';
import { BlogSection } from '@/components/sections/blog';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Partners />
      <Services />
      <Funding />
      <Impact />
      <Values />
      <Process />
      <BlogSection />
      <Offices />
      <Contact />
      <AiAssistant />
    </main>
  );
}
