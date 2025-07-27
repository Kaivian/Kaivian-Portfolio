"use client";

import { useEffect, useRef, useState } from "react";
import { FlowIcon, LocationPoint } from "@/components/icons";
import { Skeleton } from "@heroui/skeleton";

const skills = [
    "/icons/programming/html-5.svg",
    "/icons/programming/css.svg",
    "/icons/programming/javascript.svg",
    "/icons/programming/vite.svg",
    "/icons/programming/react.svg",
    "/icons/programming/typescript.svg",
    "/icons/programming/tailwind.svg",
    "/icons/programming/mongo.svg",
    "/icons/programming/java.svg",
    "/icons/programming/spring.svg",
    "/icons/programming/mysql.svg",
    "/icons/programming/python.svg",
    "/icons/programming/github.svg",
];

const orther = [
    "/icons/interest/dj.svg",
    "/icons/interest/fl-studio.svg",
    "/icons/interest/photo.svg",
    "/icons/interest/editor.svg",
    "/icons/interest/minecraft.svg",
    "/icons/interest/roblox.svg",
    "/icons/interest/volleyball.svg",
    "/icons/interest/eclipse.svg",
    "/icons/interest/intellij.svg",
    "/icons/interest/sublime.svg",
    "/icons/interest/visual-studio.svg",
    "/icons/interest/visual-studio-code.svg",
];

function preloadImages(urls: string[]): Promise<void[]> {
    return Promise.all(
        urls.map(
            (url) =>
                new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve();
                    img.onerror = () => reject();
                    img.src = url;
                })
        )
    );
}

function MarqueeRow({
    icons,
    reverse = false,
    height = 60,
}: {
    icons: string[];
    reverse?: boolean;
    height?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement[]>([]);
    const animationRef = useRef<number>();
    const [paused, setPaused] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const baseSpeed = 0.4;
    const gap = 20;
    const currentSpeedRef = useRef(reverse ? -baseSpeed : baseSpeed);
    const targetSpeedRef = useRef(reverse ? -baseSpeed : baseSpeed);

    useEffect(() => {
        let cancelled = false;

        preloadImages(icons)
            .then(() => {
                if (!cancelled) setIsLoaded(true);
            })
            .catch(() => {
                if (!cancelled) setIsLoaded(true);
            });

        return () => {
            cancelled = true;
        };
    }, [icons]);

    useEffect(() => {
        if (!isLoaded) return;
        const container = containerRef.current;
        if (!container || iconsRef.current.length === 0) return;

        let xPositions = iconsRef.current.map(
            (icon, i) => i * (icon.offsetWidth + gap)
        );

        const animate = () => {
            const lerp = (start: number, end: number, t: number) =>
                start + (end - start) * t;

            currentSpeedRef.current = lerp(
                currentSpeedRef.current,
                targetSpeedRef.current,
                0.05
            );

            for (let i = 0; i < iconsRef.current.length; i++) {
                const icon = iconsRef.current[i];
                xPositions[i] -= currentSpeedRef.current;

                if (!reverse && xPositions[i] < -icon.offsetWidth) {
                    const maxRight = Math.max(...xPositions);
                    xPositions[i] = maxRight + icon.offsetWidth + gap;
                } else if (reverse && xPositions[i] > container.offsetWidth) {
                    const minLeft = Math.min(...xPositions);
                    xPositions[i] = minLeft - icon.offsetWidth - gap;
                }

                icon.style.transform = `translateX(${xPositions[i]}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [isLoaded]);

    useEffect(() => {
        targetSpeedRef.current = paused
            ? 0
            : reverse
                ? -baseSpeed
                : baseSpeed;
    }, [paused, reverse]);

    return (
        <Skeleton isLoaded={isLoaded} className="rounded-xl w-full">
            <div
                ref={containerRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="relative overflow-hidden w-full"
                style={{
                    height,
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                }}
            >
                {icons.map((src, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) iconsRef.current[i] = el;
                        }}
                        className="absolute top-0 left-0 w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <img
                            src={src}
                            alt={`icon-${i}`}
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                ))}
            </div>
        </Skeleton>
    );
}

export default function SkillMarquee() {
    return (
        <div className="w-full space-y-6">
            {/* Skill set */}
            <div>
                <div className="flex items-center space-x-2 mb-2">
                    <FlowIcon className="w-6 h-6 text-gray-900 dark:text-white" />
                    <h2 className="text-xl font-semibold tracking-wide capitalize text-sm text-gray-900 dark:text-white">
                        Skill set
                    </h2>
                </div>
                <MarqueeRow icons={skills} />
            </div>

            {/* Other */}
            <div>
                <div className="flex items-center space-x-2 mb-2">
                    <LocationPoint className="w-6 h-6 text-gray-900 dark:text-white" />
                    <h2 className="text-xl font-semibold tracking-wide capitalize text-sm text-gray-900 dark:text-white">
                        Other
                    </h2>
                </div>
                <MarqueeRow icons={orther} reverse />
            </div>
        </div>
    );
}