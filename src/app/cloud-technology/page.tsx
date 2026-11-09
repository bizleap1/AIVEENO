import type { Metadata } from "next";
import CloudTechnologyClientPage from "./CloudTechnologyClientPage";

export const metadata: Metadata = {
  title: "Cloud & Technology Foundations | Aiveeno",
  description:
    "Modernize cloud environments, strengthen data foundations and build secure, scalable technology that supports evolving business needs.",
};

export default function CloudTechnologyPage() {
  return <CloudTechnologyClientPage />;
}
