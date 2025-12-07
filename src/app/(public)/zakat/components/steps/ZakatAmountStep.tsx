import { StepProps } from '@/types/ZakatForm';

const ZakatAmountStep: React.FC<StepProps> = ({
  form,
  setForm,
  onNext,
  onBack
}) => {
  return (
    <div className='bg-brand-soft p-8 rounded-xl border border-sf-neutral-200 shadow-sm'>
      <h2 className='text-xl font-semibold text-brand-secondary mb-6'>
        Donation Information
      </h2>

      {/* Amount / Currency / Fund */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div>
          <label className='block text-brand-secondary font-medium mb-1'>
            Amount
          </label>
          <input
            type='number'
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
            placeholder='0.00'
            className='border p-3 rounded-lg w-full bg-white'
          />
        </div>

        <div>
          <label className='block text-brand-secondary font-medium mb-1'>
            Currency
          </label>
          <select
            value={form.currency}
            onChange={e => setForm({ ...form, currency: e.target.value })}
            className='border p-3 rounded-lg w-full bg-white'
          >
            <option value='USD'>USD</option>
            <option value='BDT'>BDT</option>
          </select>
        </div>
      </div>

      {/* Cover Cost */}
      <label className='flex items-center gap-2 mt-4 cursor-pointer'>
        <input
          type='checkbox'
          checked={form.coverCost}
          onChange={e => setForm({ ...form, coverCost: e.target.checked })}
        />
        <span className='text-sf-neutral-700'>
          I want to cover the processing cost
        </span>
      </label>

      {/* Summary */}
      <div className='bg-white p-6 rounded-xl border border-sf-neutral-200 mt-6'>
        <h3 className='text-lg font-semibold text-brand-secondary mb-4'>
          Summary
        </h3>

        <p className='text-sf-neutral-700 text-sm'>
          <strong>Amount:</strong> {form.amount || '—'} {form.currency}
        </p>
        <p className='text-sf-neutral-700 text-sm'>
          <strong>Donation Type:</strong> {form.donationType}
        </p>
        <p className='text-sf-neutral-700 text-sm'>
          <strong>Fund:</strong> Zakat
        </p>
        <p className='text-sf-neutral-700 text-sm'>
          <strong>Covering Cost:</strong> {form.coverCost ? 'Yes' : 'No'}
        </p>
      </div>

      {/* Buttons */}
      <div className='mt-8 flex justify-between'>
        <button
          onClick={onBack}
          className='px-6 py-3 bg-sf-neutral-300 rounded-lg'
        >
          Back
        </button>

        <button
          onClick={onNext}
          className='px-6 py-3 bg-action-primary text-white rounded-lg shadow-md'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ZakatAmountStep;
