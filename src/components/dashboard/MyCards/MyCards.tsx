import React from 'react';
import type { CardProps } from '../../../types/data';

interface MyCardsProps {
	cards: CardProps[];
}

const MyCards: React.FC<MyCardsProps> = ({ cards }) => {
	const handleSeeAllClick = () => {
		console.log('See All Cards clicked');
	};

	if (!cards.length) {
		return (
			<div className='w-full p-0 rounded-2xl'>
				<div className='flex justify-between items-center mb-6 px-2 pt-2'>
					<h2 className='text-2xl font-semibold text-[#343C6A]'>My Cards</h2>
				</div>
				<div className='text-center text-gray-500 py-8'>
					No cards available.
				</div>
			</div>
		);
	}

	return (
		<div className='w-full p-0 rounded-2xl'>
			<div className='flex justify-between items-center mb-6 px-2 pt-2'>
				<h2 className='text-2xl font-semibold text-[#343C6A]'>My Cards</h2>
				<button
					onClick={handleSeeAllClick}
					className='text-[#343C6A] font-semibold text-xl hover:underline'
				>
					See All
				</button>
			</div>
			<div className='flex gap-x-6 overflow-x-auto pb-2'>
				{cards.map((card, idx) =>
					idx === 0 ? (
						<div
							key={card.id}
							className='flex-1 min-w-[350px] max-w-[400px] rounded-2xl overflow-hidden bg-transparent max-h-[16rem]'
						>
							{/* Top section */}
							<div className='p-6 bg-gradient-to-br from-[#23243A] to-[#3A3B5A]'>
								<div className='flex justify-between items-start mb-6'>
									<div>
										<div className='text-sm text-white/80'>Balance</div>
										<div className='text-2xl font-bold text-white mt-1'>
											${card.balance.toLocaleString()}
										</div>
									</div>
									<div className='w-[2.5rem]'>
										<img src='/images/Chip.png' alt='chip' />
									</div>
								</div>
								<div className='flex justify-between items-center text-xs text-white/70 mb-2'>
									<span>CARD HOLDER</span>
									<span>VALID THRU</span>
								</div>
								<div className='flex justify-between items-center mb-2'>
									<span className='font-semibold text-white text-base'>
										{card.cardholder}
									</span>
									<span className='font-semibold text-white text-base'>
										{card.validThru}
									</span>
								</div>
							</div>
							<div className=' h-[1px] bg-[#3A3B5A] w-full' />
							{/* Bottom section */}
							<div className='flex items-center justify-between px-6 py-4 bg-gradient-to-br from-[#5B5C6E] to-[#23243A] rounded-b-2xl'>
								<span className='text-2xl font-bold tracking-widest text-white/90'>
									{`**** **** **** ${card.lastFour}`}
								</span>
								<svg width='40' height='24' viewBox='0 0 40 24' fill='none'>
									<circle
										cx='16'
										cy='12'
										r='10'
										fill='#C4C4C4'
										fillOpacity='0.6'
									/>
									<circle
										cx='24'
										cy='12'
										r='10'
										fill='#C4C4C4'
										fillOpacity='0.3'
									/>
								</svg>
							</div>
						</div>
					) : (
						<div
							key={card.id}
							className='flex-1 min-w-[350px] max-w-[400px] rounded-2xl overflow-hidden bg-white border border-[#D6E0F6] max-h-[16rem]'
						>
							{/* Top section */}
							<div className='p-6'>
								<div className='flex justify-between items-start mb-6'>
									<div>
										<div className='text-sm text-[#2D3A8C]'>Balance</div>
										<div className='text-2xl font-bold text-[#2D3A8C] mt-1'>
											${card.balance.toLocaleString()}
										</div>
									</div>
									<div className='w-[2.5rem]'>
										<img src='/images/Chip2.png' alt='card chip' />
									</div>
								</div>
								<div className='flex justify-between items-center text-xs text-[#2D3A8C]/70 mb-2'>
									<span>CARD HOLDER</span>
									<span>VALID THRU</span>
								</div>
								<div className='flex justify-between items-center mb-2'>
									<span className='font-semibold text-[#2D3A8C] text-base'>
										{card.cardholder}
									</span>
									<span className='font-semibold text-[#2D3A8C] text-base'>
										{card.validThru}
									</span>
								</div>
							</div>
							{/* Top border for number section */}
							<div className='h-[1px] bg-[#D6E0F6] w-full' />
							{/* Bottom section */}
							<div className='flex items-center justify-between px-6 py-4 bg-[#F7F8FA] rounded-b-2xl'>
								<span className='text-2xl font-bold tracking-widest text-[#2D3A8C]'>
									{`**** **** **** ${card.lastFour}`}
								</span>
								<svg width='40' height='24' viewBox='0 0 40 24' fill='none'>
									<circle
										cx='16'
										cy='12'
										r='10'
										fill='#C4C4C4'
										fillOpacity='0.6'
									/>
									<circle
										cx='24'
										cy='12'
										r='10'
										fill='#C4C4C4'
										fillOpacity='0.3'
									/>
								</svg>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default MyCards;
