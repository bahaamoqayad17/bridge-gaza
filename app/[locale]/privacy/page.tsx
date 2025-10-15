"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge Gaza ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect several types of information to provide and improve
                  our services:
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">
                  2.1 Personal Information
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and email address</li>
                  <li>Country and city of residence</li>
                  <li>Profile photo (optional)</li>
                  <li>Professional background and expertise areas</li>
                  <li>Bio and personal description</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">
                  2.2 Session Information
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Session scheduling and attendance records</li>
                  <li>Session feedback and reviews</li>
                  <li>Communication between mentors and students</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">
                  2.3 Technical Data
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To create and manage your account</li>
                  <li>To match mentors with appropriate students</li>
                  <li>To facilitate session bookings and communications</li>
                  <li>
                    To send notifications about sessions and platform updates
                  </li>
                  <li>To improve our services and user experience</li>
                  <li>To analyze platform usage and generate insights</li>
                  <li>To prevent fraud and ensure platform security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  4. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as your
                  account is active or as needed to provide services. You may
                  request deletion of your data at any time through your account
                  settings. Some information may be retained for legitimate
                  business purposes or legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance
                  user experience and analyze platform usage. Cookies help us
                  remember your preferences and provide analytics about how
                  users interact with our platform. You can control cookie
                  preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  6. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share data
                  only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    With other users (mentors/students) to facilitate sessions
                  </li>
                  <li>
                    With service providers who assist in platform operations
                  </li>
                  <li>When required by law or legal processes</li>
                  <li>
                    To protect rights, property, or safety of Bridge Gaza and
                    users
                  </li>
                  <li>With sponsors (aggregated, anonymized data only)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict certain data processing</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  8. Security Measures
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your data from unauthorized access,
                  disclosure, alteration, or destruction. These include
                  encryption, secure servers, access controls, and regular
                  security assessments. However, no internet transmission is
                  completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge Gaza is intended for users aged 16 and above. We do not
                  knowingly collect personal information from children under 16.
                  If we become aware of such collection, we will delete the
                  information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  10. International Data Transfers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place to protect your data in
                  accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  11. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. We will notify
                  you of significant changes via email or platform notification.
                  Continued use of the platform after changes constitutes
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  12. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or
                  our data practices, please contact us at:
                  <br />
                  <a
                    href="mailto:privacy@bridgegaza.org"
                    className="text-primary hover:underline"
                  >
                    privacy@bridgegaza.org
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
