import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
// import Sidebar from '../components/common/Sidebar/Sidebar';
// import Navbar from '../components/common/Navbar/Navbar';
import { useAppDispatch } from '../redux/hooks';
import { fetchUserProfile } from '../redux/features/userSlice';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchUserProfile());
	}, [dispatch]);	
	return (
		<div className='flex h-screen w-screen bg-gray-100'>
			{/* <Sidebar /> */}
			<div className='flex-1 flex flex-col min-w-0'>
				{/* <Navbar /> */}
				<main className='flex-1 p-4 md:p-8 overflow-auto w-full'>
					{children}
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
