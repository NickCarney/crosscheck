"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { useContactForm } from "../hooks/useContactForm";
import { Navigation, AnnouncementBanner } from "../components/Navigation";

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
      formType: "contact",
    });

    if (result.success) {
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      // Reset success message after 5 seconds
      setTimeout(reset, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact form and info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#8b2346] mb-6">
              Contact Us
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8">
              If you&apos;re interested in collaborating, please provide your information, and we will contact you soon. We look forward to connecting with you.
            </p>

            {/* Contact information */}
            <div className="mb-8">
              <p className="font-semibold text-gray-900">Drake Olson</p>
              <a
                href="mailto:Dolson@crosscheckstaffing.com"
                className="text-[#1e3a5f] hover:underline"
              >
                Dolson@crosscheckstaffing.com
              </a>
              <br />
              <span className="text-gray-700">(720) 635-4186</span>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            {/* Contact form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name section */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Name
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-700 mb-2">
                      First Name <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-700 mb-2">
                      Last Name <span className="text-gray-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  Email <span className="text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-xs text-gray-700 mb-2">
                  Message <span className="text-gray-500">(required)</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-[#162d4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:block">
            <Image
              src="/contact.jpg"
              alt="Scenic mountain view"
              width={800}
              height={1000}
              className="w-full h-auto rounded-lg shadow-xl"
            />
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

export default function ContactPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <AnnouncementBanner onClose={() => setShowBanner(false)} />
      )}
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  );
}
