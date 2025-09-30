// app/page.tsx
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { PersonalProjectsSection } from "@/components/sections/personal-projects-section";
import { RealWorldProjectsSection } from "@/components/sections/real-world-projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
    title: "Home | My Portfolio",
    description: "Welcome to my portfolio showcasing personal and real-world projects.",
    keywords: ["portfolio", "projects", "developer", "Next.js", "React"],
};

export default function HomePage() {
    return (
        <>
            {/* Hero and Personal Projects Sections inside container for padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSection />
                <PersonalProjectsSection />
            </div>

            {/* RealWorldProjectsSection full-width with its own background */}
            <RealWorldProjectsSection />

            {/* Contact Section inside container for padding */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <ContactSection />
            </div>
        </>
    );
}
