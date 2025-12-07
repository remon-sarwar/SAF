'use client';

import React from 'react';

const CareersContent = () => {
  // Replace with API later if you want dynamic roles
  const jobs = [
    {
      id: 1,
      title: 'Program Coordinator',
      type: 'Full-time',
      location: 'Dhaka, Bangladesh',
      description:
        'Support the planning and execution of community programs, manage field teams, and ensure smooth delivery of services.'
    },
    {
      id: 2,
      title: 'Fundraising & Partnerships Officer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description:
        'Develop partnerships, manage donor relations, and assist in fundraising campaigns and outreach initiatives.'
    },
    {
      id: 3,
      title: 'Volunteer Outreach Lead',
      type: 'Part-time',
      location: 'Chattogram',
      description:
        'Coordinate volunteer recruitment, onboarding, and community engagement activities.'
    }
  ];

  return (
    <div className='flex flex-col gap-14'>
      {/* Mission Statement */}
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Work With Purpose
        </h3>
        <p className='text-sf-neutral-700 leading-relaxed'>
          At SA Foundation, we are driven by compassion, service, and meaningful
          impact. Joining our team means becoming part of a mission dedicated to
          empowering communities and uplifting lives across Bangladesh.
        </p>
      </section>

      {/* Job Listings */}
      <section className='flex flex-col gap-6'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Open Positions
        </h3>

        <div className='flex flex-col gap-6'>
          {jobs.map(job => (
            <div
              key={job.id}
              className='p-6 rounded-2xl bg-white shadow-sm border border-sf-neutral-200'
            >
              <h4 className='text-xl font-semibold text-brand-primary'>
                {job.title}
              </h4>

              <div className='flex flex-wrap gap-4 mt-2 text-sm text-sf-neutral-600'>
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>

              <p className='mt-4 text-sf-neutral-700 leading-relaxed'>
                {job.description}
              </p>

              <button className='mt-6 px-5 py-2 rounded-lg bg-action-primary text-white font-medium shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* General Application */}
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Didn’t Find a Role?
        </h3>
        <p className='text-sf-neutral-700 leading-relaxed'>
          We are always looking for passionate, skilled individuals who want to
          contribute to our mission. You can send us an open application, and
          we’ll reach out if a fitting opportunity arises.
        </p>

        <button className='w-fit px-6 py-3 rounded-lg bg-brand-secondary text-white font-medium shadow-sm'>
          Send Open Application
        </button>
      </section>
    </div>
  );
};

export default CareersContent;
