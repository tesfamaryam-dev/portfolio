import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center text-center py-16 md:py-24 min-h-[calc(100vh-4rem)]"
        >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hey there, I&apos;m Tesfa
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                I design and code modern web applications end-to-end.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                    <a href="#personal-projects">
                        View My Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto" size="lg">
                    <a href="#contact">Contact Me</a>
                </Button>
            </div>
            <div className="mt-16 max-w-4xl w-full">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">About Me</h2>
                <p className="text-left text-muted-foreground leading-relaxed">
                    I develop modern web applications with Next.js, React, TypeScript, and JavaScript that are scalable, efficient, and user-friendly. I focus on creating responsive interfaces and robust functionality, delivering high-performing, maintainable applications that meet client needs. <br />
                    Let’s connect and explore how we can turn your ideas into reality.
                </p>
            </div>
            <div className="flex space-x-4 pt-4 mt-5">
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
                <Link
                    href="https://t.me/tesfaOG"
                    target="_blank"
                    className="dark:text-white hover:!text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm5.707 8.293l-1.414 7.071c-.106.529-.38.662-.77.414l-2.14-1.579-1.03.993c-.113.112-.207.207-.424.207l.152-2.164 3.934-3.561c.17-.152-.037-.237-.263-.085l-4.861 3.053-2.093-.654c-.454-.142-.462-.454.095-.673l8.189-3.162c.38-.147.713.091.59.653z"/>
                    </svg>
                    <span className="sr-only">Telegram</span>
                </Link>
            </div>
        </section>
    );
}
