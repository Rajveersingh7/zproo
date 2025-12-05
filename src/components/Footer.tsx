"use client";

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      {name: "About Us", href: "/about"},
      {name: "Our Services", href: "/services"},
      {name: "Contact Us", href: "/contact"},
      {name: "Careers", href: "/careers"}
    ],
    services: [
      {name: "Book a Ride", href: "/"},
      {name: "Vehicle Rentals", href: "/rentals"},
      {name: "ZPass", href: "/zpass"},
      {name: "Drive with Us", href: "/drive"}
    ],
    support: [
      {name: "Help Center", href: "/contact"},
      {name: "Safety", href: "/contact"},
      {name: "Privacy Policy", href: "/privacy"},
      {name: "Terms of Service", href: "/terms"}
    ]
  };

  const socialLinks = [
    {icon: Facebook, href: "https://facebook.com", label: "Facebook"},
    {icon: Twitter, href: "https://twitter.com", label: "Twitter"},
    {icon: Instagram, href: "https://instagram.com", label: "Instagram"},
    {icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn"},
    {icon: Youtube, href: "https://youtube.com", label: "YouTube"}
  ];

  return (
    <footer className="bg-white border-t border-emerald-200/20 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-emerald-50/20 via-transparent to-teal-50/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
        {/* Logo at Top Center */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="flex justify-center mb-6"
        >
          <Link href="/" className="inline-block">
            <motion.div
              whileHover={{scale: 1.1, rotate: 5}}
              whileTap={{scale: 0.95}}
            >
              <Image
                src="/icon.png"
                alt="Zproo"
                width={60}
                height={60}
                priority
                className="transition-all drop-shadow-lg"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Three Sections */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Company Links */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1}}
              className="text-center md:text-left"
            >
              <h3 className="font-bold mb-3 text-base bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.2 + idx * 0.05}}
                  >
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{x: 5}}
                        className="text-gray-700 hover:text-emerald-600 transition-colors inline-block cursor-pointer font-medium"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="text-center md:text-left"
            >
              <h3 className="font-bold mb-4 text-lg bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.3 + idx * 0.05}}
                  >
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{x: 5}}
                        className="text-gray-700 hover:text-emerald-600 transition-colors inline-block cursor-pointer font-medium"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
              className="text-center md:text-left"
            >
              <h3 className="font-bold mb-4 text-lg bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{opacity: 0, x: -10}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.4 + idx * 0.05}}
                  >
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{x: 5}}
                        className="text-gray-700 hover:text-emerald-600 transition-colors inline-block cursor-pointer font-medium"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="flex justify-center gap-3 mb-6"
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{delay: 0.5 + idx * 0.1, type: "spring"}}
              whileHover={{scale: 1.2, y: -5, rotate: 360}}
              whileTap={{scale: 0.9}}
              className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 hover:text-white hover:from-emerald-500 hover:to-teal-500 transition-all shadow-sm hover:shadow-md cursor-pointer"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Info Bar */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-emerald-200/30">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91-XXXXX-XXXXX",
                href: "tel:+91XXXXXXXXXX",
                delay: 0.1
              },
              {
                icon: Mail,
                title: "Email",
                content: "support@zproo.com",
                href: "mailto:support@zproo.com",
                delay: 0.2
              },
              {
                icon: MapPin,
                title: "Office",
                content: "Hinjewadi, Pune",
                href: null,
                delay: 0.3
              }
            ].map((contact) => (
              <motion.div
                key={contact.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: contact.delay}}
                whileHover={{scale: 1.05, y: -5}}
                className="flex items-start gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-emerald-200/40 shadow-sm"
              >
                <motion.div
                  whileHover={{rotate: 360, scale: 1.1}}
                  transition={{duration: 0.5}}
                  className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center shrink-0 shadow-sm"
                >
                  <contact.icon className="h-4 w-4 text-emerald-600" />
                </motion.div>
                <div>
                  <div className="text-gray-800 font-semibold mb-0.5 text-sm">
                    {contact.title}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{contact.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          className="pt-6 border-t border-emerald-200/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 text-xs text-center md:text-left">
              © {currentYear} Zproo. All rights reserved. |{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                Ride Electrified
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {[
                {href: "/privacy", label: "Privacy Policy"},
                {href: "/terms", label: "Terms of Service"},
                {href: "/contact", label: "Contact"}
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    whileHover={{scale: 1.1}}
                    className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
