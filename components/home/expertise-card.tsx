"use client";

import { UserCheckIcon, MinecraftIcon } from "@/components/icons";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
    Code2Icon,
    SearchIcon,
    LayoutDashboardIcon,
} from "lucide-react";

const expertiseList = [
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600">
                <Code2Icon className="text-white" size={22} />
            </div>
        ),
        title: "Web Development",
        content: "",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400">
                <MinecraftIcon className="text-white" size={24} />
            </div>
        ),
        title: "Minecraft Development",
        content: "",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
                <SearchIcon className="text-white" size={22} />
            </div>
        ),
        title: "Digital Marketing",
        content: "",
    },
    {
        icon: (
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600">
                <LayoutDashboardIcon className="text-white" size={22} />
            </div>
        ),
        title: "UI / UX Design",
        content: "",
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
