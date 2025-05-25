export interface CardProps {
  id: string;
  balance: number;
  cardholder: string;
  validThru: string;
  lastFour: string;
}

export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  icon: 'card' | 'paypal' | 'cash';
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseData {
  name: string;
  value: number; // Percentage
}

export interface QuickTransferContact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BalanceHistoryPoint {
  month: string;
  balance: number;
}

export interface UserProfile {
  name: string;
  username: string;
  email: string;
  password?: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture: string;
}