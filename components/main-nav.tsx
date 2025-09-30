"use client"

import * as React from "react"
import Link from "next/link" // Still useful for the main logo link
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle" // Import ThemeToggle

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#personal-projects", label: "Personal Projects" },
  { href: "#real-world-projects", label: "Real-World Projects" },
  { href: "#contact", label: "Contact" },
]

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
      setIsMobileMenuOpen(false) // Close mobile menu on link click
    } else {
      setIsMobileMenuOpen(false) // Close mobile menu for regular links too
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={(e) => handleLinkClick(e, "#home")}>
          <span className="font-bold sm:inline-block text-lg">My Portfolio</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <SheetTitle>MyPortfolio</SheetTitle>
                <div className="p-4">
                  {/* <Link href="/" className="mb-6 flex items-center" onClick={(e) => handleLinkClick(e, "#home")}>
                    <span className="font-bold text-lg">My Portfolio</span>
                  </Link> */}
                  <nav className="grid gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="text-base font-medium text-muted-foreground transition-colors hover:text-primary cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
