import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <SectionWrapper className='py-24 bg-sf-neutral-50'>
      <Section className='max-w-md w-full'>
        <h2 className='text-3xl font-bold text-brand-primary mb-8'>Login</h2>
        <LoginForm />
      </Section>
    </SectionWrapper>
  );
}
