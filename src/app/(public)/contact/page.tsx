import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from './components/ContactForm';

export default function ContactPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-xl w-full'>
        <h2 className='text-4xl font-bold text-brand-primary mb-4'>
          Contact Us
        </h2>
        <p className='text-sf-neutral-600 mb-10'>
          Have questions or want to work with us? Send us a message and we'll
          get back to you.
        </p>
        <ContactForm />
      </Section>
    </SectionWrapper>
  );
}
