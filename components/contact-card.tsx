"use client";

import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaDiscord } from "react-icons/fa";
import { SiGmail, SiSpigotmc } from "react-icons/si";
import { Mail } from "lucide-react";
import { Tooltip } from "@heroui/react";

const socials = [
    {
        name: "Gmail",
        icon: <SiGmail className="w-6 h-6" />,
        href: "mailto:theluc.1746@gmail.com",
    },
    {
        name: "Phone",
        icon: <FaPhone className="w-5 h-5" />,
        href: "tel:+84969442579",
    },
    {
        name: "Facebook",
        icon: <FaFacebook className="w-6 h-6" />,
        href: "https://www.facebook.com/dt.luc1746",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="w-6 h-6" />,
        href: "https://www.linkedin.com/in/kaivian/",
    },
    {
        name: "GitHub",
        icon: <FaGithub className="w-6 h-6" />,
        href: "https://github.com/Kaivian",
    },
    {
        name: "Discord",
        icon: <FaDiscord className="w-6 h-6" />,
        href: "https://discordapp.com/users/591157562821443594",
    },
    {
        name: "SpigotMC",
        icon: <SiSpigotmc className="w-6 h-6" />,
        href: "https://www.spigotmc.org/members/kaivian.2315121/",
    },
];

export default function ContactCard() {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Mail className="text-gray-900 dark:text-white" />
                <h2 className="text-lg font-semibold">Get in touch</h2>
            </div>

            <div className="flex items-center space-x-4">
                {socials.map((social) => (
                    <Tooltip key={social.name} content={social.name} showArrow={true}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="hover:text-gray-500 transition-colors"
                        >
                            {social.icon}
                        </a>
                    </Tooltip>
                ))}
            </div>

            <p className="text-[11px] text-[#999999]">
                Let&apos;s build something great together — feel free to connect with me
                through any of the platforms above.
            </p>
        </div>
    );
}
