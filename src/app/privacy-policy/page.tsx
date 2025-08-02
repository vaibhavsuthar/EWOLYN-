
import { Section, SectionTitle } from '@/components/ui/section';

export default function PrivacyPolicy() {
  return (
    <main className="bg-background pt-24">
      <Section id="privacy-policy" className="py-12 md:py-16">
        <SectionTitle>Privacy Policy</SectionTitle>
        <div className="max-w-4xl mx-auto mt-12 prose prose-lg lg:prose-xl text-foreground space-y-6">
          <p className="text-center font-semibold">Effective Date: 01-01-2025</p>
          <p>
            At <strong>EWOLYN SERVICES PVT. LTD.</strong>, we value your trust. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website{' '}
            <a
              href="http://www.ewolyn.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.ewolyn.info
            </a>.
          </p>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Your name, phone number, and email when you fill a form or contact us.</li>
              <li>Your business or organization details when required for services.</li>
              <li>Technical data like IP address, browser type, and device information for analytics.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">2. Why We Collect It</h3>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Provide services or respond to your inquiries.</li>
              <li>Improve our website and services.</li>
              <li>Send important updates or service-related information.</li>
              <li>Comply with legal and security obligations.</li>
            </ul>
            <p>We never sell or misuse your information.</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">3. Cookies</h3>
            <p>
              Our site uses cookies to remember your preferences and improve your experience. You can disable cookies anytime through your browser settings.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">4. Data Security</h3>
            <p>
              We use strong security practices to protect your data. While we take all reasonable steps, no system is 100% secure. By using our site, you accept this risk.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">5. Your Consent</h3>
            <p>
              By using our website, you agree to this Privacy Policy. You can withdraw your consent anytime by contacting us at{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ewolyn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                info.ewolyn@gmail.com
              </a>.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">6. Payments</h3>
            <p>
              Make payments only in the name of <strong>EWOLYN SERVICES PVT. LTD.</strong>. We are not responsible for payments made to any unauthorized person.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">7. Third-Party Links</h3>
            <p>
              We may share links to other websites. We are not responsible for their privacy practices. Please check their policies separately.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">8. Legal and Jurisdiction</h3>
            <p>
              This policy is governed by the laws of India. Any disputes will be resolved through arbitration in <strong>Ahmedabad</strong> under the Arbitration and Conciliation Act, 1996.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">9. Updates to This Policy</h3>
            <p>
              We may update this Privacy Policy at any time. Please check this page periodically. Continued use of our site means you accept the updated policy.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 mt-6">Contact Us</h3>
            <p>For any questions about this Privacy Policy:</p>
            <div className="space-y-1">
              <p>
                📧{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info.ewolyn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  info.ewolyn@gmail.com
                </a>
              </p>
              <p>🏢 <strong>EWOLYN SERVICES PVT. LTD.</strong></p>
              <p>
                🌐{' '}
                <a
                  href="http://www.ewolyn.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.ewolyn.info
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
