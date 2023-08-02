import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

const CalfProgressChart = ({ calfData, timestamps }) => {
    const chartData = {
        labels: timestamps,
        datasets: [
          {
            label: 'Calf Progress',
            data: calfData,
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
              text: 'Calf Measurement', // Y-axis label
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
    

export default CalfProgressChart
