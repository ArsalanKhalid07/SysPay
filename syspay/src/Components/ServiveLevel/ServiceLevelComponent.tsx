import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import "./ServiceLevelComponent.scss";

const ServiceLevelComponent = () => {
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Bar A',
  'Bar B',
  'Bar C',
  'Bar D',
  'Bar E',
  'Bar F',
  'Bar G',
];
  return (
    <div className='serviceLevel'>
            <BarChart
                height={200}
                series={[
                { data: pData, label: 'Services', id: 'pvId', stack: 'total'},
                { data: uData, label: 'Volume', id: 'uvId', stack: 'total' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band'}]}
                margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
                borderRadius={4}    
            />
            
    </div>
  )
}

export default ServiceLevelComponent