import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CallToAction = () => {
    return (
        <section className="py-32 relative bg-gray-900 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Run Your Fenestration Business <br className="hidden md:block" />
                    <span className="text-blue-500">the Smart Way</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
                    Stop juggling tools. Start managing your business from one powerful platform.
                </p>

                <p className="text-gray-400 mb-12 text-lg">
                    FenestraOne — One stop solution for the Fenestration Industry.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                    >
                        Talk to Sales <ArrowRight size={20} />
                    </Link>

                    <a
                        href="https://wa.me/447833818001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-gray-800 text-white text-lg rounded-full font-bold border border-gray-700 hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                    >
                        <MessageCircle size={20} className="text-green-500" /> WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
