import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import type { WeeklyActivity } from '../../../types/data';
import { commonChartOptions } from '../../../../config/chartConfig';
import type { ChartOptions } from 'chart.js';
import Card from '../../common/Card/Card';

interface WeeklyActivityChartProps {
	data: WeeklyActivity[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({ data }) => {
	const chartData = useMemo(() => {
		return {
			labels: data.map((item) => item.day),
			datasets: [
				{
					label: 'Deposit',
					data: data.map((item) => item.deposit),
					backgroundColor: '#4F46E5',
					borderRadius: 4,
					barPercentage: 0.6,
					categoryPercentage: 0.7,
				},
				{
					label: 'Withdraw',
					data: data.map((item) => item.withdraw),
					backgroundColor: '#232323',
					borderRadius: 4,
					barPercentage: 0.6,
					categoryPercentage: 0.7,
				},
			],
		};
	}, [data]);

	const options = useMemo(
		() => ({
			...commonChartOptions,
			scales: {
				x: {
					grid: {
						display: false,
					},
					ticks: {
						color: '#6B7280',
					},
				},
				y: {
					beginAtZero: true,
					grid: {
						color: '#E5E7EB',
						borderDash: [5, 5],
					},
					ticks: {
						color: '#6B7280',
						callback: function (value: number) {
							return '$' + value;
						},
					},
				},
			},
			plugins: {
				...commonChartOptions.plugins,
				legend: {
					...commonChartOptions.plugins.legend,
					position: 'top' as const,
					align: 'end' as const,
					labels: {
						...commonChartOptions.plugins.legend.labels,
						usePointStyle: true,
						boxWidth: 8,
						padding: 16,
					},
				},
				title: {
					display: false,
				},
			},
		}),
		[]
	);

	return (
		<Card title='Weekly Activity' className='h-[24rem] flex flex-col'>
			{data.length === 0 ? (
				<p className='text-gray-500 text-center flex-grow flex items-center justify-center'>
					No weekly activity data available.
				</p>
			) : (
				<div className='flex-1'>
					<Bar data={chartData} options={options as ChartOptions<'bar'>} />
				</div>
			)}
		</Card>
	);
};

export default WeeklyActivityChart;
