import React from 'react';
import "./VisitorInsightsCard.scss";
import { LineChart } from '@mui/x-charts';


const VisitorInsightsCard = () => {
  const uData = [300, 600, 200, 400, 900, 800];
const pData = [0,100,200,300,400,600];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Sept',
  "Oct",
  "Nov",
  "Des"
];
  return (
    <>
    <LineChart

      height={240}
      series={[
        { data: pData, label: 'Loyal Customers' },
        { data: uData, label: 'New Customers' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />

    </>

  )
}

export default VisitorInsightsCard;