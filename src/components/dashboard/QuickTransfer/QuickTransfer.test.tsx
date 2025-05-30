import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuickTransfer from './QuickTransfer';
import type { QuickTransferContact } from '../../../types/data';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../../../tests/renderWithProviders';

const mockContacts: QuickTransferContact[] = [
	{
		id: 'c1',
		name: 'Livia Bator',
		role: 'CEO',
		avatar: '/assets/images/avatar-livia-bator.png',
	},
	{
		id: 'c2',
		name: 'Randy Press',
		role: 'Director',
		avatar: '/assets/images/avatar-randy-press.png',
	},
];

describe('QuickTransfer', () => {
	// Suppress alert for tests
	const originalAlert = window.alert;
	beforeAll(() => {
		window.alert = vi.fn();
	});
	afterAll(() => {
		window.alert = originalAlert;
	});

	it('renders the header and contacts', () => {
		renderWithProviders(<QuickTransfer contacts={mockContacts} />);
		expect(screen.getByText('Quick Transfer')).toBeInTheDocument();
		expect(screen.getByText('Livia Bator')).toBeInTheDocument();
		expect(screen.getByText('Randy Press')).toBeInTheDocument();
		expect(screen.getByLabelText('Amount')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
	});

	it('displays "No quick transfer contacts available" when contacts array is empty', () => {
		renderWithProviders(<QuickTransfer contacts={[]} />);
		expect(
			screen.getByText('No quick transfer contacts available.')
		).toBeInTheDocument();
		expect(screen.queryByLabelText('Amount')).not.toBeInTheDocument();
		expect(
			screen.queryByRole('button', { name: 'Send' })
		).not.toBeInTheDocument();
	});

	it('allows selecting a contact', async () => {
		const user = userEvent.setup();
		renderWithProviders(<QuickTransfer contacts={mockContacts} />);

		const liviaBator = screen.getByText('Livia Bator');
		await user.click(liviaBator);

		expect(liviaBator.closest('div')).toHaveClass('bg-indigo-100');

		const randyPress = screen.getByText('Randy Press');
		expect(randyPress.closest('div')).not.toHaveClass('bg-indigo-100');

		await user.click(randyPress);
		expect(randyPress.closest('div')).toHaveClass('bg-indigo-100');
		expect(liviaBator.closest('div')).not.toHaveClass('bg-indigo-100');
	});

	it('allows entering an amount', async () => {
		const user = userEvent.setup();
		renderWithProviders(<QuickTransfer contacts={mockContacts} />);

		const amountInput = screen.getByLabelText('Amount');
		await user.type(amountInput, '123.45');
		expect(amountInput).toHaveValue('123.45');
	});

	it('shows an alert when "Send" is clicked with a valid contact and amount (UI Only)', async () => {
		const user = userEvent.setup();
		renderWithProviders(<QuickTransfer contacts={mockContacts} />);

		await user.click(screen.getByText('Randy Press'));
		await user.type(screen.getByLabelText('Amount'), '500');
		await user.click(screen.getByRole('button', { name: 'Send' }));

		await waitFor(() => {
			expect(window.alert).toHaveBeenCalledTimes(1);
			expect(window.alert).toHaveBeenCalledWith(
				'Transferred $500 to Randy Press! (UI Only)'
			);
		});

		expect(screen.getByLabelText('Amount')).toHaveValue('');
	});

	it('does not allow non-numeric input in amount field except for a single decimal', async () => {
		const user = userEvent.setup();
		renderWithProviders(<QuickTransfer contacts={mockContacts} />);

		const amountInput = screen.getByLabelText('Amount');
		await user.type(amountInput, 'abc12.3.4xyz');
		expect(amountInput).toHaveValue('12.34');
	});
});
