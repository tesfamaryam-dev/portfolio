"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { handleContactFormSubmission } from "@/app/contact/actions"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(500, { message: "Message must not exceed 500 characters." }),
})

export type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", message: "" },
    })

    async function onSubmit(values: ContactFormValues) {
        setIsSubmitting(true)

        // Demo mode
        toast({
            title: "🚧 Feature in Progress",
            description:
                "This form isn’t live yet. Reach me via LinkedIn (linkedin.com/in/tesfamaryam-s-3092b5302), email (tesfamaryam785@gmail.com), or Telegram (@tesfaOG).",
        })

        setIsSubmitting(false)

        // --- Uncomment below when backend is ready ---
        /*
        try {
          const result = await handleContactFormSubmission(values)
          if (result.success) {
            toast({
              title: "✅ Message Sent!",
              description: "Thanks for reaching out. I'll get back to you soon.",
            })
            form.reset()
          } else {
            toast({
              title: "❌ Error",
              description: result.error || "Failed to send message. Please try again.",
              variant: "destructive",
            })
          }
        } catch (error) {
          toast({
            title: "❌ Error",
            description: "An unexpected error occurred. Please try again.",
            variant: "destructive",
          })
        } finally {
          setIsSubmitting(false)
        }
        */
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-xl mx-auto">
                {/* Name */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Your Name" aria-label="Your Name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="your.email@example.com"
                                    aria-label="Your Email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Tell me how I can help you or share feedback..."
                                    rows={5}
                                    className="resize-none"
                                    aria-label="Your Message"
                                />
                            </FormControl>
                            <FormDescription>Your message should be between 10 and 500 characters.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit */}
                <Button type="submit" disabled={isSubmitting} aria-label="Send Message">
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}
