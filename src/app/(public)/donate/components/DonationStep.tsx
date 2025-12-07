import type { DonationFormState } from '@/types/DonationForm';

export interface DonationStepProps {
  form: DonationFormState;
  setForm: React.Dispatch<React.SetStateAction<DonationFormState>>;
  onNext: () => void;
}

const DonationStep: React.FC<DonationStepProps> = ({
  form,
  setForm,
  onNext
}) => {
  const update = (key: keyof DonationFormState, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className='bg-brand-soft border border-brand-soft rounded-xl p-8 shadow-sm'>
      <h2 className='text-2xl font-semibold text-brand-secondary mb-6'>
        Donation Information
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        <div className='flex flex-col'>
          <label className='font-bold text-brand-secondary mb-1'>
            Recurring Interval
          </label>
          <select
            value={form.fund}
            onChange={e => update('fund', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50'
          >
            <option value='weekly'>weekly</option>
          </select>
        </div>
      </div>

      {/* Donation Fields */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        <div className='flex flex-col'>
          <label className='font-bold text-brand-secondary mb-1'>Amount</label>
          <input
            type='number'
            value={form.amount}
            onChange={e => update('amount', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50'
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-bold text-brand-secondary mb-1'>
            Currency
          </label>
          <select
            value={form.currency}
            onChange={e => update('currency', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50'
          >
            <option value='USD'>USD</option>
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='font-bold text-brand-secondary mb-1'>
            Donation Fund
          </label>
          <select
            value={form.fund}
            onChange={e => update('fund', e.target.value)}
            className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50'
          >
            <option value='Zakat'>Zakat</option>
          </select>
        </div>
      </div>

      {/* Donation Area */}
      <div className='flex flex-col'>
        <label className='font-bold text-brand-secondary mb-1'>
          Donation Area
        </label>

        <select
          value={form.donationArea}
          onChange={e => update('donationArea', e.target.value)}
          className='border border-brand-tint rounded-md px-4 py-2 bg-sf-neutral-50 focus:outline-none'
        >
          <option value='General'>General</option>
          <option value='Social services'>Social services</option>
          <option value='Education'>Education</option>
          <option value='Vocational training'>Vocational training</option>
          <option value='Self reliance program'>Self reliance program</option>
          <option value='Small agro farm'>Small agro farm</option>
        </select>
      </div>

      {/* Cover Cost */}
      <div className='mt-6 flex items-center gap-3'>
        <input
          type='checkbox'
          checked={form.coverCost}
          onChange={e => update('coverCost', e.target.checked)}
          className='w-5 h-5'
        />
        <span className='text-foreground'>
          I want to cover the processing cost
        </span>
      </div>

      {/* Summary */}
      <div className='mt-8 bg-sf-neutral-50 border border-sf-neutral-200 rounded-md p-5'>
        <h3 className='text-lg font-semibold text-brand-secondary mb-3'>
          Summary
        </h3>
        <ul className='text-sm space-y-2'>
          <li>
            <b>Amount:</b> {form.amount || '—'} {form.currency}
          </li>
          <li>
            <b>Donation Type:</b> {form.donationType}
          </li>
          <li>
            <b>Fund:</b> {form.fund}
          </li>
          <li>
            <b>Covering Cost:</b> {form.coverCost ? 'Yes' : 'No'}
          </li>
        </ul>
      </div>

      {/* Next */}
      <div className='mt-10 flex justify-end'>
        <button
          onClick={onNext}
          disabled={!form.amount}
          className='bg-action-primary text-white px-10 py-3 rounded-md shadow disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DonationStep;
