"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/avatar";
import ThemeSwitchButton from "@/components/theme-switch";
import {
    DownloadIcon,
    HomeIcon,
    UserIcon,
    TrophyIcon,
    FolderIcon,
    BookOpenIcon,
    MenuIcon
} from "lucide-react";

const navItems = [
    { href: "/", label: "Home", icon: <HomeIcon size={22} /> },
    { href: "/about", label: "About", icon: <UserIcon size={22} /> },
    { href: "/achievements", label: "Achievements", icon: <TrophyIcon size={22} /> },
    { href: "/projects", label: "Projects", icon: <FolderIcon size={22} /> },
    { href: "/blogs", label: "Blogs", icon: <BookOpenIcon size={22} /> },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <button
                onClick={openSidebar}
                className={`fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-zinc-900 shadow-md md:hidden transition-opacity duration-200
        ${isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
                <MenuIcon className="w-6 h-6 text-black dark:text-white" />
            </button>

            <div
                className={`fixed inset-0 z-30 bg-black/30 dark:bg-white/10 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden 
                    ${isSidebarOpen ? "opacity-70" : "opacity-0 pointer-events-none"}`}
                onClick={closeSidebar}
            />

            <aside
                className={`fixed z-40 top-0 left-0 w-72 p-4 flex flex-col justify-between
                    bg-surface-light dark:bg-surface-dark text-black dark:text-white
                    shadow-lg border border-zinc-300 dark:border-transparent
                    transition-all duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    h-screen overflow-y-auto
                    md:translate-x-0 md:top-4 md:left-4 md:h-[calc(100vh-2rem)]
                    rounded-r-3xl md:rounded-xl`}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <Avatar className="w-30 h-30" src="/avatar.png" />
                        <h2 className="text-xl font-semibold text-center leading-tight">
                            Đoàn Thế Lực - Kaivian
                        </h2>
                        <p className="text-sm text-gray-400 dark:text-gray-600">Full-Stack Developer</p>
                        <a
                            href="/resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-6 py-2 rounded-xl text-sm flex items-center gap-1
                            bg-white border border-zinc-300
                            dark:bg-black dark:border-zinc-700
                            hover:bg-zinc-100 dark:hover:bg-zinc-800
                            transition"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    <nav className="space-y-3 mt-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition text-[14px] font-medium
                                    ${isActive
                                            ? "bg-zinc-300 dark:bg-zinc-700 text-black dark:text-white shadow-md"
                                            : "hover:bg-zinc-300 hover:text-white dark:hover:bg-zinc-700"
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="space-y-3 mt-6">
                    <div className="flex items-center justify-center px-6 py-2 rounded-4xl bg-zinc-200 dark:bg-zinc-800">
                        <ThemeSwitchButton />
                    </div>

                    <p className="text-[10px] text-gray-500 dark:text-gray-700 text-center leading-tight">
                        Designed & Built by Đoàn Thế Lực <br /> © 2025, All rights reserved.
                    </p>
                </div>
            </aside>
        </>
    );
}
