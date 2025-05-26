import React from 'react';
import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import type { Store, Reducer, UnknownAction } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import userReducer from '../src/redux/features/userSlice.ts';
import cardsReducer from '../src/redux/features/cardsSlice.ts';
import transactionsReducer from '../src/redux/features/transactionsSlice.ts';
import dashboardDataReducer from '../src/redux/features/dashboardDataSlice.ts';

type RootState = {
	user: ReturnType<typeof userReducer>;
	cards: ReturnType<typeof cardsReducer>;
	transactions: ReturnType<typeof transactionsReducer>;
	dashboardData: ReturnType<typeof dashboardDataReducer>;
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: Partial<RootState>;
	store?: Store<RootState>;
	route?: string;
}

export function renderWithProviders(
	ui: ReactElement,
	{
		preloadedState = {},
		// A custom store can be passed in just for this test
		store = configureStore({
			reducer: {
				user: userReducer as Reducer<
					RootState['user'],
					UnknownAction,
					RootState['user'] | undefined
				>,
				cards: cardsReducer as Reducer<
					RootState['cards'],
					UnknownAction,
					RootState['cards'] | undefined
				>,
				transactions: transactionsReducer as Reducer<
					RootState['transactions'],
					UnknownAction,
					RootState['transactions'] | undefined
				>,
				dashboardData: dashboardDataReducer as Reducer<
					RootState['dashboardData'],
					UnknownAction,
					RootState['dashboardData'] | undefined
				>,
			},
			preloadedState,
		}),
		route = '/',
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({
		children,
	}: {
		children: React.ReactNode;
	}): React.JSX.Element {
		return (
			<Provider store={store}>
				<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
			</Provider>
		);
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
