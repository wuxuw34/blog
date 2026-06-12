"use client";

import Link from "next/link";
import { Search, Moon, Sun, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/common/theme/ThemeProvider";
import siteConfig from "@/config/site-config";

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Links", href: "/links" },
  // { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full relative">
      <div
        className={[
          "mx-auto flex h-14 max-w-5xl items-center justify-between px-4 transition-all duration-300",
          scrolled
            ? "mt-3 rounded-full border border-neutral-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/90"
            : "mt-0 rounded-none border-0 bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          {siteConfig.profile.username}
        </Link>

        {/* Desktop 导航 */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-neutral-600 transition-colors dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 font-bold hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-1">
            {/* <button
              aria-label="Search"
              className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              <Search size={18} />
            </button> */}
            {/* <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}
          </div>
        </nav>

        {/* Mobile 按钮组 */}
        <div className="flex items-center gap-1 md:hidden">
          {/* 
          <button
            aria-label="Search"
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-foreground dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile 下拉菜单 */}
      <div
        className={[
          "absolute left-0 top-full z-40 w-full md:hidden",
          "transition-all duration-300 ease-in-out shadow",
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
          scrolled ? ' rounded-xl  mt-1 bg-white mx-1 box-border' : 'bg-[#f9f7f6]'
        ].join(" ")}
      >
        <nav className="">
          <div className="mx-auto max-w-5xl px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-bold text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
