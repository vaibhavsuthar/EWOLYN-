import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { CheckCircle2, Handshake } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

const governmentSchemes = [
  'Seed Fund Scheme',
  'PMEGP',
  'MSME Loan',
  'UDYOG MSME Loan',
  'MukhyaMantri Schemes',
  'TIDE Program',
  'SIDBI',
  'NIDHI Scheme',
  'And many more...',
];

const specializedFunding = [
  'Agri-Business Grants',
  'RKVY-RAFTAAR',
  'Loan for Dairy Business',
  'Agri-Preneur Cohort',
  'Financial Assistance for SC/ST/OBC',
  'DLI Scheme',
  'Global Impact Grant',
  'TIGR Program',
  'And many more...',
];

const coFounderServices = [
    'Strategic Marketing Solutions',
    'Fund Growth Strategies',
    'Digital Presence Architects',
    'Legal Advisory Experts'
];

export function Funding() {
  return (
    <Section id="funding" className="bg-background">
      <AnimateOnScroll>
        <SectionTitle>Funding & Growth Solutions</SectionTitle>
        <SectionDescription>
          Access government schemes and funding opportunities for your business.
        </SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimateOnScroll delay={200}>
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>Government Schemes</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3">
                {governmentSchemes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
            </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>Specialized Funding</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
                <ul className="space-y-3">
                {specializedFunding.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
            </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>Co-Founder Model</CardTitle>
                <CardDescription className="text-primary-foreground/80">CO-FOUNDER WITH 0% EQUITY</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-grow flex flex-col">
                <p className="mb-4">
                We offer support without asking for a stake in your company. Keep full control while accessing our skills and services for growth.
                </p>
                <ul className="space-y-3 mt-auto">
                 {coFounderServices.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
            </Card>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
