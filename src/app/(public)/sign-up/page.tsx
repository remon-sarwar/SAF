import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import SignupForm from './components/SignUpForm';

export default function SignupPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-lg w-full'>
        <h2 className='text-3xl font-bold text-brand-primary mb-8'>
          Create Account
        </h2>
        <SignupForm />
      </Section>
    </SectionWrapper>
  );
}
