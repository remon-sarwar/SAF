import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import AboutContent from './components/AboutContent';

export default function AboutPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-3xl w-full'>
        <h2 className='text-4xl font-bold text-brand-primary mb-10'>
          About SA Foundation
        </h2>
        <AboutContent />
      </Section>
    </SectionWrapper>
  );
}
