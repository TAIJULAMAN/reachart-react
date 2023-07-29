import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const SimpleLineChart = () => {
    
const data = [
    {
      name: 'DEALER A',
      price: 4000,
      price2: 2400,
      amt: 2400,
    },
    {
      name: 'DEALER B',
      price: 3000,
      price2: 1398,
      amt: 2210,
    },
    {
      name: 'DEALER C',
      price: 2000,
      price2: 9800,
      amt: 2290,
    },
    {
      name: 'DEALER D',
      price: 2780,
      price2: 3908,
      amt: 2000,
    },
    {
      name: 'DEALER E',
      price: 1890,
      price2: 4800,
      amt: 2181,
    },
    {
      name: 'DEALER F',
      price: 2390,
      price2: 3800,
      amt: 2500,
    },
    {
      name: 'DEALER G',
      price: 3490,
      price2: 4300,
      amt: 2100,
    },
  ];
  
    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price2" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
    );
};

export default SimpleLineChart;
