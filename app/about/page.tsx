"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation, AnnouncementBanner, Footer, ContactForm } from "../components";

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
            <ContactForm
              formType="about"
              showNewsletter
              buttonText="Submit"
              successMessage="Thank you for your message! We'll be in touch soon."
            />
          </div>
        </div>
      </div>
    </section>
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
