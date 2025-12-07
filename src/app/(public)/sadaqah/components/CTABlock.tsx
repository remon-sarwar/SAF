'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

export default function CTABlock() {
  return (
    <SectionWrapper className='py-20 bg-brand-soft'>
      <Section className='text-center flex flex-col gap-6'>
        <h3 className='text-2xl font-bold text-brand-primary'>
          Ready to Give Sadaqah?
        </h3>

        <p className='text-sf-neutral-700 max-w-xl mx-auto'>
          Your donation provides immediate relief and long-term support.
        </p>

        <Link
          href='/donate'
          className='inline-block px-8 py-3 rounded-xl bg-brand-secondary text-white font-semibold shadow-sm'
        >
          Give Sadaqah
        </Link>
      </Section>
    </SectionWrapper>
  );
}
