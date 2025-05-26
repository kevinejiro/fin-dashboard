import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import type { ExpenseData } from '../../../types/data';
import { commonChartOptions } from '../../../../config/chartConfig';
import type { ChartOptions, TooltipItem } from 'chart.js';
import Card from '../../common/Card/Card';

interface ExpenseStatisticsChartProps {
	data: ExpenseData[];
}

const backgroundColors = [
	'#353A63', // dark blue
	'#F7931A', // orange
	'#4F6DF5', // blue
	'#232323', // black
];

const ExpenseStatisticsChart: React.FC<ExpenseStatisticsChartProps> = ({
	data,
}) => {
	const chartData = useMemo(() => {
		return {
			labels: data.map((item) => item.name),
			datasets: [
				{
					data: data.map((item) => item.value),
					backgroundColor: backgroundColors.slice(0, data.length), 
					borderColor: '#ffffff', 
					borderWidth: 2,
				},
			],
		};
	}, [data]);

	const options = useMemo(
		() => ({
			...commonChartOptions,
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
				tooltip: {
					...commonChartOptions.plugins.tooltip,
					callbacks: {
						label: function (context: TooltipItem<'pie'>) {
							let label = context.label || '';
							if (label) {
								label += ': ';
							}
							if (context.parsed !== null) {
								label += context.parsed + '%';
							}
							return label;
						},
					},
				},
			},
		}),
		[]
	);

	return (
		<Card
			title='Expense Statistics'
			className='h-96 md:h-80 lg:h-96 flex flex-col'
		>
			{data.length === 0 ? (
				<p className='text-gray-500 text-center flex-grow flex items-center justify-center'>
					No expense statistics data available.
				</p>
			) : (
				<div className='flex-1 h-full'>
					{' '}
					<Pie data={chartData} options={options as ChartOptions<'pie'>} />
				</div>
			)}
		</Card>
	);
};

export default ExpenseStatisticsChart;
