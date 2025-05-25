import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DashboardPage from './pages/DashboardPage';
import React, { Suspense } from 'react';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
					<Routes>
						<Route path='/' element={<DashboardPage />} />
						<Route
							path='/settings'
							element={
								<Suspense
									fallback={<div className='text-center py-10'>Loading...</div>}
								></Suspense>
							}
						/>
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
