import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export function HeroSection() {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center text-center py-16 md:py-24 min-h-[calc(100vh-4rem)]"
        >
            {/* Hero Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hey there, I&apos;m Tesfa
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                I design and code modern web applications end-to-end.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                    <a href="#personal-projects">
                        View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <a href="#contact">Contact Me</a>
                </Button>
            </div>

            {/* About Me Section */}
            <div className="mt-16 max-w-4xl w-full prose dark:prose-invert">
                <h2 className="text-2xl font-semibold tracking-tight mb-4">About Me</h2>
                <p className="leading-relaxed text-left text-muted-foreground">
                    I develop modern web applications with Next.js, React, TypeScript, and JavaScript that are scalable, efficient, and user-friendly. I focus on creating responsive interfaces and robust functionality, delivering high-performing, maintainable applications that meet client needs.
                </p>
                <p className="mt-4 leading-relaxed text-left text-muted-foreground">
                    Let’s connect and explore how we can turn your ideas into reality.
                </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4 mt-5">
                <Link
                    href="https://github.com/tesfamaryam-dev"
                    target="_blank"
                    className="dark:text-white hover:text-gray-500 transition-colors"
                >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/tesfamaryam-s-3092b5302"
                    target="_blank"
                    className="dark:text-white hover:text-gray-500 transition-colors"
                >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                    href="https://t.me/tesfaOG"
                    target="_blank"
                    className="dark:text-white hover:text-gray-500 transition-colors"
                >
                    <FaTelegramPlane className="h-6 w-6" />
                    <span className="sr-only">Telegram</span>
                </Link>
            </div>
        </section>
    );
}
