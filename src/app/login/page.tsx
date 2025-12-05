"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {ArrowLeft, Phone, Shield, User, Car} from "lucide-react";

type UserType = "customer" | "driver" | null;
type Step = "selectType" | "phone" | "otp";

export default function LoginPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>(null);
  const [step, setStep] = useState<Step>("selectType");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep("phone");
  };

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep("otp");
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to home page
    router.push("/");
  };

  const handleBack = () => {
    if (step === "otp") {
      setStep("phone");
      setOtp("");
    } else if (step === "phone") {
      setStep("selectType");
      setUserType(null);
      setPhoneNumber("");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-4 pt-32 pb-12 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
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

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Log in to continue your journey</p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          whileHover={{y: -5}}
          className="glass rounded-3xl shadow-premium-lg p-8 relative overflow-hidden border border-emerald-200/30 card-3d"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-teal-500"></div>

          {/* Back Button */}
          {step !== "selectType" && (
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
          )}

          {/* Step 1: Select User Type */}
          {step === "selectType" && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4}}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 gradient-text">
                I want to log in as
              </h2>

              <motion.button
                whileHover={{scale: 1.02, y: -2}}
                whileTap={{scale: 0.98}}
                onClick={() => handleUserTypeSelect("customer")}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group glass-dark cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{rotate: 360, scale: 1.1}}
                    transition={{duration: 0.5}}
                    className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <User className="text-white relative z-10" size={32} />
                  </motion.div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Customer
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Book rides and services
                    </p>
                  </div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{scale: 1.02, y: -2}}
                whileTap={{scale: 0.98}}
                onClick={() => handleUserTypeSelect("driver")}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group glass-dark cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{rotate: 360, scale: 1.1}}
                    transition={{duration: 0.5}}
                    className="w-16 h-16 bg-linear-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <Car className="text-white relative z-10" size={32} />
                  </motion.div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Driver
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Start earning with us
                    </p>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Enter Phone Number */}
          {step === "phone" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {userType === "customer" ? (
                    <User className="text-white" size={32} />
                  ) : (
                    <Car className="text-white" size={32} />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {userType === "customer" ? "Customer" : "Driver"} Login
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Enter your phone number to receive OTP
                </p>
              </div>

              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone size={20} className="text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{scale: 1.02}}
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) =>
                        setPhoneNumber(
                          e.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      placeholder="Enter 10-digit mobile number"
                      className="input-premium w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-lg text-gray-900 placeholder:text-gray-500 bg-white/50 backdrop-blur-sm"
                      required
                      maxLength={10}
                    />
                  </div>
                  {phoneNumber && phoneNumber.length !== 10 && (
                    <p className="text-red-500 text-sm mt-2">
                      Please enter a valid 10-digit phone number
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={
                    phoneNumber.length === 10 ? {scale: 1.02, y: -2} : {}
                  }
                  whileTap={phoneNumber.length === 10 ? {scale: 0.98} : {}}
                  type="submit"
                  disabled={phoneNumber.length !== 10}
                  className="w-full py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
                >
                  Send OTP
                </motion.button>
              </form>
            </div>
          )}

          {/* Step 3: Verify OTP */}
          {step === "otp" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
                <p className="text-gray-600 text-sm mt-2">
                  Enter the 6-digit code sent to
                </p>
                <p className="text-emerald-600 font-semibold">
                  +91 {phoneNumber}
                </p>
              </div>

              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OTP Code
                  </label>
                  <motion.input
                    whileFocus={{scale: 1.02}}
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="Enter 6-digit OTP"
                    className="input-premium w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-center text-2xl tracking-widest font-semibold text-gray-900 placeholder:text-gray-400 bg-white/50 backdrop-blur-sm"
                    required
                    maxLength={6}
                  />
                </div>

                <motion.button
                  whileHover={otp.length === 6 ? {scale: 1.02, y: -2} : {}}
                  whileTap={otp.length === 6 ? {scale: 0.98} : {}}
                  type="submit"
                  disabled={otp.length !== 6}
                  className="w-full py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
                >
                  Verify & Login
                </motion.button>

                <button
                  type="button"
                  className="w-full text-emerald-600 font-medium hover:text-emerald-700 transition"
                >
                  Resend OTP
                </button>
              </form>
            </div>
          )}

          {/* Footer */}
          {step === "selectType" && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  Sign up
                </Link>
              </p>
            </div>
          )}
        </motion.div>

        {/* Terms */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-emerald-600 hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-emerald-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
