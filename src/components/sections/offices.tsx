import { Section, SectionTitle, SectionDescription } from '../ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { MapPin } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

const gujaratOffices = [
  'B-304/2 Gopal Palace, Near Shiromani Complex, opposite Ocean Park, Nehru Nagar, Ahmedabad-380015 Gujarat.',
  'Unicus Shyamal, A-1007, Near Shyamal Cross Road, Ahmedabad – 380015',
  'B-101 Synergy Tower, Near Vodafone House, Corporate Road, Ahmedabad – 380015',
  'F/20, Mahakali Trade Center, Bhagyoday Cross Road, Kadi',
];

const upOffices = [
  'Office No. 76, Green City, Banthra Main Road, Lucknow – 226401',
  '17, The Mall Road, Near Kanpur Railway Station – 208001',
  '325/3, Paresh Score, Near Hotel Ayodhya, Benares – 221001',
];

const otherOffices = [
  'Rahul Estate, Bo-azcha Road, Ambernath (E) – 421501',
  '86, Bozar Gate Street, Fort, Mumbai – 400001',
  'Digvijay House, Netaji Subhash Road, Kolkata, West Bengal – 700040',
];

export function Offices() {
  return (
    <Section id="offices" className="bg-muted/60">
      <AnimateOnScroll>
        <SectionTitle>Our Offices</SectionTitle>
        <SectionDescription>Empowering businesses nationwide</SectionDescription>
      </AnimateOnScroll>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimateOnScroll delay={200}>
          <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Gujarat Offices</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-4">
                {gujaratOffices.map((address) => (
                  <li key={address} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <span>{address}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Uttar Pradesh Offices</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-4">
                {upOffices.map((address) => (
                  <li key={address} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <span>{address}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
          <Card className="h-full flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Maharashtra & West Bengal</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <ul className="space-y-4">
                {otherOffices.map((address) => (
                  <li key={address} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                    <span>{address}</span>
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
