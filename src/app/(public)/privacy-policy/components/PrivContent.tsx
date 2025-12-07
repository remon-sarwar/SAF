'use client';

export default function PrivacyContent() {
  return (
    <div className='flex flex-col gap-10 text-sf-neutral-700 leading-relaxed'>
      <section className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-brand-primary'>
          Privacy Policy
        </h2>
        <p>
          Sofia Alauddin Foundation (SAF) is committed to protecting the privacy
          and security of donors, volunteers, beneficiaries, and visitors who
          interact with our website or submit information to us. This Policy
          describes what we collect, how we use it, and the rights you have
          regarding your information.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Information We Collect
        </h3>
        <ul className='list-disc ml-6 space-y-1'>
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            address, donation details.
          </li>
          <li>
            <strong>Payment Information:</strong> Processed securely by
            third-party payment processors. SAF does not store full card
            details.
          </li>
          <li>
            <strong>Volunteer or Program Data:</strong> Information submitted
            through forms, applications, or sponsorship records.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, device information,
            browser data, and analytics.
          </li>
        </ul>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          How We Use Your Information
        </h3>
        <ul className='list-disc ml-6 space-y-1'>
          <li>to process donations and issue receipts</li>
          <li>
            to communicate updates, program information, and confirmations
          </li>
          <li>to verify beneficiaries or volunteers when needed</li>
          <li>to improve the website and donor experience</li>
          <li>to comply with legal and financial reporting obligations</li>
        </ul>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Information Sharing
        </h3>
        <p>
          SAF does <strong>not</strong> sell, rent, or trade personal
          information with outside parties. We may share limited information
          only with:
        </p>
        <ul className='list-disc ml-6 space-y-1'>
          <li>trusted payment processors (for donation processing)</li>
          <li>
            service providers assisting with communication or technical
            operations
          </li>
          <li>government authorities, if required by law</li>
        </ul>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Data Security
        </h3>
        <p>
          SAF uses reasonable administrative, technical, and physical safeguards
          to protect personal information. While no system is completely secure,
          we work to ensure that donor and beneficiary data is handled
          responsibly and confidentially.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Your Rights
        </h3>
        <p>
          You may request access to your information, ask for corrections, or
          request deletion of data where legally applicable. To do so, please
          contact us through the Foundation’s official email.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Policy Updates
        </h3>
        <p>
          SAF may update this Privacy Policy from time to time. The most current
          version will always be available on our website, and continued use
          constitutes acceptance of any changes.
        </p>
      </section>
    </div>
  );
}
