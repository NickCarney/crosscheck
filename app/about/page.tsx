"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
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
          className="text-[#1e3a5f] font-medium hover:text-[#8b2346]"
        >
          Specialties
        </a>
        <a
          href="/about"
          className="text-[#1e3a5f] font-medium hover:text-[#8b2346] underline"
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

function MeetTheTeamSection() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-[#1e3a5f]">Meet the</span>{" "}
          <span className="text-[#8b2346]">Team</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-16 max-w-4xl mx-auto">
          At{" "}
          <span className="text-[#1e3a5f] font-semibold">
            Crosscheck Staffing
          </span>
          , we specialize in connecting top-tier IT professionals with
          organizations across North America. We provide{" "}
          <span className="text-[#1e3a5f] font-semibold">
            contract, contract-to-hire, and direct-hire
          </span>{" "}
          staffing solutions, ensuring businesses have the flexibility to scale
          their teams efficiently. Our expertise spans across multiple
          technology disciplines, ensuring that businesses secure the right
          talent to drive innovation, efficiency, and success.
        </p>

        {/* Team member card - Drake */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="mb-6 flex justify-center">
              <Image
                src="/drake-olson.PNG"
                alt="Drake Olson"
                width={500}
                height={700}
                className="w-auto h-auto max-h-[500px] rounded-lg"
              />
            </div>
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1e3a5f]">
                    Drake Olson
                  </h3>
                  {expandedMember === "drake" && (
                    <p className="text-[#8b2346] font-medium mt-1">
                      Co-Founder
                    </p>
                  )}
                </div>
                <button
                  onClick={() =>
                    setExpandedMember(
                      expandedMember === "drake" ? null : "drake",
                    )
                  }
                  className="text-[#1e3a5f] hover:text-[#8b2346] transition-all"
                  aria-label={
                    expandedMember === "drake"
                      ? "Collapse details"
                      : "Expand details"
                  }
                >
                  {expandedMember === "drake" ? (
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
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{
                  maxHeight: expandedMember === "drake" ? "1000px" : "0px",
                  opacity: expandedMember === "drake" ? 1 : 0,
                }}
              >
                <div className="pt-4 space-y-4 text-[#8b2346]">
                  <p className="leading-relaxed">
                    Drake helped co-found Crosscheck Staffing after five years
                    with two of the largest IT staffing agencies where he was a
                    consistent top-performer both as a Recruiter & Account
                    Executive. He prides himself on a personalized approach,
                    taking the time to understand both the aspirations of his
                    candidates and the specific needs of his clients to create
                    successful matches that make sense for each.
                  </p>

                  <p className="leading-relaxed">
                    Drake&apos;s primary focuses are Data & Analytics, Cloud
                    Engineering, and IT Security. Drake wanted to build
                    Crosscheck Staffing as he believes there is a market for
                    organizations that can provide high-quality delivery without
                    sacrificing an honest and collaborative style where everyone
                    wins.
                  </p>

                  <p className="leading-relaxed">
                    Originally from Colorado, Drake is a graduate of University
                    of Colorado with a degree in Economics. Drake is a massive
                    sports fan with his favorite teams being the Chicago Cubs,
                    Denver Broncos, Colorado Avalanche, and Colorado Buffaloes.
                    When he&apos;s not following sports, he can be found trying
                    to stay calm on the golf course and spending as much time
                    with family and friends as he can.
                  </p>

                  <div className="border-t-2 border-gray-300 pt-4"></div>
                </div>
              </div>
            </div>
          </div>
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
      formType: "about",
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
              Interested in working together? Fill out some info and we will be
              in touch shortly. We can&apos;t wait to hear from you!
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {/* Success message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We&apos;ll be in touch soon.
                </p>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name section label */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Name
                </label>

                {/* Name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#1e3a5f] mb-2">
                      First Name{" "}
                      <span className="text-gray-500">(required)</span>
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
                      Last Name{" "}
                      <span className="text-gray-500">(required)</span>
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
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
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
                  {isSubmitting ? "Submitting..." : "Submit"}
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
              <a href="tel:+17206354186" className="text-gray-700">
                (720) 635-4186
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <AnnouncementBanner onClose={() => setShowBanner(false)} />
      )}
      <Navigation />
      <MeetTheTeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
