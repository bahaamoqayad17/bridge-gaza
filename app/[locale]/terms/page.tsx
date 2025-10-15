"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const Terms = () => {
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
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-white/90">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  Bridge Gaza ("we," "our," or "us") provides an online platform
                  for mentorship and learning connections between Gazan students
                  and global mentors. By accessing or using our website and
                  services, you agree to be bound by these Terms of Use and our
                  Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  2. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By creating an account, booking sessions, or using any
                  features of Bridge Gaza, you accept and agree to comply with
                  these terms. If you do not agree to these terms, please do not
                  use our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All users must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Provide accurate and truthful information during
                    registration
                  </li>
                  <li>
                    Maintain the confidentiality of their account credentials
                  </li>
                  <li>
                    Behave respectfully and professionally during all
                    interactions
                  </li>
                  <li>
                    Not use the platform for any unlawful or prohibited
                    activities
                  </li>
                  <li>
                    Not share inappropriate, offensive, or harmful content
                  </li>
                  <li>Respect intellectual property rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  4. Mentor Obligations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mentors agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Provide guidance and support professionally and ethically
                  </li>
                  <li>
                    Honor scheduled sessions or provide adequate notice for
                    cancellations
                  </li>
                  <li>
                    Not request payment or compensation outside the platform
                  </li>
                  <li>
                    Maintain appropriate boundaries in mentor-mentee
                    relationships
                  </li>
                  <li>Provide constructive and respectful feedback</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  5. Student Obligations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Students agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Attend scheduled sessions on time or provide notice for
                    cancellations
                  </li>
                  <li>Come prepared and engaged for mentorship sessions</li>
                  <li>Respect mentors' time and expertise</li>
                  <li>Use the platform for genuine learning purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on Bridge Gaza, including text, graphics, logos,
                  and software, is the property of Bridge Gaza or its content
                  contributors and is protected by international copyright laws.
                  Users may not reproduce, distribute, or create derivative
                  works without explicit permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  7. Service Availability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to maintain continuous service, Bridge Gaza
                  does not guarantee uninterrupted access to the platform. We
                  reserve the right to modify, suspend, or discontinue any
                  aspect of the service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge Gaza acts as a facilitator for mentorship connections.
                  We are not liable for the quality of sessions, advice given,
                  or any outcomes resulting from mentor-student interactions.
                  Users engage with each other at their own discretion and risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  9. Account Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate accounts that
                  violate these terms, engage in misconduct, or misuse the
                  platform. Users may also delete their accounts at any time
                  through account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bridge Gaza may update these Terms of Use periodically.
                  Continued use of the platform after changes constitutes
                  acceptance of the modified terms. We will notify users of
                  significant changes via email or platform notifications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-poppins mb-4">
                  11. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Use, please contact us at:
                  <br />
                  <a
                    href="mailto:support@bridgegaza.org"
                    className="text-primary hover:underline"
                  >
                    support@bridgegaza.org
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

export default Terms;
