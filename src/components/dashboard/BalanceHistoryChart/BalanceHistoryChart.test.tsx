import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BalanceHistoryChart from './BalanceHistoryChart';
// import type { BalanceHistoryPoint } from '../../../types/data';
import { registerCharts } from '../../../../config/chartConfig';

// Mock react-chartjs-2
vi.mock('react-chartjs-2', () => ({
	Line: () => <div data-testid='mock-line-chart' />,
}));

// Mock chart config
vi.mock('../../../../config/chartConfig', () => ({
	commonChartOptions: {
		plugins: {
			legend: {
				display: true,
			},
		},
	},
	registerCharts: vi.fn(),
}));

registerCharts();

describe('BalanceHistoryChart Component', () => {
	const mockData = [
		{ month: 'Jan', balance: 1000 },
		{ month: 'Feb', balance: 1500 },
		{ month: 'Mar', balance: 2000 },
	];

	it('renders with title', () => {
		render(<BalanceHistoryChart data={mockData} />);
		expect(screen.getByText('Balance History')).toBeInTheDocument();
	});

	it('renders chart when data is provided', () => {
		render(<BalanceHistoryChart data={mockData} />);
		expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument();
	});

	it('renders no data message when data is empty', () => {
		render(<BalanceHistoryChart data={[]} />);
		expect(
			screen.getByText('No balance history data available.')
		).toBeInTheDocument();
	});

	it('has flex container for chart', () => {
		render(<BalanceHistoryChart data={mockData} />);
		const chartContainer = screen.getByTestId('mock-line-chart').parentElement;
		expect(chartContainer).toHaveClass('flex-1');
	});
});
