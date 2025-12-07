'use client';

import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

export default function WhereSadaqahGoes() {
  return (
    <SectionWrapper className='py-20 bg-sf-neutral-50'>
      <Section>
        <h3 className='text-3xl font-bold text-brand-primary text-center mb-12'>
          Where Your Sadaqah Goes
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* Card 1 */}
          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h4 className='text-xl font-semibold text-brand-secondary mb-3'>
              Food & Essentials
            </h4>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Provides daily meals, monthly ration packs, and basic necessities
              for families struggling to survive.
            </p>
          </div>

          {/* Card 2 */}
          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h4 className='text-xl font-semibold text-brand-secondary mb-3'>
              Education Support
            </h4>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Helps students stay in school with tuition, supplies, and
              mentorship through sponsorship programs.
            </p>
          </div>

          {/* Card 3 */}
          <div className='p-6 bg-white rounded-2xl shadow-sm'>
            <h4 className='text-xl font-semibold text-brand-secondary mb-3'>
              Medical Assistance
            </h4>
            <p className='text-sf-neutral-700 leading-relaxed'>
              Covers critical treatments, medicine, and emergency healthcare for
              families who cannot afford it.
            </p>
          </div>
        </div>
      </Section>
    </SectionWrapper>
  );
}
