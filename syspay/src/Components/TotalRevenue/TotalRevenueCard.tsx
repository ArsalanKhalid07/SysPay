import React from 'react'
import "./TotalRevenueCard.scss";
import { BarChart } from '@mui/x-charts';

const TotalRevenueCard = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    ];
  return (
    <div>
    <BarChart
      height={315}
      series={[
        { data: pData, label: 'Online Sales', id: 'pvId' },
        { data: uData, label: 'Offline Sales', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

    </div>
  )
}

export default TotalRevenueCard