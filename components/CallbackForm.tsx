"use client";

import { useState, useId } from "react";
import { usePathname } from "next/navigation";
import { fireLeadSubmitted } from "@/lib/gtm";

export default function CallbackForm() {
  const pathname = usePathname();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "" });

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          serviceType: "Callback Request",
          formType: "callback",
          sourcePage: pathname,
          timestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        fireLeadSubmitted("callback", "Callback Request", pathname);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center" role="alert">
        <p className="text-green-800 font-semibold">Got it! We will call you within 15 minutes.</p>
      </div>
    );
  }

  return (
    <div className="bg-navy text-white rounded-lg p-5">
      <h3 className="font-bold text-lg mb-4">Get a Callback in 15 Minutes</h3>
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <div>
          <label htmlFor={`${uid}-cb-name`} className="block text-sm font-medium mb-1">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-cb-name`}
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? `${uid}-cb-name-err` : undefined}
            aria-invalid={!!errors.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-white/30 rounded px-3 py-2 min-h-[44px] bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {errors.name && <p id={`${uid}-cb-name-err`} className="text-red-300 text-xs mt-1" role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`${uid}-cb-phone`} className="block text-sm font-medium mb-1">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${uid}-cb-phone`}
            type="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-describedby={errors.phone ? `${uid}-cb-phone-err` : undefined}
            aria-invalid={!!errors.phone}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-white/30 rounded px-3 py-2 min-h-[44px] bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {errors.phone && <p id={`${uid}-cb-phone-err`} className="text-red-300 text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>

        {status === "error" && (
          <p className="text-red-300 text-sm" role="alert">Something went wrong. Please call us directly.</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-orange text-white font-bold py-3 px-6 rounded min-h-[44px] hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-60"
        >
          {status === "loading" ? "Requesting…" : "Request Callback"}
        </button>
      </form>
    </div>
  );
}
