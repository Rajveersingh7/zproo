"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {
  Leaf,
  Shield,
  Heart,
  Lightbulb,
  Target,
  MapPin,
  Mail,
  Phone,
  Zap,
  TrendingUp
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to reducing carbon footprint through 100% electric fleet and promoting eco-friendly transportation solutions."
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "No hidden charges, clear pricing, and honest communication. We believe in building trust through transparency."
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision is made with customer satisfaction in mind. Your comfort and safety are our top priorities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously improving our product and operations—and building to scale. We're eager to grow our reach and impact in sustainable mobility."
    },
    {
      icon: TrendingUp,
      title: "Driven to Grow",
      description:
        "We're here to build for the long term. From Pune to more cities, we're ambitious to scale our fleet, our team, and our impact—one electric ride at a time."
    }
  ];

  const driveItems = [
    {
      icon: Zap,
      title: "Building for the long term",
      text: "We think in years, not quarters. Electric mobility that’s reliable, scalable, and here to stay."
    },
    {
      icon: MapPin,
      title: "Pune first, then beyond",
      text: "We’re proving it in Pune. Our ambition is to bring clean, affordable rides to more cities."
    },
    {
      icon: TrendingUp,
      title: "Just getting started",
      text: "We’re hungry to grow—more rides, more drivers, more impact. This is only the beginning."
    }
  ];

  const founders = [
    {
      initials: "DG",
      name: "Dhanraj Garg",
      role: "Founder",
      description: "Leads with a clear vision: make electric mobility the default choice for Indian cities.",
      drive: "Focused on taking Zproo from Pune to more cities—passionate about scale and impact.",
      color: "from-sky-500 to-sky-600"
    },
    {
      initials: "RD",
      name: "Ronak Dave",
      role: "Co-Founder",
      description: "Builds the technology and operations that make Zproo reliable and ready to scale.",
      drive: "Believes great systems can accelerate the EV transition—eager to grow the product and the team.",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Founders */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl hidden lg:block"
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
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl hidden lg:block"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-6">
          <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-4 lg:gap-6">
            {/* Top: Intro */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="text-center max-w-3xl mx-auto px-2"
            >
              <div className="inline-block mb-2 sm:mb-3">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-sky-100 text-sky-700 rounded-full text-xs sm:text-sm font-semibold">
                  🌱 About Zproo
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent leading-tight px-2">
                We&apos;re Building the Future
                <br />
                of Urban Mobility
              </h1>
            </motion.div>

            {/* Bottom: Founders */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
              className="w-full max-w-3xl px-2"
            >
              <div className="text-center mb-3 sm:mb-4">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
                  The Passionate Builders Behind Zproo
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Two founders on a mission to make electric mobility the norm
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {founders.map((founder, idx) => (
                  <motion.div
                    key={idx}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3 + idx * 0.1}}
                    whileHover={{y: -4}}
                    className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-sky-200/30 shadow-premium hover:shadow-premium-lg transition-all text-center"
                  >
                    <motion.div
                      whileHover={{scale: 1.05, rotate: 2}}
                      className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-linear-to-br ${founder.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}
                    >
                      <span className="text-xl sm:text-2xl font-bold text-white">{founder.initials}</span>
                    </motion.div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-1.5 text-gray-900">{founder.name}</h3>
                    <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-semibold mb-1.5 sm:mb-2">
                      {founder.role}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1.5 sm:mb-2 leading-relaxed">{founder.description}</p>
                    <p className="text-gray-500 text-xs leading-relaxed italic">{founder.drive}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-sky-500 to-sky-700 rounded-2xl mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To revolutionize urban transportation through sustainable electric
              mobility—accessible, affordable, and built to scale. We&apos;re not
              just running a service; we&apos;re building a movement.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              We envision a future where every journey is electric. By combining
              reliable EV technology with exceptional service, we&apos;re making
              sustainable rides the preferred choice—and we&apos;re eager to bring
              that to more cities as we grow.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              The mindset behind how we build and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {driveItems.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 sm:p-8 border border-sky-200/30 shadow-premium hover:shadow-premium-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-linear-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${idx === 4 ? "lg:col-start-2" : ""}`}
              >
                <div className="w-14 h-14 bg-linear-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at Pune&apos;s premier IT hub
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-700 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Zproo Headquarters
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Tech Centre, 5th Floor, Plot No. 30, 502 Phase 1,
                  <br />
                  Rajiv Gandhi Infotech Park, MIDC, Hinjewadi,
                  <br />
                  Pune, Maharashtra - 411057
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-sky-600" />
                    <span className="text-gray-700">info@zproo.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-sky-600" />
                    <span className="text-gray-700">+91-XXXXX-XXXXX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl border border-sky-200">
              <p className="text-center text-gray-700">
                <strong>Located in Pune&apos;s prime IT hub</strong> - Easily
                accessible with ample parking and public transport connectivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Zproo was born from a simple yet powerful vision: to make
              sustainable transportation accessible to everyone. Founded in
              Pune, we saw the need for clean, reliable mobility—and we knew we
              had to build something that could scale.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              What started as a small fleet of electric vehicles has grown into
              rides, rentals, self-drive, and ZPass—a full electric mobility
              platform. We&apos;re driven by a simple belief: every city
              deserves affordable, zero-emission rides. Our ambition isn&apos;t
              just Pune; it&apos;s to take that promise to more cities as we grow.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Today we&apos;re creating jobs for drivers, serving thousands of
              riders, and cutting emissions—but we&apos;re eager to do more. More
              rides, more cities, more impact. We&apos;re building for the long
              term, and we want you with us.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As we scale, our mission stays the same: revolutionize urban
              transportation,               one electric ride at a time. Join us in building
              a cleaner, greener future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-600 to-sky-700">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              We&apos;re Growing. Be Part of It.
            </h2>
            <p className="text-xl text-sky-100 mb-10">
              Ride with us, work with us, or partner with us—we&apos;re building
              the future of electric mobility and we want you with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ride">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer bg-white text-sky-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
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
          </div>
        </div>
      </section>
    </main>
  );
}


