"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";
import ThemeSwitch from "@/components/theme-switch";
import useHideOnScroll from "@/hooks/useHideOnScroll";

import {
    DownloadIcon,
    HomeIcon,
    UserIcon,
    TrophyIcon,
    FolderIcon,
    BookOpenIcon,
    MenuIcon,
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
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setSidebarOpen(!mobile);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const hideNav = useHideOnScroll(isMobile);

    useEffect(() => {
        if (isMobile) {
            document.body.classList.toggle("overflow-hidden", isSidebarOpen);
        }
    }, [isSidebarOpen, isMobile]);

    return (
        <>
            {/* Mobile Nav Bar */}
            {isMobile && (
                <nav
                    className={`fixed top-0 left-0 w-full h-16 z-20 bg-surface-light dark:bg-surface-dark backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-[18px] flex items-center justify-between md:hidden shadow-md transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"
                        }`}
                >
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md bg-surface-light dark:bg-surface-dark shadow-md"
                    >
                        <MenuIcon className="w-6 h-6 text-black dark:text-white" />
                    </button>
                    <Avatar className="w-8 h-8" src="/avatar.png" />
                </nav>
            )}

            {/* Overlay khi mở Sidebar mobile */}
            {isMobile && (
                <div
                    className={`fixed inset-0 z-30 bg-black/40 dark:bg-white/10 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 z-40 left-0 max-sm:w-[clamp(80px,75vw,450px)] md:w-[clamp(80px,25vw,450px)] p-[18px] h-screen overflow-y-auto flex flex-col justify-between
                    bg-surface-light dark:bg-surface-dark text-black dark:text-white
                    border border-zinc-300 dark:border-surface-dark shadow-lg
                    transition-transform duration-300 ease-in-out
                    ${isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : ""}
                    rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none
                    md:rounded-xl md:top-[18px] md:left-[18px] md:h-[calc(100vh-36px)]`}
            >
                {/* Avatar + Info */}
                <div>
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <Avatar className="w-30 h-30" src="/avatar.png" />
                        <h2 className="text-xl font-semibold text-center leading-tight">
                            Đoàn Thế Lực - Kaivian
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Full-Stack Developer
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 px-6 py-2 rounded-xl text-sm flex items-center gap-1
              bg-surface-light border border-zinc-300
              dark:bg-surface-dark dark:border-zinc-700
              hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    {/* Nav Links */}
                    <nav className="space-y-3 mt-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-[18px] py-3 rounded-xl transition text-[14px] font-medium ${isActive
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

                {/* Bottom area */}
                <div className="space-y-3 mt-6">
                    <div className="flex items-center justify-center px-6 py-2 rounded-4xl bg-zinc-200 dark:bg-zinc-800 min-h-[45px]">
                        <ThemeSwitch />
                    </div>
                    <p className="text-[10px] text-[#999999] text-center leading-tight">
                        Designed & Built by Đoàn Thế Lực <br /> © 2025, All rights reserved.
                    </p>
                </div>
            </aside>
        </>
    );
}
