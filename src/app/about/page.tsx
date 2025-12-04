"use client";

import {motion} from "framer-motion";
import {
  Leaf,
  Shield,
  Heart,
  Lightbulb,
  Target,
  MapPin,
  Mail,
  Phone
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
        "Continuously improving technology for better user experience and staying ahead in sustainable mobility."
    }
  ];

  const founders = [
    {
      initials: "DG",
      name: "Dhanraj Garg",
      role: "Founder",
      description: "Visionary leader driving sustainable transportation",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      initials: "RD",
      name: "Ronak Dave",
      role: "Co-Founder",
      description: "Technology expert building scalable solutions",
      color: "from-teal-500 to-teal-600"
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
                🌱 About ZPROO
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Revolutionizing Urban
              <br />
              Transportation
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              We&apos;re revolutionizing urban transportation through
              sustainable electric mobility solutions, making clean rides
              accessible and affordable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To revolutionize urban transportation through sustainable electric
              mobility solutions that are accessible, affordable, and
              environmentally responsible.
            </p>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              We envision a future where every journey contributes to a cleaner,
              greener planet. By combining cutting-edge electric vehicle
              technology with exceptional service, we&apos;re making sustainable
              transportation the preferred choice for millions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
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
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionaries behind ZPROO&apos;s mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.2}}
                whileHover={{y: -10}}
                className="text-center"
              >
                <motion.div
                  whileHover={{scale: 1.1, rotate: 5}}
                  className={`w-32 h-32 bg-linear-to-br ${founder.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                >
                  <span className="text-5xl font-bold text-white">
                    {founder.initials}
                  </span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {founder.name}
                </h3>
                <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                  {founder.role}
                </div>
                <p className="text-gray-600 text-lg">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at Pune&apos;s premier IT hub
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  ZPROO Headquarters
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
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">info@zproo.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">+91-XXXXX-XXXXX</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-center text-gray-700">
                <strong>Located in Pune&apos;s prime IT hub</strong> - Easily
                accessible with ample parking and public transport connectivity
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              ZPROO was born from a simple yet powerful vision: to make
              sustainable transportation accessible to everyone. Founded in
              Pune, we recognized the urgent need to address urban pollution and
              traffic congestion while providing reliable, affordable mobility
              solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              What started as a small fleet of electric vehicles has grown into
              a comprehensive electric mobility platform serving thousands of
              customers daily. Our journey has been driven by innovation,
              customer feedback, and an unwavering commitment to sustainability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Today, ZPROO stands as a testament to what&apos;s possible when
              technology meets purpose. We&apos;ve not only created jobs for
              hundreds of drivers but have also contributed significantly to
              reducing carbon emissions in urban areas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As we continue to grow, our mission remains unchanged: to
              revolutionize urban transportation, one electric ride at a time.
              Join us in our journey towards a cleaner, greener future.
            </p>
          </motion.div>
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
              Join the Electric Revolution
            </h2>
            <p className="text-xl text-emerald-50 mb-10">
              Be part of the sustainable future. Start your journey with ZPROO
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer bg-white text-emerald-600 rounded-full text-lg px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Book a Ride
              </motion.button>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                className="cursor-pointer border-2 border-white text-white hover:bg-white/10 rounded-full text-lg px-10 py-4 font-bold transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
