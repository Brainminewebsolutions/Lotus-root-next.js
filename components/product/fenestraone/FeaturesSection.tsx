import {
    Calculator,
    Users,
    HardHat,
    LayoutDashboard,
    ShieldCheck,
    Zap,
    Check,
    Code,
    FileText,
    Calendar,
    Bell,
    Settings,
    UserCheck,
    Image as ImageIcon
} from 'lucide-react';

const features = [
    {
        title: "Smart Quotation & Product Configuration",
        description: "Create accurate, professional quotes in minutes. No more Excel. No more manual calculations.",
        icon: Calculator,
        color: "blue",
        details: [
            "Configure windows & doors with profiles, glass, hardware",
            "Auto price calculation based on rules",
            "Edit and revise quotes easily",
            "Generate clean, professional PDFs",
            "Maintain full quote history"
        ],
        visualType: "quotation"
    },
    {
        title: "Built-In CRM for Fenestration",
        description: "A CRM designed for how your business works. Everything stays organized — automatically.",
        icon: Users,
        color: "purple",
        details: [
            "Lead management & Sales pipeline tracking",
            "Customer history & Site visit notes",
            "Follow-ups & reminders",
            "All quotes and jobs linked to the same customer"
        ],
        visualType: "crm"
    },
    {
        title: "Job & Installation Management",
        description: "Once a quote is approved, FenestraOne takes over. Your office and field team stay in sync.",
        icon: HardHat,
        color: "amber",
        details: [
            "Auto-generated job cards",
            "Installer assignments & Job status tracking",
            "Site photo uploads & Installation notes",
            "Completion tracking"
        ],
        visualType: "job"
    },
    {
        title: "Customer Portal (Built-In)",
        description: "Give your customers transparency and confidence. Reduces calls, improves trust.",
        icon: LayoutDashboard,
        color: "emerald",
        details: [
            "View quotes & Track installation status",
            "Download invoices",
            "View warranty details",
            "Raise service or complaint requests",
            "Submit feedback"
        ],
        visualType: "portal"
    },
    {
        title: "Warranty & After-Sales Support",
        description: "Turn service into a strength. Your after-sales process becomes structured, not reactive.",
        icon: ShieldCheck,
        color: "red",
        details: [
            "Warranty tracking per product",
            "Complaint management system",
            "Service request history & Resolution tracking",
            "Internal ticket management"
        ],
        visualType: "warranty"
    },
    {
        title: "Smart Automation (AI-Enabled)",
        description: "FenestraOne uses intelligent automation to save time. No complicated AI.",
        icon: Zap,
        color: "pink",
        details: [
            "Auto price calculation",
            "Auto job creation & Status updates",
            "Smart reminders",
            "Rule-based validations"
        ],
        visualType: "automation"
    }
];

