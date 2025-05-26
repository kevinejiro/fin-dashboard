import { screen } from '@testing-library/react';
import WeeklyActivityChart from './WeeklyActivityChart';
import type { WeeklyActivity } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderWithProviders } from '../../../../tests/renderWithProviders';

// Mock react-chartjs-2
const mockBar = vi.fn();
vi.mock('react-chartjs-2', () => ({
	Bar: () => {
		mockBar();
		return <div data-testid='mock-bar-chart' />;
	},
}));

registerCharts();

const mockWeeklyActivity: WeeklyActivity[] = [
	{ day: 'Mon', deposit: 100, withdraw: 50 },
	{ day: 'Tue', deposit: 150, withdraw: 70 },
	{ day: 'Wed', deposit: 200, withdraw: 90 },
];

describe('WeeklyActivityChart', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders the chart title', () => {
		renderWithProviders(<WeeklyActivityChart data={[]} />);
		expect(screen.getByText('Weekly Activity')).toBeInTheDocument();
	});

	it('displays empty state message when no data is provided', () => {
		renderWithProviders(<WeeklyActivityChart data={[]} />);
		expect(
			screen.getByText('No weekly activity data available.')
		).toBeInTheDocument();
	});

	it('renders the chart when data is provided', () => {
		renderWithProviders(<WeeklyActivityChart data={mockWeeklyActivity} />);
		expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
	});

	it('has correct container styles', () => {
		renderWithProviders(<WeeklyActivityChart data={mockWeeklyActivity} />);
		const container = screen.getByTestId('mock-bar-chart').parentElement;
		expect(container).toHaveClass('flex-1');
	});

	it('renders chart with data', () => {
		renderWithProviders(<WeeklyActivityChart data={mockWeeklyActivity} />);
		expect(mockBar).toHaveBeenCalled();
	});
});
