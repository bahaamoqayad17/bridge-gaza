"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Video } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up in minutes and tell us about your goals, interests, and what you want to learn.",
  },
  {
    icon: Search,
    title: "Find Your Mentor",
    description:
      "Browse mentors from 30+ countries across tech, business, design, and more.",
  },
  {
    icon: Video,
    title: "Book a Session",
    description:
      "Schedule free video calls and start learning from global professionals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and connect with mentors worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full shadow-soft hover:shadow-lift transition-smooth group cursor-pointer border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground shadow-soft">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
