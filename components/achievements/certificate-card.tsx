"use client";

import React, { useState, useEffect } from "react";
import {
    Card,
    CardFooter,
    Avatar,
    Image,
} from "@heroui/react";
import { CalendarIcon, ExternalLinkIcon } from "lucide-react";

type CertificateCardProps = {
    title: string;
    subtitle: string;
    issueDate: string;
    avatarImg: string;
    certificateImg: string;
    credentialLink?: string;
};

export default function CertificateCard({
    title,
    subtitle,
    issueDate,
    avatarImg,
    certificateImg,
    credentialLink,
}: CertificateCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        <>
            {isOpen && (
                <div
                    onClick={handleClose}
                    className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${isVisible ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"
                        }`}
                >
                    <img
                        src={certificateImg}
                        alt="Certificate Fullscreen"
                        onClick={(e) => e.stopPropagation()}
                        className={`max-w-[90vw] max-h-[90vh] xl:max-w-[80vw] xl:max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>
            )}

            <Card className="group relative w-full bg-transparent shadow-none border-none overflow-hidden">
                <div className="relative z-0 cursor-pointer" onClick={() => !credentialLink && setIsOpen(true)}>
                    <Image
                        alt="Certificate Image"
                        className="w-full aspect-[4/3] object-cover"
                        src={certificateImg}
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <div
                            className="w-full h-full bg-gradient-to-t from-black/60 via-black/40 to-transparent
                            flex items-end justify-start p-4 rounded-xl
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-300 ease-out"
                        >
                            {credentialLink ? (
                                <a
                                    href={credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-black/70 rounded-md hover:bg-white hover:text-black hover:shadow-md transition-colors duration-300 cursor-pointer"
                                >
                                    <ExternalLinkIcon className="w-4 h-4" />
                                    Show credential
                                </a>
                            ) : (
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-black/70 rounded-md hover:bg-white hover:text-black hover:shadow-md transition-colors duration-300 cursor-pointer"
                                >
                                    <ExternalLinkIcon className="w-4 h-4" />
                                    Show credential
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <CardFooter className="flex items-start gap-[18px] md:px-0 px-[18px] py-3 bg-transparent">
                    <Avatar size="md" radius="md" src={avatarImg} />
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-base text-default-foreground">
                            {title}
                        </h4>
                        <p className="text-sm text-default-500">{subtitle}</p>
                        <div className="flex items-center gap-1 text-sm text-default-400 mt-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>Issued {issueDate}</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}
