"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation, AnnouncementBanner, Footer, ContactForm } from "../components";

function ContactSection() {
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

            <ContactForm
              formType="contact"
              buttonText="Send"
              successMessage="Thank you! Your message has been sent successfully."
            />
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
