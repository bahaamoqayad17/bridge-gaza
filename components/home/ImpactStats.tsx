"use client";

import { motion } from "framer-motion";
import { Users, Clock, Globe, Award } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    icon: Clock,
    value: 2500,
    suffix: "+",
    label: "Mentorship Hours",
    description: "Hours of free mentorship donated",
  },
  {
    icon: Users,
    value: 600,
    suffix: "+",
    label: "Gazan Students",
    description: "Students helped and empowered",
  },
  {
    icon: Globe,
    value: 30,
    suffix: "+",
    label: "Countries",
    description: "Global mentors connected",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Success Rate",
    description: "Student satisfaction rating",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-6xl font-bold text-gradient font-poppins"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we're building bridges and creating opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-lift transition-smooth"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-soft">
                <stat.icon className="text-white" size={28} />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-xl font-bold text-foreground mt-4 mb-2 font-poppins">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
