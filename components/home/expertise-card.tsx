"use client";

import { UserCheckIcon, MinecraftIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
    Code2Icon,
    Bot,
    MonitorCog,
    Infinity
} from "lucide-react";

const expertiseList = [
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500">
                <Code2Icon className="text-white" size={22} />
            </div>
        ),
        title: "Web Development",
        content: "Proficient in building full-stack web applications using modern frameworks such as React.js and Tailwind CSS for the frontend, with Spring Boot for the backend. Experienced in implementing role-based access control, interactive UI elements, and optimized API integration. Capable of designing scalable and maintainable systems aligned with clean architecture principles.",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 via-blue-400 to-violet-600">
                <Infinity className="text-white" size={22} />
            </div>
        ),
        title: "Software Engineering",
        content: "Strong understanding of object-oriented programming, design patterns, modularization, encapsulation, inheritance, and polymorphism. Proven ability to structure codebases for scalability and maintainability. Experienced in managing file I/O, exception handling, and system-level abstractions using Java and C++.",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400">
                <MinecraftIcon className="text-white" size={24} />
            </div>
        ),
        title: "Minecraft Development",
        content: "Experienced in developing modular Minecraft plugins using Java and the Spigot/Bukkit API. Proficient in creating maintainable and scalable codebases, with custom modules (e.g., KLibrary, KWardrobe) packaged into cohesive deliverables (KPlugins). Strong understanding of event-driven architecture and game logic extension.",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
                <Bot className="text-white" size={22} />
            </div>
        ),
        title: "AI & Machine Learning",
        content: "Well-versed in applying deep learning and meta-learning techniques to solve complex problems across various domains. Capable of designing and training neural networks, preprocessing data effectively, evaluating model performance, and deploying AI solutions in practical environments. Passionate about exploring cutting-edge research and integrating AI into real-world applications.",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-200 via-green-400 to-blue-500">
                <Bot className="text-white" size={22} />
            </div>
        ),
        title: "Computer Networks",
        content: "Hands-on experience configuring IPv4/IPv6 networks, routers, and switches using simulation tools such as Cisco Packet Tracer. Familiar with subnetting, NAT, DHCP, and routing protocols. Capable of troubleshooting network configurations and understanding how data flows across layers of the OSI model.",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-400 via-indigo-400 to-violet-500">
                <MonitorCog className="text-white" size={22} />
            </div>
        ),
        title: "Systems Programming",
        content: "Solid foundation in low-level programming using C/C++ on Linux. Proficient in implementing file allocation strategies, disk scheduling algorithms (e.g., FCFS, LOOK, SSTF), and simulating core OS-level concepts such as virtual memory, paging, and TLB management. Capable of writing custom system utilities and analyzing performance implications of design decisions.",
    },
];

export default function ExpertiseCard() {
    return (
        <div className="bg-surface-light dark:bg-surface-dark text-foreground">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <UserCheckIcon className="text-gray-900 dark:text-white" />
                Expertise
            </h2>

            <Accordion>
                {expertiseList.map((item, index) => (
                    <AccordionItem
                        key={index}
                        aria-label={item.title}
                        title={
                            <div className="px-0 flex items-center gap-3 leading-none">
                                {item.icon}
                                <span className="text-bold font-medium">{item.title}</span>
                            </div>
                        }
                        className="bg-surface-light dark:bg-surface-dark text-foreground border-b last:border-none"
                    >
                        <p className="text-sm text-muted-foreground pb-2">
                            {item.content}
                        </p>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
