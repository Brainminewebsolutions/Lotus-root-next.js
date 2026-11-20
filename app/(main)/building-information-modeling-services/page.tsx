import type { Metadata } from "next";
import BIMServicesContent from "@/components/pages/BIMServicesContent";

export const metadata: Metadata = {
    title: "BIM Services UK | Expert BIM Solutions",
    description:
        "Professional building information modeling services for construction projects. We deliver accurate BIM models using Autodesk software. Get expert BIM support today.",
    keywords: [
        "building information modeling services",
        "BIM services",
        "BIM modeling",
        "building information modeling in construction",
        "Autodesk building information modeling",
        "BIM experts UK",
        "Scan to BIM",
        "architectural BIM",
        "structural BIM",
        "MEP BIM modeling",
        "clash detection",
        "4D BIM",
        "5D BIM",
    ],
    openGraph: {
        title: "Building Information Modeling Services | BIM Experts UK",
        description:
            "Professional building information modeling services for construction projects. We deliver accurate BIM models using Autodesk software.",
        url: "/building-information-modeling-services",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are Building Information Modeling (BIM) services in construction?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Building Information Modeling services in construction are digital services that create and manage a 3D data-rich model of a building to support planning, design, construction, and facility management. BIM services combine architectural, structural, and MEP data into one coordinated model, allowing teams to reduce errors, control costs, and improve collaboration throughout the project lifecycle.",
            },
        },
        {
            "@type": "Question",
            name: "How is building information modeling used in construction projects?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Building information modeling in construction is used to design, visualize, coordinate, and simulate a project before and during construction. BIM allows contractors, architects, and engineers to detect clashes, plan schedules (4D BIM), manage costs (5D BIM), and ensure every building component fits together correctly before physical work begins.",
            },
        },
        {
            "@type": "Question",
            name: "What software is used for building information modeling (BIM)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The most widely used building information modelling BIM software is Autodesk Revit, along with Autodesk Navisworks, AutoCAD, and BIM 360. These Autodesk building information modeling tools allow professionals to create intelligent 3D models, perform clash detection, generate drawings, and manage construction data in one integrated platform.",
            },
        },
        {
            "@type": "Question",
            name: "What are the benefits of building information modeling in construction?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The main benefits of building information modeling construction include improved design accuracy, reduced rework, better cost control, faster project delivery, and enhanced team collaboration. BIM also helps improve sustainability, safety, and long-term facility management by providing a complete digital record of the building.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between BIM modeling and traditional 2D drafting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Traditional 2D drafting shows separate drawings, while building information modeling services create a single intelligent 3D model that contains real-time building data. BIM automatically updates all views when changes are made, reducing errors and making it far more efficient and accurate than traditional CAD drawings.",
            },
        },
    ],
};

export default function BIMServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <BIMServicesContent />
        </>
    );
}
