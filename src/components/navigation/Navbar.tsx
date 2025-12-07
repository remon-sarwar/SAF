'use client';

import React, { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import Link from 'next/link';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import logo from '../../../public/images/sa-foundation-logo.png';
import nameImage from '../../../public/images/logoName.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      {/* -------------------- TOP BAR -------------------- */}
      <div className='w-full bg-accent-peach py-2'>
        <div className='w-11/12 mx-auto flex justify-end items-center gap-6 font-bold'>
          <Link
            href='/events'
            className='text-accent-orange-dark hover:opacity-80'
          >
            Events
          </Link>
          <Link
            href='/career'
            className='text-accent-orange-dark hover:opacity-80'
          >
            Career
          </Link>
          <Link
            href='/contact'
            className='text-accent-orange-dark hover:opacity-80'
          >
            Contact
          </Link>
          <Link
            href='/login'
            className='text-accent-orange-dark hover:opacity-80'
          >
            Login
          </Link>
          <Link
            href='/sign-up'
            className='text-accent-orange-dark hover:opacity-80'
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* -------------------- MAIN NAV -------------------- */}
      <SectionWrapper className='bg-sf-neutral-50 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.08)]'>
        <header className='w-11/12 lg:w-11/12 mx-auto'>
          {/* -------------------- ROW 2 -------------------- */}
          <div className='px-4 py-3 grid grid-cols-3 items-center'>
            {/* LEFT: Logo */}
            <div className='flex justify-start'>
              <Link href='/' aria-label='Sofia Alauddin Foundation'>
                <img src={logo.src} alt='SA Foundation Logo' className='h-16' />
              </Link>
            </div>

            {/* CENTER: Massive Title + Tagline */}
            <div className='text-center hidden lg:flex lg:flex-col lg:items-center'>
              <img src={nameImage.src} alt='' className='h-6' />
              <p className='text-foreground mt-1 tracking-wide'>
                Do Help and Make the World a Better Place
              </p>
            </div>

            {/* RIGHT: Donate + Mobile Nav */}
            <div className='flex justify-end items-center gap-4'>
              <div className='hidden lg:flex gap-4'>
                <Link href='/zakat'>
                  <button className='py-3 px-6 bg-accent-orange text-white rounded-md font-semibold shadow-[0_4px_0_var(--color-action-orange-shadow)] active:translate-y-0.5 active:shadow-[0_2px_0_var(--color-action-orange-shadow)]'>
                    Zakat
                  </button>
                </Link>
                <Link href='/donate'>
                  <button className='py-3 px-6 bg-action-primary text-white rounded-md font-semibold shadow-[0_4px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-[0_2px_0_var(--color-action-primary-shadow)]'>
                    Donate
                  </button>
                </Link>
              </div>

              {/* Mobile Nav */}
              <MobileNav open={open} setOpen={setOpen} />
            </div>
          </div>

          {/* -------------------- ROW 3: Desktop Nav Items -------------------- */}
          <div className='hidden lg:flex w-full justify-center'>
            <ul className='flex gap-6 items-center'>
              <NavItem label='Home' url='/' />
              <NavItem label='About' url='/about' />

              <NavItem
                label='Projects'
                url='/projects'
                hasSubmenu
                subMenuItems={[
                  { label: 'Water', url: '/projects/water' },
                  { label: 'Orphans', url: '/projects/orphans' }
                ]}
              />

              <NavItem
                label='Sponsor'
                hasSubmenu
                subMenuItems={[
                  { label: 'Sponsor an Orphan', url: '/sponsor-orphan' },
                  { label: 'Sponsor a Student', url: '/sponsor-a-student' }
                ]}
              />

              <NavItem
                label='Get Involved'
                url='#'
                hasSubmenu
                subMenuItems={[
                  { label: 'Volunteer with Us', url: '/volunteer' },
                  { label: 'Work with Us', url: '/career' },
                  { label: 'Events', url: '/events' }
                ]}
              />
              <NavItem label='Sadaqah' url='/sadaqah' />
            </ul>
          </div>
        </header>
      </SectionWrapper>
    </div>
  );
};

export default Navbar;
