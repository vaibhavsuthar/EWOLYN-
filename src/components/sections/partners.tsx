import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardContent } from '../ui/card';
import { AnimateOnScroll } from '../animate-on-scroll';

const partners = [
  'Andromeda',
  'Tata Tele Business Services',
  'MAS Financial'
];

const cardColors = [
  'bg-indian-saffron',
  'bg-white',
  'bg-indian-green',
];

const textColors = [
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
          <AnimateOnScroll key={partner} delay={200 + index * 100}>
            <Card className={`w-64 h-32 flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${cardColors[index]}`}>
              <CardContent className="p-6">
                 <h3 className={`text-2xl font-bold text-center ${textColors[index]}`}>
                  {partner}
                </h3>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
