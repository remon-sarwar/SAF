import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <nav className='bg-[#F4CFB8] w-full'>
      <div className='flex py-4 justify-end'>
        <ul className='flex gap-4'>
          <li className='font-bold text-[#E36618]'>
            <Link href='/'>Events</Link>
          </li>
          <li className='font-bold text-[#E36618]'>
            <Link href='/'>Career</Link>
          </li>
          <li className='font-bold text-[#E36618]'>
            <Link href='/'>Contact</Link>
          </li>
          <li className='font-bold text-[#E36618]'>
            <Link href='/'>Login</Link>
          </li>
          <li className='font-bold text-[#E36618]'>
            <Link href='/'>Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
