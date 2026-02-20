"use client";

import { useState } from "react";
import Link from "next/link";
import { animate, motion, type Variants } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const targetPosition =
        elem.getBoundingClientRect().top + window.scrollY - 80;
      animate(window.scrollY, targetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        when: "afterChildren" as const,
      },
    },
    open: {
      opacity: 1,
      height: "calc(100vh - 80px)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        when: "beforeChildren" as const,
      },
    },
  };

  const linkVariants: Variants = {
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  const containerVariants: Variants = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
        <div className="flex items-center justify-between px-6 lg:px-12 h-20 max-w-[1600px] mx-auto relative z-50 bg-background/0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
              O.
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
              href="#layanan"
              onClick={(e) => handleScroll(e, "#layanan")}
            >
              Layanan
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
              href="#process"
              onClick={(e) => handleScroll(e, "#process")}
            >
              Proses
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
              href="#portfolio"
              onClick={(e) => handleScroll(e, "#portfolio")}
            >
              Portfolio
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors hover-underline-animation"
              href="#pricing"
              onClick={(e) => handleScroll(e, "#pricing")}
            >
              Harga
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              className="hidden lg:block px-5 py-2.5 bg-white text-black text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
            >
              Hubungi Kami
            </Link>
            <button
              className="lg:hidden p-1.5 text-text-main hover:text-primary transition-colors z-[60] relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="flex flex-col gap-[6px] w-6 items-end justify-center scale-90">
                <span
                  className={`block h-[1.5px] bg-current rounded-full transform transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen
                      ? "w-full rotate-45 translate-y-[3.75px]"
                      : "w-full group-hover:w-4"
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-current rounded-full transform transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen
                      ? "w-full -rotate-45 -translate-y-[3.75px]"
                      : "w-4 group-hover:w-full"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-border-light overflow-hidden flex flex-col shadow-2xl"
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-col h-full p-8"
          >
            <nav className="flex flex-col">
              {(
                [
                  { href: "#layanan", label: "Layanan" },
                  { href: "#process", label: "Proses" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#pricing", label: "Harga" },
                ] as { href: string; label: string }[]
              ).map(({ href, label }) => (
                <motion.div key={href} variants={linkVariants}>
                  <Link
                    className="group/item flex items-center justify-between text-2xl font-normal hover:text-primary transition-all duration-200 border-b border-border-light/20 py-4"
                    href={href}
                    onClick={(e) => handleScroll(e, href)}
                  >
                    {label}
                    <span className="opacity-0 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-200 text-xl">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={linkVariants}
              className="mt-auto flex flex-col gap-5 pt-6"
            >
              <Link
                className="block w-full py-4 bg-white text-black text-center text-base font-semibold hover:bg-primary hover:text-white transition-colors"
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Hubungi Kami
              </Link>
              <div className="text-xs text-text-muted font-mono pb-6">
                <p className="mb-1">TANGERANG — INDONESIA</p>
                <p>© 2026 OIRUL.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
