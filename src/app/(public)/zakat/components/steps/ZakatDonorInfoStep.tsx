import { StepProps } from '@/types/ZakatForm';

const ZakatDonorInfoStep: React.FC<StepProps> = ({
  form,
  setForm,
  onNext,
  onBack
}) => {
  return (
    <div className='bg-brand-soft p-8 rounded-xl border border-sf-neutral-200 shadow-sm'>
      <h2 className='text-2xl font-semibold text-brand-secondary mb-6'>
        Your Information
      </h2>

      {/* First + Last Name */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block font-medium text-brand-secondary mb-1'>
            First Name
          </label>
          <input
            type='text'
            value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })}
            className='border p-3 rounded-lg w-full bg-white'
          />
        </div>

        <div>
          <label className='block font-medium text-brand-secondary mb-1'>
            Last Name
          </label>
          <input
            type='text'
            value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })}
            className='border p-3 rounded-lg w-full bg-white'
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <div>
          <label className='block font-medium text-brand-secondary mb-1'>
            Email
          </label>
          <input
            type='email'
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className='border p-3 rounded-lg w-full bg-white'
          />
        </div>

        <div>
          <label className='block font-medium text-brand-secondary mb-1'>
            Phone (optional)
          </label>
          <input
            type='text'
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className='border p-3 rounded-lg w-full bg-white'
          />
        </div>
      </div>

      {/* Message */}
      <div className='mt-6'>
        <label className='block font-medium text-brand-secondary mb-1'>
          Message (optional)
        </label>
        <textarea
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          className='border p-3 rounded-lg w-full h-32 resize-none bg-white'
        />
      </div>

      {/* Buttons */}
      <div className='mt-10 flex justify-between'>
        <button
          onClick={onBack}
          className='px-6 py-3 bg-accent-peach text-brand-secondary rounded-lg font-semibold'
        >
          Back
        </button>

        <button
          onClick={onNext}
          className='px-6 py-3 bg-action-primary text-white rounded-lg shadow-md font-semibold'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ZakatDonorInfoStep;
