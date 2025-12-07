'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Full Name</label>
        <input
          type='text'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary border border-sf-neutral-200'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Email</label>
        <input
          type='email'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary border border-sf-neutral-200'
        />
      </div>

      <div class-name='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>
          Phone (Optional)
        </label>
        <input
          type='tel'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary border border-sf-neutral-200 w-full'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Message</label>
        <textarea
          rows={5}
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary border border-sf-neutral-200'
        ></textarea>
      </div>

      <button className='w-full py-3 rounded-xl bg-action-primary text-white font-semibold shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
