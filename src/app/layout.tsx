import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Organization, WithContext } from "schema-dts";
import { FOUNDERS, THE_HOMINIANS } from "@/constants";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: THE_HOMINIANS.name,
  legalName: THE_HOMINIANS.name,
  description: THE_HOMINIANS.description,
  email: THE_HOMINIANS.contact,
};

jsonLd.founder = FOUNDERS.map((founder) => ({
  "@type": "Person",
  name: founder.name,
  jobTitle: founder.role,
  image: founder.image,
  description: founder.description,
}));

export const metadata: Metadata = {
  title: "Welcome to The Hominians",
  description: THE_HOMINIANS.description,
  openGraph: {
    title: THE_HOMINIANS.name,
    description: THE_HOMINIANS.short_description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
