"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {useEffect} from "react";
import Lottie from "lottie-react";
import airplaneAnimation from "@/../public/animations/airplane.json";
import {
  Leaf,
  DollarSign,
  Shield,
  Smartphone,
  MapPin,
  CheckCircle,
  ChevronDown,
  Navigation,
  IndianRupee
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "100% electric vehicles for zero-emission rides. Contribute to a cleaner India with every journey.",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Competitive rates with transparent pricing. No surge pricing or hidden charges.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Verified drivers, GPS tracking, and 24/7 customer support for your peace of mind.",
      gradient: "from-teal-600 to-emerald-500"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: Smartphone,
      title: "Book Your Ride",
      description:
        "Open the app or website, enter your pickup and drop location, and confirm your booking instantly."
    },
    {
      number: "2",
      icon: MapPin,
      title: "Track in Real-Time",
      description:
        "Watch your driver arrive in real-time with GPS tracking. Know exactly when your ride will arrive."
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Reach Your Destination",
      description:
        "Enjoy a comfortable, eco-friendly ride in our electric vehicles. Pay seamlessly and rate your experience."
    }
  ];

  return (
    <main>
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] lg:h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl hidden lg:block"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl hidden lg:block"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Section - Booking Form */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="order-2 lg:order-1 flex"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-500/10 p-8 sm:p-10 border border-gray-100 w-full flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
                    Book Your Ride
                  </h2>

                  <div className="space-y-6">
                    {/* Pickup Location */}
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-emerald-500" />
                          Pickup Location
                        </div>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    {/* Dropoff Location */}
                    <div>
                      <label className="block text-base font-semibold text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <Navigation className="h-5 w-5 text-teal-500" />
                          Dropoff Location
                        </div>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter dropoff location"
                        className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    {/* See Prices Button */}
                    <motion.button
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.98}}
                      className="cursor-pointer w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl py-5 px-6 font-bold text-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <IndianRupee className="h-6 w-6" />
                      See Prices
                    </motion.button>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-emerald-600 text-base font-semibold">
                        100% Electric
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Eco-Friendly
                      </div>
                    </div>
                    <div>
                      <div className="text-teal-600 text-base font-semibold">
                        Safe & Secure
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        GPS Tracking
                      </div>
                    </div>
                    <div>
                      <div className="text-emerald-600 text-base font-semibold">
                        24/7 Support
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Always Here
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Slogan & Info */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="order-1 lg:order-2 text-center flex flex-col items-center justify-center"
            >
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                  🌱 100% Electric • Zero Emissions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Ride Electrified
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto mb-12">
                Premium Electric Vehicle Transportation
              </p>

              {/* Lottie Animation */}
              <motion.div
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, delay: 0.4}}
                className="w-full max-w-md mx-auto"
              >
                <Lottie
                  animationData={airplaneAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{y: [0, 10, 0]}}
          transition={{duration: 2, repeat: Infinity}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <ChevronDown className="h-8 w-8 text-emerald-500" />
        </motion.div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section
        id="ride"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-2">
              Why Choose Zproo
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Experience the future of urban transportation with our premium
              electric vehicle service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="group border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 bg-white p-6 sm:p-8"
              >
                <motion.div
                  whileHover={{rotate: 360}}
                  transition={{duration: 0.6}}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6`}
                >
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-2">
              Simple Process
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Get started in three easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: idx * 0.2}}
                className="text-center group"
              >
                <motion.div
                  whileHover={{scale: 1.1, rotate: 5}}
                  className="relative inline-block mb-5 sm:mb-6"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg rotate-45">
                    <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white -rotate-45" />
                  </div>
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md">
                    {step.number}
                  </div>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors px-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Questions Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Quick Questions?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Get instant answers or reach out to our support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.1}}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-emerald-100"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚗</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                Book a Ride
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Instant electric vehicle rides across Pune. Download the app or
                book online.
              </p>
              <Link
                href="/"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Book Now →
              </Link>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.2}}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-emerald-100"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎫</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                Get ZPass
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Save up to 40% with our subscription passes for regular
                commuters.
              </p>
              <Link
                href="/zpass"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-emerald-100"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                Need Help?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Our support team is available 24/7 to assist you with any
                questions.
              </p>
              <Link
                href="/contact"
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Contact Us →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-500 hover:bg-emerald-50 rounded-full px-8 py-4 font-semibold transition-all shadow-md cursor-pointer"
            >
              View All FAQs
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
