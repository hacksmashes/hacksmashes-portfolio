"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(true);

  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors duration-200 ease-editorial hover:border-border-strong hover:text-fg"
    >
      {mounted && isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 1v2M8 13v2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M1 8h2M13 8h2M2.9 13.1l1.4-1.4M11.7 4.3l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M13.5 9.5A5.5 5.5 0 116.5 2.5a4.4 4.4 0 007 7z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
