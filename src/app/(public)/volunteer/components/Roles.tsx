'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function Roles() {
  return (
    <SectionWrapper className='py-20'>
      <Section className='max-w-4xl'>
        <h2 className='text-3xl font-bold text-brand-primary mb-8'>
          Volunteer Roles
        </h2>

        <ul className='space-y-4 text-sf-neutral-700 leading-relaxed'>
          <li>
            • Field Volunteer – distribution, visiting families, relief
            operations
          </li>
          <li>
            • Education Support – tutoring students, follow-ups, mentoring
          </li>
          <li>• Operations & Logistics – inventory, packing, coordination</li>
          <li>
            • Media & Outreach – photography, videography, social media support
          </li>
          <li>
            • Event Volunteer – Ramadan drives, clothing distribution, campaigns
          </li>
        </ul>
      </Section>
    </SectionWrapper>
  );
}
