import { ContactForm } from "@/components/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <header className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
          Have a question, a project idea, or just want to connect? Fill out the form below.
        </p>
      </header>
      <ContactForm />
    </section>
  )
}
