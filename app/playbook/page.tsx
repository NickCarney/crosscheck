"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation, AnnouncementBanner, Footer, ContactForm } from "../components";

function PlaybookSection() {
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
          <ContactForm
            formType="playbook"
            showNewsletter
            showPhone
            showCompany
            accentColor="burgundy"
            buttonVariant="burgundy"
            buttonText="Submit"
            successMessage="Thank you! Your request has been submitted successfully."
            messageRequired={false}
            messageRows={4}
          />
        </div>
      </div>
    </section>
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
