"use client";

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {
  Leaf,
  DollarSign,
  Shield,
  Smartphone,
  MapPin,
  CheckCircle,
  Battery,
  Zap,
  ChevronDown
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
        "Enjoy a comfortable, eco-friendly ride in our Tata Xpres T EV vehicles. Pay seamlessly and rate your experience."
    }
  ];

  const features = [
    {
      icon: Battery,
      title: "Long Range",
      description: "Up to 213 km on a single charge"
    },
    {
      icon: Zap,
      title: "Fast Charging",
      description: "0-80% charge in just 90 minutes"
    },
    {
      icon: Leaf,
      title: "Zero Emissions",
      description: "100% electric, 0% pollution"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced safety features & monitoring"
    }
  ];

  const faqs = [
    {
      question: "What is Zproo?",
      answer:
        "Zproo is Pune's premier electric vehicle transportation service. We provide eco-friendly, comfortable, and affordable rides using 100% electric Tata Xpres T EV vehicles."
    },
    {
      question: "How do I book a ride?",
      answer:
        "You can book a ride through our website or mobile app. Simply enter your pickup and drop location, confirm the fare, and a driver will be assigned to you within minutes."
    },
    {
      question: "What are the payment options?",
      answer:
        "We accept multiple payment methods including cash, UPI, credit/debit cards, and digital wallets. Payment can be made directly through the app or to the driver."
    },
    {
      question: "Are your vehicles air-conditioned?",
      answer:
        "Yes! All our Tata Xpres T EV vehicles come with air conditioning to ensure your comfort during the ride."
    },
    {
      question: "How can I become a driver with Zproo?",
      answer:
        "Click on 'Become a Driver' button on our homepage and fill out the application form. Our team will contact you with the next steps including verification and training."
    },
    {
      question: "Is there 24/7 customer support?",
      answer:
        "Yes, we provide round-the-clock customer support. You can reach us through the app, website, or our helpline number for any assistance."
    }
  ];

  return (
    <main>
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Blobs - Hidden on mobile for performance */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-400/20 rounded-full blur-3xl hidden sm:block"
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
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 h-60 sm:w-96 sm:h-96 bg-teal-400/20 rounded-full blur-3xl hidden sm:block"
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

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold">
                🌱 100% Electric • Zero Emissions
              </span>
            </motion.div>

            {/* Main Heading - Responsive text sizes */}
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight px-2"
            >
              Go Green, Ride Clean
            </motion.h1>

            {/* Subheading - Responsive */}
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
              className="text-base sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto px-4"
            >
              Premium Electric Vehicle Transportation
            </motion.p>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.6}}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto"
            >
              <Link href="/ride" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 font-semibold transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
                >
                  Book Your Ride
                </motion.button>
              </Link>
              <Link href="/driver" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="cursor-pointer w-full sm:w-auto border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 font-semibold transition-all"
                >
                  Become a Driver
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on small mobile */}
        <motion.div
          animate={{y: [0, 10, 0]}}
          transition={{duration: 2, repeat: Infinity}}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />
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

      {/* Tata Xpres-T EV Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-2">
              Powered by Tata Xpres-T EV
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the future of urban mobility with India&apos;s most
              trusted electric vehicle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Features Section - Mobile Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{opacity: 0, scale: 0.9}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true}}
                  transition={{duration: 0.4, delay: idx * 0.1}}
                  whileHover={{y: -5}}
                  className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-100"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Car Image - Mobile Optimized */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-emerald-100 to-teal-100 shadow-xl order-1 lg:order-2"
              style={{aspectRatio: "3/2"}}
            >
              <Image
                src="/car.png"
                alt="Tata Xpres-T EV"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 768px"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-xl text-gray-600 px-4">
              Find answers to common questions about Zproo
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: idx * 0.05}}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQItem({question, answer}: {question: string; answer: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden"
      whileHover={{boxShadow: "0 10px 40px rgba(5, 150, 105, 0.1)"}}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-start sm:items-center text-left hover:bg-emerald-50/50 transition-colors gap-3"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-2">
          {question}
        </span>
        <motion.div
          animate={{rotate: isOpen ? 180 : 0}}
          transition={{duration: 0.3}}
          className="shrink-0 mt-0.5 sm:mt-0"
        >
          <ChevronDown className="h-5 w-5 text-emerald-600" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{duration: 0.3}}
        className="overflow-hidden"
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}
