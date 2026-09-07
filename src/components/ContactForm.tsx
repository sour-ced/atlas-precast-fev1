"use client";

import { useState } from "react";
import AngledButton from "@/components/AngledButton";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    const nextErrors: Record<string, string> = {};
    if (!data.firstName) nextErrors.firstName = "Please fill out this required field.";
    if (!data.lastName) nextErrors.lastName = "Please fill out this required field.";
    if (!data.email) {
      nextErrors.email = "Please fill out this required field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      nextErrors.email = "Invalid email address";
    }
    if (!data.message) nextErrors.message = "Please fill out this required field.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-8 sm:p-10 text-primary shadow-sm">
        <p className="font-heading text-2xl tracking-wide mb-2">Thank you</p>
        <p className="text-grey-foreground">
          Thank you for your enquiry. One of our team members will be in contact to
          discuss your query.
        </p>
        <p className="mt-4 font-semibold">The Atlas Precast Team</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 space-y-5 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field name="firstName" label="First Name" error={errors.firstName} />
        <Field name="lastName" label="Last Name" error={errors.lastName} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field name="email" label="Email Address" type="email" error={errors.email} />
        <Field name="phone" label="Contact Number (optional)" error={errors.phone} />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wide text-grey-foreground mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-grey-mid px-4 py-3 focus:outline-none focus:border-accent"
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          SOMETHING WENT WRONG, PLEASE TRY AGAIN.
        </p>
      )}
      <AngledButton as="button" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </AngledButton>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wide text-grey-foreground mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full border border-grey-mid px-4 py-3 focus:outline-none focus:border-accent"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
