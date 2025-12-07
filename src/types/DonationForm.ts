export interface DonationFormState {
  donationType: 'one-time' | 'recurring';
  amount: string;
  currency: string;
  fund: string;
  coverCost: boolean;

  donationArea:
    | 'General'
    | 'Social services'
    | 'Education'
    | 'Vocational training'
    | 'Self reliance program'
    | 'Small agro farm';

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;

  paymentMethod: 'stripe' | 'paypal' | 'zelle';
}
