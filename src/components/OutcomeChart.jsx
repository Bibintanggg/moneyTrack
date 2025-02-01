import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Januari',
        Pengeluaran: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Febuari',
        Pengeluaran: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Maret',
        Pengeluaran: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        Pengeluaran: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Mei',
        Pengeluaran: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Juni',
        Pengeluaran: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Juli',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Agustus',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'September',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'OKtober',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'November',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Desember',
        Pengeluaran: 3490,
        pv: 4300,
        amt: 2100,
    },

];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Pengeluaran" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
