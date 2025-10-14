"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";

const Register = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3 font-poppins">
              Create Your Account
            </h1>
            <p className="text-muted-foreground">
              Join Bridge Gaza and start your journey
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="student" className="text-lg py-3">
                I'm a Student
              </TabsTrigger>
              <TabsTrigger value="mentor" className="text-lg py-3">
                I'm a Mentor
              </TabsTrigger>
            </TabsList>

            <Card className="shadow-lift border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins">
                  {activeTab === "student"
                    ? "Student Registration"
                    : "Mentor Registration"}
                </CardTitle>
                <CardDescription>
                  {activeTab === "student"
                    ? "Connect with global mentors and grow your skills"
                    : "Share your expertise and empower Gazan students"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <TabsContent value="student" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="student-name">Full Name *</Label>
                    <Input
                      id="student-name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email *</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password *</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Create a strong password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-country">Country *</Label>
                    <Input
                      id="student-country"
                      placeholder="Palestine"
                      defaultValue="Palestine"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-bio">
                      What do you want to learn? *
                    </Label>
                    <Textarea
                      id="student-bio"
                      placeholder="Tell us about your goals and interests..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg">
                    Create Student Account
                  </Button>
                </TabsContent>

                <TabsContent value="mentor" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="mentor-name">Full Name *</Label>
                    <Input
                      id="mentor-name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-email">Email *</Label>
                    <Input
                      id="mentor-email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-password">Password *</Label>
                    <Input
                      id="mentor-password"
                      type="password"
                      placeholder="Create a strong password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-country">Country *</Label>
                    <Input id="mentor-country" placeholder="United States" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-company">Company & Title</Label>
                    <Input
                      id="mentor-company"
                      placeholder="e.g. Senior Engineer at Google"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mentor-bio">Professional Bio *</Label>
                    <Textarea
                      id="mentor-bio"
                      placeholder="Share your expertise and what you can help students with..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg">
                    Create Mentor Account
                  </Button>
                </TabsContent>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Register;
