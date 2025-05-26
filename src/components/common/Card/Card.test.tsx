import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
	it('renders children content', () => {
		render(
			<Card>
				<div>Card Content</div>
			</Card>
		);
		expect(screen.getByText('Card Content')).toBeInTheDocument();
	});

	it('renders with title when provided', () => {
		render(
			<Card title='Card Title'>
				<div>Card Content</div>
			</Card>
		);
		expect(screen.getByText('Card Title')).toBeInTheDocument();
		expect(screen.getByText('Card Title')).toHaveClass(
			'text-2xl',
			'font-semibold'
		);
	});

	it('does not render title when not provided', () => {
		render(
			<Card>
				<div>Card Content</div>
			</Card>
		);
		expect(screen.queryByRole('heading')).not.toBeInTheDocument();
	});

	it('applies custom className', () => {
		render(
			<Card className='custom-class'>
				<div>Card Content</div>
			</Card>
		);
		const cardContent = screen.getByText('Card Content').parentElement;
		expect(cardContent).toHaveClass('custom-class');
	});

	it('has correct base styles', () => {
		render(
			<Card>
				<div>Card Content</div>
			</Card>
		);
		const cardContent = screen.getByText('Card Content').parentElement;
		expect(cardContent).toHaveClass(
			'bg-white',
			'p-6',
			'rounded-[25px]',
			'shadow-sm'
		);
	});
});
