import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo at Top Center */}
        <div className="flex justify-center mb-12">
          <Link href="/" className="inline-block">
            <Image
              src="/icon.png"
              alt="Zproo"
              width={80}
              height={80}
              priority
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </div>

        {/* Three Sections */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 transition inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:text-white hover:bg-emerald-500 transition cursor-pointer"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold mb-1">Phone</div>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-600 hover:text-emerald-600 transition"
                >
                  +91-XXXXX-XXXXX
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold mb-1">Email</div>
                <a
                  href="mailto:support@zproo.com"
                  className="text-gray-600 hover:text-emerald-600 transition"
                >
                  support@zproo.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold mb-1">Office</div>
                <p className="text-gray-600">Hinjewadi, Pune</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Zproo. All rights reserved. | Ride Electrified
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-emerald-600 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-emerald-600 transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-emerald-600 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
