'use client';

const SponsorStudentForm = () => {
  return (
    <form className='flex flex-col gap-12'>
      {/* Student Info */}
      <div className='flex flex-col gap-6'>
        <h4 className='text-xl font-semibold text-brand-primary'>
          Student Information
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Student Name */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Student Name
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* DOB */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Date of Birth
            </label>
            <input
              type='date'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Gender */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>Gender</label>
            <input
              type='text'
              placeholder='e.g., Male / Female / Other'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Class */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>Class</label>
            <input
              type='text'
              placeholder='e.g., Class 5'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* School */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              School Name
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* City / Village */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              City / Village
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Student Image Upload */}
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Student Photo
            </label>
            <input
              type='file'
              accept='image/*'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-brand-soft file:text-brand-secondary focus:ring-2 focus:ring-brand-primary'
            />
          </div>
        </div>
      </div>

      {/* Guardian Info */}
      <div className='flex flex-col gap-6'>
        <h4 className='text-xl font-semibold text-brand-primary'>
          Guardian Information
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Guardian Name */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Guardian Name
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Guardian Mobile */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Guardian Mobile
            </label>
            <input
              type='tel'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Address */}
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sf-neutral-700 font-medium'>Address</label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Bank Account */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Bank Account Number
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Bank Name */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>Bank Name</label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* NID */}
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Guardian NID Number
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>
        </div>
      </div>

      {/* Referrer Info */}
      <div className='flex flex-col gap-6'>
        <h4 className='text-xl font-semibold text-brand-primary'>
          Referrer Information
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Referrer Name */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Referrer Name
            </label>
            <input
              type='text'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Referrer Mobile */}
          <div className='flex flex-col gap-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Referrer Mobile
            </label>
            <input
              type='tel'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>

          {/* Referrer Email */}
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label className='text-sf-neutral-700 font-medium'>
              Referrer Email
            </label>
            <input
              type='email'
              className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button className='w-full py-3 text-white bg-action-primary rounded-xl font-semibold shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
        Submit Application
      </button>
    </form>
  );
};

export default SponsorStudentForm;
