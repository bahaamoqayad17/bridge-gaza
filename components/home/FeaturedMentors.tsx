"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Software Engineer",
    company: "Google",
    country: "United States",
    flag: "🇺🇸",
    expertise: ["React", "TypeScript", "System Design"],
    rating: 4.9,
    sessions: 127,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    title: "Product Designer",
    company: "Spotify",
    country: "Sweden",
    flag: "🇸🇪",
    expertise: ["UI/UX", "Figma", "Design Systems"],
    rating: 5.0,
    sessions: 89,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Maria Garcia",
    title: "Marketing Director",
    company: "Adobe",
    country: "Spain",
    flag: "🇪🇸",
    expertise: ["Digital Marketing", "Growth", "Strategy"],
    rating: 4.8,
    sessions: 143,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Chen",
    title: "Data Scientist",
    company: "Microsoft",
    country: "Canada",
    flag: "🇨🇦",
    expertise: ["Python", "Machine Learning", "AI"],
    rating: 4.9,
    sessions: 156,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const FeaturedMentors = () => {
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
            Featured Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced professionals at top global companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-soft hover:shadow-lift transition-smooth group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="w-24 h-24 mb-4 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-smooth">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg text-foreground font-poppins mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {mentor.title}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {mentor.company}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-4 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span className="mr-1">{mentor.flag}</span>
                    <span>{mentor.country}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="text-accent fill-accent" size={16} />
                    <span className="font-semibold text-foreground">
                      {mentor.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({mentor.sessions} sessions)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {mentor.expertise.slice(0, 2).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/mentor/${mentor.id}`}>
                    <Button className="w-full" variant="outline">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/dashboard/mentors">
            <Button size="lg" className="shadow-soft">
              Browse All Mentors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
