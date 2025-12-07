'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Section from '@/components/Section';
import ZakatTypeStep from './steps/ZakatTypeStep';
import ZakatAmountStep from './steps/ZakatAmountStep';
import ZakatDonorInfoStep from './steps/ZakatDonorInfoStep';
import ZakatPaymentStep from './steps/ZakatPaymentStep';
import { ZakatFormState } from '@/types/ZakatForm';

const steps = [
  { id: 0, label: 'Donation Type' },
  { id: 1, label: 'Donation' },
  { id: 2, label: 'Your Info' },
  { id: 3, label: 'Payment' }
];

const ZakatWizard = () => {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState<ZakatFormState>({
    donationType: 'one-time',
    amount: '',
    currency: 'USD',
    fund: 'Zakat',
    coverCost: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'stripe'
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <SectionWrapper className='py-20 bg-sf-neutral-50'>
      <Section className='w-11/12 lg:w-10/12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10' id='zakat-form'>
          {/* LEFT: FORM */}
          <div className='lg:col-span-2'>
            {/* Progress Bar */}
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

            {/* Step Components */}
            {step === 0 && (
              <ZakatTypeStep
                form={form}
                setForm={setForm}
                onNext={handleNext}
              />
            )}
            {step === 1 && (
              <ZakatAmountStep
                form={form}
                setForm={setForm}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 2 && (
              <ZakatDonorInfoStep
                form={form}
                setForm={setForm}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <ZakatPaymentStep
                form={form}
                setForm={setForm}
                onBack={handleBack}
              />
            )}
          </div>

          {/* RIGHT: Sidebar (desktop), Bottom (mobile) */}
          <aside className='space-y-6 lg:block block'>
            <div className='bg-accent-peach-light border border-sf-neutral-200 rounded-xl p-6 shadow-sm'>
              <h3 className='text-2xl font-semibold text-brand-secondary mb-3'>
                How SA Foundation Handles Zakat
              </h3>
              <p className='text-base text-foreground leading-relaxed'>
                Zakat funds are maintained separately to ensure full Shariah
                compliance. Your contributions are distributed only to eligible
                recipients and used for essential needs such as food security,
                healthcare, education, and emergency support.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </SectionWrapper>
  );
};

export default ZakatWizard;
