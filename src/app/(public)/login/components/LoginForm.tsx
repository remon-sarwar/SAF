'use client';

import React from 'react';

const LoginForm = () => {
  return (
    <form className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <label className='text-sf-neutral-700 font-medium'>Email</label>
        <input
          type='email'
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

      <button className='mt-4 w-full py-3 rounded-xl bg-action-primary text-white font-semibold shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
