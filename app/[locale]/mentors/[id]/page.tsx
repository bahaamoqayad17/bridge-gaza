"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, MapPin, Briefcase, Award, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Mock data - would come from API
const mentorData = {
  id: 1,
  name: "Sarah Johnson",
  title: "Senior Software Engineer",
  company: "Google",
  country: "United States",
  flag: "🇺🇸",
  expertise: [
    "React",
    "TypeScript",
    "System Design",
    "Microservices",
    "Cloud Architecture",
  ],
  rating: 4.9,
  totalSessions: 127,
  yearsExperience: 8,
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  bio: "I'm a Senior Software Engineer at Google with 8+ years of experience building scalable web applications. I'm passionate about helping aspiring developers from Gaza gain the skills and confidence they need to succeed in the tech industry. I specialize in React, TypeScript, and system design, and I love sharing my knowledge through mentorship.",
  availability: [
    { day: "Monday", slots: ["2:00 PM", "4:00 PM", "6:00 PM"] },
    { day: "Wednesday", slots: ["3:00 PM", "5:00 PM"] },
    { day: "Friday", slots: ["1:00 PM", "3:00 PM", "5:00 PM"] },
  ],
  reviews: [
    {
      name: "Ahmad M.",
      rating: 5,
      comment:
        "Sarah helped me understand React patterns that I struggled with for months. Her explanations are clear and she's incredibly patient.",
      date: "2 weeks ago",
    },
    {
      name: "Layla K.",
      rating: 5,
      comment:
        "Best mentor I could ask for! Sarah not only taught me technical skills but also gave me career advice that changed my path.",
      date: "1 month ago",
    },
    {
      name: "Omar S.",
      rating: 5,
      comment:
        "Very professional and knowledgeable. Sarah's real-world examples from Google were incredibly valuable.",
      date: "1 month ago",
    },
  ],
};

const MentorProfile = () => {
  const params = useParams();
  const id = params.id as string;
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lift mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <Avatar className="w-32 h-32 ring-4 ring-primary/20">
                    <AvatarImage src={mentorData.image} alt={mentorData.name} />
                    <AvatarFallback>
                      {mentorData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-4xl font-bold text-foreground mb-2 font-poppins">
                          {mentorData.name}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-2">
                          {mentorData.title}
                        </p>
                        <p className="text-lg text-primary font-medium mb-3">
                          {mentorData.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} />
                        <span>
                          {mentorData.flag} {mentorData.country}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase size={18} />
                        <span>
                          {mentorData.yearsExperience} years experience
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="text-accent fill-accent" size={18} />
                        <span className="font-semibold text-foreground">
                          {mentorData.rating}
                        </span>
                        <span className="text-muted-foreground">
                          ({mentorData.totalSessions} sessions)
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentorData.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Dialog
                      open={isBookingOpen}
                      onOpenChange={setIsBookingOpen}
                    >
                      <DialogTrigger asChild>
                        <Button size="lg" className="shadow-soft">
                          <Calendar className="mr-2" />
                          Book a Session
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-poppins">
                            Book Session with {mentorData.name}
                          </DialogTitle>
                          <DialogDescription>
                            Select an available time slot for your mentorship
                            session
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {mentorData.availability.map((day) => (
                            <div key={day.day} className="space-y-2">
                              <h4 className="font-semibold text-foreground">
                                {day.day}
                              </h4>
                              <div className="grid grid-cols-3 gap-2">
                                {day.slots.map((slot) => (
                                  <Button
                                    key={slot}
                                    variant={
                                      selectedSlot === `${day.day}-${slot}`
                                        ? "default"
                                        : "outline"
                                    }
                                    onClick={() =>
                                      setSelectedSlot(`${day.day}-${slot}`)
                                    }
                                    className="justify-start"
                                  >
                                    <Clock className="mr-2" size={16} />
                                    {slot}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            onClick={() => setIsBookingOpen(false)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            disabled={!selectedSlot}
                            onClick={() => {
                              // Handle booking
                              setIsBookingOpen(false);
                            }}
                            className="flex-1"
                          >
                            Confirm Booking
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs Section */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="reviews">
                Reviews ({mentorData.reviews.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
                    About {mentorData.name}
                  </h3>
                  <p className="text-foreground leading-relaxed text-lg mb-6">
                    {mentorData.bio}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Award className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Expertise
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {mentorData.expertise.join(", ")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Experience
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {mentorData.yearsExperience}+ years in industry
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Star className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Rating
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {mentorData.rating}/5.0 ({mentorData.totalSessions}{" "}
                          sessions)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="availability">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                    Available Time Slots
                  </h3>
                  <div className="space-y-6">
                    {mentorData.availability.map((day) => (
                      <div key={day.day}>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">
                          {day.day}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {day.slots.map((slot) => (
                            <div
                              key={slot}
                              className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border"
                            >
                              <Clock className="text-primary" size={16} />
                              <span className="text-foreground font-medium">
                                {slot}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-6">
                    All times are displayed in your local timezone
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-4">
                {mentorData.reviews.map((review, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {review.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="text-accent fill-accent"
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        {review.comment}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default MentorProfile;
