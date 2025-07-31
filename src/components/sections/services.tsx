import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const registrationServices = [
  'Private Limited Company',
  'Limited Liability Partnership',
  'Partnership Firm - Form G',
  'NGO Darpan Registration',
  'Section 8 Company',
  '12A and 80G Registrations',
  'CSR+ Registration',
  'GEM Registration',
  'And many more...',
];

const certificationServices = [
  'Startup India Registration',
  'Form 80-IAC Income Tax Exemption',
  'Udyam Certificate',
  'ISO Certification',
  'ZED Certification',
  'DUNS / DRS – Plus',
  'FSSAI License',
  'SPR Scheme (NSIC Certificate)',
  'And many more...',
];

const marketingServices = [
  'Graphic Designing',
  'Content Marketing',
  'Video Editing',
  'Social Media Marketing',
  'Website Development',
  'WhatsApp Marketing',
  'Marketing Consultation',
  'CRM & ERP Solutions',
  'And many more...',
];

const topServices = [
  {
    name: 'Start-up India Certificate',
    description: 'Fast-track recognition for eligible startups.',
  },
  {
    name: 'Tax Exemption Certificate',
    description: 'Assistance with Section 80 IAC & 56 exemption.',
  },
  {
    name: 'Company Registration',
    description: 'Private Ltd., LLP, OPC & more, done hassle-free.',
  },
  {
    name: 'Digital Support',
    description: 'End-to-end tech solutions for your growing business.',
  },
  {
    name: 'ISO Certification',
    description: 'Get certified with expert guidance (ISO 9001, 14001, etc.).',
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-muted/60">
      <AnimateOnScroll>
        <SectionTitle>Our Comprehensive Services</SectionTitle>
        <SectionDescription>End-to-end solutions for your business growth</SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimateOnScroll delay={200}>
          <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Registration Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-3">
                {registrationServices.map((item) => (
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
              <CardTitle>Certification Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-3">
                {certificationServices.map((item) => (
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
              <CardTitle>Marketing & Digital</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-3">
                {marketingServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={800}>
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Top Services
          </h3>
          <Card className="shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] text-base font-semibold text-primary">Service</TableHead>
                  <TableHead className="text-base font-semibold text-primary">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topServices.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell>{service.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
