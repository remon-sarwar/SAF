import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

import Hero from './components/Hero';
import SadaqahContentOne from './components/SadaqahContentOne';
import SadaqahContentTwo from './components/SadaqahContentTwo';
import WhereSadaqahGoes from './components/WhereSadaqahGoes';
import IslamicRefBlock from './components/IslamicRefBlock';
import CTABlock from './components/CTABlock';

export default function SadaqahPage() {
  return (
    <main className='flex flex-col'>
      <Hero />

      <SectionWrapper className='py-20'>
        <Section className='max-w-4xl'>
          <SadaqahContentOne />
        </Section>
      </SectionWrapper>

      <SectionWrapper className='py-20 bg-sf-neutral-50'>
        <Section className='max-w-4xl'>
          <SadaqahContentTwo />
        </Section>
      </SectionWrapper>

      <WhereSadaqahGoes />

      <IslamicRefBlock />

      <CTABlock />
    </main>
  );
}
