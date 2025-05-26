import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
	it('renders with default props', () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass('bg-indigo-600');
		expect(button).toHaveClass('px-4 py-2');
	});

	it('renders with different variants', () => {
		const { rerender } = render(<Button variant='secondary'>Secondary</Button>);
		expect(screen.getByRole('button')).toHaveClass('bg-gray-200');

		rerender(<Button variant='outline'>Outline</Button>);
		expect(screen.getByRole('button')).toHaveClass('border-gray-300');

		rerender(<Button variant='danger'>Danger</Button>);
		expect(screen.getByRole('button')).toHaveClass('bg-red-600');
	});

	it('renders with different sizes', () => {
		const { rerender } = render(<Button size='sm'>Small</Button>);
		expect(screen.getByRole('button')).toHaveClass('px-3 py-1.5');

		rerender(<Button size='lg'>Large</Button>);
		expect(screen.getByRole('button')).toHaveClass('px-5 py-2.5');
	});

	it('handles click events', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		await userEvent.click(screen.getByRole('button'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('applies custom className', () => {
		render(<Button className='custom-class'>Custom</Button>);
		expect(screen.getByRole('button')).toHaveClass('custom-class');
	});

	it('forwards additional props', () => {
		render(
			<Button data-testid='test-button' disabled>
				Disabled
			</Button>
		);
		const button = screen.getByTestId('test-button');
		expect(button).toBeDisabled();
	});
});
