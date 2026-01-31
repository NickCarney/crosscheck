"use client";

import Image from "next/image";
import React, { useState, FormEvent } from "react";
import { Almarai } from "next/font/google";
import { useContactForm } from "../hooks/useContactForm";

const almarai = Almarai({
  weight: ["700"],
  subsets: ["arabic"],
});

function AnnouncementBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[hsla(202.94,100%,26.67%,1)] text-center py-2 px-4 relative">
      <a
        href="/salary-guide"
        className={`text-white font-bold hover:underline ${almarai.className}`}
      >
        Check out our brand new 2026 Salary Guide!
      </a>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-70"
        aria-label="Close announcement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-4 bg-white">
      <a href="/">
        <Image
          src="/logo.png"
          alt="Crosscheck Staffing"
          width={220}
          height={60}
          priority
        />
      </a>
      <div className="flex items-center gap-8">
        <div className="relative group">
          <button className="flex items-center gap-1 text-[#1e3a5f] font-medium hover:text-[#8b2346]">
            Hiring Trends
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute top-full left-0 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-[#1e3a5f] rounded-md shadow-lg py-2 min-w-[280px]">
              <a
                href="/salary-guide"
                className="block px-4 py-2 text-white hover:bg-[#8b2346] transition-colors"
              >
                2026 Salary Guide
              </a>
              <a
                href="/playbook"
                className="block px-4 py-2 text-white hover:bg-[#8b2346] transition-colors"
              >
                Free Hiring Guide For SAP Talent
              </a>
            </div>
          </div>
        </div>
        <a
          href="/specialties"
          className="text-[#1e3a5f] font-medium hover:text-[#8b2346] underline"
        >
          Specialties
        </a>
        <a
          href="/about"
          className="text-[#1e3a5f] font-medium hover:text-[#8b2346]"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-[#1e3a5f] font-medium hover:text-[#8b2346]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      className="relative py-32 px-8"
      style={{
        background: "linear-gradient(135deg, #8b2346 0%, #1e3a5f 50%, #2d5080 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Crosscheck <span className="font-extrabold">Staffing</span>
        </h1>

        <p className="text-white/95 text-xl md:text-2xl mb-12 leading-relaxed">
          Connecting exceptional talent with transformative technology opportunities
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {/* Expert Talent */}
          <div className="flex items-center gap-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="font-medium text-lg">Expert Talent</span>
          </div>

          {/* Enterprise Solutions */}
          <div className="flex items-center gap-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-medium text-lg">Enterprise Solutions</span>
          </div>

          {/* Secure & Compliant */}
          <div className="flex items-center gap-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="font-medium text-lg">Secure &amp; Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const expertiseCards = [
    {
      color: "#8b2346",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "ERP Systems",
      description: "Enterprise Resource Planning solutions that streamline your business operations",
      buttonColor: "#8b2346",
      skills: [
        {
          name: "SAP",
          description: "Complete SAP ecosystem including S/4HANA, SuccessFactors, and Ariba",
        },
        {
          name: "Oracle Fusion",
          description: "Cloud-based ERP, HCM, and Supply Chain Management solutions",
        },
        {
          name: "NetSuite",
          description: "Integrated business management suite for growing companies",
        },
        {
          name: "Workday",
          description: "Human Capital Management and Financial Management platforms",
        },
        {
          name: "Dynamics 365",
          description: "Microsoft business applications for CRM and ERP needs",
        },
      ],
    },
    {
      color: "#1e3a5f",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Data Analytics",
      description: "Transform your data into actionable business insights and competitive advantages",
      buttonColor: "#1e3a5f",
      skills: [
        {
          name: "Business Intelligence",
          description: "Power BI, Tableau, and Qlik/Sense visualization experts",
        },
        {
          name: "Data Engineering",
          description: "ETL/ELT pipelines, data warehousing, and cloud platforms",
        },
        {
          name: "Advanced Analytics",
          description: "Machine learning, predictive modeling, and statistical analysis",
        },
        {
          name: "Data Governance",
          description: "Data quality, compliance, and management frameworks",
        },
        {
          name: "Cloud Analytics",
          description: "AWS, Azure, and GCP data platform specialists",
        },
      ],
    },
    {
      color: "#6b7280",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "IT Security",
      description: "Comprehensive cybersecurity solutions to protect your digital infrastructure",
      buttonColor: "#6b7280",
      skills: [
        {
          name: "Cybersecurity Strategy",
          description: "Risk assessment, security architecture, and compliance frameworks",
        },
        {
          name: "Network Security",
          description: "Firewalls, intrusion detection, and network monitoring solutions",
        },
        {
          name: "Identity Management",
          description: "Access control, authentication, and privileged account management",
        },
        {
          name: "Security Operations",
          description: "SOC management, incident response, and threat hunting",
        },
        {
          name: "Compliance & Audit",
          description: "GDPR, SOX, HIPAA, and industry-specific regulatory requirements",
        },
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-[#8b2346]">Expertise</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We specialize in three critical areas of modern business technology, providing top-tier
            professionals who drive digital transformation and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
          {expertiseCards.map((card, cardIndex) => {
            const isExpanded = expandedCard === cardIndex;
            const handleToggle = () => {
              setExpandedCard(isExpanded ? null : cardIndex);
            };
            return (
              <div
                key={cardIndex}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                style={{ borderTop: `4px solid ${card.color}` }}
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex-1" style={{ minHeight: "240px" }}>
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${card.color}20`, color: card.color }}
                      >
                        {card.icon}
                      </div>
                      <button
                        onClick={handleToggle}
                        className="text-gray-400 hover:text-gray-600 transition-transform"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                        style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      {card.description}
                    </p>

                    <div
                      className="overflow-hidden transition-all duration-1000 ease-in-out"
                      style={{
                        maxHeight: isExpanded ? "2000px" : "0px",
                        opacity: isExpanded ? 1 : 0,
                        marginBottom: isExpanded ? "2rem" : "0rem",
                      }}
                    >
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                          SPECIALIZED SKILLS
                        </h4>
                        <ul className="space-y-3">
                          {card.skills.map((skill, skillIndex) => (
                            <li
                              key={skillIndex}
                              className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50/50"
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: card.color }}
                              />
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-1">
                                  {skill.name}
                                </h5>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {skill.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleToggle}
                    className="w-full py-3 px-6 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {isExpanded ? "View Less" : "Explore Skills"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="py-24 px-8"
      style={{
        background: "linear-gradient(135deg, #8b2346 0%, #1e3a5f 50%, #2d5080 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Transform Your <span className="font-extrabold">Technology Team?</span>
        </h2>

        <p className="text-white/95 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Let us connect you with exceptional professionals who will drive your business forward. Our expert talent solutions are tailored to your unique needs and industry requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-[#8b2346] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Find Talent
          </a>
          <a
            href="/contact"
            className="bg-white text-[#8b2346] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { submitForm, isSubmitting, isSuccess, error, reset } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm({
      ...formData,
      formType: "specialties",
    });
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="bg-[#1e3a5f] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact heading and text */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact us
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Let&apos;s build your tech team together. Partner with Crosscheck Staffing today!
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {/* Success message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name section label */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Name
                </label>

                {/* Name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#1e3a5f] mb-2">
                      First Name <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#1e3a5f] mb-2">
                      Last Name <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs text-[#1e3a5f] mb-2">
                  Email <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  disabled={isSubmitting}
                  className="w-4 h-4 text-[#1e3a5f] border-gray-300 rounded focus:ring-[#1e3a5f] disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label htmlFor="newsletter" className="text-sm text-[#1e3a5f]">
                  Sign up for news and updates
                </label>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs text-[#1e3a5f] mb-2">
                  Message <span className="text-gray-500">(required)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1e3a5f] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#162d4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#e8e8e8] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Logo and Privacy Policy */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-[#8b2346]">Crosscheck</span>{" "}
              <span className="text-[#1e3a5f]">Staffing</span>
            </h3>
            <a
              href="/privacy-policy"
              className="text-[#1e3a5f] underline hover:text-[#8b2346] transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Middle - Location */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Location</h4>
            <address className="not-italic text-gray-700 leading-relaxed">
              1100 Johnson Rd. #16061
              <br />
              Golden, CO 80402
            </address>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Contact</h4>
            <div className="text-gray-700">
              <p className="font-semibold">Drake Olson</p>
              <a
                href="mailto:Dolson@crosscheckstaffing.com"
                className="text-[#8b2346] hover:underline"
              >
                Dolson@crosscheckstaffing.com
              </a>
              <br />
              <a
                href="tel:+17206354186"
                className="text-gray-700"
              >
                (720) 635-4186
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SpecialtiesPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <AnnouncementBanner onClose={() => setShowBanner(false)} />
      )}
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
