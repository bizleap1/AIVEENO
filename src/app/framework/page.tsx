import type { Metadata } from "next";
import FrameworkClientPage from "./FrameworkClientPage";

export const metadata: Metadata = {
  title: "AI Transformation Framework & Consulting Methodology | Aiveeno",
  description:
    "A proprietary, disciplined transformation lifecycle connecting business reality to engineering execution, continuous adoption, and ongoing refinement.",
};

export default function FrameworkPage() {
  return <FrameworkClientPage />;
}
