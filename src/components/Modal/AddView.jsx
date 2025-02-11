import React, { useEffect, useState } from "react";
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from "recharts";

export default function OutcomeChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        processOutcomeData(); // Panggil fungsi saat pertama kali komponen dirender
        window.addEventListener("storage", processOutcomeData); // Update jika ada perubahan di localStorage

        return () => {
            window.removeEventListener("storage", processOutcomeData); // Hapus listener saat komponen unmount
        };
    }, []);

    const processOutcomeData = () => {
        const outcomeData = JSON.parse(localStorage.getItem("outcomeActivities")) || [];
        const monthlyData = {
            Januari: 0, 
            Februari: 0, 
            Maret: 0, 
            April: 0,
            Mei: 0, 
            Juni: 0, 
            Juli: 0, 
            Agustus: 0,
            September: 0, 
            Oktober: 0, 
            November: 0, 
            Desember: 0
        };

        outcomeData.forEach(item => {
            if (!item.tanggal) return;

            const date = new Date(item.tanggal);
            if (isNaN(date.getTime())) return;

            const month = date.toLocaleString("id-ID", { month: "long" });

            if (monthlyData[month] !== undefined) {
                monthlyData[month] += Number(item.nominal) || 0;
            }
        });

        setChartData(Object.entries(monthlyData).map(([name, Pengeluaran]) => ({
            name,
            Pengeluaran,
            amt: Pengeluaran
        })));
    };

    return (
        <ResponsiveContainer width="90%" height={350}>
            <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Pengeluaran" stroke="#ff6b6b" fill="#ff6b6b" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
