import { render, screen } from '@testing-library/react';
import BalanceHistoryChart from './BalanceHistoryChart';
import type { BalanceHistoryPoint } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';
import { describe, it, expect } from 'vitest';

registerCharts();

const mockBalanceHistory: BalanceHistoryPoint[] = [
  { month: 'Jul', balance: 500 },
  { month: 'Aug', balance: 700 },
  { month: 'Sep', balance: 600 },
];

describe('BalanceHistoryChart', () => {
  it('renders the chart title', () => {
    render(<BalanceHistoryChart data={[]} />);
    expect(screen.getByText('Balance History')).toBeInTheDocument();
  });

  it('displays "No balance history data available" when data is empty', () => {
    render(<BalanceHistoryChart data={[]} />);
    expect(screen.getByText('No balance history data available.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders the chart canvas when data is provided', () => {
    render(<BalanceHistoryChart data={mockBalanceHistory} />);
    const canvas = screen.getByRole('img');
    expect(canvas).toBeInTheDocument();
    // More specific checks might involve checking aria-label or specific chart attributes
  });
});