import React from 'react';
import DonationWizard from './components/DonationForm';

const page = () => {
  return (
    <div className='py-20'>
      {/* Page Title + Subtitle */}
      <div className='w-11/12 lg:w-10/12 mx-auto mb-12 text-center'>
        <h1 className='text-5xl font-bold text-brand-secondary mb-4'>
          Make a Donation
        </h1>

        <p className='text-xl text-foreground max-w-2xl mx-auto'>
          Your contribution helps provide essential support to communities in
          need. Every donation, no matter the amount, makes a real difference.
        </p>
      </div>

      <DonationWizard />
    </div>
  );
};

export default page;
