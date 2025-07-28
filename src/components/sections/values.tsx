import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Handshake, Route, Users } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

const valuesData = [
  {
    icon: <Handshake className="w-12 h-12 text-primary" />,
    title: 'Honesty and Quality',
    description: 'We maintain the highest standards of integrity and deliver quality services that exceed expectations.',
  },
  {
    icon: <Route className="w-12 h-12 text-accent" />,
    title: 'Extra Mile Support',
    description: 'We go beyond the ordinary to provide exceptional support and guidance to our clients.',
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Customer-Focused Creativity',
    description: 'We innovate and create solutions tailored to your unique business challenges and opportunities.',
  },
];

export function Values() {
  return (
    <Section id="values" className="bg-background">
      <AnimateOnScroll>
        <SectionTitle>Our Core Values</SectionTitle>
        <SectionDescription>
          The foundation of our commitment to your success
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuesData.map((value, index) => (
          <AnimateOnScroll key={value.title} delay={200 + index * 200}>
            <Card className="text-center h-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="mb-4">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
