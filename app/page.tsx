"use client";

import "@/styles/globals.css";

import { useEffect, useState } from "react";
import { CalendarIcon } from "@/components/icons";
import SkillMarquee from "@/components/home/SkillMarquee";
import ExpertiseCard from "@/components/home/expertise-card";
import ContactCard from "@/components/contact-card";
import CareerStats from "@/components/home/career-stats";

export default function Home() {
  const [date, setDate] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const phrases = [
    "Engineering Pixels with Purpose",
    "Building Ideas into Interfaces",
    "Code. Design. Iterate.",
  ];

  const fullTextExpected = phrases.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setDate(formatted);
  }, []);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setSpeed(50);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
        setSpeed(50);
      }, speed);
    }

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  return (
    <main className="min-h-screen w-full px-[18px] pt-20 md:pt-[18px] md:ml-[calc(min(100vw*0.25,450px)+18px)]">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-[18px]">
        {/* Left content */}
        <section className="xl:col-span-2">
          <div
            className="rounded-xl p-6 bg-cover bg-no-repeat y-4 bg-[position:right_bottom] border border-zinc-300 dark:border-surface-dark shadow-lg"
            style={{
              backgroundImage: "url('/banner-home.jpg')",
            }}
          >
            <h2 className="xl:pl-[10px] xl:pt-[5px] text-xl font-medium flex items-center gap-2 overflow-hidden text-white drop-shadow-md"
              style={{
                textShadow: "0 1px 3px rgba(0,0,0,0.7)",
              }}>
              <CalendarIcon className="w-5 h-5 text-natural shrink-0" />
              {date && (
                <span className="truncate block w-full text-base sm:text-lg md:text-xl lg:text-xl">
                  {date}
                </span>
              )}
            </h2>

            <div
              className="xl:pl-[10px] font-bold font-orbitron text-white drop-shadow-md flex flex-col justify-end overflow-hidden h-[8em] md:h-[8em] xl:h-[12em]"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                lineHeight: "1.4",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }}
            >
              <span className="whitespace-pre-wrap break-words">
                {displayedText}
                <span className="animate-blink">_</span>
              </span>
            </div>
          </div>
          <div className="pt-[18px]">
            <CareerStats />
          </div>
        </section>

        {/* Right content */}
        <div className="space-y-[18px] pb-[18px]">
          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg">
            <SkillMarquee />
          </aside>

          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg">
            <ExpertiseCard />
          </aside>

          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 text-gray-900 dark:text-white border border-zinc-300 dark:border-surface-dark shadow-lg">
            <ContactCard />
          </aside>
        </div>
      </div>
    </main>
  );
}
