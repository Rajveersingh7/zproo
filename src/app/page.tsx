"use client";

import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";
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
import {Card3D} from "@/components/Card3D";
import {MagneticButton} from "@/components/MagneticButton";
import {RippleButton} from "@/components/RippleButton";
import {GradientMesh} from "@/components/GradientMesh";
import {AnimatedCounter} from "@/components/AnimatedCounter";
import {RevealOnScroll} from "@/components/RevealOnScroll";
import {Spotlight} from "@/components/Spotlight";
import {TextReveal} from "@/components/TextReveal";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);

  const {scrollYProgress: heroScroll} = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const {scrollYProgress: servicesScroll} = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const {scrollYProgress: stepsScroll} = useScroll({
    target: stepsRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const blob1Y = useTransform(heroScroll, [0, 1], [0, 150]);
  const blob2Y = useTransform(heroScroll, [0, 1], [0, -150]);
  const heroContentY = useTransform(heroScroll, [0, 1], [0, 50]);
  const servicesY = useTransform(servicesScroll, [0, 1], [100, -100]);
  const stepsY = useTransform(stepsScroll, [0, 1], [50, -50]);

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
    <main className="relative">
      {/* Hero Section - Split Layout */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50 pt-20"
      >
        {/* Animated Gradient Mesh Background */}
        <GradientMesh className="opacity-40" intensity={0.8} />

        {/* Animated Background Blobs with Parallax */}
        <motion.div
          style={{y: blob1Y}}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl hidden lg:block"
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
        <motion.div
          style={{y: blob2Y}}
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl hidden lg:block"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{y: heroContentY}}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Section - Booking Form */}
            <motion.div
              initial={{opacity: 0, x: -50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="order-2 lg:order-1 flex"
            >
              <motion.div
                whileHover={{y: -5}}
                transition={{duration: 0.3}}
                className="glass rounded-3xl shadow-premium-lg p-8 sm:p-10 border border-emerald-200/30 w-full flex flex-col justify-between h-full card-3d"
              >
                <div>
                  <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.2}}
                    className="text-3xl sm:text-4xl font-bold gradient-text mb-8"
                  >
                    Book Your Ride
                  </motion.h2>

                  <div className="space-y-6">
                    {/* Pickup Location */}
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.3}}
                    >
                      <label className="block text-base font-semibold text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{rotate: 360}}
                            transition={{duration: 0.5}}
                          >
                            <MapPin className="h-5 w-5 text-emerald-500" />
                          </motion.div>
                          Pickup Location
                        </div>
                      </label>
                      <motion.input
                        whileFocus={{scale: 1.02}}
                        type="text"
                        placeholder="Enter pickup location"
                        className="input-premium w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-white/50 backdrop-blur-sm"
                      />
                    </motion.div>

                    {/* Dropoff Location */}
                    <motion.div
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.4}}
                    >
                      <label className="block text-base font-semibold text-gray-700 mb-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{rotate: 360}}
                            transition={{duration: 0.5}}
                          >
                            <Navigation className="h-5 w-5 text-teal-500" />
                          </motion.div>
                          Dropoff Location
                        </div>
                      </label>
                      <motion.input
                        whileFocus={{scale: 1.02}}
                        type="text"
                        placeholder="Enter dropoff location"
                        className="input-premium w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-white/50 backdrop-blur-sm"
                      />
                    </motion.div>

                    {/* See Prices Button */}
                    <MagneticButton strength={0.2}>
                      <RippleButton className="cursor-pointer w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl py-5 px-6 font-bold text-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 btn-glow">
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{rotate: [0, 10, -10, 0]}}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="inline-flex items-center"
                          >
                            <IndianRupee className="h-6 w-6" />
                          </motion.span>
                          <span>See Prices</span>
                        </span>
                      </RippleButton>
                    </MagneticButton>
                  </div>
                </div>

                {/* Quick Info with Animated Counters */}
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 0.6}}
                  className="pt-6 border-t border-emerald-200/50 mt-8"
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      {
                        text: "100%",
                        subtext: "Electric Fleet",
                        color: "emerald",
                        value: 100
                      },
                      {
                        text: "24/7",
                        subtext: "Support",
                        color: "teal",
                        value: 24
                      },
                      {
                        text: "1000+",
                        subtext: "Happy Riders",
                        color: "emerald",
                        value: 1000
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{delay: 0.7 + idx * 0.1}}
                        whileHover={{scale: 1.1}}
                        className="cursor-pointer"
                      >
                        <div
                          className={`${
                            item.color === "emerald"
                              ? "text-emerald-600"
                              : "text-teal-600"
                          } text-base font-semibold`}
                        >
                          {item.value ? (
                            <AnimatedCounter
                              value={item.value}
                              suffix={
                                item.text.includes("+")
                                  ? "+"
                                  : item.text.includes("%")
                                  ? "%"
                                  : ""
                              }
                              className={
                                item.color === "emerald"
                                  ? "text-emerald-600"
                                  : "text-teal-600"
                              }
                            />
                          ) : (
                            item.text
                          )}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.subtext}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Section - Slogan & Info */}
            <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="order-1 lg:order-2 text-center flex flex-col items-center justify-center"
            >
              {/* Badge */}
              <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="inline-block mb-6"
              >
                <motion.span
                  whileHover={{scale: 1.05}}
                  className="px-4 py-2 glass-dark rounded-full text-sm font-semibold text-emerald-700 border border-emerald-200/50 shadow-premium"
                >
                  🌱 100% Electric • Zero Emissions
                </motion.span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight"
              >
                Ride Electrified
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto mb-12 font-medium"
              >
                Premium Electric Vehicle Transportation
              </motion.p>

              {/* Lottie Animation */}
              <motion.div
                initial={{opacity: 0, scale: 0.8, rotate: -10}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{duration: 0.8, delay: 0.6, type: "spring"}}
                whileHover={{scale: 1.05, rotate: 5}}
                className="w-full max-w-md mx-auto relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl -z-10"></div>
                <Lottie
                  animationData={airplaneAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{y: [0, 10, 0]}}
          transition={{duration: 2, repeat: Infinity}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-20"
        >
          <ChevronDown className="h-8 w-8 text-emerald-500" />
        </motion.div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section
        ref={servicesRef}
        id="ride"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        {/* Parallax background elements */}
        <motion.div
          style={{y: servicesY}}
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        >
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll delay={0.1}>
            <div className="text-center mb-10 sm:mb-16">
              <TextReveal delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-2">
                  Why Choose Zproo
                </h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Experience the future of urban transportation with our premium
                  electric vehicle service
                </p>
              </TextReveal>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {services.map((service, idx) => (
              <RevealOnScroll
                key={service.title}
                delay={idx * 0.1}
                direction="up"
              >
                <motion.div className="group">
                  <Spotlight intensity={0.15}>
                    <Card3D
                      intensity={12}
                      className="glass rounded-2xl sm:rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-emerald-200/30 p-6 sm:p-8 cursor-pointer h-full"
                    >
                      <motion.div
                        whileHover={{rotate: 360, scale: 1.1}}
                        transition={{duration: 0.6, type: "spring"}}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 shimmer"></div>
                        <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white relative z-10" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </Card3D>
                  </Spotlight>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile Optimized */}
      <section
        ref={stepsRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{y: stepsY}}
          className="absolute inset-0 opacity-5 pointer-events-none"
        >
          <div className="absolute top-10 right-10 w-96 h-96 bg-linear-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll delay={0.1}>
            <div className="text-center mb-10 sm:mb-16">
              <TextReveal delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent pb-2">
                  Simple Process
                </h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                  Get started in three easy steps
                </p>
              </TextReveal>
            </div>
          </RevealOnScroll>

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
                  whileHover={{scale: 1.15, rotate: [0, -5, 5, 0]}}
                  transition={{duration: 0.5}}
                  className="relative inline-block mb-5 sm:mb-6"
                >
                  <motion.div
                    animate={{rotate: 360}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-premium-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent"></div>
                    <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10" />
                  </motion.div>
                  <motion.div
                    whileHover={{scale: 1.2, rotate: 360}}
                    transition={{duration: 0.5}}
                    className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg border-2 border-white"
                  >
                    {step.number}
                  </motion.div>
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
            {[
              {
                emoji: "🚗",
                title: "Book a Ride",
                desc: "Instant electric vehicle rides across Pune. Download the app or book online.",
                href: "/",
                delay: 0.1
              },
              {
                emoji: "🎫",
                title: "Get ZPass",
                desc: "Save up to 40% with our subscription passes for regular commuters.",
                href: "/zpass",
                delay: 0.2
              },
              {
                emoji: "💬",
                title: "Need Help?",
                desc: "Our support team is available 24/7 to assist you with any questions.",
                href: "/contact",
                delay: 0.3
              }
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: card.delay}}
                whileHover={{y: -8, scale: 1.02}}
                className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-premium hover:shadow-premium-lg border border-emerald-200/30 card-3d cursor-pointer group"
              >
                <motion.div
                  animate={{y: [0, -5, 0]}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: card.delay
                  }}
                  className="text-3xl sm:text-4xl mb-3 sm:mb-4"
                >
                  {card.emoji}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {card.desc}
                </p>
                <Link href={card.href}>
                  <motion.span
                    whileHover={{x: 5}}
                    className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    {card.title === "Book a Ride" && "Book Now"}
                    {card.title === "Get ZPass" && "Learn More"}
                    {card.title === "Need Help?" && "Contact Us"}
                    <motion.span
                      animate={{x: [0, 5, 0]}}
                      transition={{duration: 1.5, repeat: Infinity}}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
