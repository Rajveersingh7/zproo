"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
  Car,
  Calendar,
  Ticket,
  Shield,
  IndianRupee,
  Clock,
  Leaf,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Car,
      title: "Ride",
      tagline: "Your Daily Commute Partner",
      description:
        "Book instant electric vehicle rides across the city. Eco-friendly, affordable, and reliable transportation at your fingertips.",
      features: [
        "Instant booking & real-time tracking",
        "100% electric fleet",
        "Transparent pricing with no surge",
        "24/7 availability",
        "Professional verified drivers",
        "Cashless payments"
      ],
      gradient: "from-emerald-500 to-emerald-600",
      link: "/",
      cta: "Book a Ride"
    },
    {
      icon: Calendar,
      title: "Rent",
      tagline: "Freedom on Wheels",
      description:
        "Rent premium electric vehicles for daily, weekly, or monthly use. Perfect for personal or business needs with flexible plans.",
      features: [
        "Daily, weekly & monthly plans",
        "Premium EV fleet",
        "Free home delivery & pickup",
        "Comprehensive insurance included",
        "Free charging network access",
        "24/7 roadside assistance"
      ],
      gradient: "from-emerald-600 to-teal-600",
      link: "/rentals",
      cta: "Explore Rentals"
    },
    {
      icon: Ticket,
      title: "ZPass",
      tagline: "Smart Commuting Solution",
      description:
        "Subscribe to ZPass for regular commutes between fixed locations. Save money and time with our intelligent pass system.",
      features: [
        "Fixed route optimization",
        "Up to 40% savings vs regular rides",
        "Daily, weekdays, weekends passes",
        "Return trip options",
        "Priority booking",
        "Flexible validity periods"
      ],
      gradient: "from-teal-600 to-emerald-500",
      link: "/zpass",
      cta: "Get ZPass"
    }
  ];

  const whyChoose = [
    {
      icon: Leaf,
      title: "100% Electric Fleet",
      description:
        "Every vehicle is electric, contributing to zero emissions and cleaner air"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified drivers, GPS tracking, and 24/7 customer support"
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description:
        "No hidden charges, no surge pricing. What you see is what you pay"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock service to meet all your transportation needs"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 50, 0]
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
                ⚡ Electric Mobility Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Complete Electric
              <br />
              Transportation Services
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10">
              From daily rides to long-term rentals and smart passes - we offer
              comprehensive electric mobility solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.8}}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} mb-6`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-xl text-emerald-600 font-semibold mb-6">
                  {service.tagline}
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.link}>
                  <motion.button
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    className={`cursor-pointer bg-linear-to-r ${service.gradient} text-white rounded-full px-8 py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2`}
                  >
                    {service.cta}
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Visual */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  whileHover={{scale: 1.05}}
                  className={`rounded-3xl bg-linear-to-br ${service.gradient} p-12 shadow-2xl`}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                    <service.icon className="h-24 w-24 mb-6 mx-auto" />
                    <h3 className="text-3xl font-bold text-center mb-4">
                      {service.title}
                    </h3>
                    <p className="text-center text-emerald-50 text-lg">
                      {service.tagline}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Why Choose Zproo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best in electric mobility with our commitment to
              excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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
              Choose the service that fits your needs and start your sustainable
              journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer bg-white text-emerald-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  Book a Ride
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer border-2 border-white text-white hover:bg-white/10 rounded-full text-lg px-10 py-4 font-bold transition-all"
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
