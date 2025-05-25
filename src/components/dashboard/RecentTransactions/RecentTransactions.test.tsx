import { render, screen } from '@testing-library/react';
import RecentTransactions from './RecentTransactions';
// import type { Transaction } from '../../../types/data';
import { describe, it, expect } from 'vitest';

// const mockTransactions: Transaction[] = [
//   { id: 't1', description: 'Deposit from my Card', date: '28 January 2021', amount: -850, type: 'withdrawal', icon: 'card' },
//   { id: 't2', description: 'Deposit Paypal', date: '25 January 2021', amount: 2500, type: 'deposit', icon: 'paypal' },
//   { id: 't3', description: 'Jemi Wilson', date: '21 January 2021', amount: 5400, type: 'transfer', icon: 'cash' },
// ];

describe('RecentTransactions', () => {
  it('renders the header', () => {
    render(<RecentTransactions transactions={[]} />);
    expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
  });
});