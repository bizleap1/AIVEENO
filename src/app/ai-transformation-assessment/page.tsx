import type { Metadata } from "next";
import AssessmentClientPage from "./AssessmentClientPage";

export const metadata: Metadata = {
  title: "AI Transformation Assessment | Aiveeno",
  description:
    "Discover where AI can create the most value in your business. A focused assessment of your workflows, systems, data and opportunities to identify practical priorities for AI-led transformation.",
};

export default function AssessmentPage() {
  return <AssessmentClientPage />;
}
