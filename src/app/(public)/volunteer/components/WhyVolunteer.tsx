'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function WhyVolunteer() {
  return (
    <SectionWrapper className='py-20 bg-sf-neutral-50'>
      <Section>
        <h2 className='text-3xl font-bold text-brand-primary text-center mb-12'>
          Why Volunteer With Us?
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h3 className='text-xl font-semibold text-brand-secondary mb-3'>
              Real Impact
            </h3>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Your time directly supports children, students, widows, and
              vulnerable families.
            </p>
          </div>

          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h3 className='text-xl font-semibold text-brand-secondary mb-3'>
              Flexible Roles
            </h3>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Choose how you help: field work, distribution, media, teaching, or
              logistics.
            </p>
          </div>

          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h3 className='text-xl font-semibold text-brand-secondary mb-3'>
              Purpose & Community
            </h3>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Be part of a mission-driven community working to uplift lives.
            </p>
          </div>
        </div>
      </Section>
    </SectionWrapper>
  );
}
