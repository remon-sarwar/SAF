'use client';

import React from 'react';

const AboutContent = () => {
  return (
    <div className='flex flex-col gap-10'>
      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Who We Are
        </h3>
        <p className='text-sf-neutral-700 leading-relaxed'>
          SA Foundation is dedicated to supporting underserved communities
          through humanitarian aid, educational initiatives, and sustainable
          development programs. Our mission is rooted in compassion,
          transparency, and making meaningful impact where it matters most.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          Our Mission
        </h3>
        <p className='text-sf-neutral-700 leading-relaxed'>
          We work to uplift communities by delivering essential resources,
          creating opportunities for growth, and empowering individuals through
          education and long-term support.
        </p>
      </section>

      <section className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-brand-secondary'>
          What We Do
        </h3>
        <ul className='list-disc ml-5 text-sf-neutral-700 leading-relaxed space-y-2'>
          <li>Disaster relief and emergency aid</li>
          <li>Sponsorship programs for orphans and students</li>
          <li>Community development and food distribution</li>
          <li>Educational support and outreach initiatives</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutContent;
