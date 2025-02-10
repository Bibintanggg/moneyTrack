import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  state = {
    chartData: []
  };

  componentDidMount() {
    this.processData();
    window.addEventListener('storage', this.processData);
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.processData);
  }

  processData = () => {
    const incomeData = JSON.parse(localStorage.getItem('incomeActivities')) || [];
    const monthlyData = {
      'Januari': 0, 'Februari': 0, 'Maret': 0, 'April': 0,
      'Mei': 0, 'Juni': 0, 'Juli': 0, 'Agustus': 0,
      'September': 0, 'Oktober': 0, 'November': 0, 'Desember': 0
    };

    incomeData.forEach(item => {
      if (!item.tanggal) return; 

      const date = new Date(item.tanggal);
      if (isNaN(date.getTime())) return; 

      const month = date.toLocaleString('id-ID', { month: 'long' });

      if (monthlyData[month] !== undefined) {
        monthlyData[month] += Number(item.nominal) || 0; // Pastikan nominal selalu angka
      }
    });

    this.setState({
      chartData: Object.entries(monthlyData).map(([name, Pemasukan]) => ({
        name,
        Pemasukan,
        amt: Pemasukan
      }))
    });
  };



  render() {
    return (
      <ResponsiveContainer width="90%" height="65%">
        <LineChart width={500} height={300} data={this.state.chartData}>
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