"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Shield, Clock, CheckCircle, Zap, Leaf, IndianRupee} from "lucide-react";

export default function RentalsPage() {
  const rentalPlans = [
    {
      duration: "Daily",
      price: "1,499",
      features: [
        "24-hour rental period",
        "150 km included",
        "Free home delivery",
        "₹10/km after limit",
        "Full insurance coverage",
        "24/7 roadside assistance"
      ],
      popular: false
    },
    {
      duration: "Weekly",
      price: "8,999",
      features: [
        "7-day rental period",
        "1,200 km included",
        "Free home delivery & pickup",
        "₹8/km after limit",
        "Full insurance coverage",
        "Priority customer support",
        "Free car wash"
      ],
      popular: true
    },
    {
      duration: "Monthly",
      price: "29,999",
      features: [
        "30-day rental period",
        "5,000 km included",
        "Free home delivery & pickup",
        "₹6/km after limit",
        "Comprehensive insurance",
        "Dedicated support manager",
        "Free maintenance & servicing",
        "Vehicle swap option"
      ],
      popular: false
    }
  ];

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
      description: "Rent for a day, week, or month as needed"
    },
    {
      icon: Zap,
      title: "Free Charging",
      description: "Access to our charging network at no extra cost"
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
      description: "Choose daily, weekly, or monthly rental"
    },
    {
      number: "3",
      title: "Complete Booking",
      description: "Submit documents and make payment"
    },
    {
      number: "4",
      title: "Get Your Car",
      description: "We'll deliver the car to your doorstep"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                🚗 Electric Vehicle Rentals
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Rent Electric,
              <br />
              Drive Sustainable
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10">
              Experience the future of mobility with our premium electric
              vehicle rental service. Flexible plans, zero emissions, unlimited
              possibilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full text-lg px-10 py-4 font-semibold transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
              >
                Browse Vehicles
              </motion.button>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full text-lg px-10 py-4 font-semibold transition-all cursor-pointer"
              >
                <a href="tel:+91XXXXXXXXXX">Call Us Now</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Why Rent from Zproo?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enjoy premium electric vehicles with unmatched convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Flexible Rental Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan that suits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="h-8 w-8 text-emerald-600" />
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    per {plan.duration.toLowerCase()}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      : "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rent your electric vehicle in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg rotate-45">
                    <span className="text-3xl font-bold text-white -rotate-45">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Go Electric?
            </h2>
            <p className="text-xl text-emerald-50 mb-10">
              Book your electric vehicle rental today and experience sustainable
              mobility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="bg-white text-emerald-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Start Booking
              </motion.button>
              <Link href="/contact">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="bg-white text-emerald-600 hover:bg-gray-100 rounded-full text-lg px-12 py-4 font-semibold transition-all shadow-lg cursor-pointer"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
