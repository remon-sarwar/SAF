'use client';

import React from 'react';

const DisclosureContent = () => {
  return (
    <div className='flex flex-col gap-8 text-sf-neutral-700 leading-relaxed'>
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Donation Disclosure
        </h3>

        <p>
          SOFIA ALAUDDIN FOUNDATION is a charitable organization described in
          Section{' '}
          <a
            href='https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations'
            className='text-brand-primary underline'
            target='_blank'
          >
            501(c)(3)
          </a>{' '}
          of the Internal Revenue Code. EIN: 88-3596260. The organization is
          registered in the state of Virginia.
        </p>

        <p>
          Sofia Alauddin Foundation was established to support underprivileged
          individuals through programs focused on education, self-sufficiency,
          and social improvement. We deeply appreciate your contribution. All
          gifts are tax-deductible to the extent permitted by law for donors who
          itemize deductions.
        </p>

        <p>
          In accordance with IRS requirements, SA Foundation maintains full
          discretion and control over the use of all donated funds. While we
          make every effort to honor donor preferences, final allocation of
          resources is determined by the Foundation based on program needs.
        </p>

        <p>
          No goods or services were provided in exchange for your contribution.
          All donations are non-refundable.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Questions or Receipts
        </h3>

        <p>
          If you have questions about your donation or need a statement or
          receipt for tax purposes, please contact us.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Additional Information
        </h3>

        <p>
          Financial and other information about SA Foundation’s programs and
          activities can be obtained by contacting us at:{' '}
          <a
            href='mailto:info@soalfoundation.org'
            className='text-brand-primary underline'
          >
            info@soalfoundation.org
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default DisclosureContent;
