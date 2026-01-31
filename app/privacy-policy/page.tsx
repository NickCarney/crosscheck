import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e3a5f] py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-white hover:text-gray-200 transition-colors inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">
          <strong>Effective Date:</strong> May 14, 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Crosscheck Staffing gathers several categories of data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, resume/CV, job history, and other professional
                information.
              </li>
              <li>
                <strong>Automatically Collected Information:</strong> IP
                address, browser type, device info, pages visited, and usage
                data through cookies and similar technologies.
              </li>
              <li>
                <strong>Third-Party Data:</strong> Information sourced from
                LinkedIn, job boards, or referral platforms when applicants use
                those channels.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The organization processes collected data to evaluate candidate
              qualifications, contact prospects about matching positions,
              communicate with clients regarding candidacy, enhance website
              functionality and marketing, and fulfill legal obligations.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Data may be disclosed to employers seeking candidates, service
              providers supporting business operations (email, hosting,
              analytics), and regulatory authorities when legally required. We
              do not sell your personal information.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The site employs cookies and tools including Google Analytics and
              LinkedIn Ads to optimize user experience and analyze traffic
              patterns. Users can modify browser settings to control cookie
              preferences.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Individuals may request data access, correction, deletion, or
              marketing communication opt-out. Contact:{" "}
              <a
                href="mailto:bheimple@crosscheckstaffing.com"
                className="text-[#1e3a5f] hover:underline"
              >
                bheimple@crosscheckstaffing.com
              </a>
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable security measures to protect your
              information, but no system is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Services are not intended for those under 16, and the organization
              does not knowingly collect children&apos;s data.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              8. Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Changes will be posted with revised effective dates.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-[#8b2346] mb-4">
              9. Contact Information
            </h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="font-semibold">Crosscheck Staffing</p>
              <p>1100 Johnson Rd. #16061, Golden, CO 80402</p>
              <a
                href="mailto:bheimple@crosscheckstaffing.com"
                className="text-[#1e3a5f] hover:underline"
              >
                bheimple@crosscheckstaffing.com
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
