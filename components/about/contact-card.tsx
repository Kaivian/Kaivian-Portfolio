"use client";

import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail, SiSpigotmc } from "react-icons/si";
import { Mail } from "lucide-react";

const socials = [
    {
        name: "Gmail",
        icon: <SiGmail className="w-6 h-6" />,
        href: "mailto:theluc.1746@gmail.com",
    },
    {
        name: "Facebook",
        icon: <FaFacebook className="w-6 h-6" />,
        href: "https://www.facebook.com/dt.luc1746",
    },
    {
        name: "GitHub",
        icon: <FaGithub className="w-6 h-6" />,
        href: "https://github.com/Kaivian",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="w-6 h-6" />,
        href: "https://www.linkedin.com/in/kaivian/",
    },
    {
        name: "SpigotMC",
        icon: <SiSpigotmc className="w-6 h-6" />,
        href: "https://www.spigotmc.org/members/kaivian.2315121/",
    },
    {
        name: "Phone",
        icon: <FaPhone className="w-5 h-5" />,
        href: "tel:+84969442579",
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
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="hover:text-gray-500 transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="text-[12px] text-gray-400">
                Let&apos;s build something great together — feel free to connect with me
                through any of the platforms above.
            </p>
        </div>
    );
}
