import './AnalyticsBox.css';
import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const AnalyticsBox = () => {
  const [isPrimeMember, setIsPrimeMember] = useState(false); // Set to true for prime members
  const [lineData, setLineData] = useState([100, 250, 150, 300, 200, 400]);
  const [pieData, setPieData] = useState([300, 50, 100]);

  // Function to update line chart data
  const updateLineData = () => {
    setLineData(prevData => {
      const newData = [...prevData.slice(1), Math.floor(Math.random() * 500)];
      return newData;
    });
  };

  // Function to update pie chart data
  const updatePieData = () => {
    setPieData(prevData => {
      const newData = prevData.map(value => Math.floor(Math.random() * 300));
      return newData;
    });
  };

  useEffect(() => {
    const lineInterval = setInterval(updateLineData, 2000); // Update every 2 seconds
    const pieInterval = setInterval(updatePieData, 3000); // Update every 3 seconds

    return () => {
      clearInterval(lineInterval);
      clearInterval(pieInterval);
    };
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Property Views',
        data: lineData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Slightly opaque background
        borderColor: 'rgba(75, 192, 192, 1)', // Strong line color
        borderWidth: 3, // Thicker line
        fill: true,
      },
    ],
  };

  const pieDataConfig = {
    labels: ['Property A', 'Property B', 'Property C'],
    datasets: [
      {
        data: pieData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000, // Faster animation duration
      easing: 'easeInOutCubic',
      animateRotate: true, // Enable rotation animation for pie chart
      animateScale: true, // Enable scaling animation for pie chart
    },
    plugins: {
      legend: {
        display: false, // No legend to keep it clean
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove grid lines for cleaner look
        },
      },
      x: {
        grid: {
          display: false, // Remove grid lines for cleaner look
        },
      },
    },
  };

  return (
    <div className="analytics-box">
      <div className="chart-background">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="overlay-content">
        <div className="overlay-text">
          {isPrimeMember ? (
            <p>View Advance Analytics</p>
          ) : (
            <p><img src="/src/icons/lock.png" alt="lock" className="lock-icon" />Get Prime Membership to View Advance Analytics</p>
          )}
        </div>
      </div>
      
      <div className="pie-chart-container">
        <Pie data={pieDataConfig} options={chartOptions} />
      </div>
    </div>
  );
};

export default AnalyticsBox;
