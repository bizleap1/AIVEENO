import type { Metadata } from "next";
import SolutionsClientPage from "./SolutionsClientPage";

export const metadata: Metadata = {
  title: "AI Solutions & Enterprise Use Cases | Aiveeno",
  description:
    "Production-grade AI systems, intelligent workflow automation, enterprise agent mesh, and private knowledge systems engineered for complex operating environments.",
};

export default function AISolutionsPage() {
  return <SolutionsClientPage />;
}
