import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import './ChartComponent.css';

const ChartComponent = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
     
      return;
    }

    const ctx = chartRef.current.getContext('2d');

    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

 
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            ticks: {
              beginAtZero: true,
            },
          },
          x: {
            type: 'category',
          },
        },
      },
    });

  }, [chartData]);

 
  useEffect(() => {
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
