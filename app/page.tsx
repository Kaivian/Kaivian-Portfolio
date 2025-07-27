"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "@/components/icons";
import SkillMarquee from "@/components/home/SkillMarquee";
import ExpertiseCard from "@/components/home/expertise-card";
import ContactCard from "@/components/home/contact-card";

const phrases = [
  "Engineering Pixels with Purpose",
  "Building Ideas into Interfaces",
  "Code. Design. Iterate.",
];

export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
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

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen w-full px-4 pt-20 md:pt-4 md:ml-[calc(min(100vw*0.25,350px)+18px)]">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Phần content bên trái (2 cột) */}
        <section className="xl:col-span-2 space-y-6">
          <div className="rounded-xl bg-gradient-to-r from-purple-700 to-indigo-800 p-6">
            <h2 className="text-xl font-medium flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-natural" />
              {currentDate}
            </h2>
            <h1 className="text-3xl font-bold font-orbitron">
              {displayedText}
              <span className="text-natural animate-blink">_</span>
            </h1>
          </div>
        </section>

        {/* Cột phải gộp 2 phần */}
        <div className="space-y-4 pb-4">
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
