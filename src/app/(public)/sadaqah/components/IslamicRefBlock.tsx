'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function IslamicRefBlock() {
  return (
    <SectionWrapper className='py-20'>
      <Section className='max-w-3xl text-center flex flex-col gap-6'>
        <h3 className='text-2xl font-bold text-brand-secondary'>
          The Virtue of Giving
        </h3>

        <p className='text-sf-neutral-700 leading-relaxed'>
          Prophet Muhammad (peace be upon him) encouraged believers to give
          charity, saying that it does not decrease one’s wealth but brings
          Barakah.
        </p>

        <p className='text-sf-neutral-700 leading-relaxed'>
          The Qur’an also reminds us that those who give for the sake of Allah
          will be rewarded many times over.
        </p>
      </Section>
    </SectionWrapper>
  );
}
