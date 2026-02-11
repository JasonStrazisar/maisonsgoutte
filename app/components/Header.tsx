"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#bilan", label: "Bilan" },
  { href: "#equipe", label: "Équipe" },
  { href: "#engagements", label: "Engagements" },
  { href: "#infos", label: "Infos" },
];

const spring = { type: "spring" as const, stiffness: 300, damping: 30, mass: 1 };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating-header-wrapper" style={{ padding: "0 42px" }}>
      <motion.nav
        className="floating-header"
        style={{
          maxWidth: 1120,
          WebkitBackdropFilter: scrolled ? "blur(22px)" : "blur(0px)",
        }}
        animate={
          scrolled
            ? {
                backgroundColor: "rgba(247,247,247,0.68)",
                backdropFilter: "blur(22px)",
                boxShadow: "0 4px 34px rgba(0,0,0,0)",
                borderRadius: 12,
                y: 22,
                padding: "20px 42px",
                border: "1px solid rgba(0,0,0,0.13)",
              }
            : {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                boxShadow: "none",
                borderRadius: 0,
                y: 0,
                padding: "20px 42px",
                border: "1px solid transparent",
              }
        }
        transition={spring}
      >
        <a href="/" className="logo" style={{ position: "relative", width: 156, height: 23 }}>
          <Image
            src="/logo_white.svg"
            alt="Générations Unies pour Maisonsgoutte"
            width={156}
            height={23}
            style={{ position: "absolute", inset: 0, opacity: scrolled ? 0 : 1, transition: "opacity .4s ease" }}
          />
          <Image
            src="/logo.svg"
            alt=""
            width={156}
            height={23}
            style={{ position: "absolute", inset: 0, opacity: scrolled ? 1 : 0, transition: "opacity .4s ease" }}
          />
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: scrolled ? "#2fa36b" : "#ffffff",
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
