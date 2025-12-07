'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const ZakatHero = () => {
  return (
    <SectionWrapper className='bg-brand-soft py-16'>
      <Section className='text-center'>
        <h1 className='text-3xl lg:text-4xl font-bold text-brand-secondary'>
          Give Your Zakat Where It Matters Most
        </h1>

        <p className='mt-4 text-lg text-sf-neutral-700 max-w-2xl mx-auto'>
          Your Zakat can support families, education, food security, and
          emergency relief through verified and transparent distribution.
        </p>

        <button
          onClick={() => {
            const formSection = document.getElementById('zakat-form');
            formSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='mt-8 px-6 py-3 bg-action-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-primary transition'
        >
          Pay Zakat
        </button>
      </Section>
    </SectionWrapper>
  );
};

export default ZakatHero;
