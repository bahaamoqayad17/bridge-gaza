"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Save,
  Star,
  Settings as SettingsIcon,
  User,
  MessageSquare,
  Calendar,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserProfile = () => {
  const [skills, setSkills] = useState(["JavaScript", "React", "UI Design"]);

  const sessions = [
    {
      mentorName: "Sarah Johnson",
      mentorImage: "/placeholder.svg",
      topic: "Career Development Strategy",
      date: "2024-02-20",
      time: "14:00",
      status: "upcoming",
    },
    {
      mentorName: "Michael Chen",
      mentorImage: "/placeholder.svg",
      topic: "React Best Practices",
      date: "2024-02-15",
      time: "10:00",
      status: "finished",
    },
    {
      mentorName: "Dr. Fatima Ali",
      mentorImage: "/placeholder.svg",
      topic: "UI/UX Design Principles",
      date: "2024-02-25",
      time: "16:00",
      status: "pending",
    },
  ];

  const reviews = [
    {
      mentorName: "Sarah Johnson",
      mentorImage: "/placeholder.svg",
      date: "2024-01-15",
      rating: 5,
      feedback:
        "Ahmad is a dedicated learner with great potential. Very engaged during our sessions.",
    },
    {
      mentorName: "Michael Chen",
      mentorImage: "/placeholder.svg",
      date: "2024-01-10",
      rating: 5,
      feedback:
        "Impressive progress in web development. Looking forward to our next session!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-poppins mb-2">My Profile</h1>
          <p className="text-muted-foreground mb-8">
            Manage your information and settings
          </p>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile Info
              </TabsTrigger>
              <TabsTrigger value="sessions" className="gap-2">
                <Calendar className="h-4 w-4" />
                My Sessions
              </TabsTrigger>
              <TabsTrigger value="reviews" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                My Reviews
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>AU</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-semibold">Profile Photo</h3>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG or WEBP. Max 5MB.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue="Ahmad Hassan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Gaza City" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Computer Science student passionate about web development and design. Looking to learn from experienced professionals."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Skills & Interests</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Input placeholder="Add a skill or interest..." />
                  </div>

                  <div className="flex justify-end">
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <CardTitle>My Sessions</CardTitle>
                  <CardDescription>
                    View all your mentorship sessions and their status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sessions.length > 0 ? (
                    sessions.map((session, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={session.mentorImage} />
                              <AvatarFallback>
                                {session.mentorName[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">
                                    {session.mentorName}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mb-1">
                                    {session.topic}
                                  </p>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3.5 w-3.5" />
                                      {new Date(
                                        session.date
                                      ).toLocaleDateString()}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3.5 w-3.5" />
                                      {session.time}
                                    </span>
                                  </div>
                                </div>
                                <Badge
                                  variant={
                                    session.status === "finished"
                                      ? "secondary"
                                      : session.status === "upcoming"
                                      ? "default"
                                      : "outline"
                                  }
                                  className="capitalize"
                                >
                                  {session.status}
                                </Badge>
                              </div>
                              {session.status === "upcoming" && (
                                <Button size="sm" className="mt-2">
                                  Join Session
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-semibold mb-2">No sessions yet</h3>
                      <p className="text-sm text-muted-foreground">
                        Book your first session with a mentor to get started
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Session Reviews</CardTitle>
                  <CardDescription>
                    Feedback from your mentors after sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.mentorImage} />
                              <AvatarFallback>
                                {review.mentorName[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">
                                    {review.mentorName}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {new Date(review.date).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="flex gap-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "fill-accent text-accent"
                                          : "text-muted"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm">{review.feedback}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-semibold mb-2">No reviews yet</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete a session to receive feedback from your mentors
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="oldPassword">Current Password</Label>
                      <Input id="oldPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        Confirm New Password
                      </Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <div className="flex justify-end">
                      <Button>Update Password</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>Customize your experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emailNotif">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive session reminders via email
                        </p>
                      </div>
                      <Switch id="emailNotif" defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ar">العربية (Arabic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">
                      Delete Account
                    </CardTitle>
                    <CardDescription>
                      Permanently delete your account and data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" className="w-full">
                          Delete Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete Account Permanently
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. All your data will be
                            permanently deleted.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Delete Permanently
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default UserProfile;
