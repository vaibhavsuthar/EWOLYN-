import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { AnimateOnScroll } from '../animate-on-scroll';

const processSteps = [
  { step: 1, title: 'Information Gathering' },
  { step: 2, title: "Analysts' Deep-Dive" },
  { step: 3, title: 'Design Phase' },
  { step: 4, title: 'Client Collaboration' },
  { step: 5, title: 'Refinement' },
  { step: 6, title: 'Finalization' },
  { step: 7, title: 'Delivery' },
];

export function Process() {
  return (
    <Section id="process" className="bg-background">
      <AnimateOnScroll>
        <SectionTitle>Our Process</SectionTitle>
        <SectionDescription>
          A structured approach to deliver exceptional results.
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-20 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {processSteps.map((item, index) => (
            <AnimateOnScroll
              key={item.step}
              delay={200 + index * 100}
              className="w-full md:w-auto"
            >
              <div className="group flex md:flex-col items-center gap-4 text-center">
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-primary flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">{item.step}</div>
                </div>
                <div className="text-center md:mt-4">
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
