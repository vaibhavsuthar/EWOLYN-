
import { Section, SectionTitle } from '@/components/ui/section';

export default function RefundPolicy() {
  return (
    <main className="bg-background pt-24">
      <Section id="refund-policy" className="py-12 md:py-16">
        <SectionTitle>Refund Policy</SectionTitle>
        <div className="max-w-4xl mx-auto mt-12 prose prose-lg lg:prose-xl text-foreground">
            <p>This Policy consists of the procedure to be followed and terms and conditions applied and considered for Refund and Cancellation in regards to Services provided by EWOLYN SERVICES PVT. LTD.</p>

            <h3 className="font-bold text-xl mb-2 mt-6">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Service Provider:</strong> The person who is giving specified services in exchange for a payment.</li>
                <li><strong>Service Receiver:</strong> Service receiver is a person who receives or avails the services provided by the service provider.</li>
            </ul>

            <h3 className="font-bold text-xl mb-2 mt-6">Eligibility Requirements for Refund</h3>
            <p>The Service receiver will be eligible to claim refund only after a thorough assessment of the service in question was made by the Service Provider or the same is stated in the duly executed documents such as Agreement, Undertaking, or any such other documents signed by both Service Provider and Service Receiver depending on the circumstances.</p>

            <h3 className="font-bold text-xl mb-2 mt-6">Types of Refunds</h3>
            <p>Refund will include such amount as mentioned in the duly executed documents or any such amount mutually agreed between the Service Provider and Service Receiver.</p>

            <h3 className="font-bold text-xl mb-2 mt-6">Refund Timeframe</h3>
            <p>The Refund will be received within 90 working days after receipt of all the documents, details and information required by the Service Provider to complete the process and initiate the transfer.</p>

            <h3 className="font-bold text-xl mb-2 mt-6">Refund Process</h3>
            <p>An e-mail will be sent from EWOLYN SERVICES PVT. LTD. stating the details of the terms in compliance with which the refund will be processed along with the reason and amount of the Refund. The Service Receiver will need to Accept and Acknowledge the same in respect to the mail itself. The Service Receiver will need to provide Bank Account details such as the account number and the IFSC code of the branch in question in which the amount of refund is required to be transferred by the Service Provider. After the receipt of required details, the process of refund will be initiated and the amount will be received by the Service Receiver within the time frame mentioned above (i.e., within 90 working days after receipt of all the documents, details, and information).</p>
        </div>
      </Section>
    </main>
  );
}
