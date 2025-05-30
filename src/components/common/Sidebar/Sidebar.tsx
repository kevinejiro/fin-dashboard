import React from 'react';
import {
	NavLink,
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
		name: 'Settings',
		to: '/settings',
		icon: 'settings',
	},
];

const Sidebar: React.FC = () => {
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
							`flex items-center px-4 py-3 rounded-lg transition-colors font-medium hover:bg-indigo-50 cursor-pointer ${
								isActive
									? ' bg-indigo-50 text-[#232323] font-semibold'
									: 'text-[#B1B1B1]'
							}`
						}
						end={item.to === '/'}
					>
						{({ isActive }) => (
							<>
								<span className='mr-4'>
									<Icon type={item.icon} active={isActive} />
								</span>
								{item.name}
							</>
						)}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
