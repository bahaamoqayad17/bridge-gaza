"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "@/app/globals.css";

const NotFound = () => {
  const router = useRouter();
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="max-w-2xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-gradient mb-4 font-poppins">
                  404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-poppins">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Sorry, we couldn't find the page you're looking for. It might
                  have been moved or doesn't exist.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="shadow-soft group">
                    <Home className="mr-2 group-hover:scale-110 transition-smooth" />
                    Go Home
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => router.back()}
                  className="shadow-soft group"
                >
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-smooth" />
                  Go Back
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
