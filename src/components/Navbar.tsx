"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {Menu, X} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Main Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Zproo"
                width={150}
                height={50}
                priority
                className="h-36 w-auto"
              />
            </Link>

            {/* Desktop Menu - Ride & Drive */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="#ride"
                className="py-2 text-gray-700 hover:text-emerald-500 font-medium transition rounded-full"
              >
                Ride
              </Link>
              <Link
                href="#drive"
                className="py-2 text-gray-700 hover:text-emerald-500 font-medium transition rounded-full"
              >
                Drive
              </Link>
            </div>
          </div>

          {/* Right Side - Help, Login, Signup */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="#help"
              className="px-1 py-2 text-gray-700 hover:text-emerald-500 font-medium transition rounded-full"
            >
              Help
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 text-gray-700 hover:text-emerald-500 font-medium transition rounded-full"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 font-medium transition shadow-sm"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="#ride"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-lg transition"
            >
              Ride
            </Link>
            <Link
              href="#drive"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-lg transition"
            >
              Drive
            </Link>
            <Link
              href="#help"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-lg transition"
            >
              Help
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded-lg transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition text-center font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
