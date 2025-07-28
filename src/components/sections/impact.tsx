import { Section, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Card, CardContent } from '../ui/card';
import { AnimateOnScroll } from '../animate-on-scroll';

const impactData = [
  { number: '₹10 Cr+', text: 'Funds allocated to Agri and Allied Sectors in FY 2024–25' },
  { number: '₹3 Cr+', text: 'Received through PMEGP scheme in FY 2024–25' },
  { number: '₹10 Cr+ Funds', text: 'Secured through Credit Guarantee Scheme in FY 2024–25' },
  { number: '₹15 Cr+', text: 'Received through NBFC scheme in FY 2024–25' },
  { number: '10,000+', text: 'Businesses guided in F.Y 2024–25' },
  { number: '50,000+', text: 'Ventures assisted since inception' },
];

export function Impact() {
  return (
    <Section id="impact" className="bg-primary text-white">
      <AnimateOnScroll>
        <SectionTitle className="text-white after:bg-accent">Our Impact</SectionTitle>
        <SectionDescription className="text-white/90">
          Driving growth and success for Indian businesses
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {impactData.map((item, index) => (
          <AnimateOnScroll key={`${item.number}-${index}`} delay={200 + index * 100}>
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-center text-white h-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="text-4xl font-extrabold text-accent mb-3">
                  {item.number}
                </div>
                <p className="text-white/80">{item.text}</p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
