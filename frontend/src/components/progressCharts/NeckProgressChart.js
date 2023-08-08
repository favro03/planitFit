import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import Chart from 'chart.js/auto'; // Import Chart.js (auto mode)

const NeckProgressChart = ({ neckData, timestamps }) => {
  const sortedData = timestamps.map((timestamp, index) => ({
    x: new Date(timestamp), // Convert to a JavaScript Date object
    y: neckData[index],
  }));
  
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Neck Progress',
        data: sortedData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
       
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time', // Use 'time' scale for the x-axis
        time: {
          unit: 'day', // Set the time unit to 'day' for daily data
          tooltipFormat: 'MMM DD, YYYY', // Tooltip format for the x-axis labels
        },
        ticks: {
          source: 'data', // Show ticks based on data points
        },
      },
      y: {
        beginAtZero: true, // Start y-axis from zero
        title: {
          display: true,
          text: 'Neck Measurement', // Y-axis label
        },
      },
    },
  };



  return (
    <div style={{ width: '100%', height: '500px' }}>
    <Line data={chartData} options={options} />
  </div>
  )
};

export default NeckProgressChart;
