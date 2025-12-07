import type { DonationFormState } from '@/types/DonationForm';

export interface PaymentStepProps {
  form: DonationFormState;
  setForm: React.Dispatch<React.SetStateAction<DonationFormState>>;
  onBack: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ form, setForm, onBack }) => {
  const update = (key: keyof DonationFormState, value: any) =>
    setForm(prev => ({ ...prev, [key]: value }));
  return (
    <div className='bg-brand-soft border border-brand-soft rounded-xl p-8 shadow-sm'>
      <h2 className='text-2xl font-semibold text-brand-secondary mb-6'>
        Payment Method
      </h2>

      <div className='flex items-center gap-6 flex-wrap'>
        {['stripe', 'paypal', 'zelle'].map(method => (
          <label
            key={method}
            className='flex items-center gap-2 cursor-pointer'
          >
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                form.paymentMethod === method
                  ? 'bg-brand-accent border-brand-secondary'
                  : 'border-brand-tint'
              }`}
              onClick={() => update('paymentMethod', method)}
            />
            <span className='text-foreground capitalize'>{method}</span>
          </label>
        ))}
      </div>

      <div className='mt-10 flex justify-between'>
        <button
          onClick={onBack}
          className='px-6 py-3 rounded-md bg-accent-peach'
        >
          Back
        </button>

        <button className='bg-action-primary text-white px-10 py-3 rounded-md shadow'>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;
