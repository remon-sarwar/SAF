export interface ZakatFormState {
  donationType: 'one-time' | 'monthly' | 'yearly';
  amount: string;
  currency: string;
  fund: 'Zakat';
  coverCost: boolean;

  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;

  paymentMethod: 'stripe';
}

export interface StepProps {
  form: ZakatFormState;
  setForm: React.Dispatch<React.SetStateAction<ZakatFormState>>;
  onNext?: () => void;
  onBack?: () => void;
}
