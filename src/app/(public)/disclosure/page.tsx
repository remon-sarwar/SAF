import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import DisclosureContent from './components/DisclosureContent';

export default function DisclosurePage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-3xl w-full'>
        <h2 className='text-4xl font-bold text-brand-primary mb-10'>
          Donation Disclosure
        </h2>
        <DisclosureContent />
      </Section>
    </SectionWrapper>
  );
}
