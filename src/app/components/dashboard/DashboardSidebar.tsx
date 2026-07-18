"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBuilding, FaCalendarAlt, FaHome, FaPlus, FaSignOutAlt, FaTicketAlt, FaUserCircle, FaUsers,FaHeart } from 'react-icons/fa';
import Logo from '../shared/Logo';
import { useSession } from '@/lib/auth-client';


const DashboardSidebar = () => {
    const handleLogout = () => {

    }
    const { data: session } = useSession();
    // console.log(session?.user)


    const AdminMenu = [
        { key: "overview", label: "Overview", icon: FaUsers, href: "/dashboard/admin" },
    
        { key: "add-product", label: "Add Product", icon: FaPlus, href: "/dashboard/admin/add-product" },
        { key: "manage-products", label: "Manage Products", icon: FaCalendarAlt, href: "/dashboard/admin/manage-products" },
        { key: "manage-users", label: "Manage Users", icon: FaUsers, href: "/dashboard/admin/manage-users" },
    ];

    const UserMenu = [
        { key: "overview", label: "Overview", icon: FaUserCircle, href: "/dashboard" },
        { key: " My Orders", label: "My Orders", icon: FaCalendarAlt, href: "/dashboard/user/my-orders" },
        { key: "Wishlist", label: "Wishlist", icon: FaHeart, href: "/dashboard/user/wishlist" },
        
    ];

 const role = (session?.user as { role?: string })?.role;

    const menuItems = role === "user" ? UserMenu : AdminMenu;
    return (
        <div className='min-h-screen flex '>
            <aside className='w-64 border-r min-h-screen'>
                <div className="h-full flex flex-col bg-slate-950/80 backdrop-blur-xl">
                    {/* Brand / Logo */}
                    <div className="px-6 py-5 border-b border-white/5">
                        <Logo />
                    </div>

                    {/* User Profile */}
                    <div className="px-6 py-5 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500/60 shrink-0">
                                <Image
                                    width={20}
                                    height={20}
                                    src={session?.user?.image || "/default-avatar.png"}
                                    alt="Avatar"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-white text-sm font-bold truncate leading-tight">
                                    {session?.user.name}
                                </p>
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${role === "admin" ? "text-yellow-400" : role === "organizer" ? "text-indigo-400" : "text-pink-400"}`}>
                                    {role}
                                </span>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-grow overflow-y-auto px-3 py-4 space-y-1">
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest px-3 pb-2">Navigation</p>
                        {
                            menuItems?.map(({ key, label, icon: Icon, href }) => {
                                return (

                                    <Link
                                        key={key}
                                        href={href}
                                        // href={targetPath}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer text-slate-400 hover:text-white hover:bg-white/5`}>
                                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-white/5 text-slate-400"}`}>

                                            <Icon size={20}></Icon>
                                        </span>
                                        <span>{label}</span>

                                        {/* {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-400" />} */}
                                    </Link>
                                )
                            })
                        }
                    </nav>

                    {/* Bottom Links */}
                    <div className="px-3 py-4 border-t border-white/5 space-y-1">
                        <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-150">
                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                <FaHome size={13} />
                            </span>
                            Back to Site
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-150 cursor-pointer"
                        >
                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                <FaSignOutAlt size={13} />
                            </span>
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default DashboardSidebar;