import { describe, it, expect, vi } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../../tests/renderWithProviders';
import Sidebar from './Sidebar';

// Mock the Icon component
vi.mock('../icons', () => ({
	default: ({ type }: { type: string }) => <div data-testid={`icon-${type}`} />,
}));

describe('Sidebar Component', () => {
	it('renders logo and brand name', () => {
		renderWithProviders(<Sidebar />);
		expect(screen.getByText('Soar Task')).toBeInTheDocument();
		expect(screen.getByTestId('icon-soarIcon')).toBeInTheDocument();
	});

	it('renders navigation items', () => {
		renderWithProviders(<Sidebar />);
		expect(screen.getByText('Dashboard')).toBeInTheDocument();
		expect(screen.getByText('Settings')).toBeInTheDocument();
	});

	it('renders correct icons for navigation items', () => {
		renderWithProviders(<Sidebar />);
		expect(screen.getByTestId('icon-home')).toBeInTheDocument();
		expect(screen.getByTestId('icon-settings')).toBeInTheDocument();
	});

	it('applies active styles to current route', () => {
		renderWithProviders(<Sidebar />, { route: '/' });
		const dashboardLink = screen.getByText('Dashboard').closest('a');
		expect(dashboardLink).toHaveClass('bg-indigo-50', 'text-[#232323]');

		cleanup();

		renderWithProviders(<Sidebar />, { route: '/settings' });
		const settingsLink = screen.getByText('Settings').closest('a');
		expect(settingsLink).toHaveClass('bg-indigo-50', 'text-[#232323]');
	});

	it('has correct base styles', () => {
		renderWithProviders(<Sidebar />);
		const sidebar = screen.getByRole('complementary');
		expect(sidebar).toHaveClass(
			'hidden',
			'md:flex',
			'flex-col',
			'h-screen',
			'w-64',
			'bg-white',
			'border-r',
			'border-gray-200'
		);
	});

	it('has correct hover styles for nav items', () => {
		renderWithProviders(<Sidebar />);
		const navItems = screen.getAllByRole('link');
		navItems.forEach((item) => {
			expect(item).toHaveClass('hover:bg-indigo-50', 'cursor-pointer');
		});
	});

	it('has correct spacing between nav items', () => {
		renderWithProviders(<Sidebar />);
		const nav = screen.getByRole('navigation');
		expect(nav).toHaveClass('space-y-2');
	});

	it('has correct padding and margin for logo section', () => {
		renderWithProviders(<Sidebar />);
		const logoSection = screen.getByText('Soar Task').parentElement;
		expect(logoSection).toHaveClass('mb-10', 'px-2');
	});
});
