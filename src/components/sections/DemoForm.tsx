"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, GraduationCap, CheckCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^[0-9]+$/, "Please enter a valid phone number"),
  qualification: z.string().min(1, "Please select your qualification"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

const qualifications = [
  { value: "12th-pass", label: "12th Pass" },
  { value: "pursuing-graduation", label: "Pursuing Graduation" },
  { value: "graduated", label: "Graduated" },
  { value: "post-graduated", label: "Post Graduated" },
  { value: "working-professional", label: "Working Professional" },
];

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      qualification: "",
      terms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  return (
    <section id="demo-form" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Book Your Free Demo
              </h2>
              <p className="text-gray-600">
                Get a personalized walkthrough of the program
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Demo Booked Successfully!
                </h3>
                <p className="text-gray-600">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Phone Input */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500 border-r border-gray-200 pr-3">
                              <Phone size={16} />
                              <span className="text-sm font-medium">+91</span>
                            </div>
                            <Input
                              placeholder="Enter your phone number"
                              className="pl-24 h-12 text-base"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Qualification Select */}
                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Highest Qualification
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <div className="flex items-center gap-2">
                                <GraduationCap size={16} className="text-gray-400" />
                                <SelectValue placeholder="Select your qualification" />
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {qualifications.map((qual) => (
                              <SelectItem key={qual.value} value={qual.value}>
                                {qual.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Terms Checkbox */}
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600 font-normal cursor-pointer">
                            I agree to the{" "}
                            <a
                              href="#"
                              className="text-[#007BFF] hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="#"
                              className="text-[#007BFF] hover:underline"
                            >
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white font-semibold h-14 text-lg rounded-xl shadow-md hover:shadow-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Book My Demo"
                    )}
                  </Button>
                </form>
              </Form>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>No spam calls</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={14} className="text-green-500" />
                  <span>100% Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
