'use client';

import type { DonationFormState } from '@/types/DonationForm';

interface DonationTypeStepProps {
  form: DonationFormState;
  setForm: React.Dispatch<React.SetStateAction<DonationFormState>>;
  onNext: () => void;
}

const DonationTypeStep: React.FC<DonationTypeStepProps> = ({
  form,
  setForm,
  onNext
}) => {
  const update = (value: 'one-time' | 'recurring') =>
    setForm(prev => ({ ...prev, donationType: value }));

  return (
    <div className='bg-brand-soft border border-brand-soft rounded-xl p-8 shadow-sm'>
      <h2 className='text-2xl font-semibold text-brand-secondary mb-6'>
        Choose Donation Type
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <button
          onClick={() => {
            update('one-time');
            onNext();
          }}
          className={`border rounded-xl p-6 text-left shadow-sm transition
            ${
              form.donationType === 'one-time'
                ? 'border-brand-secondary bg-white'
                : 'border-brand-tint bg-sf-neutral-50'
            }
          `}
        >
          <h3 className='text-xl font-semibold mb-2'>One-Time</h3>
          <p className='text-sm text-foreground'>A single contribution.</p>
        </button>

        <button
          onClick={() => {
            update('recurring');
            onNext();
          }}
          className={`border rounded-xl p-6 text-left shadow-sm transition
            ${
              form.donationType === 'recurring'
                ? 'border-brand-secondary bg-white'
                : 'border-brand-tint bg-sf-neutral-50'
            }
          `}
        >
          <h3 className='text-xl font-semibold mb-2'>Recurring</h3>
          <p className='text-sm text-foreground'>Monthly ongoing support.</p>
        </button>
      </div>
    </div>
  );
};

export default DonationTypeStep;
