"use client";

import Link from "next/link";
import {Home, ArrowLeft} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-2xl mx-auto w-full text-center relative z-10">
          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have taken a detour. Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="flex items-center gap-2 px-8 py-4 bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-full font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all cursor-pointer">
                <Home className="h-5 w-5" />
                Go Home
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 rounded-full font-semibold transition-all cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {href: "/ride", label: "Ride"},
                {href: "/rentals", label: "Rentals"},
                {href: "/services", label: "Services"},
                {href: "/about", label: "About"}
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
