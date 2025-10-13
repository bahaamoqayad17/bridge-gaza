"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmad Al-Masri",
    role: "Computer Science Student",
    location: "Gaza, Palestine 🇵🇸",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    quote:
      "Bridge Gaza connected me with mentors who helped me land my first remote job. The guidance I received was life-changing.",
    rating: 5,
  },
  {
    name: "Fatima Yousef",
    role: "Graphic Designer",
    location: "Gaza, Palestine 🇵🇸",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    quote:
      "I learned industry-standard design practices from professionals at Adobe and Figma. This platform opened doors I never thought possible.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Mentor - Tech Lead at Amazon",
    location: "United Kingdom 🇬🇧",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote:
      "Mentoring talented students from Gaza has been incredibly rewarding. Their determination and talent inspire me every session.",
    rating: 5,
  },
  {
    name: "Layla Ibrahim",
    role: "Marketing Student",
    location: "Gaza, Palestine 🇵🇸",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    quote:
      "The mentors here genuinely care about your growth. I've built a global network and gained skills that set me apart.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            What People Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students and mentors who are part of our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-soft hover:shadow-lift transition-smooth">
                <CardContent className="p-8">
                  <Quote className="text-accent mb-4" size={40} />

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-accent fill-accent"
                        size={16}
                      />
                    ))}
                  </div>

                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground font-poppins">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
