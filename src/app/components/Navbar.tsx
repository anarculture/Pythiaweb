import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Bio", href: "#bio" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center text-white mix-blend-difference">
        <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-sm tracking-wider font-medium">
          Pythia
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em]">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden flex flex-col gap-[4px] p-2" onClick={() => setIsOpen(true)}>
          <span className="block w-6 h-[1px] bg-white"></span>
          <span className="block w-6 h-[1px] bg-white"></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0E3931] z-50 flex flex-col p-6 text-white"
          >
            <div className="flex justify-between items-center py-2">
              <span className="text-sm tracking-wider font-medium">Pythia</span>
              <button className="p-2 text-sm uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 mt-24 px-4 text-xs uppercase tracking-[0.2em]">
              {links.map((link, i) => (
                <motion.a 
                  key={link.href} 
                  href={link.href} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={(e) => handleScroll(e, link.href)} 
                  className="hover:opacity-60 transition-opacity pb-2 border-b border-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
