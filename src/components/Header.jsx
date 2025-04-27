import { useState, useCallback } from "react";
import NavBar from "./NavBar";
import clsx from 'clsx';

// Constants for reusable styles
const BUTTON_STYLE = `
  menu-btn md:hidden w-10 h-10 grid place-items-center 
  bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/[0.02] 
  backdrop-blur-2xl hover:bg-zinc-50/15 transition-[transform,background-color] 
  active:scale-95
`;

const HEADER_STYLE = `
  fixed top-0 left-0 w-full h-20 flex items-center z-40 
  bg-gradient-to-b from-zinc-900 to-zinc-900/0
`;

const CONTACT_STYLE = clsx(
  'max-w-max h-9 flex items-center gap-2 px-4 rounded-xl',
  'font-medium text-sm ring-1 ring-zinc-50/5 ring-inset',
  'transition-[background-color]',
  {
    'bg-zinc-50 text-zinc-900 active:bg-zinc-50/80': true
  }
)


export default function Header() {
  const [navOpen, setNavOpen] = useState(false); // Start with closed menu on mobile
  const menuOption = navOpen ? "close" : "menu";

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleNav = useCallback(() => setNavOpen(prev => !prev), []);

  return (
    <header className={HEADER_STYLE}>
     <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
  {/* Logo - stays left */}
  <h1 className="md:justify-self-start">
    <a href="/" className="logo">
      <img src="/Images/logo.svg" width={40} height={40} alt="Leon Salvatore" />
    </a>
  </h1>

  {/* Navigation - centered */}
  <div className="relative md:justify-self-center">
    <button className={BUTTON_STYLE} onClick={toggleNav}>
      <span className="material-symbols-rounded">{menuOption}</span>
    </button>
    <NavBar navOpen={navOpen} />
  </div>

  {/* Contact - right-aligned and hidden on mobile */}
  <div className="hidden md:block md:justify-self-end">
    <a href="#contact" className={CONTACT_STYLE}>
      Contact Me
    </a>
  </div>
</div>
    </header>
  );
}