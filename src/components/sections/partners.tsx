import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardContent } from '../ui/card';
import { AnimateOnScroll } from '../animate-on-scroll';
import Link from 'next/link';

const partners = [
  { name: 'Andromeda', link: null },
  { name: 'Tata Tele Business Services', link: null },
  { name: 'MAS Financial', link: null },
  { name: 'Dataneuron', link: 'https://dataneuron.business/' }
];

const cardColors = [
  'bg-indian-saffron',
  'bg-white',
  'bg-indian-green',
  'bg-white',
];

const textColors = [
  'text-black',
  'text-black',
  'text-black',
  'text-black',
];

export function Partners() {
  return (
    <Section id="partners" className="bg-muted/60">
      <AnimateOnScroll>
        <SectionTitle>Our Esteemed Partners</SectionTitle>
        <SectionDescription>
          We partner with organizations committed to the growth of startups and
          the Indian MSME ecosystem.
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 flex justify-center items-center flex-wrap gap-8">
        {partners.map((partner, index) => (
          <AnimateOnScroll key={partner.name} delay={200 + index * 100}>
            <Card className={`w-64 h-32 flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${cardColors[index]}`}>
              <CardContent className="p-6">
                 {partner.link ? (
                   <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                      <h3 className={`text-2xl font-bold text-center ${textColors[index]}`}>
                        {partner.name}
                      </h3>
                   </Link>
                 ) : (
                    <h3 className={`text-2xl font-bold text-center ${textColors[index]}`}>
                      {partner.name}
                    </h3>
                 )}
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll delay={600}>
        <p className="text-center mt-12 text-muted-foreground">We proudly collaborated with <a href="https://dataneuron.business/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dataneuron</a> on innovative AI solutions.</p>
      </AnimateOnScroll>
    </Section>
  );
}