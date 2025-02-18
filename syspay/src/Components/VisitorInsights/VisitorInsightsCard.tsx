import React from 'react';
import "./VisitorInsightsCard.scss";
import { LineChart } from '@mui/x-charts';


const VisitorInsightsCard = () => {
  const uData = [300, 600, 200, 400, 900, 800];
const pData = [0,100,200,300,400,600];
const tData = [0,600,300,400,200,100];

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
    <div className='visitorGraph'>
    <LineChart

      height={240}
      series={[
        { data: pData, label: 'Loyal Customers',color:"#A700FF", },
        { data: uData, label: 'New Customers', color:"#EF4444" },
        { data: tData, label: 'New Customers', color:"#3CD856" },

      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />

    </div>

  )
}

export default VisitorInsightsCard;