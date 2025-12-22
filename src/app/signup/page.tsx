"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {ArrowLeft, Phone, Shield, User, Car, Mail} from "lucide-react";

type UserType = "customer" | "driver" | null;
type Step = "selectType" | "phone" | "otp" | "details";

export default function SignupPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>(null);
  const [step, setStep] = useState<Step>("selectType");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
    if (otp.length === 6) {
      setStep("details");
    }
  };

  const handleCompleteSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to home page
    router.push("/");
  };

  const handleBack = () => {
    if (step === "details") {
      setStep("otp");
      setName("");
      setEmail("");
    } else if (step === "otp") {
      setStep("phone");
      setOtp("");
    } else if (step === "phone") {
      setStep("selectType");
      setUserType(null);
      setPhoneNumber("");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-white to-blue-50 flex items-center justify-center px-4 pt-32 pb-12 relative overflow-hidden">
      {/* Animated Background Blobs */}
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

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">Get Started</h1>
          <p className="text-gray-600">Create your account to begin</p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          whileHover={{y: -5}}
          className="glass rounded-3xl shadow-premium-lg p-8 relative overflow-hidden border border-sky-200/30 card-3d"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-sky-500 to-sky-600"></div>

          {/* Progress Indicator */}
          {step !== "selectType" && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                {["phone", "otp", "details"].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 rounded-full mx-1 transition ${
                      (s === "phone" &&
                        (step === "phone" ||
                          step === "otp" ||
                          step === "details")) ||
                      (s === "otp" && (step === "otp" || step === "details")) ||
                      (s === "details" && step === "details")
                        ? "bg-linear-to-r from-sky-500 to-sky-600"
                        : "bg-gray-200"
                    }`}
                  ></div>
                ))}
              </div>
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            </div>
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
                I want to sign up as
              </h2>

              <motion.button
                whileHover={{scale: 1.02, y: -2}}
                whileTap={{scale: 0.98}}
                onClick={() => handleUserTypeSelect("customer")}
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-sky-500 hover:bg-sky-50/50 transition-all group glass-dark cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{rotate: 360, scale: 1.1}}
                    transition={{duration: 0.5}}
                    className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <User className="text-white relative z-10" size={32} />
                  </motion.div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
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
                className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-sky-500 hover:bg-sky-50/50 transition-all group glass-dark cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{rotate: 360, scale: 1.1}}
                    transition={{duration: 0.5}}
                    className="w-16 h-16 bg-linear-to-br from-sky-600 to-sky-700 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <Car className="text-white relative z-10" size={32} />
                  </motion.div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
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
                <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {userType === "customer" ? (
                    <User className="text-white" size={32} />
                  ) : (
                    <Car className="text-white" size={32} />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {userType === "customer" ? "Customer" : "Driver"} Signup
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Enter your phone number to get started
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
                      className="input-premium w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-lg text-gray-900 placeholder:text-gray-500 bg-white/50 backdrop-blur-sm"
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
                  className="w-full py-4 bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
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
                <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
                <p className="text-gray-600 text-sm mt-2">
                  Enter the 6-digit code sent to
                </p>
                <p className="text-sky-600 font-semibold">+91 {phoneNumber}</p>
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
                    className="input-premium w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-center text-2xl tracking-widest font-semibold text-gray-900 placeholder:text-gray-400 bg-white/50 backdrop-blur-sm"
                    required
                    maxLength={6}
                  />
                </div>

                <motion.button
                  whileHover={otp.length === 6 ? {scale: 1.02, y: -2} : {}}
                  whileTap={otp.length === 6 ? {scale: 0.98} : {}}
                  type="submit"
                  disabled={otp.length !== 6}
                  className="w-full py-4 bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
                >
                  Verify OTP
                </motion.button>

                <button
                  type="button"
                  className="w-full text-sky-600 font-medium hover:text-sky-700 transition"
                >
                  Resend OTP
                </button>
              </form>
            </div>
          )}

          {/* Step 4: Enter Details */}
          {step === "details" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {userType === "customer" ? (
                    <User className="text-white" size={32} />
                  ) : (
                    <Car className="text-white" size={32} />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Complete Your Profile
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Tell us a bit about yourself
                </p>
              </div>

              <form onSubmit={handleCompleteSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={20} className="text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{scale: 1.02}}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="input-premium w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-gray-900 placeholder:text-gray-500 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{scale: 1.02}}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="input-premium w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-gray-900 placeholder:text-gray-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {userType === "driver" && (
                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                    <p className="text-sm text-sky-800">
                      <strong>Next Steps:</strong> After signup, you&apos;ll
                      need to complete your driver profile with vehicle details
                      and documents.
                    </p>
                  </div>
                )}

                <motion.button
                  whileHover={name ? {scale: 1.02, y: -2} : {}}
                  whileTap={name ? {scale: 0.98} : {}}
                  type="submit"
                  disabled={!name}
                  className="w-full py-4 bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-sky-700 transition-all shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed btn-glow"
                >
                  Complete Signup
                </motion.button>
              </form>
            </div>
          )}

          {/* Footer */}
          {step === "selectType" && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-sky-600 font-semibold hover:text-sky-700"
                >
                  Log in
                </Link>
              </p>
            </div>
          )}
        </motion.div>

        {/* Terms */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-sky-600 hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-sky-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
