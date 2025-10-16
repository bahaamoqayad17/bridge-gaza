"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Save,
  Calendar,
  Settings as SettingsIcon,
  User,
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

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MentorProfileEdit = () => {
  const [expertise, setExpertise] = useState([
    "Web Development",
    "React",
    "TypeScript",
  ]);
  const [availability, setAvailability] = useState<Record<string, string[]>>({
    Monday: ["09:00-11:00", "14:00-17:00"],
    Wednesday: ["09:00-11:00"],
    Friday: ["14:00-17:00"],
  });

  const addTimeSlot = (day: string) => {
    setAvailability({
      ...availability,
      [day]: [...(availability[day] || []), "09:00-11:00"],
    });
  };

  const removeTimeSlot = (day: string, slot: string) => {
    setAvailability({
      ...availability,
      [day]: availability[day].filter((s) => s !== slot),
    });
  };

  const totalHours = Object.values(availability).reduce(
    (acc, slots) => acc + slots.length * 2,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-poppins mb-2">
            Mentor Profile
          </h1>
          <p className="text-muted-foreground mb-8">
            Manage your profile, availability, and settings
          </p>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile Info
              </TabsTrigger>
              <TabsTrigger value="availability" className="gap-2">
                <Calendar className="h-4 w-4" />
                Availability
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
                    Update your public profile details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-12 w-12 text-primary" />
                      </div>
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
                      <Input id="fullName" defaultValue="Sarah Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="languages">Languages</Label>
                    <Input id="languages" defaultValue="English, Arabic" />
                  </div>

                  <div className="space-y-2">
                    <Label>Expertise</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Input placeholder="Add expertise area..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Full-stack developer with 10+ years experience in web technologies. Passionate about mentoring and helping others grow."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input
                        id="linkedin"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub URL</Label>
                      <Input id="github" placeholder="https://github.com/..." />
                    </div>
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

            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Availability</CardTitle>
                  <CardDescription>
                    Set your available time slots for mentorship sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{day}</h3>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addTimeSlot(day)}
                          >
                            Add Time Slot
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {availability[day]?.length > 0 ? (
                            availability[day].map((slot) => (
                              <Badge
                                key={slot}
                                variant="secondary"
                                className="gap-2 cursor-pointer hover:bg-destructive/10"
                                onClick={() => removeTimeSlot(day, slot)}
                              >
                                {slot}
                                <span className="text-xs">×</span>
                              </Badge>
                            ))
                          ) : (
                            <p className="text-sm text-muted-foreground">
                              Not available
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">
                            Total Available Hours This Week
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Based on your current schedule
                          </p>
                        </div>
                        <p className="text-3xl font-bold text-primary">
                          {totalHours}h
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end">
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Availability
                    </Button>
                  </div>
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
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how you want to receive updates
                    </CardDescription>
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
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="smsNotif">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get text messages for upcoming sessions
                        </p>
                      </div>
                      <Switch id="smsNotif" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="calendarNotif">
                          Calendar Reminders
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Add sessions to your calendar automatically
                        </p>
                      </div>
                      <Switch id="calendarNotif" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">
                      Account Management
                    </CardTitle>
                    <CardDescription>
                      Manage your account status
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Deactivate Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deactivate Account
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Your profile will be hidden and you won't receive
                            session requests. You can reactivate anytime.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Deactivate</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

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

export default MentorProfileEdit;
