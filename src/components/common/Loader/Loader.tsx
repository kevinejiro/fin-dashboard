import React from 'react';

interface LoaderProps {
	size?: 'sm' | 'md' | 'lg';
	color?: string;
	className?: string;
}

const Loader: React.FC<LoaderProps> = ({
	size = 'md',
	color = 'text-blue-500',
	className = '',
}) => {
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-8 h-8',
		lg: 'w-12 h-12',
	};

	return (
		<div
			className={`flex items-center justify-center w-full h-full min-h-[200px] ${className}`}
		>
			<div
				className={`${sizeClasses[size]} ${color} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
				role='status'
			>
				<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
					Loading...
				</span>
			</div>
		</div>
	);
};

export default Loader;
