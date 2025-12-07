import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import CareersContent from './components/CareersContent';

export default function CareersPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-4xl w-full'>
        <h2 className='text-4xl font-bold text-brand-primary mb-10'>
          Careers at SA Foundation
        </h2>
        <CareersContent />
      </Section>
    </SectionWrapper>
  );
}
