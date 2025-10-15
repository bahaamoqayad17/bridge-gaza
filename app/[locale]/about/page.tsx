"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe in the power of human connection to transform lives",
  },
  {
    icon: Target,
    title: "Opportunity",
    description: "Everyone deserves access to mentorship and global experience",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building bridges between talented youth and global professionals",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating pathways for collaboration across borders",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Bridge Gaza connects talented students in Gaza with mentors
                worldwide, providing free access to mentorship, knowledge, and
                global opportunities that break down barriers and build futures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-poppins">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-soft hover:shadow-lift transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <value.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8 font-poppins">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Bridge Gaza was founded with a simple but powerful vision: to
                create a world where geography doesn't limit opportunity. We saw
                incredibly talented students in Gaza who lacked access to
                mentorship and global networks that could help them reach their
                full potential.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                By connecting these students with professionals from around the
                world, we're not just providing advice – we're building bridges
                of understanding, creating opportunities, and proving that
                talent is universal, even if opportunity is not.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Today, we've facilitated thousands of mentorship hours, helped
                hundreds of students gain valuable skills and connections, and
                built a community that believes in the power of human potential
                regardless of circumstance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lift hero-gradient border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
                Partner With Bridge Gaza
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join us in creating opportunities and building futures
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Join as Mentor
                  </Button>
                </Link>
                <Link href="/sponsor">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                  >
                    Become a Sponsor
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
