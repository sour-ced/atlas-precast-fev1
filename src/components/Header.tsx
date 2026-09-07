"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinks } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm py-3">
      <div className="max-w-[100rem] mx-auto px-6 md:px-16 lg:px-20 flex items-center justify-between">
        <Link href="/" className="relative w-36 sm:w-44 aspect-[2.77/1] shrink-0">
          <Image
            src="/images/logo/ATLAS_PRECAST_BLUE.png"
            alt="Atlas Precast"
            fill
            sizes="176px"
            className="object-contain object-left"
            preload
          />
        </Link>

        <nav className="hidden lg:flex items-center">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              className={clsx(
                "px-6 border-accent",
                i < navLinks.length - 1 && "border-r-2"
              )}
            >
              <NavItem link={link} />
            </div>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex items-center justify-center w-10 h-10 border-2 -skew-x-[10deg] border-primary text-primary"
        >
          <svg className="skew-x-[10deg]" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-primary lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center px-6 py-5">
              <Image
                src="/images/logo/ATLAS_PRECAST_BLUE.png"
                alt="Atlas Precast"
                width={140}
                height={50}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 mt-8">
              {navLinks.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  mobile
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  link,
  mobile = false,
  onNavigate,
}: {
  link: (typeof navLinks)[number];
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const classes = clsx(
    "transition-colors duration-200",
    mobile
      ? "text-3xl font-heading tracking-wide py-3 text-white border-b border-white/10 hover:text-accent"
      : "font-medium text-sm uppercase tracking-wide hover:text-accent text-primary"
  );

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onNavigate}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={classes} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}
