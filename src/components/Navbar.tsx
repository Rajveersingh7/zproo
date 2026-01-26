"use client";

import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when mobile menu is open (mobile only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Only prevent scroll on mobile devices
    if (isMobile && isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {href: "/ride", label: "Ride"},
    {href: "/zpass", label: "ZPass"},
    {href: "/rentals", label: "Rentals"},
    {href: "/self-drive", label: "Self Drive"},
    {href: "/services", label: "Services"},
    {href: "/drive", label: "Drive"}
  ];

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5"
          : "bg-white/80 backdrop-blur-lg border-b border-gray-200/30 shadow-sm shadow-gray-900/3"
      }`}
      style={{
        backdropFilter: scrolled
          ? isMobile ? "blur(8px)" : "blur(16px) saturate(180%)"
          : isMobile ? "blur(6px)" : "blur(12px) saturate(180%)",
        WebkitBackdropFilter: scrolled
          ? isMobile ? "blur(8px)" : "blur(16px) saturate(180%)"
          : isMobile ? "blur(6px)" : "blur(12px) saturate(180%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-20">
          {/* Logo and Main Navigation */}
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="relative"
              >
                <Image
                  src="/icon.png"
                  alt="Zproo"
                  width={50}
                  height={50}
                  priority
                  className="h-10 w-auto lg:h-12 transition-opacity group-hover:opacity-80"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu - Ride & Drive */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: idx * 0.05, duration: 0.15, ease: "easeOut"}}
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className="px-4 py-2.5 text-gray-700 hover:text-sky-600 font-medium text-sm transition-all rounded-lg hover:bg-sky-50/80 cursor-pointer"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - About, Contact, Login, Signup */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <Link href="/about">
                <motion.span
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="px-4 py-2.5 text-gray-700 hover:text-sky-600 font-medium text-sm transition-all duration-200 rounded-lg hover:bg-sky-50/80 cursor-pointer"
                >
                  About
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="px-4 py-2.5 text-gray-700 hover:text-sky-600 font-medium text-sm transition-all duration-200 rounded-lg hover:bg-sky-50/80 cursor-pointer"
                >
                  Contact
                </motion.span>
              </Link>
            </div>
            <Link href="/login">
              <motion.button
                whileHover={{scale: 1.02, y: -1}}
                whileTap={{scale: 0.98}}
                className="ml-1 px-5 py-2.5 text-gray-700 hover:text-sky-600 hover:border-sky-400 font-semibold text-sm transition-all duration-200 rounded-lg border border-gray-300 hover:bg-sky-50/50 hover:shadow-sm cursor-pointer"
              >
                Log in
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                whileHover={{scale: 1.02, y: -1}}
                whileTap={{scale: 0.98}}
                className="px-5 py-2.5 bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-lg font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 cursor-pointer"
              >
                Sign up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.15, ease: "easeOut"}}
            className="lg:hidden bg-white/95 backdrop-blur-md sm:backdrop-blur-xl border-t border-gray-200/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-all font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-200/50 my-2"></div>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-all duration-200 font-medium text-sm"
              >
                Contact
              </Link>
              <div className="border-t border-gray-200/50 my-2"></div>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-all duration-200 text-center font-semibold text-sm border border-gray-300"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all text-center font-semibold text-sm shadow-md shadow-sky-500/20"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
