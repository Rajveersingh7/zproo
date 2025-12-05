"use client";

import {motion} from "framer-motion";
import {FileText} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          subtitle: "",
          text: "By accessing and using Zproo&apos;s services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including riders, drivers, and visitors."
        }
      ]
    },
    {
      title: "2. Service Description",
      content: [
        {
          subtitle: "Ride Services",
          text: "Zproo provides electric vehicle ride-hailing services connecting riders with drivers. We act as a technology platform facilitating these connections and are not a transportation carrier."
        },
        {
          subtitle: "Rental Services",
          text: "Our rental services allow users to rent electric vehicles for specified periods. All rentals are subject to availability and require valid documentation."
        },
        {
          subtitle: "ZPass Subscription",
          text: "ZPass is a subscription service offering discounted rates and priority booking. Benefits are subject to the specific plan selected."
        }
      ]
    },
    {
      title: "3. User Accounts",
      content: [
        {
          subtitle: "Registration",
          text: "To use our services, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
          subtitle: "Age Requirement",
          text: "You must be at least 18 years old to create an account and use our services."
        },
        {
          subtitle: "Account Security",
          text: "You are solely responsible for all activities that occur under your account. Notify us immediately of any unauthorized use."
        }
      ]
    },
    {
      title: "4. User Conduct",
      content: [
        {
          subtitle: "",
          text: "You agree not to: (a) violate any laws or regulations; (b) infringe on others' rights; (c) transmit harmful code or viruses; (d) harass, abuse, or harm drivers or other users; (e) use the service for fraudulent purposes; (f) interfere with the proper functioning of the platform."
        }
      ]
    },
    {
      title: "5. Payments and Fees",
      content: [
        {
          subtitle: "Pricing",
          text: "All prices are displayed in Indian Rupees (INR). Ride fares are calculated based on distance, time, and demand. Rental rates vary by vehicle type and duration."
        },
        {
          subtitle: "Payment Methods",
          text: "We accept various payment methods including credit/debit cards, UPI, and digital wallets. You authorize us to charge your selected payment method for all services."
        },
        {
          subtitle: "Refunds",
          text: "Refunds are issued at our discretion based on the circumstances. Cancelled rides may be subject to cancellation fees as outlined in our cancellation policy."
        }
      ]
    },
    {
      title: "6. Cancellation Policy",
      content: [
        {
          subtitle: "Ride Cancellations",
          text: "You may cancel rides before driver arrival without penalty. Cancellations after driver arrival may incur a cancellation fee."
        },
        {
          subtitle: "Rental Cancellations",
          text: "Rental cancellations must be made at least 24 hours before the scheduled pickup time for a full refund. Cancellations within 24 hours may be subject to a cancellation fee."
        }
      ]
    },
    {
      title: "7. Driver Partner Terms",
      content: [
        {
          subtitle: "Requirements",
          text: "Driver partners must meet all requirements outlined in our Driver Partner Agreement, including valid licenses, documentation, and vehicle standards."
        },
        {
          subtitle: "Independent Contractors",
          text: "Driver partners are independent contractors, not employees of Zproo. They are responsible for their own taxes and insurance."
        }
      ]
    },
    {
      title: "8. Liability and Disclaimers",
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted services but do not guarantee availability at all times. Services may be suspended for maintenance or other reasons."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Zproo is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the specific service."
        },
        {
          subtitle: "Third-Party Services",
          text: "We are not responsible for the conduct of drivers or other third parties. While we conduct background checks, we cannot guarantee the behavior of all users."
        }
      ]
    },
    {
      title: "9. Intellectual Property",
      content: [
        {
          subtitle: "",
          text: "All content, trademarks, logos, and intellectual property on the Zproo platform are owned by or licensed to Zproo. You may not use, reproduce, or distribute any content without our express written permission."
        }
      ]
    },
    {
      title: "10. Privacy",
      content: [
        {
          subtitle: "",
          text: "Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review our Privacy Policy to understand our data practices."
        }
      ]
    },
    {
      title: "11. Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra."
        },
        {
          subtitle: "Arbitration",
          text: "We encourage users to contact our support team to resolve disputes informally. For unresolved disputes, both parties agree to binding arbitration."
        }
      ]
    },
    {
      title: "12. Modifications to Terms",
      content: [
        {
          subtitle: "",
          text: "We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or app notification. Continued use of our services after changes constitutes acceptance of the modified terms."
        }
      ]
    },
    {
      title: "13. Termination",
      content: [
        {
          subtitle: "",
          text: "We may suspend or terminate your account at any time for violations of these Terms, fraudulent activity, or other reasons at our discretion. You may also terminate your account by contacting support."
        }
      ]
    },
    {
      title: "14. Contact Information",
      content: [
        {
          subtitle: "",
          text: "For questions about these Terms of Service, please contact us at legal@zproo.com or visit our Contact page for additional support channels."
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
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Terms of Service
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
              Welcome to Zproo! These Terms of Service (&quot;Terms&quot;)
              govern your access to and use of our electric vehicle
              transportation services, including our ride-hailing, rental, and
              subscription services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Please read these terms carefully before using our services. By
              using Zproo, you acknowledge that you have read, understood, and
              agree to be bound by these Terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Agreement Notice */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="mt-12 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Agreement to Terms
            </h3>
            <p className="text-gray-600 text-center mb-6">
              By using Zproo&apos;s services, you acknowledge that you have read
              and agree to these Terms of Service and our Privacy Policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/privacy"
                className="inline-block bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-4 font-bold transition-all text-center"
              >
                View Privacy Policy
              </a>
              <a
                href="/contact"
                className="inline-block bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-4 font-bold shadow-lg transition-all text-center"
              >
                Contact Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
