"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Key, Calendar, Shield, Leaf, MapPin, Clock} from "lucide-react";

export default function SelfDrivePage() {
  const benefits = [
    {
      icon: Key,
      title: "You Drive",
      description: "Complete freedom to drive yourself wherever you want"
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Daily, weekly, or monthly rental plans available"
    },
    {
      icon: MapPin,
      title: "Doorstep Delivery",
      description: "We bring the vehicle to your location"
    },
    {
      icon: Leaf,
      title: "100% Electric",
      description: "Zero fuel cost, zero emissions"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage included"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Vehicle",
      description: "Select from our fleet of electric vehicles"
    },
    {
      number: "2",
      title: "Select Plan",
      description: "Choose daily, weekly, or monthly rental"
    },
    {
      number: "3",
      title: "Submit Documents",
      description: "Upload your driving license and ID proof"
    },
    {
      number: "4",
      title: "Get Delivery",
      description: "We'll deliver the vehicle to your doorstep"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 via-white to-blue-50 overflow-hidden min-h-screen flex items-center">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0]
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
                🚗 Self Drive
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent leading-tight">
              You Drive, We Deliver
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-2">
              Rent an electric car and drive yourself. Doorstep delivery,
              km-included plans, and zero fuel cost.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className="px-6 py-3.5 sm:py-4 bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30"
              >
                Book in App
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Self Drive?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Experience the freedom of driving an electric vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-6 sm:p-8 border border-sky-200/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
                  <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
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
              Get started with self-drive in just a few steps
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
