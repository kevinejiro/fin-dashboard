import { render, screen } from '@testing-library/react';
import WeeklyActivityChart from './WeeklyActivityChart';
// import type { WeeklyActivity } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';
import { describe, it, expect } from 'vitest';

registerCharts();

// const mockWeeklyActivity: WeeklyActivity[] = [
//   { day: 'Mon', deposit: 100, withdraw: 50 },
//   { day: 'Tue', deposit: 150, withdraw: 70 },
//   { day: 'Wed', deposit: 200, withdraw: 90 },
// ];

describe('WeeklyActivityChart', () => {
  it('renders the chart title', () => {
    render(<WeeklyActivityChart data={[]} />);
    expect(screen.getByText('Weekly Activity')).toBeInTheDocument();
  });
});