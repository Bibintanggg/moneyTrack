import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Januari',
    Pemasukan: 2400,
    amt: 2400,
  },
  {
    name: 'Februari',
    Pemasukan: 1398,
    amt: 2210,
  },
  {
    name: 'Maret',
    Pemasukan: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Pemasukan: 3908,
    amt: 2000,
  },
  {
    name: 'Mei',
    uv: 1890,
    Pemasukan: 4800,
    amt: 2181,
  },
  {
    name: 'Juni',
    Pemasukan: 3800,
    amt: 2500,
  },
  {
    name: 'Juli',
    Pemasukan: 4300,
    amt: 2100,
  },
    {
        name: 'Agustus',
        Pemasukan: 2400,
        amt: 2400,
    },
    {
        name: 'September',
        Pemasukan: 1398,
        amt: 2210,
    },
    {
        name: 'Oktober',
        Pemasukan: 9800,
        amt: 2290,
    },
    {
        name: 'November',
        Pemasukan: 3908,
        amt: 2000,
    },
    {
        name: 'Desember',
        uv: 1890,
        Pemasukan: 4800,
        amt: 2181,
    },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    return (
      <ResponsiveContainer width="90%" height="65%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Pemasukan" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
