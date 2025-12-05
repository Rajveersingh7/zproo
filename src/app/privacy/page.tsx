"use client";

import {motion} from "framer-motion";
import {Shield} from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use our services, we collect personal information such as your name, email address, phone number, payment information, and location data. This information is necessary to provide you with our ride-hailing and rental services."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with our app and services, including device information, IP address, browser type, and usage patterns."
        },
        {
          subtitle: "Location Information",
          text: "With your permission, we collect precise location data to facilitate ride booking, driver matching, and service optimization."
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, including matching riders with drivers, processing payments, and providing customer support."
        },
        {
          subtitle: "Safety and Security",
          text: "Your information helps us maintain platform security, prevent fraud, and ensure the safety of all users through verification and monitoring."
        },
        {
          subtitle: "Communications",
          text: "We may use your contact information to send service-related notifications, promotional offers, and important updates about our services."
        }
      ]
    },
    {
      title: "3. Information Sharing",
      content: [
        {
          subtitle: "With Drivers",
          text: "When you book a ride, we share necessary information with drivers including your name, pickup location, and contact details to facilitate the service."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted third-party service providers who assist us in operating our platform, processing payments, and analyzing data."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, legal process, or to protect the rights, property, or safety of Zproo, our users, or others."
        }
      ]
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
        },
        {
          subtitle: "Encryption",
          text: "Sensitive data, including payment information, is encrypted during transmission using secure socket layer technology (SSL)."
        }
      ]
    },
    {
      title: "5. Your Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your account and associated data by contacting our support team."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of promotional communications at any time by using the unsubscribe link in our emails or adjusting your notification preferences."
        }
      ]
    },
    {
      title: "6. Cookies and Tracking",
      content: [
        {
          subtitle: "",
          text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings."
        }
      ]
    },
    {
      title: "7. Children's Privacy",
      content: [
        {
          subtitle: "",
          text: "Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children."
        }
      ]
    },
    {
      title: "8. Changes to Privacy Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the app. Continued use of our services after changes constitutes acceptance of the updated policy."
        }
      ]
    },
    {
      title: "9. Contact Us",
      content: [
        {
          subtitle: "",
          text: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@zproo.com or write to us at our office address listed on our Contact page."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-emerald-600 to-teal-600 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-emerald-50">
              Last updated: December 4, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Zproo, we are committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy
              explains how we collect, use, share, and protect your data when
              you use our electric vehicle transportation services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By using Zproo&apos;s services, you agree to the collection and
              use of information in accordance with this policy. Please read
              this document carefully to understand our practices regarding your
              personal data.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3 + idx * 0.05}}
                className="bg-white rounded-3xl shadow-lg p-8 sm:p-10"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold text-emerald-600 mb-2">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="mt-12 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center border border-emerald-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Questions About Privacy?
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns about our privacy practices,
              we&apos;re here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-4 font-bold shadow-lg transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
