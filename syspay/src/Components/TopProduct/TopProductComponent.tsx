import React from 'react';
import "./TopProductComponent.scss";
import { LinearProgress } from '@mui/material';

const TopProductComponent = () => {
    const headCell = [
        {
            id: "01",
            name: "Home Decor Range",
            popularity: 70,
            primaryColor:"#0095FF",
            secondaryColor:"#CDE7FF",
            sales: 45

        },
        {
            id: "02",
            name: "Disney Princess Pink Bag 18'",
            primaryColor:"#00E096",
            secondaryColor:"#8CFAC7",
            popularity: 55,
            sales: 29

        },
        {
            id: "03",
            name: "Bathroom Essentials",
            primaryColor:"#884DFF",
            secondaryColor:"#C5A8FF",
            popularity: 45,
            sales: 18

        },
        {
            id: "04",
            name: "Apple Smartwatches",
            primaryColor:"#FF8F0D",
            secondaryColor:"#FFD5A4",
            popularity: 30,
            sales: 25

        } 
    ]
  return (
    <div className='topProduct'>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Sales</th>
                </tr>
            </thead>
            <tbody>
                {
                    headCell.map((val,i) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>
                                    <LinearProgress  variant="buffer" value={val.popularity} 
                                      sx={{
                                        '& .MuiLinearProgress-bar': {
                                          backgroundColor: val.primaryColor, 
                                        },
                                        '& .MuiLinearProgress-bar2Buffer': {
                                            backgroundColor:val.secondaryColor, 
                                        },
                                    }}
                                    />
                                </td>
                                <td >
                                    <div style={{background:val.secondaryColor, color:val.primaryColor, border:`1px solid ${val.primaryColor}`}}>
                                        {val.sales+"%"}
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TopProductComponent