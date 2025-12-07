'use client';

import React from 'react';

const SignupForm = () => {
  return (
    <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>First Name</label>
        <input
          type='text'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Last Name</label>
        <input
          type='text'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <div className='flex flex-col gap-2 md:col-span-2'>
        <label className='text-sf-neutral-700 font-medium'>Email</label>
        <input
          type='email'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <div className='flex flex-col gap-2 md:col-span-2'>
        <label className='text-sf-neutral-700 font-medium'>
          Phone Number (Optional)
        </label>
        <input
          type='tel'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Password</label>
        <input
          type='password'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>
          Confirm Password
        </label>
        <input
          type='password'
          className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
        />
      </div>

      <button className='mt-4 w-full py-3 rounded-xl bg-action-primary text-white font-semibold shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none md:col-span-2'>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
