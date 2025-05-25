import { render, screen } from '@testing-library/react';
import ExpenseStatisticsChart from './ExpenseStatisticsChart';
import type { ExpenseData } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';
import { describe, it, expect } from 'vitest';

registerCharts();

const mockExpenseData: ExpenseData[] = [
  { name: 'Entertainment', value: 30 },
  { name: 'Bill Expense', value: 15 },
  { name: 'Investment', value: 20 },
  { name: 'Others', value: 35 },
];

describe('ExpenseStatisticsChart', () => {
  it('renders the chart title', () => {
    render(<ExpenseStatisticsChart data={[]} />);
    expect(screen.getByText('Expense Statistics')).toBeInTheDocument();
  });

  it('displays "No expense statistics data available" when data is empty', () => {
    render(<ExpenseStatisticsChart data={[]} />);
    expect(screen.getByText('No expense statistics data available.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders the chart canvas when data is provided', () => {
    render(<ExpenseStatisticsChart data={mockExpenseData} />);
    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
    // You could potentially check for legend items if they have accessible labels
    expect(screen.getByText('Entertainment')).toBeInTheDocument();
    expect(screen.getByText('Bill Expense')).toBeInTheDocument();
  });
});