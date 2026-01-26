"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Shield, Clock, Leaf, User} from "lucide-react";

export default function RentalsPage() {
  /* Vehicles data - for future use
  const vehicles = [
    {
      name: "Tata Xpres-T EV",
      type: "Sedan",
      seats: 4,
      range: "213 km",
      image: "/car.png"
    },
    {
      name: "Tata Nexon EV",
      type: "SUV",
      seats: 5,
      range: "312 km",
      image: "/car.png"
    },
    {
      name: "Tata Tigor EV",
      type: "Sedan",
      seats: 4,
      range: "306 km",
      image: "/car.png"
    }
  ];
  */

  const benefits = [
    {
      icon: User,
      title: "Dedicated Driver",
      description: "A professional chauffeur is included for the entire rental—sit back and relax"
    },
    {
      icon: Leaf,
      title: "100% Electric",
      description: "Zero emissions, eco-friendly transportation"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage included"
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Rent for a day, week, or month with a driver as needed"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Vehicle",
      description: "Select from our fleet of electric vehicles"
    },
    {
      number: "2",
      title: "Pick Duration",
      description: "Choose daily, weekly, or monthly rental with driver"
    },
    {
      number: "3",
      title: "Complete Booking",
      description: "Confirm your details and make payment"
    },
    {
      number: "4",
      title: "Meet Your Driver",
      description: "We'll bring the vehicle with a chauffeur to your doorstep"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 via-white to-blue-50 overflow-hidden min-h-screen flex items-center">
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
            animate={{opacity: 1}}
            transition={{duration: 0.3}}
            className="text-center max-w-4xl mx-auto px-2"
          >
            <div className="inline-block mb-3 sm:mb-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-sky-100 text-sky-700 rounded-full text-xs sm:text-sm font-semibold">
                🚗 Chauffeur-Driven EV Rentals
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent leading-tight">
              Rent Electric,
              <br />
              Ride in Comfort
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-5 sm:mb-6 lg:mb-8 px-2">
              Get an electric vehicle with a dedicated driver for the entire
              rental. Sit back, relax, and travel sustainably—no driving or
              charging hassles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
                className="bg-linear-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-sky-700 text-white rounded-full text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 font-semibold transition-all shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 btn-glow cursor-pointer min-h-[48px]"
              >
                Browse Our Fleet
              </motion.button>
              <motion.button
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
                className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50/50 glass rounded-full text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 font-semibold transition-all shadow-premium hover:shadow-premium-lg cursor-pointer min-h-[48px]"
              >
                <a href="tel:+91XXXXXXXXXX">Call Us Now</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              Why Rent from Zproo?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Premium electric vehicles with a professional driver included—every trip is hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl glass-dark border border-sky-200/30 shadow-premium hover:shadow-premium-lg transition-all"
              >
                <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a chauffeur-driven electric rental in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-linear-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center shadow-lg rotate-45">
                    <span className="text-3xl font-bold text-white -rotate-45">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-600 to-sky-700">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Go Electric?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Book a chauffeur-driven electric rental and travel in comfort with
              zero emissions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
                className="bg-white text-sky-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all btn-glow cursor-pointer"
              >
                Book in App
              </motion.button>
              <Link href="/contact">
                <motion.button
                  whileHover={{scale: 1.05, y: -2}}
                  whileTap={{scale: 0.95}}
                  className="bg-white text-sky-600 hover:bg-gray-100 rounded-full text-lg px-12 py-4 font-semibold transition-all shadow-lg hover:shadow-xl cursor-pointer glass"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
