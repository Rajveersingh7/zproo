import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      {name: "About Us", href: "/about"},
      {name: "Careers", href: "/careers"},
      {name: "Blog", href: "/blog"},
      {name: "Press", href: "/press"}
    ],
    services: [
      {name: "Book a Ride", href: "/ride"},
      {name: "Become a Driver", href: "/driver"},
      {name: "Safety", href: "/safety"},
      {name: "Cities", href: "/cities"}
    ],
    support: [
      {name: "Help Center", href: "/help"},
      {name: "Contact Us", href: "/contact"},
      {name: "Privacy Policy", href: "/privacy"},
      {name: "Terms of Service", href: "/terms"}
    ]
  };

  const socialLinks = [
    {icon: Facebook, href: "https://facebook.com", label: "Facebook"},
    {icon: Twitter, href: "https://twitter.com", label: "Twitter"},
    {icon: Instagram, href: "https://instagram.com", label: "Instagram"},
    {icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn"}
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Logo and Tagline - Centered */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-center">
            <Image
              src="/icon.png"
              alt="Zproo"
              width={50}
              height={50}
              priority
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
            Pune&apos;s premier electric vehicle transportation service. Go
            green, ride clean.
          </p>
        </div>

        {/* 4 Equal Sections */}
        <div className="grid grid-cols-1 lg:pl-25 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-900">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+911234567890"
                className="flex items-start text-gray-600 hover:text-emerald-500 transition"
              >
                <Phone className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                <span>+91 123 456 7890</span>
              </a>
              <a
                href="mailto:info@zproo.com"
                className="flex items-start text-gray-600 hover:text-emerald-500 transition"
              >
                <Mail className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                <span>info@zproo.com</span>
              </a>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-900">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-500 transition inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-900">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-500 transition inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-900">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-500 transition inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs sm:text-sm order-2 sm:order-1">
              © {currentYear} Zproo. All rights reserved.
            </p>
            <div className="flex gap-3 order-1 sm:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:bg-emerald-50 transition"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
