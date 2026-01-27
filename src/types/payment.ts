export type PaymentType = 'depunere' | 'retragere' | 'ambele';

export interface PaymentMethod {
  slug: string;
  name: string;
  icon: string;
  type: PaymentType;
  depositProcessingTime: string;
  withdrawalProcessingTime: string;
  minDeposit: number;
  maxDeposit: number;
  minWithdrawal: number;
  maxWithdrawal: number;
  fees: string;
  currencies: string[];
  description: string;
}
