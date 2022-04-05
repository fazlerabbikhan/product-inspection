import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 2410,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 4230,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 7260,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <h2>Line Chart</h2>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>

            <h2>Bar Chart</h2>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Charts;