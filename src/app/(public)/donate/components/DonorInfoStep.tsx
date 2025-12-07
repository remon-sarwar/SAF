import type { DonationFormState } from '@/types/DonationForm';

export interface DonorInfoStepProps {
  form: DonationFormState;
  setForm: React.Dispatch<React.SetStateAction<DonationFormState>>;
  onNext: () => void;
  onBack: () => void;
}

const DonorInfoStep: React.FC<DonorInfoStepProps> = ({
  form,
  setForm,
  onNext,
  onBack
}) => {
  const update = (key: keyof DonationFormState, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }));
  return (
    <div className='bg-brand-soft border border-brand-soft rounded-xl p-8 shadow-sm'>
      <h2 className='text-2xl font-semibold text-brand-secondary mb-6'>
        Your Information
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label className='font-bold text-brand-secondary mb-1 block'>
            First Name
          </label>
          <input
            value={form.firstName}
            onChange={e => update('firstName', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50 w-full'
          />
        </div>

        <div>
          <label className='font-bold text-brand-secondary mb-1 block'>
            Last Name
          </label>
          <input
            value={form.lastName}
            onChange={e => update('lastName', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50 w-full'
          />
        </div>

        <div>
          <label className='font-bold text-brand-secondary mb-1 block'>
            Email
          </label>
          <input
            type='email'
            value={form.email}
            onChange={e => update('email', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50 w-full'
          />
        </div>

        <div>
          <label className='font-bold text-brand-secondary mb-1 block'>
            Phone (optional)
          </label>
          <input
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50 w-full'
          />
        </div>
      </div>

      <div className='mt-6'>
        <label className='font-bold text-brand-secondary mb-1 block'>
          Message (optional)
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          className='border border-brand-tint rounded-md px-4 py-2 w-full bg-sf-neutral-50'
        ></textarea>
      </div>

      <div className='mt-10 flex justify-between'>
        <button
          onClick={onBack}
          className='px-6 py-3 bg-accent-peach rounded-md'
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!form.firstName || !form.lastName || !form.email}
          className='bg-action-primary text-white px-10 py-3 rounded-md shadow disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DonorInfoStep;
