"use client";

import { useState, useId } from "react";
import { usePathname } from "next/navigation";
import { SERVICE_TYPES } from "@/lib/constants";
import { fireLeadSubmitted } from "@/lib/gtm";

export default function ContactForm() {
  const pathname = usePathname();
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.serviceType) e.serviceType = "Please select a service type.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;

    try {
      const [w3res, crmres] = await Promise.all([
        accessKey
          ? fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ access_key: accessKey, ...form }),
            })
          : Promise.resolve({ ok: true }),
        fetch("/api/crm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            serviceType: form.serviceType,
            message: form.message,
            formType: "contact",
            sourcePage: pathname,
            timestamp: new Date().toISOString(),
          }),
        }),
      ]);

      if ((w3res as Response).ok !== false && crmres.ok) {
        fireLeadSubmitted("contact", form.serviceType, pathname);
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center" role="alert">
        <p className="text-green-800 font-semibold text-lg">Thank you! We will be in touch shortly.</p>
        <p className="text-green-700 mt-1 text-sm">For emergencies, call <a href="tel:+13108535200" className="underline">(310) 853-5200</a> now.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor={`${uid}-name`} className="block text-sm font-medium text-navy mb-1">
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-name`}
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          aria-invalid={!!errors.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-orange"
        />
        {errors.name && <p id={`${uid}-name-err`} className="text-red-600 text-xs mt-1" role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor={`${uid}-phone`} className="block text-sm font-medium text-navy mb-1">
          Phone Number <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-phone`}
          type="tel"
          autoComplete="tel"
          required
          aria-required="true"
          aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
          aria-invalid={!!errors.phone}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-orange"
        />
        {errors.phone && <p id={`${uid}-phone-err`} className="text-red-600 text-xs mt-1" role="alert">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor={`${uid}-service`} className="block text-sm font-medium text-navy mb-1">
          Service Type <span aria-hidden="true">*</span>
        </label>
        <select
          id={`${uid}-service`}
          required
          aria-required="true"
          aria-describedby={errors.serviceType ? `${uid}-service-err` : undefined}
          aria-invalid={!!errors.serviceType}
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-orange bg-white"
        >
          <option value="">Select a service…</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.serviceType && <p id={`${uid}-service-err`} className="text-red-600 text-xs mt-1" role="alert">{errors.serviceType}</p>}
      </div>

      <div>
        <label htmlFor={`${uid}-message`} className="block text-sm font-medium text-navy mb-1">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">Something went wrong. Please call us directly at (310) 853-5200.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-orange text-white font-bold py-3 px-6 rounded min-h-[44px] hover:bg-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
