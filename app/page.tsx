"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "@/components/icons";

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
        setSpeed(100);
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
    <main className="min-h-screen w-full px-4 pt-20 md:pt-4 md:ml-[317px] xl:ml-[317px]">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* === Main Column - 2/3 === */}
        <section className="xl:col-span-2 space-y-6">
          {/* Header */}
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

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["🎖️", "21 Certificates"],
              ["🖥️", "10 Projects"],
              ["💡", "20 Technologies"],
              ["⏳", "2 Years Experience"],
              ["🎖️", "21 Certificates"],
              ["🖥️", "10 Projects"],
              ["💡", "20 Technologies"],
              ["⏳", "2 Years Experience"],
            ].map(([icon, label], i) => (
              <div key={i} className="rounded-xl bg-zinc-900 p-4">
                <div className="text-4xl">{icon}</div>
                <p className="text-lg font-semibold mt-2">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === Aside Column - 1/3 === */}
        <aside className="space-y-4">
          <h2 className="text-xl font-semibold">Featured</h2>
          <div className="space-y-4">
            {[
              ["Open Letter to BSIT Students", "June 6, 2025"],
              ["My College Journey", "June 6, 2025"],
              ["Open Letter to BSIT Students", "June 6, 2025"],
              ["My College Journey", "June 6, 2025"],
              ["Open Letter to BSIT Students", "June 6, 2025"],
              ["My College Journey", "June 6, 2025"],
            ].map(([title, date], i) => (
              <div key={i} className="rounded-xl bg-zinc-900 p-4">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-zinc-400">{date}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
