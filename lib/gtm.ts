declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(event: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
}

export function fireLeadSubmitted(
  formType: "contact" | "callback",
  serviceType: string,
  sourcePage: string
) {
  pushEvent({ event: "lead_submitted", form_type: formType, service_type: serviceType, source_page: sourcePage });
}

export function fireCallClick(sourcePage: string) {
  pushEvent({ event: "call_click", source_page: sourcePage });
}
