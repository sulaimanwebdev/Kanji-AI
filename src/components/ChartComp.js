import React from 'react';

const data = [
  {
    emotion: 'happy',
    percentage: '31%',
    color: '#FFFF00',
  },
  {
    emotion: 'calm',
    percentage: '29%',
    color: '#00B9FF',
  },
  {
    emotion: 'surprised',
    percentage: '14%',
    color: '#FF72F6',
  },
  {
    emotion: 'confused',
    percentage: '16%',
    color: '#FFC400',
  },
  {
    emotion: 'disgusted',
    percentage: '05%',
    color: '#00FF33',
  },
  {
    emotion: 'sad',
    percentage: '02%',
    color: '#DEDEDE',
  },
  {
    emotion: 'angry',
    percentage: '03%',
    color: '#FF0000',
  },
];


const ChartComp = () => {
  const chartSize = 300; // Size of the circular chart
  const center = chartSize / 2; // Center point of the chart
  const radius = chartSize / 2 - 10; // Radius of the chart (adjusted for padding)

  // Calculate the starting angle and end angle for each data point
  let startAngle = 0;
  const angles = data.map(item => {
    const percentage = parseFloat(item.percentage) / 100;
    const endAngle = startAngle + percentage * 360;
    const angle = {
      start: startAngle,
      end: endAngle,
    };
    startAngle = endAngle;
    return angle;
  });

  return (
    <svg width={chartSize} height={chartSize} className="overflow-visible">
      {data.map((item, index) => {
        const angle = angles[index];
        const largeArcFlag = angle.end - angle.start <= 180 ? '0' : '1';
        const startX = center + radius * Math.cos((angle.start - 90) * (Math.PI / 180));
        const startY = center + radius * Math.sin((angle.start - 90) * (Math.PI / 180));
        const endX = center + radius * Math.cos((angle.end - 90) * (Math.PI / 180));
        const endY = center + radius * Math.sin((angle.end - 90) * (Math.PI / 180));

        return (
          <g key={item.emotion}>
            <path
              d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
              fill="none"
              stroke={item.color}
              strokeWidth="50"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default ChartComp;
