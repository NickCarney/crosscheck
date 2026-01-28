"use client";

import Image from "next/image";
import React, { useState } from "react";

function AnnouncementBanner({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="bg-[#c9a227] text-center py-2 px-4 relative">
      <a
        href="/salary-guide"
        className="text-[#1e3a5f] font-medium hover:underline"
      >
        Check out our brand new 2026 Salary Guide!
      </a>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1e3a5f] hover:opacity-70"
        aria-label="Close announcement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      amplitude: number
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
          const amplitude = 15;
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
    <section className="relative min-h-[600px] flex flex-col items-center justify-center">
      <GeometricBackground />

      {/* Shadow overlay matching original */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20, 35, 55, 0.3) 0%, rgba(20, 35, 55, 0.4) 40%, rgba(20, 35, 55, 0.3) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-8 py-20">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight max-w-5xl mx-auto">
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
          <strong className="text-[#8b2346]">ERP, Data Analytics, and Security</strong>. We connect you
          with proven experts who deliver results, protect your systems, and
          unlock insights.
        </>
      ),
    },
    {
      image: "/speed-quality-flexability.png",
      title: "SPEED, QUALITY, & FLEXIBILITY",
      description: (
        <>
          We quickly deliver top professionals through our network and proactive
          recruiting—tailored for <strong className="text-[#8b2346]">contract, contract-to-hire, or direct
          hire needs</strong>.
        </>
      ),
    },
    {
      image: "/scalable-long-term-partners.png",
      title: "SCALABLE, LONG-TERM PARTNERS",
      description: (
        <>
          We don&apos;t just fill roles—
          <strong className="text-[#8b2346]">we align talent with your growth goals</strong>.{" "}
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

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {showBanner && <AnnouncementBanner onClose={() => setShowBanner(false)} />}
      <Navigation />
      <HeroSection />
      <WhyChooseSection />
    </div>
  );
}
