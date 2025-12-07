'use client';

export default function VolunteerForm() {
  return (
    <div
      id='volunteer-form'
      className='flex flex-col gap-8 p-8 bg-white shadow-sm rounded-2xl'
    >
      {/* Title */}
      <div className='text-center mb-4'>
        <h2 className='text-3xl font-bold text-brand-primary'>
          Become a Volunteer
        </h2>
        <p className='text-sf-neutral-700 mt-2 max-w-md mx-auto'>
          Fill out the form below to join our mission and start making a real
          impact in your community.
        </p>
      </div>

      {/* Form Body */}
      <form className='flex flex-col gap-8'>
        {/* Name */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>Full Name</label>
          <input
            type='text'
            className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
          />
        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>Email</label>
          <input
            type='email'
            className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
          />
        </div>

        {/* Phone */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>
            Phone Number
          </label>
          <input
            type='tel'
            className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
          />
        </div>

        {/* City */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>City / Area</label>
          <input
            type='text'
            className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
          />
        </div>

        {/* Roles */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>
            How can you help?
          </label>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sf-neutral-700'>
            <label>
              <input type='checkbox' className='mr-2' /> Field Volunteering
            </label>
            <label>
              <input type='checkbox' className='mr-2' /> Teaching / Tutoring
            </label>
            <label>
              <input type='checkbox' className='mr-2' /> Media & Photography
            </label>
            <label>
              <input type='checkbox' className='mr-2' /> Event Support
            </label>
            <label>
              <input type='checkbox' className='mr-2' /> Logistics / Operations
            </label>
            <label>
              <input type='checkbox' className='mr-2' /> Anywhere Needed
            </label>
          </div>
        </div>

        {/* Availability */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>
            Availability
          </label>
          <select className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Anytime</option>
          </select>
        </div>

        {/* Why Volunteer */}
        <div className='flex flex-col gap-2'>
          <label className='text-sf-neutral-700 font-medium'>
            Why do you want to volunteer?
          </label>
          <textarea
            rows={4}
            className='px-4 py-3 rounded-xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-brand-primary'
          ></textarea>
        </div>

        <button className='w-full py-3 bg-action-primary text-white rounded-xl font-semibold shadow-[0_3px_0_var(--color-action-primary-shadow)] active:translate-y-0.5 active:shadow-none'>
          Submit
        </button>
      </form>
    </div>
  );
}
