"use client"

import DashboardHeading from '@/app/components/shared/DashboardHeading';
import { getUsers } from '@/lib/api/products/data';
import { Button, Card } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaCrown, FaDollarSign, FaUsers } from 'react-icons/fa';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";


import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
 
}

const AdminOverViewPage = () => {
    const stats = {
        totalHostedProducts: 25,
        totalUsers: 15,
        totalRevenue: 250,
        totalSoldTickets: 780,
    };

    // const isPremium = false;

    // Bar Chart Data

    const salesData = [
        { month: "Jan", sales: 1200 },
        { month: "Feb", sales: 2100 },
        { month: "Mar", sales: 1800 },
        { month: "Apr", sales: 2500 },
        { month: "May", sales: 3200 },
        { month: "Jun", sales: 4100 },
    ];

    // Pie Chart Data
    const categoryData = [
        { name: "Smartphones", value: 40 },
        { name: "Laptops", value: 25 },
        { name: "Accessories", value: 20 },
        { name: "Smart Watches", value: 15 },
    ];
    const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ec4899"];

      const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
      const loadUsers = async () => {
        const data = await getUsers();
        setUsers(data);
      };
    
      loadUsers();
    }, []);
    return (
        <div className="space-y-6 mt-2 ">
            <DashboardHeading title="Overview" description="Dashboard Overview"></DashboardHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <Card className="glass border-white/5 ">
                    <div className="p-6 flex flex-row items-center justify-between  rounded-2xl">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Hosted Product</span>
                            <h2 className="text-3xl font-extrabold">{stats.totalHostedProducts}</h2>
                        </div>
                        <div className="p-3.5 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><FaCalendarAlt size={24} /></div>
                    </div>
                </Card>
                <Card className="glass border-white/5">
                    <div className="p-6 flex flex-row items-center justify-between  rounded-2xl">
                        <div className="space-y-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total User</span>
                            <h2 className="text-3xl font-extrabold ">
                                {users.length}</h2>
                        </div>
                        <div className="p-3.5 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><FaUsers size={24} /></div>
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

            {/* {!isPremium && (
                <Card className="border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-amber-600/5 to-transparent relative overflow-hidden rounded-2xl shadow">
                    <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaCrown className="text-yellow-400" /> Unlock Unlimited Event Creation</h3>
                            <p className="text-slate-400 text-xs max-w-xl leading-relaxed">Standard organizer accounts are limited to <strong>3 events</strong>. Upgrade to our Premium Package for <strong>$49.00</strong> to host unlimited events.</p>
                        </div>
                        <Button className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold h-11 px-6 shadow-lg shadow-yellow-500/10 shrink-0 rounded-full">
                            Upgrade to Premium
                        </Button>
                    </div>
                </Card>
            )} */}


            <div className="mt-5 flex flex-col gap-6 lg:flex-row">
                {/* Bar Chart */}
                <div className="flex-1 rounded-2xl border border-white/10  p-5">
                    <h2 className="mb-5 text-xl font-semibold">
                        Monthly Sales Overview
                    </h2>

                    <div className="h-[350px] w-full rounded-2xl border border-white/10  p-5">
                       

                        <ResponsiveContainer width="100%" height="85%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#22c55e" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="flex-1 rounded-2xl border border-white/10  p-5">
                    <h2 className="mb-5 text-xl font-semibold">
                        Product Category Distribution
                    </h2>

                    <div className="h-[400px] w-full rounded-2xl border border-white/10 ">
                       
                        <ResponsiveContainer width="100%" height="85%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={110}
                                    label
                                >
                                    {categoryData.map((_, index) => (
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
    )
};

export default AdminOverViewPage;