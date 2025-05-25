import React from 'react';
import {
	NavLink,
	// , useLocation
} from 'react-router-dom';
import Icon from '../icons';

type IconType =
	| 'home'
	| 'settings'
	| 'card'
	| 'paypal'
	| 'cash'
	| 'notification'
	| 'notificationSetting'
	| 'soarIcon'
	| 'hamburgerIcon'
	| 'searchIcon';

interface NavItem {
	name: string;
	to: string;
	icon: IconType;
}

const navItems: NavItem[] = [
	{
		name: 'Dashboard',
		to: '/',
		icon: 'home',
	},
	{
		name: 'Setting',
		to: '/settings',
		icon: 'settings',
	},
];

const Sidebar: React.FC = () => {
	// const location = useLocation();
	// const isDashboard = location.pathname === '/';
	// const isSettings = location.pathname === '/settings';
	return (
		<aside className='hidden md:flex flex-col h-screen w-64 bg-white border-r border-gray-200 py-6 px-4'>
			{/* Logo */}
			<div className='flex items-center mb-10 px-2'>
				<span className='text-indigo-700 font-bold text-xl rounded px-3 py-1 mr-2'>
					<Icon type='soarIcon' />
				</span>
				<span className='text-2xl font-bold text-gray-900 tracking-tight'>
					Soar Task
				</span>
			</div>
			{/* Nav */}
			<nav className='flex-1 space-y-2'>
				{navItems.map((item) => (
					<NavLink
						key={item.name}
						to={item.to}
						className={({ isActive }) =>
							`flex items-center px-4 py-3 rounded-lg transition-colors font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 ${
								isActive
									? 'bg-indigo-100 text-indigo-700 font-semibold fill-[#232323]'
									: ''
							}`
						}
						end={item.to === '/'}
					>
						<span className='mr-4'>
							<Icon type={item.icon} />
						</span>

						{item.name}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
