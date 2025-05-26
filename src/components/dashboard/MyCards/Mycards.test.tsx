import { render, screen, fireEvent } from '@testing-library/react';
import MyCards from './MyCards';
// import type { CardProps } from '../../../types/data';
import { describe, it, expect, vi } from 'vitest';

// Mock the Icon component
vi.mock('../../common/icons', () => ({
	default: ({ type }: { type: string }) => <div data-testid={`icon-${type}`} />,
}));

describe('MyCards Component', () => {
	const mockCards = [
		{
			id: '1',
			balance: 5756,
			cardholder: 'Eddy Cosuma',
			validThru: '12/22',
			lastFour: '1234',
		},
		{
			id: '2',
			balance: 3200,
			cardholder: 'Jane Doe',
			validThru: '08/24',
			lastFour: '5678',
		},
	];

	it('renders title and see all button', () => {
		render(<MyCards cards={mockCards} />);
		expect(screen.getByText('My Cards')).toBeInTheDocument();
		expect(screen.getByText('See All')).toBeInTheDocument();
	});

	it('renders all cards', () => {
		render(<MyCards cards={mockCards} />);
		expect(screen.getByText('Eddy Cosuma')).toBeInTheDocument();
		expect(screen.getByText('Jane Doe')).toBeInTheDocument();
	});

	it('renders card balances with correct formatting', () => {
		render(<MyCards cards={mockCards} />);
		expect(screen.getByText('$5,756')).toBeInTheDocument();
		expect(screen.getByText('$3,200')).toBeInTheDocument();
	});

	it('renders card details correctly', () => {
		render(<MyCards cards={mockCards} />);
		expect(screen.getByText('Eddy Cosuma')).toBeInTheDocument();
		expect(screen.getByText('Jane Doe')).toBeInTheDocument();
		expect(screen.getByText('12/22')).toBeInTheDocument();
		expect(screen.getByText('08/24')).toBeInTheDocument();
		expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument();
		expect(screen.getByText('**** **** **** 5678')).toBeInTheDocument();
	});

	it('has correct card styles for first card', () => {
		render(<MyCards cards={mockCards} />);
		const firstCard = screen.getByText('Eddy Cosuma').closest('span');
		expect(firstCard).toHaveClass(
			'text-white'
		);
	});

	it('has correct card styles for second card', () => {
		render(<MyCards cards={mockCards} />);
		const secondCard = screen.getByText('Jane Doe').closest('span');
		expect(secondCard).toHaveClass('text-[#2D3A8C]');
	});

	it('renders card labels', () => {
		render(<MyCards cards={mockCards} />);
		expect(screen.getAllByText('Balance')).toHaveLength(2);
		expect(screen.getAllByText('CARD HOLDER')).toHaveLength(2);
		expect(screen.getAllByText('VALID THRU')).toHaveLength(2);
	});

	it('displays "No cards available" message when no cards are provided', () => {
		render(<MyCards cards={[]} />);
		expect(screen.getByText('No cards available.')).toBeInTheDocument();
		expect(screen.queryByText('$')).not.toBeInTheDocument(); // Ensure no card balances are shown
	});

	it('"See All" button is clickable (though actual navigation is out of scope for unit test)', () => {
		const consoleSpy = vi.spyOn(console, 'log'); // Spy on console.log
		render(<MyCards cards={mockCards} />);
		const seeAllButton = screen.getByRole('button', { name: 'See All' });
		fireEvent.click(seeAllButton);
		expect(consoleSpy).toHaveBeenCalledWith('See All Cards clicked');
		consoleSpy.mockRestore(); // Clean up the spy
	});
});
