import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DashboardPage from './pages/DashboardPage';
import React, { Suspense } from 'react';
import Loader from './components/common/Loader/Loader';

const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));

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
									fallback={
										<div className='h-screen w-full'>
											<Loader size='lg' color='text-blue-500' />
										</div>
									}
								>
									<SettingsPage />
								</Suspense>
							}
						/>
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
