import React from 'react';

const Chart = ({ data }) => {
  const chartSize = window.innerWidth > 800 ? 300 : window.innerWidth > 362 ? 200 : 150; // Size of the circular chart
  const center = chartSize / 2; // Center point of the chart
  const radius = chartSize / 2 - 30; // Radius of the chart (adjusted for padding and section size)
  const gapAngle = 0; // Angle in degrees for the gap between sections
  const strokeWidth = window.innerWidth > 800 ? 40 : window.innerWidth > 362 ? 30 : 20; // Width of the chart stroke
  const textOffset = 15; // Offset for spacing between text and chart

  // Calculate the starting angle and end angle for each data point
  let startAngle = 0;
  const angles = data.map(item => {
    const percentage = parseFloat(item.percentage) / 100;
    const endAngle = startAngle + percentage * 360;
    const angle = {
      start: startAngle,
      end: endAngle,
    };
    startAngle = endAngle + gapAngle;
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

        // Calculate the middle angle for positioning the text
        const middleAngle = (angle.start + angle.end) / 2;
        const textX = center + (radius + strokeWidth / 1.2 + textOffset) * Math.cos((middleAngle - 90) * (Math.PI / 180));
        const textY = center + (radius + strokeWidth / 1.2 + textOffset) * Math.sin((middleAngle - 90) * (Math.PI / 180));

        const isVisible = parseFloat(item.percentage) !== 0; // Check if percentage is not 0%
        const strokeColor = isVisible ? item.color : 'none'; // Set stroke color to 'none' if percentage is 0%

        // Set the stroke color to the item color if percentage is 100%
        const strokeColor100 = parseFloat(item.percentage) === 100 ? item.color : strokeColor;

        return (
          <g key={item.emotion}>
            {isVisible && (
              <path
                d={`M ${startX} ${item.percentage !== "100%" ? startY : "29.999"} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
                fill="none"
                stroke={strokeColor100}
                strokeWidth={strokeWidth}
                className={item.percentage !== "100%" ? "" : window.innerWidth > 800 ? "-translate-x-[120px] translate-y-[120px]" : window.innerWidth > 362 ? "-translate-x-[70px] translate-y-[60px]" : "-translate-x-[45px] translate-y-[35px]"}
              />
            )}
            {isVisible && (
              <text
                x={textX}
                y={textY}
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#000000"
                fontSize="14"
                className="font-bold"
              >
              {item.percentage}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default Chart;
