import React from 'react';
import "./TargetRealityGraph.scss";
import { BarChart } from '@mui/x-charts';

const TargetRealityGraph = () => {

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
  ];

  return (
    <div className='targetRealityGraph'>
    <BarChart
      height={245}
      series={[
        { data: pData, label: 'pv', id: 'pvId', color: '#FFCF00' }, // Blue for 'pv'
        { data: uData, label: 'uv', id: 'uvId', color: '#4AB58E' }, // Red for 'uv'
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      borderRadius={4}
      margin={{ top: 30, right: 0, bottom: 40, left: 0 }}
    />
    </div>
  )
}

export default TargetRealityGraph