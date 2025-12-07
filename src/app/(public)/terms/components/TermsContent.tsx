'use client';

export default function TermsContent() {
  return (
    <div className='flex flex-col gap-10 text-sf-neutral-700 leading-relaxed'>
      <section className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold text-brand-primary'>
          Terms & Conditions
        </h2>
        <p>
          These Terms and Conditions govern your use of the Sofia Alauddin
          Foundation (SAF) website, donation portals, forms, and all related
          services operated by the Foundation. By accessing or using this
          website, you agree to these Terms. If you do not agree, please
          discontinue use immediately.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Use of the Website
        </h3>
        <p>
          You may use this website for lawful, non-commercial purposes related
          to supporting or learning about the Foundation’s charitable work. You
          agree not to:
        </p>
        <ul className='list-disc ml-6 space-y-1'>
          <li>attempt to gain unauthorized access to systems or data</li>
          <li>interfere with website functionality or security</li>
          <li>use the site to distribute harmful or misleading content</li>
          <li>copy or misuse copyrighted material without permission</li>
        </ul>
        <p>
          SAF reserves the right to restrict access or take action against
          misuse of the website or digital assets.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Donations
        </h3>
        <p>
          All donations made through this website or related channels are
          voluntary and non-refundable. Sofia Alauddin Foundation maintains full
          discretion and control over the use of donated funds to ensure they
          are applied where the need is greatest, while making all reasonable
          efforts to honor donor preferences.
        </p>
        <p>
          Unless required by law, SAF does not guarantee any specific outcome
          associated with a donation, including how quickly funds are deployed
          or the specific beneficiaries selected.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Third-Party Services
        </h3>
        <p>
          Our website may include links or features that rely on third-party
          services such as payment processors, maps, or analytics tools. SAF is
          not responsible for the content, policies, or practices of third-party
          websites or services.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Limitation of Liability
        </h3>
        <p>
          SAF is not liable for any direct, indirect, or incidental damages
          arising from your use of the website, inability to access the site, or
          reliance on its content. All information is provided “as is” without
          guarantees of accuracy, completeness, or availability.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-semibold text-brand-secondary'>
          Changes to Terms
        </h3>
        <p>
          SAF may update these Terms at any time. Continued use of the website
          after changes are posted constitutes acceptance of the revised Terms.
        </p>
      </section>
    </div>
  );
}
