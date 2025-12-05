"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Briefcase,
  Users,
  Car,
  HeadphonesIcon,
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactChannels = [
    {
      icon: HeadphonesIcon,
      title: "General Support",
      email: "support@zproo.com",
      description: "For ride bookings, account issues, and general queries",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Careers & HR",
      email: "careers@zproo.com",
      description: "Job applications & HR inquiries",
      color: "from-emerald-600 to-teal-500"
    },
    {
      icon: Car,
      title: "Driver Support",
      email: "drivers@zproo.com",
      description: "Driver partners & fleet queries",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Business Inquiries",
      email: "business@zproo.com",
      description: "Partnerships & corporate collaborations",
      color: "from-teal-600 to-emerald-500"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                📧 Get in Touch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              We&apos;re Here to Help
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600">
              Have questions about our services? Need support? Want to partner
              with us? We&apos;d love to hear from you and help with your
              electric mobility needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4}}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900"
                  >
                    <option value="">Choose a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="driver">Driver Partner</option>
                    <option value="business">Business Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief subject of your message"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  className="cursor-pointer w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl py-4 px-6 font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 0.1}}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                  Office Information
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Reach out directly through these channels
                </p>
              </div>

              {/* Address */}
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tech Centre, 5th Floor, Plot No. 30, 502 Phase 1, Rajiv
                      Gandhi Infotech Park, MIDC, Hinjewadi, Pune, Maharashtra -
                      411057
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Sunday: 6:00 AM - 11:00 PM
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      24/7 support available via email and app
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Phone Support
                    </h3>
                    <p className="text-gray-600">+91-XXXXX-XXXXX</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Available during business hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reach out directly through these channels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactChannels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                whileHover={{y: -10}}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${channel.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <channel.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {channel.title}
                </h3>
                <a
                  href={`mailto:${channel.email}`}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg mb-3 block"
                >
                  {channel.email}
                </a>
                <p className="text-gray-600">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
