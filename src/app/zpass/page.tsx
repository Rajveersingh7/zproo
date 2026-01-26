"use client";

import {useState, useMemo} from "react";
import {motion} from "framer-motion";
import {
  IndianRupee,
  Ticket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function ZPassPage() {
  const [kilometers, setKilometers] = useState("");

  const RATE_PER_KM = 16;
  const MIN_KM = 100;

  // Calculate price based on kilometers
  const calculatedPrice = useMemo(() => {
    const km = parseFloat(kilometers) || 0;
    if (km < MIN_KM) return 0;
    return km * RATE_PER_KM;
  }, [kilometers]);

  const handleKilometersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty or valid numbers
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setKilometers(value);
    }
  };

  const isValid = parseFloat(kilometers) >= MIN_KM;

  return (
    <main className="min-h-screen bg-linear-to-br from-sky-50 via-white to-blue-50">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              ZPass - Daily Rides
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent">
            Get Your ZPass
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Travel daily between your favorite destinations with our affordable
            ZPass system
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          whileHover={{y: -5}}
          className="glass rounded-2xl sm:rounded-3xl shadow-premium-lg p-5 sm:p-8 lg:p-10 border border-sky-200/30 card-3d"
        >
          <div className="space-y-5 sm:space-y-6">
            {/* Kilometers Input */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4 text-sky-500" />
                  Kilometers
                </div>
              </label>
              <motion.input
                whileFocus={{scale: 1.01}}
                type="number"
                value={kilometers}
                onChange={handleKilometersChange}
                placeholder={`Minimum ${MIN_KM} km`}
                min={MIN_KM}
                step="1"
                className="input-premium w-full px-4 py-3.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 bg-white/50 backdrop-blur-sm text-base sm:text-lg min-h-[48px]"
              />
              {kilometers && parseFloat(kilometers) < MIN_KM && (
                <p className="text-xs sm:text-sm text-red-500 mt-2">
                  Minimum {MIN_KM} kilometers required
                </p>
              )}
            </div>

            {/* Price Display */}
            {isValid && (
              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="bg-linear-to-r from-sky-600 to-sky-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-white"
              >
                <div className="text-center">
                  <div className="text-xs sm:text-sm opacity-90 mb-2">
                    Your ZPass Price
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <IndianRupee className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                      {calculatedPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm opacity-80 mt-2 sm:mt-3">
                    For {parseFloat(kilometers).toLocaleString("en-IN")} kilometers
                  </div>
                </div>
              </motion.div>
            )}

            {/* Book in App Button */}
            <motion.button
              whileHover={{scale: 1.02, y: -2}}
              whileTap={{scale: 0.98}}
              disabled={!isValid}
              className={`cursor-pointer w-full rounded-xl py-4 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg shadow-lg transition-all flex items-center justify-center gap-3 min-h-[48px] ${
                isValid
                  ? "bg-linear-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-sky-700 text-white shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 btn-glow"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="h-5 w-5" />
              Book in App
            </motion.button>

            {/* Info Text */}
            <div className="text-center text-xs sm:text-sm text-gray-500 pt-2">
              Complete your booking through our mobile app
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              icon: IndianRupee,
              title: "Save Money",
              desc: "Get the best rates for regular commutes",
              bgClass: "bg-sky-100",
              iconClass: "text-sky-600"
            },
            {
              icon: CheckCircle2,
              title: "Guaranteed Rides",
              desc: "Your ride is always confirmed at scheduled time",
              bgClass: "bg-sky-100",
              iconClass: "text-sky-600"
            },
            {
              icon: Ticket,
              title: "Flexible Duration",
              desc: "Choose any date range that suits you",
              bgClass: "bg-sky-100",
              iconClass: "text-sky-600"
            }
          ].map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5 + idx * 0.1}}
              whileHover={{y: -8, scale: 1.02}}
              className="glass rounded-xl p-6 shadow-premium hover:shadow-premium-lg border border-sky-200/30 text-center card-3d cursor-pointer"
            >
              <motion.div
                whileHover={{rotate: 360, scale: 1.1}}
                transition={{duration: 0.5}}
                className={`w-12 h-12 ${benefit.bgClass} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
              >
                <benefit.icon className={`h-6 w-6 ${benefit.iconClass}`} />
              </motion.div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
