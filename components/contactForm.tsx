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
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";

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
  recaptcha: z.string().min(1, { message: "Recaptcha is required" }),
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
      recaptcha: "",
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

  const { theme } = useTheme();

  return (
    <div suppressHydrationWarning>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          {...props}
          className={`space-y-4 ${props.className}`}
        >
          <div className="justify-between space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
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
          <FormField
            control={form.control}
            name="recaptcha"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(value) =>
                      form.setValue("recaptcha", value || "")
                    }
                    className="mx-auto h-[76px] w-[302px] overflow-hidden rounded-[3px] sm:mx-0"
                    theme={theme === "dark" ? "dark" : "light"}
                    key={theme}
                    data-no-cursor
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full sm:w-auto">
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
