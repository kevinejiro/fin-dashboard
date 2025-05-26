import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
	it('renders with default props', () => {
		render(<Loader />);
		const loader = screen.getByRole('status');
		expect(loader).toBeInTheDocument();
		expect(loader).toHaveClass('w-8 h-8'); // md size
		expect(loader).toHaveClass('text-blue-500'); // default color
	});

	it('renders with different sizes', () => {
		const { rerender } = render(<Loader size='sm' />);
		expect(screen.getByRole('status')).toHaveClass('w-4 h-4');

		rerender(<Loader size='lg' />);
		expect(screen.getByRole('status')).toHaveClass('w-12 h-12');
	});

	it('renders with custom color', () => {
		render(<Loader color='text-red-500' />);
		expect(screen.getByRole('status')).toHaveClass('text-red-500');
	});

	it('applies custom className', () => {
		render(<Loader className='custom-class' />);
		const container = screen.getByRole('status').parentElement;
		expect(container).toHaveClass('custom-class');
	});

	it('has correct animation classes', () => {
		render(<Loader />);
		const loader = screen.getByRole('status');
		expect(loader).toHaveClass('animate-spin');
		expect(loader).toHaveClass(
			'motion-reduce:animate-[spin_1.5s_linear_infinite]'
		);
	});

	it('has correct border classes', () => {
		render(<Loader />);
		const loader = screen.getByRole('status');
		expect(loader).toHaveClass(
			'border-4',
			'border-solid',
			'border-current',
			'border-r-transparent'
		);
	});

	it('has accessible loading text', () => {
		render(<Loader />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});
});
