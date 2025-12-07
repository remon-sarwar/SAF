'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function Hero() {
  return (
    <SectionWrapper className='py-28 bg-brand-soft'>
      <Section className='text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold text-brand-primary mb-4'>
          Give Sadaqah. Spread Mercy.
        </h1>
        <p className='text-sf-neutral-700 max-w-2xl mx-auto text-lg'>
          Your charity brings relief, dignity, and hope to families, students,
          widows, and orphans who rely on your generosity.
        </p>
      </Section>
    </SectionWrapper>
  );
}
