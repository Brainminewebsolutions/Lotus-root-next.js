import {
    UserPlus,
    FileText,
    Send,
    CheckSquare,
    HardHat,
    CheckCircle,
    LifeBuoy
} from 'lucide-react';

const steps = [
    { label: "Capture Lead", icon: UserPlus },
    { label: "Create Quote", icon: FileText },
    { label: "Send to Customer", icon: Send },
    { label: "Customer Approves", icon: CheckSquare },
    { label: "Job Assigned", icon: HardHat },
    { label: "Installation", icon: CheckCircle },
    { label: "Warranty & Support", icon: LifeBuoy },
];

const Workflow = () => {
    return (
        <section className="py-24 bg-gray-800/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How FenestraOne Works</h2>
                    <p className="text-xl text-gray-400">One flow. One platform. No confusion.</p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-700 z-0"></div>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group w-full lg:w-auto">

                                {/* Step Number Badge */}
                                <div className="absolute -top-10 lg:-top-16 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-blue-500 font-bold text-sm">
                                    Step {index + 1}
                                </div>

                                {/* Icon Circle */}
                                <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gray-700 group-hover:border-blue-500 group-hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 shadow-xl z-10 mb-4">
                                    <step.icon size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                                </div>

                                {/* Label */}
                                <h3 className="text-center text-gray-300 font-medium group-hover:text-white transition-colors duration-300 px-2 lg:px-0 lg:w-24 leading-tight">
                                    {step.label}
                                </h3>

                                {/* Connector (Mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden w-0.5 h-8 bg-gray-700 my-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Workflow;
