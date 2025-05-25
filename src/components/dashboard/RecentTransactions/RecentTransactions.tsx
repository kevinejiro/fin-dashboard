import React from 'react';
import type { Transaction } from '../../../types/data'; // Adjust path
import Card from '../../common/Card/Card';
import Icons from '../../common/icons';

interface RecentTransactionsProps {
	transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
	transactions,
}) => {
	return (
		<Card title='Recent Transactions' className='flex flex-col h-[16rem] min-h-[16rem]'>
			<div className='flex-1 h-[12rem] overflow-y-auto'>
				{transactions.length === 0 ? (
					<p className='text-gray-500'>No recent transactions.</p>
				) : (
					<ul className='space-y-4'>
						{transactions.map((transaction) => (
							<li
								key={transaction.id}
								className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors'
							>
								<div className='flex items-center space-x-3'>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Icons type={transaction.icon}/>
									</div>
									<div>
										<p className='text-sm font-medium text-gray-900'>
											{transaction.description}
										</p>
										<p className='text-xs text-gray-500'>{transaction.date}</p>
									</div>
								</div>
								<div
									className={`text-sm font-semibold ${
										transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
									}`}
								>
									{transaction.amount < 0
										? `-$${Math.abs(transaction.amount).toLocaleString()}`
										: `$${transaction.amount.toLocaleString()}`}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</Card>
	);
};

export default RecentTransactions;
