import { screen } from '@testing-library/react';
import RecentTransactions from './RecentTransactions';
import type { Transaction } from '../../../types/data';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '../../../../tests/renderWithProviders';

const mockTransactions: Transaction[] = [
	{
		id: 't1',
		description: 'Grocery Shopping',
		date: '2024-03-15',
		amount: -85.5,
		icon: 'card',
		type: 'withdrawal',
	},
	{
		id: 't2',
		description: 'Salary Deposit',
		date: '2024-03-14',
		amount: 2500.0,
		icon: 'cash',
		type: 'deposit',
	},
];

describe('RecentTransactions', () => {
	it('renders the title', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		expect(screen.getByText('Recent Transactions')).toBeInTheDocument();
	});

	it('renders the transaction list', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		expect(screen.getByText('Grocery Shopping')).toBeInTheDocument();
		expect(screen.getByText('Salary Deposit')).toBeInTheDocument();
	});

	it('displays "No recent transactions" when transactions array is empty', () => {
		renderWithProviders(<RecentTransactions transactions={[]} />);
		expect(screen.getByText('No recent transactions.')).toBeInTheDocument();
	});

	it('formats amounts correctly', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		expect(screen.getByText('-$85.50')).toBeInTheDocument();
		expect(screen.getByText('$2,500.00')).toBeInTheDocument();
	});

	it('displays transaction dates', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		expect(screen.getByText('2024-03-15')).toBeInTheDocument();
		expect(screen.getByText('2024-03-14')).toBeInTheDocument();
	});

	it('renders transaction icons', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		const iconContainers = screen
			.getAllByRole('generic')
			.filter((element) =>
				element.className.includes('w-10 h-10 rounded-full')
			);
		expect(iconContainers).toHaveLength(2);
	});

	it('applies correct color classes for amounts', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		const amounts = screen.getAllByText(/\$[\d,]+\.\d{2}/);
		expect(amounts[0]).toHaveClass('text-red-500');
		expect(amounts[1]).toHaveClass('text-green-500');
	});

	it('applies correct container styles', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		const container = screen.getByRole('list');
		expect(container).toHaveClass('space-y-4');
	});

	it('renders a scrollable list', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		const container = screen.getByRole('list').parentElement;
		expect(container).toHaveClass('overflow-y-auto');
	});

	it('applies hover styles to transaction items', () => {
		renderWithProviders(<RecentTransactions transactions={mockTransactions} />);
		const items = screen.getAllByRole('listitem');
		items.forEach((item) => {
			expect(item).toHaveClass('hover:bg-gray-50');
		});
	});
});
