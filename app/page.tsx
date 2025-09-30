import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { PersonalProjectsSection } from "@/components/sections/personal-projects-section"
import { RealWorldProjectsSection } from "@/components/sections/real-world-projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      {/* Sections will manage their own padding and container if needed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <PersonalProjectsSection />
      </div>
      {/* RealWorldProjectsSection has its own bg color, so it's outside the main container for full-width bg */}
      <RealWorldProjectsSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </div>
    </>
  )
}
