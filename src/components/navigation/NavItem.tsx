import Link from 'next/link';
import React from 'react';

export interface INavItem {
  label: string;
  hasSubmenu?: boolean;
  url?: string;
  subMenuItems?: Array<{ label: string; url: string }>;
}

const NavItem: React.FC<INavItem> = ({
  label,
  hasSubmenu = false,
  url = '#',
  subMenuItems = []
}) => {
  return (
    <li className='relative group py-4'>
      <Link
        href={url}
        aria-haspopup={hasSubmenu}
        aria-expanded={false}
        className='text-brand-secondary duration-200 hover:text-brand-primary hover:underline hover:underline-offset-2 font-semibold'
      >
        {label}
      </Link>

      {/* Submenu */}
      {hasSubmenu && subMenuItems.length > 0 && (
        <ul
          className='absolute hidden group-hover:block bg-sf-neutral-50 mt-2 w-48 rounded-md shadow-lg z-[99] border border-sf-neutral-200'
          role='menu'
        >
          {subMenuItems.map((item, i) => (
            <li key={i} className='px-4 py-2 hover:bg-brand-soft duration-150'>
              <Link
                href={item.url}
                role='menuitem'
                className='text-brand-secondary hover:text-brand-primary'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
