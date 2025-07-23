"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react"

const ThemeSwitch = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    const activeTheme = theme === "system" ? resolvedTheme : theme;
    setIsDark(activeTheme === "dark");
  }, [mounted, theme, resolvedTheme]);

  if (!mounted) return null;

  const handleThemeChange = (selected: boolean) => {
    setIsDark(selected);
    setTheme(selected ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-md font-medium text-default-700 text-[14px]">
        {theme === "system" ? "System theme" : isDark ? "Dark mode" : "Light mode"}
      </span>

      <Switch
        isSelected={isDark}
        onValueChange={handleThemeChange}
        size="lg"
        color="default"
        startContent={<SunIcon className="w-4 h-4" />}
        endContent={<MoonIcon className="w-4 h-4" />}
      />
    </div>
  );
};

export default ThemeSwitch;
