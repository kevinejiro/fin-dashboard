import React, { useEffect } from 'react';
import MyCards from '../components/dashboard/MyCards/MyCards.tsx';
import RecentTransactions from '../components/dashboard/RecentTransactions/RecentTransactions.tsx';
import WeeklyActivityChart from '../components/dashboard/WeeklyActivityChart/WeeklyActivityChart.tsx';
import ExpenseStatisticsChart from '../components/dashboard/ExpenseStatisticsChart/ExpenseStatisticsChart.tsx';
import QuickTransfer from '../components/dashboard/QuickTransfer/QuickTransfer.tsx';
import BalanceHistoryChart from '../components/dashboard/BalanceHistoryChart/BalanceHistoryChart.tsx';

// Import Redux hooks and actions
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchCards } from '../redux/features/cardsSlice';
import { fetchTransactions } from '../redux/features/transactionsSlice';
import { fetchDashboardData } from '../redux/features/dashboardDataSlice';
import Loader from '../components/common/Loader/Loader.tsx';

const DashboardPage: React.FC = () => {
	const dispatch = useAppDispatch();

	// Select data and loading/error states from respective slices
	const {
		cards,
		loading: cardsLoading,
		error: cardsError,
	} = useAppSelector((state) => state.cards);
	const {
		transactions,
		loading: transactionsLoading,
		error: transactionsError,
	} = useAppSelector((state) => state.transactions);
	const {
		weeklyActivity,
		expenseStatistics,
		quickTransferContacts,
		balanceHistory,
		loading: dashboardDataLoading,
		error: dashboardDataError,
	} = useAppSelector((state) => state.dashboardData);

	useEffect(() => {
		// Dispatch all necessary thunks to fetch data
		dispatch(fetchCards());
		dispatch(fetchTransactions());
		dispatch(fetchDashboardData());
	}, [dispatch]);

	const overallError = cardsError || transactionsError || dashboardDataError;

	if (overallError)
		return (
			<div className='text-center py-10 text-red-500'>
				Error: {overallError}
			</div>
		);

	return (
		<div className='space-y-6'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2'>
					{cardsLoading ? (
						<div className='h-[300px]'>
							<Loader size='md' color='text-blue-500' />
						</div>
					) : (
						<MyCards cards={cards} />
					)}
				</div>
				{transactionsLoading ? (
					<div className='h-[300px]'>
						<Loader size='md' color='text-blue-500' />
					</div>
				) : (
					<RecentTransactions transactions={transactions} />
				)}
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2'>
					{dashboardDataLoading ? (
						<div className='h-[300px]'>
							<Loader size='md' color='text-blue-500' />
						</div>
					) : (
						<WeeklyActivityChart data={weeklyActivity} />
					)}
				</div>
				<div className='lg:col-span-1'>
					{dashboardDataLoading ? (
						<div className='h-[300px]'>
							<Loader size='md' color='text-blue-500' />
						</div>
					) : (
						<ExpenseStatisticsChart data={expenseStatistics} />
					)}
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-1'>
					{dashboardDataLoading ? (
						<div className='h-[300px]'>
							<Loader size='md' color='text-blue-500' />
						</div>
					) : (
						<QuickTransfer contacts={quickTransferContacts} />
					)}
				</div>
				<div className='lg:col-span-2'>
					{dashboardDataLoading ? (
						<div className='h-[300px]'>
							<Loader size='md' color='text-blue-500' />
						</div>
					) : (
						<BalanceHistoryChart data={balanceHistory} />
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
