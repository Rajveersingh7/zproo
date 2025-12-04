"use client";

import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Award,
  Globe,
  Mail
} from "lucide-react";

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries with performance bonuses and equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance for you and your family, wellness programs"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote work options, and generous time off"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description:
        "Career development programs, skill training, and learning resources"
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description:
        "Collaborative environment with talented, passionate colleagues"
    },
    {
      icon: Globe,
      title: "Make an Impact",
      description:
        "Contribute to sustainable transportation and environmental change"
    }
  ];

  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      description:
        "Build scalable systems for electric vehicle management and ride-hailing platform"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Pune, India",
      type: "Full-time",
      description:
        "Lead product strategy and development for our mobility solutions"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Pune, India / Remote",
      type: "Full-time",
      description: "Create intuitive user experiences for riders and drivers"
    },
    {
      title: "Operations Manager",
      department: "Operations",
      location: "Pune, India",
      type: "Full-time",
      description:
        "Manage fleet operations, driver network, and service quality"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Pune, India",
      type: "Full-time",
      description:
        "Drive brand awareness and user acquisition through digital channels"
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Pune, India",
      type: "Full-time",
      description:
        "Analyze data to improve operations, pricing, and customer experience"
    }
  ];

  const values = [
    {
      icon: Briefcase,
      title: "Innovation First",
      description: "We embrace new ideas and encourage creative problem-solving"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Teamwork and open communication drive our success"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Environmental responsibility is at our core"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                💼 Join Our Team
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Build the Future of
              <br />
              Electric Mobility
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
              Join our mission to revolutionize urban transportation through
              sustainable electric solutions
            </p>

            <a
              href="mailto:careers@zproo.com"
              className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-4 font-semibold shadow-lg transition-all cursor-pointer"
            >
              <Mail className="h-5 w-5" />
              Email Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Why Work at Zproo?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we offer a chance to make a real
              difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and help shape the future of mobility
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="mailto:careers@zproo.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full font-semibold transition-all shadow-md whitespace-nowrap cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            We&apos;re always looking for talented individuals. Send us your
            resume and let us know how you can contribute to our mission.
          </p>
          <a
            href="mailto:careers@zproo.com"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-4 font-semibold shadow-lg transition-all"
          >
            <Mail className="h-5 w-5" />
            careers@zproo.com
          </a>
        </div>
      </section>
    </main>
  );
}
