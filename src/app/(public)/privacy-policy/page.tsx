import React from 'react';
import PrivacyContent from './components/PrivContent';
import SectionWrapper from '@/components/SectionWrapper';
import Section from '@/components/Section';

const page = () => {
  return (
    <SectionWrapper className='py-20'>
      <Section>
        <PrivacyContent />
      </Section>
    </SectionWrapper>
  );
};

export default page;
