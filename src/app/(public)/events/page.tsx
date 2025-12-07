// app/events/page.tsx
import React from 'react';
import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';

import placeholderImage from '../../../../public/images/placeholder-image.png';

const events = {
  upcoming: [
    {
      id: 1,
      title: 'Winter Clothing Drive',
      date: 'December 20, 2025',
      location: 'Dhaka, Bangladesh',
      description:
        'Collecting and distributing winter essentials to families in need.'
    },
    {
      id: 2,
      title: 'Community Iftar Program',
      date: 'March 15, 2026',
      location: 'Chattogram',
      description: 'Serving iftar meals to low-income communities.'
    }
  ],
  past: [
    {
      id: 1,
      title: 'Flood Relief Program',
      date: 'Sept 2025',
      thumbnail: placeholderImage.src,
      summary: 'Supported 300 families with food, medicine, and essentials.'
    },
    {
      id: 2,
      title: 'Education Kit Distribution',
      date: 'Aug 2025',
      thumbnail: placeholderImage.src,
      summary: 'Distributed school bags, books, and stationery to 120 students.'
    }
  ],
  impact: [
    { label: 'Families Helped', value: 520 },
    { label: 'Volunteers Engaged', value: 45 },
    { label: 'Cities Reached', value: 6 }
  ]
};

const EventsPage = () => {
  return (
    <main className='w-full flex flex-col gap-24 py-20'>
      {/* Upcoming Events */}
      <SectionWrapper>
        <Section>
          <h2 className='text-3xl font-bold mb-10 text-brand-primary'>
            Upcoming Events
          </h2>

          <div className='grid md:grid-cols-2 gap-10'>
            {events.upcoming.map(e => (
              <div
                key={e.id}
                className='p-8 rounded-2xl bg-sf-neutral-50 shadow-md'
              >
                <h3 className='text-xl font-semibold text-brand-secondary'>
                  {e.title}
                </h3>
                <p className='text-sm text-sf-neutral-600 mt-1'>{e.date}</p>
                <p className='text-sm text-sf-neutral-600'>{e.location}</p>
                <p className='mt-4 text-sf-neutral-700'>{e.description}</p>

                <button className='mt-6 px-5 py-2 rounded-lg bg-action-primary text-white font-medium shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </Section>
      </SectionWrapper>

      {/* Past Events */}
      <SectionWrapper className='bg-sf-neutral-100 py-16'>
        <Section>
          <h2 className='text-3xl font-bold mb-10 text-brand-primary'>
            Past Events
          </h2>

          <div className='grid md:grid-cols-2 gap-10'>
            {events.past.map(e => (
              <div
                key={e.id}
                className='rounded-2xl bg-white shadow-md overflow-hidden'
              >
                <img
                  src={e.thumbnail}
                  alt={e.title}
                  className='w-full h-56 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-brand-secondary'>
                    {e.title}
                  </h3>
                  <p className='text-sm text-sf-neutral-600 mt-1'>{e.date}</p>
                  <p className='mt-3 text-sf-neutral-700'>{e.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </SectionWrapper>

      {/* Impact */}
      <SectionWrapper>
        <Section>
          <h2 className='text-3xl font-bold mb-10 text-brand-primary'>
            Impact From Our Events
          </h2>

          <div className='grid grid-cols-3 gap-6 text-center'>
            {events.impact.map((i, idx) => (
              <div key={idx} className='p-6 rounded-xl bg-brand-soft shadow-sm'>
                <p className='text-3xl font-bold text-brand-primary'>
                  {i.value}
                </p>
                <p className='text-sf-neutral-700 mt-1'>{i.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </SectionWrapper>

      {/* Get Involved */}
      <SectionWrapper className='bg-brand-soft'>
        <Section className='text-center py-16'>
          <h2 className='text-3xl font-bold mb-4 text-brand-secondary'>
            Get Involved
          </h2>
          <p className='mb-8 text-lg opacity-90'>
            Support our mission through volunteering, donations, or
            partnerships.
          </p>

          <div className='flex justify-center gap-4'>
            <button className='px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold shadow-sm'>
              Volunteer
            </button>
            <button className='px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold shadow-sm'>
              Donate
            </button>
          </div>
        </Section>
      </SectionWrapper>
    </main>
  );
};

export default EventsPage;
