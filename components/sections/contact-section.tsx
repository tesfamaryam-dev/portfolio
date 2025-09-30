import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Let’s Get in Touch
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
                        Have a question, a project idea, or just want to say hi? Fill out the
                        form below and I’ll get back to you as soon as possible.
                    </p>
                </header>

                <ContactForm />

                <div className="mt-10 text-center text-sm text-muted-foreground">
                    Prefer direct contact? Reach me at{" "}
                    <a
                        href="mailto:tesfamaryam785@gmail.com"
                        className="underline hover:text-foreground"
                    >
                        tesfamaryam785@gmail.com
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://www.linkedin.com/in/tesfamaryam-s-3092b5302"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-foreground"
                    >
                        LinkedIn
                    </a>
                    .
                </div>
            </div>
        </section>
    )
}
