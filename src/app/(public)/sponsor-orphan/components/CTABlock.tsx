'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';

const CTABlock = () => {
  return (
    <SectionWrapper className='py-20 bg-brand-soft'>
      <Section className='text-center flex flex-col gap-6'>
        <h3 className='text-2xl font-bold text-brand-primary'>
          Want to Support a Student Instead?
        </h3>
        <p className='text-sf-neutral-700 max-w-xl mx-auto'>
          [Placeholder: Short line encouraging visitors who may prefer
          sponsoring a student’s education.]
        </p>

        <Link
          href='/sponsor-a-student'
          className='inline-block px-8 py-3 rounded-xl bg-brand-secondary text-white font-semibold shadow-sm'
        >
          Sponsor a Student
        </Link>
      </Section>
    </SectionWrapper>
  );
};

export default CTABlock;
