"use client"

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Heart from "@/components/Heart";
import { Github, Linkedin, Plus } from "lucide-react";
import { SiShadcnui } from "react-icons/si";
import Link from "next/link";
import { ToolTip } from "@/components/Tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "My Portfolio",
        template: "%s | My Portfolio",
    },
    description: "A showcase of my personal and real-world projects.",
    keywords: [
        "portfolio",
        "projects",
        "developer",
        "web developer",
        "Next.js",
        "React",
    ],
    icons: {
        icon: "/code-svgrepo-com.svg",
        shortcut: "/code-svgrepo-com.svg",
        apple: "/code-svgrepo-com.svg",
    },
    openGraph: {
        title: "My Portfolio",
        description: "A showcase of my personal and real-world projects.",
        url: "https://my-portfolio-tesfa.vercel.app/", // updated Vercel URL
        siteName: "My Portfolio",
        images: [
            {
                url: "/screenshot.png",
                width: 1200,
                height: 630,
                alt: "My Portfolio Screenshot",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Portfolio",
        description: "A showcase of my personal and real-world projects.",
        images: ["/screenshot.png"],
        creator: "@hope785OG",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>
                <div className="flex min-h-screen flex-col">
                    <MainNav />
                    <main className="flex-grow">{children}</main>
                    <footer className="py-6 md:px-8 md:py-0 border-t ">
                        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <div className="text-balance text-center text-black flex items-center justify-center gap-2 text-sm leading-loose text-muted-foreground md:text-left">
                                Built with
                                <ToolTip tooltip="Love">
                                    <div>
                                        <Heart size={27} className="text-black dark:invert" />
                                    </div>
                                </ToolTip>
                                <Plus />
                                <ToolTip tooltip="Next.js">
                                    <Image
                                        width={27}
                                        height={27}
                                        alt="Next.js"
                                        className="dark:invert"
                                        src={"/next.svg"}
                                    />
                                </ToolTip>
                                <Plus />
                                <ToolTip tooltip="Shadcn UI">
                                    <SiShadcnui
                                        size={22}
                                        className="text-black dark:invert"
                                    />
                                </ToolTip>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <Link
                                    href="https://github.com/tesfamaryam-dev"
                                    target="_blank"
                                    className="dark:text-white hover:!text-gray-500"
                                >
                                    <Github className="h-6 w-6" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/tesfamaryam-s-3092b5302"
                                    target="_blank"
                                    className="dark:text-white hover:!text-gray-500"
                                >
                                    <Linkedin className="h-6 w-6" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
