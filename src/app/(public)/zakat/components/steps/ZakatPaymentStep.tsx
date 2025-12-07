import { StepProps } from '@/types/ZakatForm';

const ZakatPaymentStep: React.FC<StepProps> = ({ onBack }) => {
  return (
    <div className='bg-brand-soft p-8 rounded-xl border border-sf-neutral-200 shadow-sm'>
      <h2 className='text-xl font-semibold text-brand-secondary mb-6'>
        Payment
      </h2>

      <p className='text-sf-neutral-700 text-sm mb-4'>
        Payment integration will go here.
      </p>

      <div className='flex justify-between mt-8'>
        <button
          onClick={onBack}
          className='px-6 py-3 bg-sf-neutral-300 rounded-lg'
        >
          Back
        </button>

        <button className='px-6 py-3 bg-action-primary text-white rounded-lg shadow-md'>
          Complete Donation
        </button>
      </div>
    </div>
  );
};

export default ZakatPaymentStep;
