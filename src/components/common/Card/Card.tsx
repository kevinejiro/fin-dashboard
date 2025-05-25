import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
	return (
		<div>
			{title && (
				<h2 className='text-2xl font-semibold text-[#343C6A] mb-6 px-2 pt-2'>{title}</h2>
			)}
			<div
				className={`bg-white p-6 rounded-[25px] shadow-sm ${className}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Card;
