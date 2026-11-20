import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FenestraHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-900">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-8 animate-fadeInUp">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm text-gray-300 font-medium">One Stop Solution for Fenestration Industry</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fadeInUp [animation-delay:200ms]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Fenestration Business Management Software
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6 animate-fadeInUp [animation-delay:400ms]">
                        The All-in-One Business Platform for <br className="hidden md:block" />
                        <span className="text-blue-400">Window & Door Companies</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fadeInUp [animation-delay:600ms]">
                        From quotation to installation to after-sales — manage everything in one place.
                        Purpose-built software platform for the fenestration industry.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp [animation-delay:800ms]">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                        >
                            <span>Book a Demo</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#features"
                            className="px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 rounded-full font-semibold hover:bg-gray-750 hover:text-white transition-all duration-300"
                        >
                            Explore Features
                        </Link>
                    </div>

                    {/* Stats/Trust indicators */}
                    <div className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fadeInUp [animation-delay:1000ms]">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-sm uppercase tracking-wider mb-2">Replace Spreadsheets</span>
                            <span className="text-white font-semibold flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={18} /> With Smart Quotes
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-sm uppercase tracking-wider mb-2">Unify Scattered Apps</span>
                            <span className="text-white font-semibold flex items-center gap-2">
                                <CheckCircle2 className="text-blue-500" size={18} /> Into One Platform
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 text-sm uppercase tracking-wider mb-2">Eliminate Chaos</span>
                            <span className="text-white font-semibold flex items-center gap-2">
                                <CheckCircle2 className="text-purple-500" size={18} /> Gain Total Control
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative abstract UI element */}
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent blur-xl opacity-50 pointer-events-none" />
        </section>
    );
};

export default FenestraHero;
