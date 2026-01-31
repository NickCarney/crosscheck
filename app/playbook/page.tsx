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

function PlaybookSection() {
  const { submitForm, isSubmitting, isSuccess, error, reset } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await submitForm({
      ...formData,
      formType: "playbook",
    });

    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        newsletter: false,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/playbook-bg.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8b2346] mb-4">
            Download the ERP Hiring Playbook (2025)
          </h1>
          <p className="text-lg text-gray-900">
            Build scalable SAP project teams with confidence — includes compensation benchmarks, phase-by-phase hiring map, and expert insights.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm font-medium">
                Thank you! Your request has been submitted successfully.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name section */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-4">
                Name
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#8b2346] mb-2">
                    First Name <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8b2346] mb-2">
                    Last Name <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Email field */}
            <div>
              <label className="block text-xs text-[#8b2346] mb-2">
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
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="newsletter-playbook"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-4 h-4 text-[#8b2346] border-gray-300 rounded focus:ring-[#8b2346] disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="newsletter-playbook" className="text-sm text-[#8b2346]">
                Sign up for news and updates
              </label>
            </div>

            {/* Phone field */}
            <div>
              <label className="block text-xs text-[#8b2346] mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Company Name field */}
            <div>
              <label className="block text-xs text-[#8b2346] mb-2">
                Company Name <span className="text-gray-500">(required)</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Message field */}
            <div>
              <label className="block text-xs text-[#8b2346] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b2346] focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8b2346] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7a1f3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
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

export default function PlaybookPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <AnnouncementBanner onClose={() => setShowBanner(false)} />
      )}
      <Navigation />
      <PlaybookSection />
      <Footer />
    </div>
  );
}
