'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const SupportRow = () => {
  return (
    <SectionWrapper className='py-16 bg-sf-neutral-50'>
      <Section className='text-center'>
        <h2 className='text-2xl font-bold text-brand-primary mb-2'>
          Care for an Orphan This Ramadan
        </h2>
        <p className='text-lg text-sf-neutral-700'>
          Only{' '}
          <span className='font-semibold text-brand-secondary'>$50/month</span>{' '}
          or{' '}
          <span className='font-semibold text-brand-secondary'>$600/year</span>
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default SupportRow;
