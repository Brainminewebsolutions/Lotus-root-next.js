"use client";

import { useEffect, useState } from "react";
import styles from "../admin.module.css";

type Theme = "dark" | "light";
const KEY = "lrt-admin-theme";

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-admin-theme", theme);
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* storage blocked: the choice just lasts for this page */
  }
}

// Dark / light switch for the admin only. The saved choice is applied before
// first paint by the inline script in app/admin/layout.tsx.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-admin-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync with the attribute set by the pre-paint script
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const choose = (next: Theme) => {
    setTheme(next);
    apply(next);
  };

  return (
    <div className={styles.themeToggle} role="group" aria-label="Colour theme">
      <button
        type="button"
        className={`${styles.themeOption} ${theme === "dark" ? styles.themeOptionActive : ""}`}
        aria-pressed={theme === "dark"}
        onClick={() => choose("dark")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
        </svg>
        Dark
      </button>
      <button
        type="button"
        className={`${styles.themeOption} ${theme === "light" ? styles.themeOptionActive : ""}`}
        aria-pressed={theme === "light"}
        onClick={() => choose("light")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
        </svg>
        Light
      </button>
    </div>
  );
}
