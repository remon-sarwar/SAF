'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

const DescriptionBlock = () => {
  return (
    <SectionWrapper className='py-20'>
      <Section className='max-w-3xl text-center flex flex-col gap-6'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Why Your Support Matters
        </h3>
        <p className='text-sf-neutral-700 leading-relaxed'>
          [Placeholder: Describe how orphan sponsorship works, what the child
          receives, and how your contribution creates long-term stability,
          safety, and educational opportunities.]
        </p>
        <p className='text-sf-neutral-700 leading-relaxed'>
          [Placeholder: Additional explanation of emotional support, community
          care, and how SA Foundation oversees each orphan’s wellbeing.]
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default DescriptionBlock;
