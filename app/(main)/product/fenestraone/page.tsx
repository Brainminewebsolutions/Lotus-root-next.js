import type { Metadata } from "next";
import FenestraHero from "@/components/product/fenestraone/FenestraHero";
import ProblemSolution from "@/components/product/fenestraone/ProblemSolution";
import FeaturesSection from "@/components/product/fenestraone/FeaturesSection";
import Workflow from "@/components/product/fenestraone/Workflow";
import FenestraBenefits from "@/components/product/fenestraone/FenestraBenefits";
import CallToAction from "@/components/product/fenestraone/CallToAction";

export const metadata: Metadata = {
    title: "FenestraOne | Fenestration Business Platform",
    description: "FenestraOne is the purpose-built software platform for window and door companies. Manage sales, quotation, job management, and CRM in one system.",
    keywords: ["FenestraOne", "Fenestration Software", "Window and Door CRM", "Quotation Software", "Construction Technology"],
};

export default function FenestraOnePage() {
    return (
        <main className="bg-gray-900 min-h-screen text-slate-200">
            <FenestraHero />
            <ProblemSolution />
            <FeaturesSection />
            <Workflow />
            <FenestraBenefits />
            <CallToAction />
        </main>
    );
}
