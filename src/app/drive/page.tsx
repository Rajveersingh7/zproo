"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
  Car,
  IndianRupee,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Smartphone,
  FileText,
  UserCheck,
  Headphones
} from "lucide-react";

export default function DrivePage() {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Attractive Earnings",
      description:
        "Competitive pay with weekly payouts. Earn more during peak hours with surge pricing"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Work on your own time. Choose when and how long you want to drive"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description:
        "Comprehensive insurance coverage for you and passengers during trips"
    },
    {
      icon: Car,
      title: "Company Vehicles",
      description:
        "Drive our premium electric vehicles - no vehicle investment required"
    },
    {
      icon: Smartphone,
      title: "Easy-to-Use App",
      description:
        "Intuitive driver app with GPS navigation and real-time support"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated driver support team available round the clock"
    }
  ];

  const requirements = [
    "Valid Indian Driving License (minimum 1 year old)",
    "Age between 21-60 years",
    "Clean driving record with no major violations",
    "PAN Card and Aadhaar Card",
    "Bank account for direct deposits",
    "Android smartphone (Android 6.0 or higher)",
    "Professional appearance and attitude",
    "Good knowledge of local routes"
  ];

  const additionalInfo = [
    "All vehicles are company-owned and maintained",
    "No need to worry about vehicle registration or permits",
    "Electric vehicles with zero fuel costs",
    "Regular vehicle maintenance handled by Zproo",
    "Premium vehicles with AC and all modern features",
    "GPS-enabled for easy navigation",
    "Sanitized and cleaned regularly"
  ];

  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description:
        "Fill out the simple online application form with your details"
    },
    {
      icon: UserCheck,
      title: "Document Verification",
      description:
        "Submit required documents for background and vehicle verification"
    },
    {
      icon: Users,
      title: "Training Session",
      description:
        "Attend our comprehensive driver training program (online/offline)"
    },
    {
      icon: CheckCircle,
      title: "Start Earning",
      description: "Get activated on the app and start accepting ride requests"
    }
  ];

  const earnings = [
    {type: "Daily", amount: "₹1,500 - ₹2,500", hours: "8-10 hours"},
    {type: "Weekly", amount: "₹10,000 - ₹17,500", hours: "6 days"},
    {type: "Monthly", amount: "₹40,000 - ₹70,000", hours: "Full-time"}
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                🚗 Drive with Zproo
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Drive Electric,
              <br />
              Earn More
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10">
              Join India&apos;s fastest-growing electric mobility platform as a
              driver. Drive our premium electric vehicles, set your schedule,
              and earn competitive pay without any vehicle investment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full text-lg px-10 py-4 font-semibold transition-all shadow-lg shadow-emerald-500/30"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full text-lg px-10 py-4 font-semibold transition-all"
              >
                <a href="tel:+91XXXXXXXXXX">Call Us</a>
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
              Why Drive with Zproo?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of being part of India&apos;s premier
              electric mobility platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Earnings Potential
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estimated earnings based on active driving hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {earnings.map((earning, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{scale: 1.05}}
                className="bg-white rounded-2xl p-8 shadow-xl text-center"
              >
                <div className="text-emerald-600 font-bold text-lg mb-2">
                  {earning.type}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {earning.amount}
                </div>
                <div className="text-gray-600">{earning.hours}</div>
                <div className="mt-6 text-sm text-gray-500">
                  * Earnings may vary based on location and hours worked
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What you need to become a Zproo driver partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Driver Requirements */}
            <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Driver Requirements
                </h3>
              </div>
              <ul className="space-y-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vehicle Requirements */}
            <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Company-Provided Vehicles
                </h3>
              </div>
              <ul className="space-y-4">
                {additionalInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200"
          >
            <p className="text-center text-gray-700">
              <strong>Note:</strong> Don&apos;t have an electric vehicle? No
              problem! Contact us to learn about our vehicle leasing and
              financing options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join Zproo in 4 simple steps and start earning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-emerald-50 mb-10">
              Join thousands of drivers who have already chosen Zproo as their
              partner for sustainable earnings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer bg-white text-emerald-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Apply as Driver
              </motion.button>
              <Link href="/contact">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer border-2 border-white text-white hover:bg-white/10 rounded-full text-lg px-10 py-4 font-bold transition-all"
                >
                  Contact Support
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
