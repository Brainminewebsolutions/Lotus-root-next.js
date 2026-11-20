import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = () => {
    const problems = [
        "Manual quotations",
        "Disconnected sales and installation teams",
        "Lost customer data",
        "No visibility after installation",
        "Poor after-sales tracking"
    ];

    return (
        <section className="py-24 bg-gray-900 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Problem Side */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-500/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-2"></div>
                        <div className="relative bg-gray-800 p-10 rounded-3xl border border-gray-700 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 bg-red-500/10 rounded-lg text-red-400">
                                    <XCircle size={24} />
                                </span>
                                Why businesses struggle
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Fenestration businesses don’t fail because of bad products. They struggle because of disconnected systems and operational chaos.
                            </p>
                            <ul className="space-y-4">
                                {problems.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-gray-300">
                                        <XCircle size={20} className="text-red-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Solution Side */}
                    <div className="relative">
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Why FenestraOne Exists
                            </h2>
                            <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                FenestraOne fixes this by becoming the <span className="text-blue-400 font-semibold">single system of record</span> for your entire operation.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                    <CheckCircle size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Unified Operations</h4>
                                    <p className="text-gray-400">
                                        Sales, quotation, CRM, job management, and customer support combined into one simple system designed specifically for window and door businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
