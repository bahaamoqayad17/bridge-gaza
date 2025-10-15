"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Heart, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Supporter",
    price: "$25",
    description: "Fund one mentorship session",
    icon: Heart,
    features: [
      "Sponsor 1 mentorship hour",
      "Impact report",
      "Supporter badge",
      "Thank you email from student",
    ],
    color: "from-primary to-primary-light",
  },
  {
    name: "Champion",
    price: "$250",
    description: "Fund 10 mentorship sessions",
    icon: Users,
    popular: true,
    features: [
      "Sponsor 10 mentorship hours",
      "Monthly impact reports",
      "Champion badge",
      "Video thank you message",
      "Listed on our sponsors page",
    ],
    color: "from-secondary to-primary",
  },
  {
    name: "Changemaker",
    price: "$1000",
    description: "Fund 50 mentorship sessions",
    icon: Zap,
    features: [
      "Sponsor 50 mentorship hours",
      "Quarterly impact reports",
      "Changemaker badge",
      "Direct connection with students",
      "Featured sponsor placement",
      "Speaking opportunity at events",
    ],
    color: "from-accent to-secondary",
  },
];

const Sponsor = () => {
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
                Fund Mentorship for Gaza's Youth
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Your contribution provides free mentorship sessions that change
                lives and create opportunities for talented students in Gaza.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  value: "2,500+",
                  label: "Hours Funded",
                  desc: "Free mentorship provided",
                },
                {
                  value: "600+",
                  label: "Students Helped",
                  desc: "Lives transformed",
                },
                {
                  value: "95%",
                  label: "Success Rate",
                  desc: "Students report growth",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-muted-foreground">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
                Choose Your Impact Level
              </h2>
              <p className="text-xl text-muted-foreground">
                Every contribution makes a real difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={tier.popular ? "md:-mt-4" : ""}
                >
                  <Card
                    className={`h-full shadow-lift transition-smooth hover:scale-105 ${
                      tier.popular ? "border-primary border-2" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="bg-primary text-white text-center py-2 rounded-t-xl font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-soft`}
                      >
                        <tier.icon className="text-white" size={28} />
                      </div>
                      <CardTitle className="text-2xl font-poppins">
                        {tier.name}
                      </CardTitle>
                      <div className="text-4xl font-bold text-foreground my-4">
                        {tier.price}
                      </div>
                      <p className="text-muted-foreground">
                        {tier.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              className="text-primary flex-shrink-0 mt-1"
                              size={18}
                            />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full h-12"
                        variant={tier.popular ? "default" : "outline"}
                      >
                        Sponsor Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Story */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-lift">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Badge className="mb-4">Success Story</Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                    Your Sponsorship Changes Lives
                  </h3>
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-6">
                  "Thanks to Bridge Gaza sponsors, I received mentorship from a
                  senior engineer at Google. Within 3 months, I landed my first
                  remote internship. This platform didn't just teach me skills –
                  it gave me hope and opened doors I never knew existed."
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    - Ahmad, Computer Science Student
                  </p>
                  <p className="text-muted-foreground">Gaza, Palestine</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sponsor;
