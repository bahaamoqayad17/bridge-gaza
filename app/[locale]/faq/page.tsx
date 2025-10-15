"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I become a mentor?",
      answer:
        "Fill out the registration form on our website and select 'Mentor' as your role. Our team will review your application and verify your experience. Once approved, you can set your availability and start connecting with students from Gaza.",
    },
    {
      question: "Is Bridge Gaza free for students?",
      answer:
        "Yes, absolutely! All mentorship sessions for Gazan students are 100% free. Our platform is funded through sponsorships and donations from individuals and organizations who believe in empowering Gaza's youth.",
    },
    {
      question: "How do I book a session?",
      answer:
        "After logging in to your account, navigate to 'Find Mentors' from the dashboard. Browse through available mentors, view their profiles, and select an available time slot that works for you. You'll receive a confirmation email with the session details.",
    },
    {
      question: "What languages are supported?",
      answer:
        "Bridge Gaza currently supports both English and Arabic. You can switch between languages in your account settings. We're working on adding more languages to make the platform accessible to even more users.",
    },
    {
      question: "Can I volunteer as a mentor outside Gaza?",
      answer:
        "Yes! Mentors from around the world are welcome to join Bridge Gaza. Our mission is to connect Gazan students with global professionals who can share their knowledge and experience. All you need is expertise in your field and a passion for helping others grow.",
    },
    {
      question: "How do I sponsor mentorship sessions?",
      answer:
        "Visit our 'Sponsor' page to contribute to funding mentorship sessions. You can choose from different donation tiers, each supporting a specific number of sessions. Every contribution directly helps Gazan students access free mentorship and education.",
    },
    {
      question: "What happens if I miss a scheduled session?",
      answer:
        "If you need to cancel or reschedule a session, please notify your mentor or student at least 24 hours in advance through the platform. You can reschedule directly from your dashboard under 'My Sessions'. Multiple no-shows may affect your account standing.",
    },
    {
      question: "How long is each mentorship session?",
      answer:
        "Standard sessions are typically 1 hour long. However, mentors can customize session lengths based on their availability and the student's needs. The duration will be clearly indicated when booking a session.",
    },
  ];

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
            <HelpCircle className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Everything you need to know about using Bridge Gaza
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-2xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold font-poppins mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is
                here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-smooth"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