const FeatureVisual = ({ type, color }: { type: string, color: string }) => {
    switch (type) {
        case 'quotation':
            return (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 w-full font-mono text-xs">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                        <span className="text-gray-400">Quote #Q-2024-001</span>
                        <span className={`text-${color}-400 font-bold`}>Draft</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Item: Sliding Window (2000x1500)</span>
                            <span className="text-gray-300">£450.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Glass: 24mm Toughened Low-E</span>
                            <span className="text-gray-300">£120.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Hardware: Chrome Handle</span>
                            <span className="text-gray-300">£35.00</span>
                        </div>
                        <div className="my-2 border-t border-gray-700"></div>
                        <div className="flex justify-between text-sm font-bold">
                            <span className="text-gray-300">Total</span>
                            <span className={`text-${color}-400`}>£605.00</span>
                        </div>
                    </div>
                </div>
            );
        case 'crm':
            return (
                <div className="space-y-3 w-full">
                    {['John Smith', 'Sarah Williams', 'Estate Projects Ltd'].map((name, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                            <div className={`w-8 h-8 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-500`}>
                                {name.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-300 font-medium">{name}</div>
                                <div className="text-xs text-gray-500">Last contact: {i + 1} days ago</div>
                            </div>
                            <div className={`px-2 py-1 rounded text-xs bg-${color}-500/10 text-${color}-400`}>
                                {i === 0 ? 'Lead' : i === 1 ? 'Quote Sent' : 'Contract'}
                            </div>
                        </div>
                    ))}
                </div>
            );
        case 'job':
            return (
                <div className="w-full grid grid-cols-2 gap-3">
                    <div className="col-span-2 p-3 bg-gray-800 rounded-lg border border-gray-700 flex items-center gap-3">
                        <Calendar size={16} className={`text-${color}-500`} />
                        <span className="text-sm text-gray-300">Installation: Mon, 12th Aug</span>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700 flex flex-col items-center justify-center gap-2">
                        <div className="text-xs text-gray-500">Progress</div>
                        <div className="w-12 h-12 rounded-full border-4 border-gray-700 border-t-amber-500 flex items-center justify-center text-xs text-white font-bold">75%</div>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700 flex flex-col items-center justify-center gap-2">
                        <div className="text-xs text-gray-500">Team</div>
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-800"></div>
                            <div className="w-6 h-6 rounded-full bg-gray-600 border border-gray-800"></div>
                            <div className="w-6 h-6 rounded-full bg-gray-500 border border-gray-800"></div>
                        </div>
                    </div>
                </div>
            );
        case 'portal':
            return (
                <div className="w-full space-y-3">
                    <div className={`p-4 bg-${color}-500/10 rounded-lg border border-${color}-500/20 text-center`}>
                        <h4 className={`text-${color}-400 font-bold mb-1`}>Welcome, David</h4>
                        <p className="text-xs text-gray-400">Your installation is scheduled.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {['Quote', 'Invoice', 'Warranty'].map((item, i) => (
                            <div key={i} className="p-2 bg-gray-800 rounded border border-gray-700 flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-700 text-center">
                                <FileText size={14} className="text-gray-400" />
                                <span className="text-[10px] text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'warranty':
            return (
                <div className="w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <div className="p-3 bg-red-500/10 border-b border-red-500/10 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-red-500" />
                        <span className="text-sm text-red-400 font-medium">Active Warranty</span>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex items-start gap-3">
                            <UserCheck size={16} className="text-gray-500 mt-0.5" />
                            <div>
                                <div className="text-xs text-gray-400">Product ID</div>
                                <div className="text-sm text-white">WIN-2488-X</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Calendar size={16} className="text-gray-500 mt-0.5" />
                            <div>
                                <div className="text-xs text-gray-400">Expires</div>
                                <div className="text-sm text-white">Aug 2034</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'automation':
            return (
                <div className="w-full relative">
                    <div className="absolute top-0 right-0 p-2">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-75"></div>
                            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-150"></div>
                        </div>
                    </div>
                    <div className="space-y-2 mt-4">
                        <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 backdrop-blur-sm transform translate-x-4">
                            <div className="flex items-center gap-2 mb-1">
                                <Bell size={12} className="text-pink-400" />
                                <span className="text-xs font-bold text-gray-300">Auto-Reminder</span>
                            </div>
                            <p className="text-[10px] text-gray-400">Sent quote follow-up to Client X</p>
                        </div>
                        <div className="p-3 bg-gray-800/80 rounded-lg border border-gray-700 backdrop-blur-sm transform -translate-x-2">
                            <div className="flex items-center gap-2 mb-1">
                                <Settings size={12} className="text-pink-400" />
                                <span className="text-xs font-bold text-gray-300">System Update</span>
                            </div>
                            <p className="text-[10px] text-gray-400">Price list updated from CSV</p>
                        </div>
                    </div>
                </div>
            )
        default:
            return null;
    }
}

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-gray-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What You Can Do With FenestraOne</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A complete suite of tools integrated into one seamless platform.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>

                            {/* Image/Visual Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 shadow-2xl group hover:border-${feature.color}-500/50 transition-colors duration-500 flex flex-col`}>
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                                    {/* Header Icon */}
                                    <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center text-${feature.color}-500 mb-6 relative z-10`}>
                                        <feature.icon size={24} />
                                    </div>

                                    {/* Dynamic Mock UI Component */}
                                    <div className="relative z-10 flex-1 flex items-center justify-center">
                                        <div className="w-full transform group-hover:scale-105 transition-transform duration-500">
                                            <FeatureVisual type={feature.visualType} color={feature.color} />
                                        </div>
                                    </div>

                                    {/* Footer Badge */}
                                    <div className="mt-6 p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 backdrop-blur-sm relative z-10 inline-flex items-center gap-3">
                                        <div className={`h-2 w-2 rounded-full bg-${feature.color}-500 animate-pulse`}></div>
                                        <span className="text-xs text-gray-400 font-mono">Module: {feature.title.split(' ')[0]}...</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`p-2 rounded-lg bg-${feature.color}-500/10 text-${feature.color}-400`}>
                                        <feature.icon size={24} />
                                    </span>
                                    <span className={`text-${feature.color}-400 font-semibold tracking-wider text-sm uppercase`}>
                                        Feature 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-4">
                                    {feature.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <Check size={20} className={`text-${feature.color}-500 mt-1 flex-shrink-0`} />
                                            <span className="text-gray-300">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
