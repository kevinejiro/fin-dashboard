import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/renderWithProviders';
import Navbar from './Navbar';

// Mock the Icon component
vi.mock('../icons', () => ({
	default: ({ type }: { type: string }) => <div data-testid={`icon-${type}`} />,
}));

describe('Navbar Component', () => {
	it('renders with default title on dashboard', () => {
		renderWithProviders(<Navbar />, { route: '/' });
		expect(screen.getByText('Overview')).toBeInTheDocument();
	});

	it('renders with settings title on settings page', () => {
		renderWithProviders(<Navbar />, { route: '/settings' });
		expect(screen.getByText('Setting')).toBeInTheDocument();
	});

	it('renders search input', () => {
		renderWithProviders(<Navbar />);
		expect(
			screen.getByPlaceholderText('Search for something')
		).toBeInTheDocument();
	});

	it('renders user avatar with default image when no profile picture', () => {
		renderWithProviders(<Navbar />);
		const avatars = screen.getAllByAltText('User avatar');
		expect(avatars).toHaveLength(2); // One for mobile, one for desktop
		avatars.forEach((avatar) => {
			expect(avatar).toHaveAttribute(
				'src',
				'https://randomuser.me/api/portraits/women/44.jpg'
			);
		});
	});

	it('renders user avatar with profile picture when available', () => {
		const profilePicture = 'https://example.com/avatar.jpg';
		renderWithProviders(<Navbar />, {
			preloadedState: {
				user: {
					profile: {
						name: 'Test User',
						username: 'testuser',
						email: 'test@example.com',
						dateOfBirth: '1990-01-01',
						presentAddress: '123 Test St',
						permanentAddress: '123 Test St',
						city: 'Test City',
						postalCode: '12345',
						country: 'Test Country',
						profilePicture,
					},
					loading: false,
					error: null,
				},
			},
		});
		const avatars = screen.getAllByAltText('User avatar');
		avatars.forEach((avatar) => {
			expect(avatar).toHaveAttribute('src', profilePicture);
		});
	});

	it('renders hamburger menu on mobile', () => {
		renderWithProviders(<Navbar />);
		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
	});

	it('renders notification icons on desktop', () => {
		renderWithProviders(<Navbar />);
		expect(screen.getByTestId('icon-notificationSetting')).toBeInTheDocument();
		expect(screen.getByTestId('icon-notification')).toBeInTheDocument();
	});

	it('renders search icon', () => {
		renderWithProviders(<Navbar />);
		expect(screen.getByTestId('icon-searchIcon')).toBeInTheDocument();
	});

	it('has correct responsive classes', () => {
		renderWithProviders(<Navbar />);
		const header = screen.getByRole('banner');
		expect(header).toHaveClass('flex-col md:flex-row');
	});
});
