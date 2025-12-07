import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import ForgotPasswordForm from './components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-md w-full'>
        <h2 className='text-3xl font-bold text-brand-primary mb-6'>
          Forgot Password
        </h2>
        <p className='text-sf-neutral-600 mb-8'>
          Enter your email and we'll send you reset instructions.
        </p>
        <ForgotPasswordForm />
      </Section>
    </SectionWrapper>
  );
}
