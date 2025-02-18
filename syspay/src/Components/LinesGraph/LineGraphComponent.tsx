import React from 'react'
import "./LineGraphComponent.scss";
import { Stack } from '@mui/material';
import { LineChart } from '@mui/x-charts';



 const LineGraphComponent = () => {
  const [colorX, setColorX] = React.useState<'None' | 'piecewise' | 'continuous' | 'ordinal'>('None');
  const [colorY, setColorY] = React.useState<'None' | 'piecewise' | 'continuous'>('piecewise',);


  return (
    <div className='lineGraph'>
      <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 600 }}>
      <LineChart
        height={270}
        grid={{ horizontal: true }}
        series={[
          {
            data: [-2, -9, 12, 11, 6, -4],
            area: true,
          },
        ]}
        margin={{
          top: 10,
          bottom: 20,
        }}
        yAxis={[
          {
            colorMap:
              (colorY === 'continuous' && {
                type: 'continuous',
                min: -10,
                max: 10,
                color: ['red', 'green'],
              }) ||
              (colorY === 'piecewise' && {
                type: 'piecewise',
                thresholds: [0, 10],
                colors: ['#2E96FF', '#02B2AF',"#02B2AF"],
              }) ||
              undefined,
          },
        ]}
        xAxis={[
          {
            scaleType: 'time',
            data: [
              new Date(2019, 0, 1),
              new Date(2020, 0, 1),
              new Date(2021, 0, 1),
              new Date(2022, 0, 1),
              new Date(2023, 0, 1),
              new Date(2024, 0, 1),
            ],
            valueFormatter: (value) => value.getFullYear().toString(),
            colorMap:
              (colorX === 'continuous' && {
                type: 'continuous',
                min: new Date(2019, 1, 1),
                max: new Date(2024, 1, 1),
                color: ['green', 'orange'],
              }) ||
              (colorX === 'piecewise' && {
                type: 'piecewise',
                thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
                colors: ['blue', 'red', 'blue'],
              }) ||
              undefined,
          },
        ]}
      />
    
    </Stack>
    </div>
  )
}

export default LineGraphComponent;