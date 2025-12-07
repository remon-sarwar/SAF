import { StepProps } from '@/types/ZakatForm';

const ZakatTypeStep: React.FC<StepProps> = ({ form, setForm, onNext }) => {
  const options = [
    {
      value: 'one-time',
      label: 'One-Time',
      desc: 'A single Zakat contribution.'
    },
    {
      value: 'monthly',
      label: 'Monthly',
      desc: 'Recurring monthly Zakat giving.'
    },
    { value: 'yearly', label: 'Yearly', desc: 'Annual Zakat payment cycle.' }
  ];

  return (
    <div className='bg-brand-soft p-8 rounded-xl border border-sf-neutral-200 shadow-sm'>
      <h2 className='text-xl font-semibold text-brand-secondary mb-6'>
        Choose Zakat Donation Type
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {options.map(o => (
          <button
            key={o.value}
            // @ts-ignore
            onClick={() => setForm({ ...form, donationType: o.value })}
            className={`
              p-6 border rounded-lg text-left transition
              ${
                form.donationType === o.value
                  ? 'border-brand-secondary bg-brand-soft'
                  : 'border-sf-neutral-300'
              }
            `}
          >
            <h3 className='font-bold text-brand-secondary'>{o.label}</h3>
            <p className='text-sm text-sf-neutral-600 mt-1'>{o.desc}</p>
          </button>
        ))}
      </div>

      <div className='mt-8 text-right'>
        <button
          onClick={onNext}
          className='px-6 py-3 bg-action-primary text-white rounded-lg shadow-md'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ZakatTypeStep;
