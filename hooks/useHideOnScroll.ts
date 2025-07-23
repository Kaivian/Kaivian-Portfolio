"use client";

import { useEffect, useState } from "react";

export default function useHideOnScroll(active = true) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!active) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return hidden;
}
