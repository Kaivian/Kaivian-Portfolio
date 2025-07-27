"use client";

import "@/styles/globals.css";

import { useEffect, useState } from "react";
import { CalendarIcon } from "@/components/icons";
import SkillMarquee from "@/components/home/SkillMarquee";
import ExpertiseCard from "@/components/home/expertise-card";
import ContactCard from "@/components/home/contact-card";

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
          <div className="rounded-xl bg-gradient-to-r from-purple-700 to-indigo-800 p-6">
            <h2 className="text-xl font-medium flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-natural" />
              {date && <span>{date}</span>}
            </h2>
            <h1 className="text-3xl font-bold font-orbitron">
              {displayedText}
              <span className="text-natural animate-blink">_</span>
            </h1>
          </div>
        </section>

        {/* Right content */}
        <div className="space-y-[18px]">
          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-lg text-gray-900 dark:text-white">
            <SkillMarquee />
          </aside>

          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-lg text-gray-900 dark:text-white">
            <ExpertiseCard />
          </aside>

          <aside className="rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-lg text-gray-900 dark:text-white">
            <ContactCard />
          </aside>
        </div>
      </div>
    </main>
  );
}
