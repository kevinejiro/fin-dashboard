import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import Icon from '../icons';
const randomAvatarUrl = 'https://randomuser.me/api/portraits/women/44.jpg'

const Navbar: React.FC = () => {
	const location = useLocation();
	const isDashboard = location.pathname === '/';
	const isSettings = location.pathname === '/settings';

	const { profile } = useSelector((state: RootState) => state.user);
	const userAvatar = profile?.profilePicture || randomAvatarUrl;


	return (
		<header className='w-full bg-white px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-100'>
			<div className='flex items-center justify-between md:justify-start w-full'>
				{/* Hamburger for mobile */}
				<button className='md:hidden mr-2' aria-label='Open menu'>
					<Icon type='hamburgerIcon' />
				</button>
				<h1 className='text-2xl font-bold text-[#353A63] flex-1 text-center md:text-left md:flex-none'>
					{isDashboard ? 'Overview' : isSettings ? 'Setting' : ''}
				</h1>
				<div className='md:hidden w-10' />
				<img
					src={userAvatar}
					alt='User avatar'
					className='w-10 h-10 rounded-full object-cover ml-2 md:ml-6 border-2 border-white shadow md:hidden'
				/>
			</div>
			<div className='flex items-center mt-4 md:mt-0 md:ml-auto w-full md:w-auto'>
				{/* Search bar */}
				<div className='flex items-center bg-indigo-50 rounded-full px-4 py-2 w-full md:w-60 lg:w-65 mr-2'>
					<Icon type='searchIcon' />
					<input
						type='text'
						placeholder='Search for something'
						className='bg-transparent outline-none border-none ml-2 w-full text-indigo-900 placeholder-indigo-400 text-base'
					/>
				</div>
				{/* Icons (desktop only) */}
				<div className='hidden md:flex items-center space-x-3 ml-2'>
					<button
						className='rounded-full hover:bg-indigo-100 transition'
						aria-label='Settings'
					>
						<Icon type='notificationSetting' />
					</button>
					<button
						className=' rounded-full hover:bg-indigo-100 transition'
						aria-label='Notifications'
					>
						<Icon type='notification' />
					</button>
					<img
						src={userAvatar}
						alt='User avatar'
						className='w-10 h-10 rounded-full object-cover ml-2 md:ml-6 border-2 border-white shadow'
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
