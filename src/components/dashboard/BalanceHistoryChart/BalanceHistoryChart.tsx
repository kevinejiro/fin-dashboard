
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import type { BalanceHistoryPoint } from '../../../types/data';
import { commonChartOptions } from '../../../../config/chartConfig';
import type { ChartOptions } from 'chart.js';
import Card from '../../common/Card/Card';

interface BalanceHistoryChartProps {
  data: BalanceHistoryPoint[];
}

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    return {
      labels: data.map((item) => item.month),
      datasets: [
        {
          label: 'Balance',
          data: data.map((item) => item.balance),
          fill: true,
          borderColor: '#4F46E5',
          backgroundColor: 'background: linear-gradient(180deg, rgba(45, 96, 255, 0.25) 0%, rgba(45, 96, 255, 0) 100%)',
          tension: 0.3,
          pointRadius: 5,
          pointBackgroundColor: '#4F46E5',
          pointBorderColor: '#fff',
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#4F46E5',
          pointHoverBorderColor: '#fff',
        },
      ],
    };
  }, [data]);

  const options = useMemo(() => ({
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
        beginAtZero: false,
        grid: {
          color: '#E5E7EB',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#6B7280',
          callback: function(value: number) {
            return '$' + value.toLocaleString();
          }
        },
      },
    },
    plugins: {
      ...commonChartOptions.plugins,
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  }), []);

  return (
    <Card title='Balance History' className='h-[24rem] flex flex-col'>
      {data.length === 0 ? (
        <p className="text-gray-500 text-center flex-grow flex items-center justify-center">No balance history data available.</p>
      ) : (
        <div className="flex-1">
          <Line data={chartData} options={options as ChartOptions<"line">} />
        </div>
      )}
    </Card>
  );
};

export default BalanceHistoryChart;