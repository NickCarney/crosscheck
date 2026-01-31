"use client";

import Image from "next/image";
import React, { useState, FormEvent } from "react";
import { Almarai } from "next/font/google";
import { useContactForm } from "./hooks/useContactForm";

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

function GeometricBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    // Colors - adjusted to match the muted look with overlay
    const topColor = "hsl(344.69, 45%, 32%)"; // burgundy top (slightly muted)
    const leftColor = "hsl(202.94, 85%, 22%)"; // darker blue left
    const rightColor = "hsl(202.94, 90%, 38%)"; // brighter blue right
    const bgColor = "hsl(210, 60%, 25%)"; // dark blue-gray background

    // Helper to interpolate between two HSL colors
    const lerpColor = (t: number) => {
      // t = 0: burgundy (344.69, 45%, 32%)
      // t = 1: blue-ish (220, 50%, 30%)
      const h = 344.69 + (220 - 344.69) * t;
      const s = 45 + (50 - 45) * t;
      const l = 32 + (28 - 32) * t;
      return `hsl(${h}, ${s}%, ${l}%)`;
    };

    const drawCube = (
      cx: number,
      cy: number,
      w: number,
      h: number,
      depth: number,
      yOffset: number,
      amplitude: number,
    ) => {
      const y = cy + yOffset;

      // Calculate blend factor: lower = more blue (0 = highest/burgundy, 1 = lowest/blue)
      const blendFactor = (yOffset + amplitude) / (amplitude * 2);
      const currentTopColor = lerpColor(blendFactor);

      // Top face (diamond) - color shifts based on height
      ctx.beginPath();
      ctx.moveTo(cx, y);
      ctx.lineTo(cx + w / 2, y + h / 2);
      ctx.lineTo(cx, y + h);
      ctx.lineTo(cx - w / 2, y + h / 2);
      ctx.closePath();
      ctx.fillStyle = currentTopColor;
      ctx.fill();

      // Left face - darker blue
      ctx.beginPath();
      ctx.moveTo(cx - w / 2, y + h / 2);
      ctx.lineTo(cx, y + h);
      ctx.lineTo(cx, y + h + depth);
      ctx.lineTo(cx - w / 2, y + h / 2 + depth);
      ctx.closePath();
      ctx.fillStyle = leftColor;
      ctx.fill();

      // Right face - lighter blue
      ctx.beginPath();
      ctx.moveTo(cx + w / 2, y + h / 2);
      ctx.lineTo(cx, y + h);
      ctx.lineTo(cx, y + h + depth);
      ctx.lineTo(cx + w / 2, y + h / 2 + depth);
      ctx.closePath();
      ctx.fillStyle = rightColor;
      ctx.fill();
    };

    const animate = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Clear canvas
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      // Cube dimensions - ~6 cubes across screen
      const cubeWidth = width / 5.5;
      const cubeHeight = cubeWidth * 0.5; // height of diamond top
      const cubeDepth = cubeWidth * 0.32; // depth of side faces

      // Grid spacing for proper tessellation
      const spacingX = cubeWidth;
      const spacingY = cubeHeight / 2 + cubeDepth;

      // Calculate grid
      const cols = Math.ceil(width / spacingX) + 3;
      const rows = Math.ceil(height / spacingY) + 4;

      // Draw cubes row by row (back to front)
      for (let row = -2; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          // Offset every other row for isometric grid
          const xOffset = row % 2 === 0 ? 0 : cubeWidth / 2;
          const x = col * spacingX + xOffset - cubeWidth / 2;
          const y = row * spacingY - cubeHeight;

          // Left-to-right wave motion
          // Left starts low, right starts high, then swap
          // Phase offset of ~π across screen width so opposite sides are opposite
          const phase = col * 0.5;
          const amplitude = 25;
          const yOff = Math.sin(time + phase) * amplitude;

          drawCube(x, y, cubeWidth, cubeHeight, cubeDepth, yOff, amplitude);
        }
      }

      // Slow animation speed
      time += 0.008;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <GeometricBackground />

      {/* Shadow overlay matching original */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 35, 55, 0.3) 0%, rgba(20, 35, 55, 0.4) 40%, rgba(20, 35, 55, 0.3) 100%)",
        }}
      />

      {/* White triangle transition */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          width: "100%",
          height: "150px",
          background: "#e8e8e8",
          clipPath: "polygon(0 100%, 0 70%, 75% 20%, 100% 70%, 100% 100%)",
        }}
      />

      <div className="relative z-10 text-center px-8 py-20">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
          The Crosscheck Advantage:
          <br />
          Better Talent, Faster Results
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a
            href="/contact"
            className="bg-white text-[#1e3a5f] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Find Next Job
          </a>
          <a
            href="/contact"
            className="bg-white text-[#1e3a5f] px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Find Qualified Talent
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const cards = [
    {
      image: "/expertise-precision-hiring.png",
      title: "EXPERTISE & PRECISION HIRING",
      description: (
        <>
          Driving transformation with top talent in{" "}
          <strong className="text-[#8b2346]">
            ERP, Data Analytics, and Security
          </strong>
          . We connect you with proven experts who deliver results, protect your
          systems, and unlock insights.
        </>
      ),
    },
    {
      image: "/speed-quality-flexability.png",
      title: "SPEED, QUALITY, & FLEXIBILITY",
      description: (
        <>
          We quickly deliver top professionals through our network and proactive
          recruiting—tailored for{" "}
          <strong className="text-[#8b2346]">
            contract, contract-to-hire, or direct hire needs
          </strong>
          .
        </>
      ),
    },
    {
      image: "/scalable-long-term-partners.png",
      title: "SCALABLE, LONG-TERM PARTNERS",
      description: (
        <>
          We don&apos;t just fill roles—
          <strong className="text-[#8b2346]">
            we align talent with your growth goals
          </strong>
          .{" "}
          <strong className="text-[#8b2346]">
            From single hires to full teams, our flexible solutions scale with
            your business
          </strong>
          .
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#e8e8e8] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold italic text-[#8b2346] mb-12">
          Why Choose Crosscheck Staffing?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={280}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
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
                className="text-[#1e3a5f] hover:underline"
              >
                Dolson@crosscheckstaffing.com
              </a>
              <br />
              <a
                href="tel:+17206354186"
                className="text-[#1e3a5f] hover:underline"
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
      formType: "homepage",
    });

    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
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
    <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5080] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact info */}
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Ready to find exceptional talent or take the next step in your career?
              We&apos;re here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">Quick Response Time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-lg">Personalized Solutions</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">Thank you! We&apos;ll be in touch soon.</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="john.doe@example.com"
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8b2346] to-[#a52d56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function EssentialResourcesSection() {
  return (
    <section className="bg-[#e8e8e8] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] text-center mb-4">
          Essential Resources
        </h2>
        <p className="text-gray-600 text-center text-lg mb-16">
          Access our comprehensive guides to stay ahead in today&apos;s
          competitive market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Salary Guide Card */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#8b2346] p-8 flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <div>
                <h3 className="text-white text-2xl font-bold">
                  2026 Salary Guide
                </h3>
                <p className="text-white/90 text-base">
                  Comprehensive Market Data
                </p>
              </div>
            </div>
            <div className="bg-white p-8 flex-1 flex flex-col">
              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-1">
                Unlock up-to-date salary benchmarks, regional variations, and
                expert insights on compensation to attract and retain top
                talent.
              </p>
              <a
                href="#"
                className="bg-[#8b2346] text-white text-center py-4 px-6 rounded-md font-semibold hover:bg-[#7a1f3d] transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Salary Guide
              </a>
            </div>
          </div>

          {/* SAP Hiring Playbook Card */}
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#1e3a5f] p-8 flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <h3 className="text-white text-2xl font-bold">
                  SAP Hiring Playbook
                </h3>
                <p className="text-white/90 text-base">
                  Proven Hiring Methodologies
                </p>
              </div>
            </div>
            <div className="bg-white p-8 flex-1 flex flex-col">
              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-1">
                A step-by-step framework for identifying, interviewing, and
                recruiting top-tier SAP talent for your organization.
              </p>
              <a
                href="#"
                className="bg-[#1e3a5f] text-white text-center py-4 px-6 rounded-md font-semibold hover:bg-[#162d4a] transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Playbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <AnnouncementBanner onClose={() => setShowBanner(false)} />
      )}
      <Navigation />
      <HeroSection />
      <WhyChooseSection />
      <EssentialResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
