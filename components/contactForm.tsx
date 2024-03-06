"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(20, {
      message: "Name can't be more than 20 characters",
    }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters",
    })
    .max(1000, {
      message: "Message can't be more than 1000 characters",
    }),
});

export default function ContactForm(
  props: React.ComponentPropsWithoutRef<"form">,
) {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (loading) return;
    setLoading(true);
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setLoading(false);
      if (res.status === 429) {
        return toast("You are being rate-limited", {
          closeButton: true,
          description: `You are being rate-limited. Please try again later.`,
        });
      }

      return toast("An error occurred", {
        closeButton: true,
        description: `An error occurred while sending your message. Please try again later.`,
      });
    }
    form.reset();

    setLoading(false);
    toast("Message sent!", {
      closeButton: true,
      description: `Your message has been sent. Thanks for reaching out!`,
    });
  }

  return (
    <div suppressHydrationWarning>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          {...props}
          className={`space-y-4 ${props.className}`}
        >
          <div className="flex justify-between space-x-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hey there!"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*TODO - Add recaptcha as a form field*/}
          <Button type="submit">
            <AnimatePresence mode="wait">
              {!loading && (
                <motion.span
                  key="submit-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Submit
                </motion.span>
              )}
              {loading && (
                <motion.span
                  key="loader-contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Loader2 className="animate-spin" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
