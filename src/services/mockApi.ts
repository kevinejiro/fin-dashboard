import type {
	CardProps,
	Transaction,
	WeeklyActivity,
	ExpenseData,
	BalanceHistoryPoint,
	QuickTransferContact,
	UserProfile,
} from '../types/data.d';

interface ApiResponse<T> {
	data: T;
	status: number;
}

// Dummy Data
const dummyCards: CardProps[] = [
	{
		id: '1',
		balance: 5756,
		cardholder: 'Charlene Reed',
		validThru: '12/22',
		lastFour: '1234',
	},
	{
		id: '2',
		balance: 3400,
		cardholder: 'Charlene Reed',
		validThru: '08/24',
		lastFour: '5678',
	},
];

const dummyTransactions: Transaction[] = [
	{
		id: 't1',
		description: 'Deposit from my Card',
		date: '28 January 2021',
		amount: -850,
		type: 'deposit',
		icon: 'card',
	},
	{
		id: 't2',
		description: 'Deposit Paypal',
		date: '25 January 2021',
		amount: 2500,
		type: 'deposit',
		icon: 'paypal',
	},
	{
		id: 't3',
		description: 'Jemi Wilson',
		date: '21 January 2021',
		amount: 5400,
		type: 'transfer',
		icon: 'cash',
	},
	{
		id: 't4',
		description: 'Netflix Subscription',
		date: '20 January 2021',
		amount: -15,
		type: 'withdrawal',
		icon: 'cash',
	},
	{
		id: 't5',
		description: 'Salary',
		date: '15 January 2021',
		amount: 3000,
		type: 'deposit',
		icon: 'cash',
	},
];

const dummyWeeklyActivity: WeeklyActivity[] = [
	{ day: 'Sat', deposit: 150, withdraw: 50 },
	{ day: 'Sun', deposit: 200, withdraw: 80 },
	{ day: 'Mon', deposit: 100, withdraw: 120 },
	{ day: 'Tue', deposit: 400, withdraw: 150 },
	{ day: 'Wed', deposit: 180, withdraw: 200 },
	{ day: 'Thu', deposit: 350, withdraw: 100 },
	{ day: 'Fri', deposit: 250, withdraw: 70 },
];

const dummyExpenseData: ExpenseData[] = [
	{ name: 'Entertainment', value: 30 },
	{ name: 'Bill Expense', value: 15 },
	{ name: 'Investment', value: 20 },
	{ name: 'Others', value: 35 },
];

const dummyQuickTransferContacts: QuickTransferContact[] = [
	{
		id: 'c1',
		name: 'Livia Bator',
		role: 'CEO',
		avatar: '/images/Livia-Bator.png',
	},
	{
		id: 'c2',
		name: 'Randy Press',
		role: 'Director',
		avatar: '/images/Randy-Press.png',
	},
	{
		id: 'c3',
		name: 'Workman',
		role: 'Designer',
		avatar: '/images/Workman.png',
	},
	{
		id: 'c4',
		name: 'Livia Bator',
		role: 'CEO',
		avatar: '/images/Livia-Bator.png',
	},
	{
		id: 'c5',
		name: 'Randy Press',
		role: 'Director',
		avatar: '/images/Randy-Press.png',
	},
];

const dummyBalanceHistory: BalanceHistoryPoint[] = [
	{ month: 'Jul', balance: 500 },
	{ month: 'Aug', balance: 700 },
	{ month: 'Sep', balance: 600 },
	{ month: 'Oct', balance: 850 },
	{ month: 'Nov', balance: 750 },
	{ month: 'Dec', balance: 900 },
	{ month: 'Jan', balance: 1000 },
];

const dummyUserProfile: UserProfile = {
	name: 'Charlene Reed',
	username: 'Charlene Reed',
	email: 'charlenereed@gmail.com',
	password: '*************',
	dateOfBirth: '1990-01-25',
	presentAddress: 'San Jose, California, USA',
	permanentAddress: 'San Jose, California, USA',
	city: 'San Jose',
	postalCode: '45962',
	country: 'USA',
	profilePicture: '/images/Charlene-Reed.png',
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const mockApi = {
	getCards: async (): Promise<ApiResponse<CardProps[]>> => {
		await delay(500); // Simulate network delay
		return { data: dummyCards, status: 200 };
	},
	getTransactions: async (): Promise<ApiResponse<Transaction[]>> => {
		await delay(500);
		return { data: dummyTransactions, status: 200 };
	},
	getWeeklyActivity: async (): Promise<ApiResponse<WeeklyActivity[]>> => {
		await delay(500);
		return { data: dummyWeeklyActivity, status: 200 };
	},
	getExpenseStatistics: async (): Promise<ApiResponse<ExpenseData[]>> => {
		await delay(500);
		return { data: dummyExpenseData, status: 200 };
	},
	getQuickTransferContacts: async (): Promise<
		ApiResponse<QuickTransferContact[]>
	> => {
		await delay(500);
		return { data: dummyQuickTransferContacts, status: 200 };
	},
	getBalanceHistory: async (): Promise<ApiResponse<BalanceHistoryPoint[]>> => {
		await delay(500);
		return { data: dummyBalanceHistory, status: 200 };
	},
	getUserProfile: async (): Promise<ApiResponse<UserProfile>> => {
		await delay(500);
		return { data: dummyUserProfile, status: 200 };
	},
	updateUserProfile: async (
		profile: UserProfile
	): Promise<ApiResponse<UserProfile>> => {
		await delay(500);
		console.log('Mock API received update:', profile);
		return { data: profile, status: 200 };
	},
};
