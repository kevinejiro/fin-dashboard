import { render, screen, fireEvent } from '@testing-library/react';
import MyCards from './MyCards';
import type { CardProps } from '../../../types/data';
import { describe, it, expect, vi } from 'vitest';

const mockCards: CardProps[] = [
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

describe('MyCards', () => {
	it('renders the header and "See All" button', () => {
		render(<MyCards cards={[]} />);
		expect(screen.getByText('My Cards')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'See All' })).toBeInTheDocument();
	});

	it('renders card details correctly', () => {
		render(<MyCards cards={mockCards} />);

		// Check for the first card
		expect(screen.getByText('Eddy Cosuma')).toBeInTheDocument();
		expect(screen.getByText('$5,756')).toBeInTheDocument();
		expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument();
		expect(screen.getByText('Valid Thru: 12/22')).toBeInTheDocument();

		// Check for the second card
		expect(screen.getByText('Jane Doe')).toBeInTheDocument();
		expect(screen.getByText('$3,200')).toBeInTheDocument();
		expect(screen.getByText('**** **** **** 5678')).toBeInTheDocument();
		expect(screen.getByText('Valid Thru: 08/24')).toBeInTheDocument();
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
