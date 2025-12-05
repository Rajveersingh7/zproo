"use client";

import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {href: "/", label: "Ride"},
    {href: "/zpass", label: "ZPass"},
    {href: "/rentals", label: "Rentals"},
    {href: "/services", label: "Services"},
    {href: "/drive", label: "Drive"}
  ];

  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-xl"
          : "bg-white/15 backdrop-blur-2xl border-b border-white/40 shadow-lg"
      }`}
      style={{
        backdropFilter: scrolled
          ? "blur(20px) saturate(180%)"
          : "blur(24px) saturate(180%)",
        WebkitBackdropFilter: scrolled
          ? "blur(20px) saturate(180%)"
          : "blur(24px) saturate(180%)"
      }}
    >
      {/* Glassmorphism overlay for extra depth */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Main Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="relative"
              >
                <Image
                  src="/logo.png"
                  alt="Zproo"
                  width={150}
                  height={50}
                  priority
                  className="h-36 w-auto transition-opacity group-hover:opacity-90"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu - Ride & Drive */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, idx) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: idx * 0.1}}
                    className="relative group"
                  >
                    <span className="relative z-10 py-2 px-4 text-gray-700 font-medium transition-colors group-hover:text-emerald-600 rounded-full block">
                      {link.label}
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-linear-to-r from-emerald-50 to-teal-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      layoutId="nav-indicator"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - About, Contact, Login, Signup */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/about">
              <motion.span
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-full hover:bg-emerald-50/50 cursor-pointer"
              >
                About
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors rounded-full hover:bg-emerald-50/50 cursor-pointer"
              >
                Contact
              </motion.span>
            </Link>
            <Link href="/login">
              <motion.button
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
                className="ml-2 px-6 py-2.5 text-gray-700 hover:text-emerald-600 hover:border-emerald-500 font-semibold transition-all rounded-full border-2 border-gray-300 hover:shadow-md cursor-pointer"
              >
                Log in
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
                className="px-6 py-2.5 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 btn-glow cursor-pointer"
              >
                Sign up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-emerald-50 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            className="lg:hidden glass-dark border-t border-emerald-200/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: idx * 0.05}}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600 rounded-xl transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-emerald-200/50 my-2"></div>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600 rounded-xl transition-all font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600 rounded-xl transition-all font-medium"
              >
                Contact
              </Link>
              <div className="border-t border-emerald-200/50 my-2"></div>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600 rounded-xl transition-all font-medium text-center"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all text-center font-semibold shadow-lg"
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
