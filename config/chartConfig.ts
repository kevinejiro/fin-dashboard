import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

export const registerCharts = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement
  );
};

// Common chart options
export const commonChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 12,
          family: 'Inter, sans-serif',
        },
        color: '#6B7280',
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#374151',
      titleColor: '#F9FAFB',
      bodyColor: '#D1D5DB', 
      padding: 10,
      cornerRadius: 6,
      displayColors: true,
      boxPadding: 4,
    },
  },
  animation: {
    duration: 1000,
    easing: 'easeOutQuart',
  },
};