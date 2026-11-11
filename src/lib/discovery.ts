import { z } from "zod";

export const CONTACT_AREA_OF_INTEREST_OPTIONS = [
  "AI Business Transformation",
  "AI Transformation Assessment",
  "AI Solutions / Use Cases",
  "Cloud & Technology",
  "Other / Not Sure",
] as const;

export type ContactAreaOfInterest =
  (typeof CONTACT_AREA_OF_INTEREST_OPTIONS)[number];

export const MODAL_AREA_OF_INTEREST_OPTIONS = [
  "AI Business Transformation",
  "AI Transformation Assessment",
  "AI Transformation Framework",
  "AI Solutions / Use Cases",
  "AI Solutions & Systems",
  "Cloud & Technology",
  "Cloud Consulting",
  "Cloud Migration",
  "Managed Cloud",
  "Cloud Security",
  "Cloud Optimization",
  "DevOps & Automation",
  "Data Engineering",
  "Software Development",
  "Other / Not Sure",
  "Other",
] as const;

export const ALLOWED_AREAS_OF_INTEREST = [
  ...MODAL_AREA_OF_INTEREST_OPTIONS,
] as const;

export const discoveryEnquirySchema = z.object({
  fullName: z
    .string({ error: "Please enter your full name." })
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(120, "Full name must be 120 characters or fewer."),
  workEmail: z
    .string({ error: "Please enter your work email." })
    .trim()
    .min(1, "Please enter your work email.")
    .max(200, "Work email must be 200 characters or fewer.")
    .pipe(z.email("Please enter a valid work email address.")),
  company: z
    .string({ error: "Please enter your company or organization." })
    .trim()
    .min(2, "Please enter your company or organization name.")
    .max(150, "Company or organization must be 150 characters or fewer."),
  roleTitle: z
    .string()
    .trim()
    .max(120, "Role or title must be 120 characters or fewer.")
    .optional()
    .default(""),
  areaOfInterest: z.enum(ALLOWED_AREAS_OF_INTEREST, {
    error: "Please select an area of interest.",
  }),
  companySize: z
    .string()
    .trim()
    .max(40, "Company size must be 40 characters or fewer.")
    .optional()
    .default(""),
  priorities: z
    .string({ error: "Please share your priorities or business context." })
    .trim()
    .min(
      10,
      "Please share a brief overview of your priorities (at least 10 characters)."
    )
    .max(3000, "Message must be 3,000 characters or fewer."),
  sourceContext: z
    .string()
    .trim()
    .max(160)
    .optional()
    .default("Contact Page"),
  pageSource: z.string().trim().max(200).optional().default("/contact"),
  website: z.string().max(200).optional().default(""),
});

export type DiscoveryEnquiryInput = z.input<typeof discoveryEnquirySchema>;
export type DiscoveryEnquiryParsed = z.output<typeof discoveryEnquirySchema>;

export type DiscoveryErrorCode =
  | "INVALID_JSON"
  | "VALIDATION_ERROR"
  | "RATE_LIMITED"
  | "DELIVERY_NOT_CONFIGURED"
  | "DELIVERY_FAILED";

export interface DiscoveryEnquirySuccessResponse {
  ok: true;
  code: "ENQUIRY_RECEIVED";
  referenceId: string;
}

export interface DiscoveryEnquiryErrorResponse {
  ok: false;
  code: DiscoveryErrorCode;
  message: string;
  fieldErrors?: Partial<Record<keyof DiscoveryEnquiryInput, string>>;
}

export type DiscoveryEnquiryResponse =
  | DiscoveryEnquirySuccessResponse
  | DiscoveryEnquiryErrorResponse;

/**
 * Maps page presets or URL query parameter values cleanly onto the
 * five focused areas of interest shown on `/contact/`.
 */
export function normalizeContactInterest(
  raw?: string | null
): ContactAreaOfInterest {
  if (!raw) return "AI Business Transformation";

  const value = raw.trim().toLowerCase();
  if (!value) return "AI Business Transformation";

  if (
    value.includes("assessment") ||
    value === "ai-transformation-assessment"
  ) {
    return "AI Transformation Assessment";
  }

  if (
    value.includes("solution") ||
    value.includes("use case") ||
    value.includes("agent") ||
    value === "ai-solutions"
  ) {
    return "AI Solutions / Use Cases";
  }

  if (
    value.includes("cloud") ||
    value.includes("devops") ||
    value.includes("data engineering") ||
    value.includes("data-engineering") ||
    value.includes("software") ||
    value.includes("migration") ||
    value.includes("managed") ||
    value.includes("security") ||
    value.includes("optimization")
  ) {
    return "Cloud & Technology";
  }

  if (
    value.includes("other") ||
    value.includes("not sure") ||
    value.includes("general")
  ) {
    return "Other / Not Sure";
  }

  return "AI Business Transformation";
}

