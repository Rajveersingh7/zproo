"use client";

import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Lottie from "lottie-react";
import airplaneAnimation from "@/../public/animations/airplane.json";
import {
  Leaf,
  DollarSign,
  Shield,
  Smartphone,
  MapPin,
  CheckCircle,
  ChevronDown
} from "lucide-react";
import {GradientMesh} from "@/components/GradientMesh";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to disable heavy parallax
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Parallax transforms - disabled on mobile for performance
  const blob1Y = useTransform(heroScroll, [0, 1], isMobile ? [0, 0] : [0, 150]);
  const blob2Y = useTransform(heroScroll, [0, 1], isMobile ? [0, 0] : [0, -150]);
  const heroContentY = useTransform(heroScroll, [0, 1], isMobile ? [0, 0] : [0, 50]);
  const servicesY = useTransform(servicesScroll, [0, 1], isMobile ? [0, 0] : [100, -100]);
  const stepsY = useTransform(stepsScroll, [0, 1], isMobile ? [0, 0] : [50, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "100% electric vehicles for zero-emission rides. Contribute to a cleaner India with every journey.",
      gradient: "from-sky-500 to-sky-600"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Competitive rates with transparent pricing. No surge pricing or hidden charges.",
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description:
        "Verified drivers, GPS tracking, and 24/7 customer support for your peace of mind.",
      gradient: "from-sky-600 to-sky-700"
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

  const quickCards = [
    {
      emoji: "🚗",
      title: "Book a Ride",
      desc: "Instant electric vehicle rides across Pune. Download the app or book online.",
      href: "/ride",
      delay: 0.1
    },
    {
      emoji: "🎫",
      title: "Get ZPass",
      desc: "Save on regular commutes with our smart pass system. Fixed routes, flexible plans.",
      href: "/zpass",
      delay: 0.2
    },
    {
      emoji: "❓",
      title: "Need Help?",
      desc: "Have questions? Our support team is here 24/7 to assist you with any queries.",
      href: "/contact",
      delay: 0.3
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section - Centered */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[500px] flex items-center overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50 pt-20 pb-6"
      >
        {/* Animated Gradient Mesh Background */}
        <GradientMesh className="opacity-40" intensity={0.8} />

        {/* Static Background Blobs - Simplified for performance */}
        <motion.div
          style={{y: blob1Y}}
          className="absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl hidden lg:block pointer-events-none"
        />
        <motion.div
          style={{y: blob2Y}}
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl hidden lg:block pointer-events-none"
        />

        <motion.div
          style={{y: heroContentY}}
          className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 relative z-10 flex flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 glass-dark rounded-full text-xs sm:text-sm font-semibold text-sky-700 border border-sky-200/50 shadow-premium">
              🌱 100% Electric • Zero Emissions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 gradient-text leading-tight">
            Ride Electrified
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-xl mx-auto mb-4 sm:mb-5 font-medium">
            Premium Electric Vehicle Transportation
          </p>

          {/* Lottie Animation - KEPT as requested */}
          <div className="w-full max-w-[140px] sm:max-w-[170px] lg:max-w-[200px] mx-auto relative mb-4 sm:mb-5">
            <div className="absolute inset-0 bg-linear-to-r from-sky-400/20 to-yellow-300/20 rounded-full blur-3xl -z-10" />
            <Lottie
              animationData={airplaneAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-auto"
            />
          </div>

          {/* Go to App CTA */}
          <Link href="/ride">
            <button className="bg-linear-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-full text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-bold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all btn-glow cursor-pointer">
              Book in App
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator - Simplified */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 hidden lg:block z-20">
          <ChevronDown className="h-6 w-6 text-sky-500 opacity-60" />
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section
        ref={servicesRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        {/* Static background elements */}
        <motion.div
          style={{y: servicesY}}
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        >
          <div className="absolute top-20 left-20 w-64 h-64 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent pb-2">
              Why Choose Zproo
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Experience the future of urban transportation with our premium
              electric vehicle service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="group glass rounded-2xl sm:rounded-3xl shadow-premium hover:shadow-premium-lg transition-all border border-sky-200/30 p-6 sm:p-8 cursor-pointer h-full hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 sm:w-16 rounded-xl sm:rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative overflow-hidden transition-transform hover:scale-105`}
                >
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white relative z-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile Optimized */}
      <section
        ref={stepsRef}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        {/* Static background */}
        <motion.div
          style={{y: stepsY}}
          className="absolute inset-0 opacity-5 pointer-events-none"
        >
          <div className="absolute top-10 right-10 w-96 h-96 bg-linear-to-br from-sky-400 to-sky-500 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent pb-2">
              Simple Process
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Get started in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center group">
                <div className="relative inline-block mb-5 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-sky-500 to-sky-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-premium-lg relative overflow-hidden transition-transform hover:scale-105">
                    <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent"></div>
                    <step.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10" />
                  </div>
                  <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-sky-600 transition-colors px-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Questions Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
              Quick Questions?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Get instant answers or reach out to our support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {quickCards.map((card) => (
              <div key={card.title} className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-premium hover:shadow-premium-lg border border-sky-200/30 cursor-pointer group transition-transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {card.emoji}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {card.desc}
                </p>
                <Link href={card.href}>
                  <span className="text-sky-600 font-semibold hover:text-sky-700 inline-flex items-center gap-1 transition-colors">
                    {card.title === "Book a Ride" && "Book in App"}
                    {card.title === "Get ZPass" && "Learn More"}
                    {card.title === "Need Help?" && "Contact Us"}
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
