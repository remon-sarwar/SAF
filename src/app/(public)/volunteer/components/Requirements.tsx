'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function Requirements() {
  return (
    <SectionWrapper className='py-20 bg-sf-neutral-50'>
      <Section className='max-w-3xl'>
        <h2 className='text-3xl font-bold text-brand-primary mb-6'>
          Requirements
        </h2>

        <ul className='list-disc ml-6 text-sf-neutral-700 leading-relaxed space-y-2'>
          <li>Must be at least 16 years old</li>
          <li>Must follow SAF guidelines and conduct respectfully</li>
          <li>Commitment is flexible but reliability is essential</li>
          <li>Some roles may involve travel within your city</li>
          <li>Training will be provided when needed</li>
        </ul>
      </Section>
    </SectionWrapper>
  );
}
