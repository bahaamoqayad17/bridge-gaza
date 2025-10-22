"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { toast } from "sonner";

const Register = () => {
  const [activeTab, setActiveTab] = useState("student");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Student form state
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    password: "",
    country: "Palestine",
    goal: "",
  });

  // Mentor form state
  const [mentorData, setMentorData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    job_title: "",
    company_name: "",
    bio: "",
  });

  const validateForm = (data: any, userType: string) => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!data.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (userType === "student") {
      if (!data.goal.trim()) {
        newErrors.goal = "Please tell us what you want to learn";
      }
    } else {
      if (!data.bio.trim()) {
        newErrors.bio = "Professional bio is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStudentInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setStudentData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleMentorInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setMentorData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(studentData, "student")) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...studentData,
          userType: "student",
        }),
      });

      const result = await response.json();

      if (result.status) {
        toast.success("Registration successful! Welcome to Bridge Gaza!");
        router.push("/");
      } else {
        toast.error(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(mentorData, "mentor")) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...mentorData,
          userType: "mentor",
        }),
      });

      const result = await response.json();

      if (result.status) {
        toast.success("Registration successful! Welcome to Bridge Gaza!");
        router.push("/");
      } else {
        toast.error(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <form onSubmit={handleStudentSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={studentData.name}
                        onChange={handleStudentInputChange}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={studentData.email}
                        onChange={handleStudentInputChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={studentData.password}
                        onChange={handleStudentInputChange}
                        className={errors.password ? "border-red-500" : ""}
                      />
                      {errors.password && (
                        <p className="text-sm text-red-500">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        placeholder="Palestine"
                        value={studentData.country}
                        onChange={handleStudentInputChange}
                        className={errors.country ? "border-red-500" : ""}
                      />
                      {errors.country && (
                        <p className="text-sm text-red-500">{errors.country}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goal">What do you want to learn? *</Label>
                      <Textarea
                        id="goal"
                        placeholder="Tell us about your goals and interests..."
                        className={`min-h-[100px] ${
                          errors.goal ? "border-red-500" : ""
                        }`}
                        value={studentData.goal}
                        onChange={handleStudentInputChange}
                      />
                      {errors.goal && (
                        <p className="text-sm text-red-500">{errors.goal}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Creating Account..."
                        : "Create Student Account"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="mentor" className="space-y-4 mt-0">
                  <form onSubmit={handleMentorSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={mentorData.name}
                        onChange={handleMentorInputChange}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={mentorData.email}
                        onChange={handleMentorInputChange}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={mentorData.password}
                        onChange={handleMentorInputChange}
                        className={errors.password ? "border-red-500" : ""}
                      />
                      {errors.password && (
                        <p className="text-sm text-red-500">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        placeholder="United States"
                        value={mentorData.country}
                        onChange={handleMentorInputChange}
                        className={errors.country ? "border-red-500" : ""}
                      />
                      {errors.country && (
                        <p className="text-sm text-red-500">{errors.country}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job_title">Job Title</Label>
                      <Input
                        id="job_title"
                        placeholder="e.g. Senior Software Engineer"
                        value={mentorData.job_title}
                        onChange={handleMentorInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company_name">Company</Label>
                      <Input
                        id="company_name"
                        placeholder="e.g. Google, Microsoft"
                        value={mentorData.company_name}
                        onChange={handleMentorInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Bio *</Label>
                      <Textarea
                        id="bio"
                        placeholder="Share your expertise and what you can help students with..."
                        className={`min-h-[100px] ${
                          errors.bio ? "border-red-500" : ""
                        }`}
                        value={mentorData.bio}
                        onChange={handleMentorInputChange}
                      />
                      {errors.bio && (
                        <p className="text-sm text-red-500">{errors.bio}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Creating Account..."
                        : "Create Mentor Account"}
                    </Button>
                  </form>
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
