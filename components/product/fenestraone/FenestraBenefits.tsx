import { Layers, Shield, Cloud, Lock, UserCog, Plug } from 'lucide-react';

const FenestraBenefits = () => {
    const benefits = [
        "Built specifically for fenestration",
        "Combines CRM + Quotation + Operations",
        "Improves sales speed",
        "Reduces errors",
        "Improves customer experience",
        "Scales with your business"
    ];

    const targetAudience = [
        "Window manufacturers",
        "Door fabricators",
        "uPVC & Aluminium companies",
        "Dealers & installers",
        "Growing fenestration brands"
    ];

    const techSpecs = [
        { icon: Layers, label: "Modular structure" },
        { icon: UserCog, label: "Role-based access" },
        { icon: Cloud, label: "Cloud-based" },
        { icon: Lock, label: "Secure" },
        { icon: Plug, label: "Ready for future integrations" },
    ];

    return (
        <section className="py-24 bg-gray-900">
            <div className="container mx-auto px-6">

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left Column: Why Choose & Target Audience */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Why Companies Choose FenestraOne</h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700">
                                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-6">Designed for Fenestration Businesses</h3>
                            <div className="flex flex-wrap gap-3">
                                {targetAudience.map((item, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-gray-700/50 text-blue-300 rounded-full text-sm font-medium border border-blue-500/10">
                                        ✔ {item}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-gray-400 italic">
                                Whether you’re handling 10 projects or 1,000 — it scales with you.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Tech Specs & Future Ready */}
                    <div>
                        <div className="relative h-full bg-gray-800 rounded-2xl p-10 overflow-hidden border border-gray-700">
                            <div className="absolute top-0 right-0 p-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h2 className="text-3xl font-bold text-white mb-2">Built for Today.</h2>
                            <h2 className="text-3xl font-bold text-blue-400 mb-8">Ready for Tomorrow.</h2>

                            <p className="text-gray-400 mb-10">
                                FenestraOne is not just software; it's a foundation for your future growth. No generic software. No unnecessary complexity.
                            </p>

                            <div className="space-y-6">
                                {techSpecs.map((spec, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors duration-300 text-gray-400">
                                            <spec.icon size={24} />
                                        </div>
                                        <span className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {spec.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FenestraBenefits;
