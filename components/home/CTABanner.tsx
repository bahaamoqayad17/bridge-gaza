"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-lift"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 hero-gradient" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"
              >
                <Heart className="text-white fill-white" size={28} />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
                Be Part of Gaza's Bridge to Opportunity
              </h2>

              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Whether you're a student seeking guidance or a professional
                ready to give back, join our community and make a real
                difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 shadow-soft group"
                  >
                    Join Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link href="/sponsor">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 h-14"
                  >
                    Sponsor Sessions
                  </Button>
                </Link>
              </div>

              <p className="mt-8 text-white/70 text-sm">
                No credit card required • 100% free for students • Cancel
                anytime
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
