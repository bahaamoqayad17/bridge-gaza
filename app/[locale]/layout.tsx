import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/locales/routing";
import { setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Bridge Gaza",
  description:
    "Connecting Gaza to the world through mentorship and collaboration.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!hasLocale(routing.locales, locale)) {
    return <>not found page</>;
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <link rel="icon" href="/logo.png" />
      <body className={`antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
