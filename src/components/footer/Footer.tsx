import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import Section from '@/components/Section';
import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { TbBrandTiktok } from 'react-icons/tb';
import { AiFillTwitterCircle } from 'react-icons/ai';

import logo from '../../../public/images/sa-foundation-logo.png';

import visa from '../../../public/images/payment-options/Visa-Card-Logo-PNG-Isolated-Transparent-Picture.png';
import master from '../../../public/images/payment-options/Mastercard-Logo-Free-PNG.png';
import amex from '../../../public/images/payment-options/pngwing.com.png';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <SectionWrapper className='bg-[#2F3A30] py-16'>
        <Section className='w-11/12 lg:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-[#C8EFC1]'>
          {/* Logo + Description */}
          <div className='flex-1'>
            <Image
              src={logo.src}
              alt='SA Foundation Logo'
              width={120}
              height={80}
              className='mb-4'
            />
            <p className='text-sm leading-relaxed text-[#8EFF6E]'>
              SA Foundation is committed to empowering rural communities through
              social services, vocational training, education, and faith-driven
              compassion.
            </p>
          </div>

          {/* Useful Links */}
          <div className='flex-1'>
            <h3 className='text-white font-semibold text-lg mb-4'>
              Useful Links
            </h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link
                  href='/volunteer'
                  className='text-[#8EFF6E] hover:opacity-75'
                >
                  Volunteer with us
                </Link>
              </li>
              <li>
                <Link
                  href='/career'
                  className='text-[#8EFF6E] hover:opacity-75'
                >
                  Work with us
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-[#8EFF6E] hover:opacity-75'>
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-[#8EFF6E] hover:opacity-75'
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href='/disclosure'
                  className='text-[#8EFF6E] hover:opacity-75'
                >
                  Donation Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='flex-1'>
            <h3 className='text-white font-semibold text-lg mb-4'>Follow Us</h3>
            <ul className='flex flex-col gap-4 text-base'>
              <li>
                <a
                  href='https://www.facebook.com/sofiaalauddinfoundation'
                  target='_blank'
                  className='flex items-center gap-3 text-[#8EFF6E] hover:opacity-75'
                >
                  <FaFacebookF size={20} /> Facebook
                </a>
              </li>

              <li>
                <a
                  href='https://x.com/AlauddinSofia'
                  target='_blank'
                  className='flex items-center gap-3 text-[#8EFF6E] hover:opacity-75'
                >
                  <AiFillTwitterCircle size={22} /> Twitter / X
                </a>
              </li>

              <li>
                <a
                  href='http://linkedin.com/company/sofia-alauddin-foundation/'
                  target='_blank'
                  className='flex items-center gap-3 text-[#8EFF6E] hover:opacity-75'
                >
                  <FaLinkedin size={22} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='flex-1'>
            <h3 className='text-white font-semibold text-lg mb-4'>
              Get In Touch
            </h3>
            <ul className='flex flex-col gap-4 text-base'>
              <li className='flex items-start gap-3 text-[#8EFF6E]'>
                <span>📍</span>
                <span>13749 Piedmont Vista Drive, Hay Market, VA, 20169.</span>
              </li>
              <li className='flex items-start gap-3'>
                <span>✉️</span>
                <a
                  href='mailto:info@soalfoundation.org'
                  className='text-[#8EFF6E] hover:opacity-75'
                >
                  info@soalfoundation.org
                </a>
              </li>
              <li className='flex items-start gap-3 text-[#8EFF6E]'>
                <span>📞</span> +1-203-536-8846
              </li>
              <li className='flex items-start gap-3 text-[#8EFF6E]'>
                <span>📞</span> +1-703-853-9383
              </li>
            </ul>
          </div>

          {/* Donate */}
          <div className='flex-1'>
            <Link href='/donate'>
              <h3 className='text-white font-semibold text-lg mb-4'>Donate</h3>
            </Link>
            <p className='text-brand-accent mb-4'>Available payment options</p>
            <ul className='flex flex-col gap-4'>
              <li className='inline-flex gap-3 text-[#8EFF6E]'>
                <img src={visa.src} className='w-12 h-auto' />
                <img src={master.src} className='w-12 h-auto' />
                <img src={amex.src} className='w-12 h-auto' />
              </li>
              <li className='text-[#8EFF6E]'>AutoBooks</li>
              <li className='text-[#8EFF6E]'>Zelle</li>
              <li className='text-[#8EFF6E]'>Venmo</li>
            </ul>
          </div>
        </Section>
      </SectionWrapper>

      {/* Bottom Footer */}
      <SectionWrapper className='py-4 bg-sf-neutral-900'>
        <div className='text-center text-brand-accent w-11/12 lg:w-10/12 text-sm'>
          © {new Date().getFullYear()} SAF is a registered 501(c)(3) nonprofit
          organization (Tax ID: 88-3596260). Donations are tax-deductible as
          allowed by law.
        </div>
      </SectionWrapper>
    </>
  );
};

export default Footer;
