import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

import MissionBlock from './components/MissionBlock';
import WhatWeDoBlock from './components/WhatWeDoBlock';
import EligibilityBlock from './components/EligibilityBlock';
import SponsorStudentForm from './components/SponsorStudentForm';

export default function SponsorStudentPage() {
  return (
    <main className='flex flex-col'>
      {/* Hero */}
      <SectionWrapper className='bg-brand-soft py-24'>
        <Section className='text-center'>
          <h1 className='text-4xl font-bold text-brand-primary mb-4'>
            Sponsor a Student
          </h1>
          <p className='text-sf-neutral-700 max-w-2xl mx-auto'>
            Connect with them and watch them grow
          </p>
        </Section>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className='py-20 bg-sf-neutral-50'>
        <Section className='max-w-4xl'>
          <MissionBlock />
        </Section>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className='py-20'>
        <Section>
          <WhatWeDoBlock />
        </Section>
      </SectionWrapper>

      {/* Form */}
      <SectionWrapper className='py-20'>
        <Section className='w-10/12 justify-center'>
          <div className='flex gap-8'>
            <div className='w-11/12 lg:w-8/12'>
              <h3 className='text-3xl font-bold text-brand-primary mb-10'>
                Student Registration Form
              </h3>
              <SponsorStudentForm />
            </div>
            <div className='w-11/12 lg:w-4/12'>
              <EligibilityBlock />
            </div>
          </div>
        </Section>
      </SectionWrapper>
    </main>
  );
}
