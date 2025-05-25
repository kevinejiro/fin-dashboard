import { describe, it, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import InputField from './InputField';

describe('InputField', () => {
	// Test 1: Renders with label, placeholder, and initial value
	it('renders with correct label, placeholder, and initial value', () => {
		render(
			<InputField
				label='Full Name'
				id='fullName'
				name='fullName'
				value='John Doe'
				placeholder='Enter your full name'
				onChange={() => {}}
			/>
		);

		expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
		expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText('Enter your full name')
		).toBeInTheDocument();
	});

	// Test 2: Handles onChange event correctly
	it('calls onChange handler when input value changes', () => {
		const handleChange = vi.fn(); // Use vi.fn() for mocking functions in Vitest
		render(
			<InputField
				label='Email'
				id='email'
				name='email'
				value=''
				onChange={handleChange}
			/>
		);

		const inputElement = screen.getByLabelText('Email');
		fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(
			expect.objectContaining({
				target: expect.objectContaining({
					value: 'test@example.com',
				}),
			})
		);
	});

	// Test 3: Displays error message when provided
	it('displays an error message when the error prop is provided', () => {
		const errorMessage = 'Email is required';
		render(
			<InputField
				label='Email'
				id='email'
				name='email'
				value=''
				onChange={() => {}}
				error={errorMessage}
			/>
		);

		expect(screen.getByText(errorMessage)).toBeInTheDocument();
		expect(screen.getByLabelText('Email')).toHaveClass('border-red-500');
	});

	// Test 4: Does not display error message when not provided
	it('does not display an error message when the error prop is not provided', () => {
		render(
			<InputField
				label='Password'
				id='password'
				name='password'
				value=''
				onChange={() => {}}
			/>
		);

		expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
		expect(screen.getByLabelText('Password')).not.toHaveClass('border-red-500');
	});

	// Test 5: Renders as read-only when specified
	it('renders the input as read-only when readOnly prop is true', () => {
		render(
			<InputField
				label='Username'
				id='username'
				name='username'
				value='readonlyuser'
				onChange={() => {}}
				readOnly={true}
			/>
		);

		const inputElement = screen.getByLabelText('Username');
		expect(inputElement).toHaveAttribute('readOnly');
		expect(inputElement).toBeDisabled(); // readOnly implies disabled for practical user interaction
		expect(inputElement).toHaveClass('bg-gray-50');
	});

	// Test 6: Renders with different input types
	it('renders with specified input type (e.g., password)', () => {
		render(
			<InputField
				label='Password'
				id='password'
				name='password'
				type='password'
				value='securepass'
				onChange={() => {}}
			/>
		);

		const inputElement = screen.getByLabelText('Password');
		expect(inputElement).toHaveAttribute('type', 'password');
	});

	// Test 7: Applies custom class names
	it('applies custom container and input class names', () => {
		render(
			<InputField
				label='Test Field'
				id='testField'
				name='testField'
				value=''
				onChange={() => {}}
				containerClassName='my-custom-container'
				inputClassName='my-custom-input'
			/>
		);

		const container = screen.getByLabelText('Test Field').closest('div');
		expect(container).toHaveClass('my-custom-container');

		const input = screen.getByLabelText('Test Field');
		expect(input).toHaveClass('my-custom-input');
	});
});
