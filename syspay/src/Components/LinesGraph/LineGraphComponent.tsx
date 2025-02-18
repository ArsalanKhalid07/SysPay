import React from 'react'
import "./LineGraphComponent.scss";
import { Box, Stack } from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';


 const LineGraphComponent = () => {
  const data = [
    { label: 'A', line1: 3, line2: 2 },
    { label: 'B', line1: -10, line2: -8 },
    { label: 'C', line1: -2, line2: -1 },
    { label: 'D', line1: 5, line2: 6 },
    { label: 'E', line1: 7, line2: 5 },
    { label: 'F', line1: -2, line2: -3 },
    { label: 'G', line1: 4, line2: 5 },
    { label: 'H', line1: 6, line2: 7 }
  ];
  return (
    <div className='lineGraph'>
 <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <XAxis dataKey="label" hide />
            <YAxis hide />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="natural"
              dataKey="line1"
              stroke="#8884d8"
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="natural"
              dataKey="line2"
              stroke="#82ca9d"
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Stack>
    </div>
  )
}

export default LineGraphComponent;