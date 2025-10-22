"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  "All",
  "Tech",
  "Design",
  "Business",
  "Marketing",
  "Data Science",
];

const allMentors = [
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
    category: "Tech",
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
    category: "Design",
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
    category: "Marketing",
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
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Emma Wilson",
    title: "UX Researcher",
    company: "Airbnb",
    country: "United Kingdom",
    flag: "🇬🇧",
    expertise: ["User Research", "UX Design", "Prototyping"],
    rating: 4.9,
    sessions: 98,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "James Lee",
    title: "Business Consultant",
    company: "McKinsey",
    country: "Singapore",
    flag: "🇸🇬",
    expertise: ["Strategy", "Business Development", "Analytics"],
    rating: 4.8,
    sessions: 134,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const MentorsDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = allMentors.filter((mentor) => {
    const matchesCategory =
      selectedCategory === "All" || mentor.category === selectedCategory;
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold text-foreground mb-4 font-poppins">
              Find Your Mentor
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse mentors from top companies around the world
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search by name, title, or expertise..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="w-full md:w-auto flex-wrap h-auto gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredMentors.length} mentor
            {filteredMentors.length !== 1 ? "s" : ""}
          </p>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full shadow-soft hover:shadow-lift transition-smooth group">
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
                      {mentor.expertise.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/mentors/${mentor.id}`}>
                      <Button className="w-full">View Profile</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorsDashboard;
