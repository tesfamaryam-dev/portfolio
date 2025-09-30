"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
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
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(500, {
            message: "Message must not exceed 500 characters.",
        }),
})

export type ContactFormValues = z.infer<typeof formSchema>

export function ContactForm() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: ContactFormValues) {
        setIsSubmitting(true)

        toast({
            title: "Hold up!",
            description:
                "This feature is in the works. You can reach me via LinkedIn at https://www.linkedin.com/in/tesfamaryam-s-3092b5302, email at tesfamaryam785@gmail.com, or Telegram @tesfaOG for now.",
        })

        setIsSubmitting(false)

        // Uncomment below to enable real submission
        /*
        try {
          const result = await handleContactFormSubmission(values)
          if (result.success) {
            toast({
              title: "Message Sent!",
              description: "Thanks for reaching out. I'll get back to you soon.",
            })
            form.reset()
          } else {
            toast({
              title: "Error",
              description: result.error || "Failed to send message. Please try again.",
              variant: "destructive",
            })
          }
        } catch (error) {
          toast({
            title: "Error",
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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-xl mx-auto"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell me how I can help you or provide some feedback..."
                                    className="resize-none"
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Your message should be between 10 and 500 characters.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    )
}
