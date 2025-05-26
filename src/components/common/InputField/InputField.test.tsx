import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

describe('InputField Component', () => {
	const defaultProps = {
		label: 'Test Label',
		id: 'test-input',
		name: 'test-input',
		value: '',
		onChange: vi.fn(),
	};

	it('renders with required props', () => {
		render(<InputField {...defaultProps} />);
		expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
	});

	it('renders with placeholder', () => {
		render(<InputField {...defaultProps} placeholder='Enter text' />);
		expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
	});

	it('renders with error message', () => {
		render(<InputField {...defaultProps} error='This field is required' />);
		expect(screen.getByText('This field is required')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toHaveClass('border-red-500');
	});

	it('handles input changes', async () => {
		render(<InputField {...defaultProps} />);
		const input = screen.getByRole('textbox');
		await userEvent.type(input, 'test value');
		expect(defaultProps.onChange).toHaveBeenCalled();
	});

	it('renders as readonly when specified', () => {
		render(<InputField {...defaultProps} readOnly />);
		const input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('readonly');
		expect(input).toHaveClass('bg-gray-50', 'cursor-not-allowed');
	});

	it('applies custom container className', () => {
		render(
			<InputField {...defaultProps} containerClassName='custom-container' />
		);
		expect(screen.getByText('Test Label').parentElement).toHaveClass(
			'custom-container'
		);
	});

	it('applies custom input className', () => {
		render(<InputField {...defaultProps} inputClassName='custom-input' />);
		expect(screen.getByRole('textbox')).toHaveClass('custom-input');
	});

	it('renders with different input types', () => {
		const { rerender } = render(<InputField {...defaultProps} type='email' />);
		expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');

		rerender(<InputField {...defaultProps} type='password' />);
		expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
	});

	it('forwards additional props to input element', () => {
		render(<InputField {...defaultProps} data-testid='test-input' />);
		expect(screen.getByTestId('test-input')).toBeInTheDocument();
	});
});
