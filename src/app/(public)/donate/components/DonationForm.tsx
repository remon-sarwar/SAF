'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Section from '@/components/Section';

import DonationTypeStep from './DonationTypeStep';
import DonationStep from './DonationStep';
import DonorInfoStep from './DonorInfoStep';
import PaymentStep from './PaymentStep';

import type { DonationFormState } from '@/types/DonationForm';

const steps = [
  { id: 0, label: 'Donation Type' },
  { id: 1, label: 'Donation' },
  { id: 2, label: 'Your Info' },
  { id: 3, label: 'Payment' }
];

const DonationWizard = () => {
  const [step, setStep] = useState<number>(0);

  const [form, setForm] = useState<DonationFormState>({
    donationType: 'one-time',
    amount: '',
    currency: 'USD',
    fund: 'Zakat',
    coverCost: false,
    donationArea: 'General',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: 'stripe'
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <SectionWrapper className='py-20'>
      <Section className='w-11/12 lg:w-10/12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2'>
            {/* PROGRESS BAR */}
            <div className='flex justify-center gap-4 border-b border-sf-neutral-200 pb-4 mb-8 bg-accent-peach-light py-4 rounded-md'>
              {steps.map(s => {
                const isActive = s.id === step;
                const isCompleted = s.id < step;
                const canSelect = s.id === 0 || isCompleted;

                return (
                  <button
                    key={s.id}
                    disabled={!canSelect}
                    onClick={() => canSelect && setStep(s.id)}
                    className={`
                      pb-2 text-base font-semibold transition-colors
                      ${
                        isActive
                          ? 'text-brand-secondary border-b-4 border-brand-secondary'
                          : ''
                      }
                      ${
                        isCompleted && !isActive
                          ? 'text-brand-secondary opacity-70'
                          : ''
                      }
                      ${!isActive && !isCompleted ? 'text-sf-neutral-400' : ''}
                    `}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* STEPS */}
            {step === 0 && (
              <DonationTypeStep
                form={form}
                setForm={setForm}
                onNext={handleNext}
              />
            )}

            {step === 1 && (
              <DonationStep form={form} setForm={setForm} onNext={handleNext} />
            )}

            {step === 2 && (
              <DonorInfoStep
                form={form}
                setForm={setForm}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}

            {step === 3 && (
              <PaymentStep form={form} setForm={setForm} onBack={handleBack} />
            )}
          </div>

          <aside className='hidden lg:block space-y-6'>
            {/* Box 1: Contact */}
            <div className='bg-accent-peach-light border border-sf-neutral-200 rounded-xl p-6 shadow-sm'>
              <h3 className='text-3xl font-semibold text-brand-secondary mb-3'>
                Contact
              </h3>

              <p className='text-base text-foreground leading-relaxed mb-3'>
                Need help? Our team is here for you.
              </p>

              <div className='text-base space-y-2 text-foreground'>
                <p>
                  <span className='font-semibold'>Email:</span>{' '}
                  info@soalfoundation.org
                </p>
                <p>
                  <span className='font-semibold'>Phone:</span> +1-203-536-8846
                </p>
                <p>
                  <span className='font-semibold'>Phone:</span> +1-703-853-9383
                </p>
              </div>

              <button className='mt-4 w-full py-2 bg-brand-secondary text-white rounded-md font-semibold'>
                Send Message
              </button>
            </div>

            {/* Box 2: Send a Check */}
            <div className='bg-accent-peach-light border border-sf-neutral-200 rounded-xl p-6 shadow-sm'>
              <h3 className='text-3xl font-semibold text-brand-secondary mb-3'>
                Send a Check
              </h3>

              <p className='text-base text-foreground leading-relaxed'>
                Prefer donating by check? You can mail your contribution to:
              </p>

              <div className='mt-4 text-base text-foreground leading-relaxed'>
                13749 Piedmont Vista Drive, Hay Market,
                <br />
                VA, 20169.
              </div>
            </div>

            {/* Box 3: Quick Donation Options */}
            <div className='bg-accent-peach-light border border-sf-neutral-200 rounded-xl p-6 shadow-sm'>
              <h3 className='text-3xl font-semibold text-brand-secondary mb-3'>
                Quick Donation Options
              </h3>

              <p className='text-base text-foreground mb-4'>
                Fast and convenient ways to support the foundation.
              </p>

              <div className='flex flex-col gap-3 text-2xl'>
                <button className='w-full py-2 bg-brand-secondary text-white rounded-md font-semibold'>
                  Zelle
                </button>

                <button className='w-full py-2 bg-brand-secondary text-white rounded-md font-semibold'>
                  Autobooks
                </button>

                <button className='w-full py-2 bg-brand-secondary text-white rounded-md font-semibold'>
                  Bank Transfer
                </button>
              </div>
            </div>

            {/* Box 4: Sign In / Sign Up */}
            <div className='bg-accent-peach-light border border-sf-neutral-200 rounded-xl p-6 shadow-sm'>
              <h3 className='text-3xl font-semibold text-brand-secondary'>
                Returning Donor?
              </h3>

              <p className='text-foreground mt-2 mb-6 text-base'>
                Sign in to access your saved payment methods.
              </p>

              <button className='w-full bg-brand-secondary text-white py-3 rounded-md font-semibold shadow'>
                Sign In
              </button>

              <p className='text-base text-foreground mt-4 text-center'>
                Don’t have an account?{' '}
                <span className='text-accent-orange-dark font-semibold cursor-pointer'>
                  Sign Up
                </span>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default DonationWizard;
