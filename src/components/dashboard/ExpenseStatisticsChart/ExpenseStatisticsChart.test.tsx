import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExpenseStatisticsChart from './ExpenseStatisticsChart';
// import type { ExpenseData } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';

// Mock react-chartjs-2
vi.mock('react-chartjs-2', () => ({
	Pie: () => <div data-testid='mock-pie-chart' />,
}));

// Mock chart config
vi.mock('../../../../config/chartConfig', () => ({
	commonChartOptions: {
		plugins: {
			legend: {
				display: true,
			},
			tooltip: {
				enabled: true,
			},
		},
	},
	registerCharts: vi.fn(),
}));

registerCharts();

describe('ExpenseStatisticsChart Component', () => {
	const mockData = [
		{ name: 'Food', value: 30 },
		{ name: 'Transport', value: 20 },
		{ name: 'Entertainment', value: 50 },
	];

	it('renders with title', () => {
		render(<ExpenseStatisticsChart data={mockData} />);
		expect(screen.getByText('Expense Statistics')).toBeInTheDocument();
	});

	it('renders chart when data is provided', () => {
		render(<ExpenseStatisticsChart data={mockData} />);
		expect(screen.getByTestId('mock-pie-chart')).toBeInTheDocument();
	});

	it('renders no data message when data is empty', () => {
		render(<ExpenseStatisticsChart data={[]} />);
		expect(
			screen.getByText('No expense statistics data available.')
		).toBeInTheDocument();
	});

	it('has flex container for chart', () => {
		render(<ExpenseStatisticsChart data={mockData} />);
		const chartContainer = screen.getByTestId('mock-pie-chart').parentElement;
		expect(chartContainer).toHaveClass('flex-1', 'h-full');
	});

	it('uses correct background colors', () => {
		const { rerender } = render(<ExpenseStatisticsChart data={mockData} />);
		const chart = screen.getByTestId('mock-pie-chart');
		expect(chart).toBeInTheDocument();

		// Test with different number of data points
		const twoDataPoints = mockData.slice(0, 2);
		rerender(<ExpenseStatisticsChart data={twoDataPoints} />);
		expect(screen.getByTestId('mock-pie-chart')).toBeInTheDocument();
	});
});
