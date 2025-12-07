import React from 'react';
import TermsContent from './components/TermsContent';
import SectionWrapper from '@/components/SectionWrapper';
import Section from '@/components/Section';

const page = () => {
  return (
    <SectionWrapper className='py-20'>
      <Section>
        <TermsContent />
      </Section>
    </SectionWrapper>
  );
};

export default page;
