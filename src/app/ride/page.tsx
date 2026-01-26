"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {MapPin, Navigation, Clock, Shield, Leaf, Smartphone} from "lucide-react";

export default function RidePage() {
  const features = [
    {
      icon: Smartphone,
      title: "Instant Booking",
      description: "Book your ride in seconds through our app or website"
    },
    {
      icon: Navigation,
      title: "Real-Time Tracking",
      description: "Track your driver's location in real-time with GPS"
    },
    {
      icon: Leaf,
      title: "100% Electric",
      description: "Zero emissions, eco-friendly transportation"
    },
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All drivers are verified and vehicles are fully insured"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Book rides anytime, day or night"
    },
    {
      icon: MapPin,
      title: "City-Wide Coverage",
      description: "Available across the entire city"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Enter Locations",
      description: "Add your pickup and drop-off locations"
    },
    {
      number: "2",
      title: "Choose Vehicle",
      description: "Select from our electric vehicle options"
    },
    {
      number: "3",
      title: "Confirm & Track",
      description: "Confirm your booking and track your ride in real-time"
    },
    {
      number: "4",
      title: "Enjoy Your Ride",
      description: "Sit back and enjoy your eco-friendly journey"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50 min-h-screen flex items-center">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
          >
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-sky-100 text-sky-700 rounded-full text-xs sm:text-sm font-semibold">
                🚗 Book Your Ride
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent leading-tight">
              Ride Electrified
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              Book instant electric vehicle rides across the city. Eco-friendly,
              affordable, and reliable transportation at your fingertips.
            </p>
          </motion.div>

          {/* Booking Form Card */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: 0.1}}
            className="glass rounded-2xl sm:rounded-3xl shadow-premium-lg p-5 sm:p-8 lg:p-10 border border-sky-200/30 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-white/80 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Enter drop-off address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-white/80 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <Link href="/contact" className="block">
                <motion.button
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="w-full px-6 py-3.5 sm:py-4 bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30"
                >
                  Book in App
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Zproo Rides?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Experience the future of urban transportation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 sm:p-8 border border-sky-200/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Book your ride in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 text-white text-xl sm:text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
