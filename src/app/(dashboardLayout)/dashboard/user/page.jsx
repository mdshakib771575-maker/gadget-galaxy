"use client"
import { Card } from '@heroui/react';
import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';
import DashboardHeading from '@/app/components/shared/DashboardHeading';
import { CiDeliveryTruck } from 'react-icons/ci';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";



import {
    LineChart,
    Line,
    CartesianGrid,
   
    XAxis,
    YAxis,
  
} from "recharts";

const OverViewPage = () => {
    const stats = {
        totalHostedProducts: 25,
        totalUsers: 15,
        totalRevenue: 250,
        totalSoldTickets: 780,
    };

    const LInedata = [
  {
    month: "Jan",
    spent: 120,
  },
  {
    month: "Feb",
    spent: 250,
  },
  {
    month: "Mar",
    spent: 180,
  },
  {
    month: "Apr",
    spent: 320,
  },
  {
    month: "May",
    spent: 410,
  },
  {
    month: "Jun",
    spent: 280,
  },
];



    const data = [
        {
            name: "Delivered",
            value: 12,
        },
        {
            name: "Pending",
            value: 4,
        },
        {
            name: "Processing",
            value: 2,
        },
        {
            name: "Cancelled",
            value: 2,
        },
    ];

    const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];
    return (
        <div>
            <DashboardHeading title="Overview" description="Dashboard Overview"></DashboardHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <Card className="glass border-white/5 ">
                    <div className="p-6 flex flex-row items-center justify-between  rounded-2xl">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Order</span>
                            <h2 className="text-3xl font-extrabold">{stats.totalHostedProducts}</h2>
                        </div>
                        <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><FaCalendarAlt size={24} /></div>
                    </div>
                </Card>
                <Card className="glass border-white/5">
                    <div className="p-6 flex flex-row items-center justify-between  rounded-2xl">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">complite Order</span>
                            <h2 className="text-3xl font-extrabold ">
                                {stats.totalHostedProducts}</h2>
                        </div>
                        <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><CiDeliveryTruck size={24} /></div>
                    </div>
                </Card>
                <Card className="glass border-white/5">
                    <div className="p-6 flex flex-row items-center justify-between  rounded-2xl">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Accumulated Revenue</span>
                            <h2 className="text-3xl font-extrabold ">{`$${stats.totalRevenue.toFixed(2)}`}</h2>
                        </div>
                        <div className="p-3.5 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><FaDollarSign size={24} /></div>
                    </div>
                </Card>
            </div>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row">
                {/* Bar Chart */}
                <div className="h-[350px] w-[50%] rounded-xl border p-5">
                    <h2 className="mb-4 text-xl font-semibold">
                        Monthly Spending
                    </h2>

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={LInedata}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />
                            <YAxis />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="spent"
                                stroke="#3b82f6"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>


                {/* Pie Chart */}
                <div className="flex-1 rounded-2xl border border-white/10  p-5">
                    <h2 className="mb-5 text-xl font-semibold">
                        Product Category Distribution
                    </h2>

                    <div className="h-[400px] w-[100%] rounded-2xl border border-white/10 ">

                        <ResponsiveContainer width="100%" height="85%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={110}
                                    label
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OverViewPage;