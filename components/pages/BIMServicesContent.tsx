'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Building,
    Scan,
    Layers,
    Wrench,
    Zap,
    Timer,
    FileCheck,
    Settings,
    Home,
    Store,
    Heart,
    Factory,
    GraduationCap,
    ShoppingBag,
    ArrowRight,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Target,
    Award,
    Clock,
    DollarSign,
    Users,
    Leaf,
    Box,
    Cpu,
    Globe,
    Briefcase
} from 'lucide-react';

const BIMServicesContent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsVisible(true);
    }, []);

    const scrollToContact = () => {
        router.push('/contact');
    };

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const bimServices = [
        {
            icon: Scan,
            title: 'Scan to BIM Services',
            description: 'Convert laser scan or point cloud data into highly accurate 3D BIM models, ideal for renovation, refurbishment, and heritage projects.',
            features: ['Point Cloud Processing', 'As-Built Capture', 'Heritage Projects', 'Renovation Support']
        },
        {
            icon: Building,
            title: 'Architectural BIM Modeling',
            description: 'Intelligent architectural BIM models including walls, doors, windows, finishes, and layouts for clear visualization.',
            features: ['Walls & Doors', 'Windows & Finishes', 'Floor Plans', 'Design Visualization']
        },
        {
            icon: Layers,
            title: 'Structural BIM Modeling',
            description: 'Detailed modeling of beams, columns, slabs, and foundations. Supporting structural analysis, fabrication, and coordination.',
            features: ['Beams & Columns', 'Slabs & Foundations', 'Structural Analysis', 'Fabrication Support']
        },
        {
            icon: Wrench,
            title: 'MEP BIM Modeling',
            description: 'Coordinated Mechanical, Electrical, and Plumbing models that improve system design and ensure correct fit within the building.',
            features: ['Mechanical Systems', 'Electrical Design', 'Plumbing Layout', 'System Coordination']
        },
        {
            icon: Zap,
            title: 'Clash Detection & Coordination',
            description: 'Identify and resolve conflicts between disciplines before construction begins, preventing expensive on-site delays.',
            features: ['Multi-discipline Check', 'Conflict Resolution', 'Pre-construction QA', 'Cost Prevention']
        },
        {
            icon: Timer,
            title: '4D & 5D BIM Services',
            description: '4D BIM integrates scheduling while 5D BIM adds cost data — allowing better planning, budgeting, and project control.',
            features: ['4D Scheduling', '5D Cost Data', 'Budget Management', 'Project Control']
        },
        {
            icon: FileCheck,
            title: 'As-Built BIM Models',
            description: 'Accurate as-built BIM models reflecting the final constructed building for maintenance and facility management.',
            features: ['Final Condition Capture', 'Maintenance Ready', 'Facility Handover', 'Record Models']
        },
        {
            icon: Settings,
            title: 'BIM for Facility Management',
            description: 'BIM models providing essential building data to support long-term operations, maintenance, and asset management.',
            features: ['Operations Support', 'Asset Management', 'Maintenance Planning', 'Lifecycle Data']
        }
    ];

    const industries = [
        { icon: Home, name: 'Residential Construction', description: 'Design, coordinate, and construct housing projects efficiently.' },
        { icon: Store, name: 'Commercial Buildings', description: 'Optimized layouts and reduced construction risks for offices and retail.' },
        { icon: Heart, name: 'Healthcare Facilities', description: 'Precise coordination ensuring safety, compliance, and performance.' },
        { icon: Factory, name: 'Industrial Projects', description: 'Accurate BIM-based design and installation for factories and plants.' },
        { icon: GraduationCap, name: 'Educational Institutions', description: 'Schools, colleges, and universities with minimal disruption.' },
        { icon: ShoppingBag, name: 'Retail & Mixed-Use', description: 'BIM-driven coordination and visualization for multi-use projects.' }
    ];

    const benefits = [
        { icon: Target, title: 'Improved Design Accuracy', description: 'Fewer errors and better decision-making' },
        { icon: CheckCircle, title: 'Reduced Rework', description: 'Conflicts are detected before construction' },
        { icon: DollarSign, title: 'Cost Control', description: '5D BIM allows real-time budget management' },
        { icon: Clock, title: 'Faster Delivery', description: 'Efficient workflows and better coordination' },
        { icon: Users, title: 'Enhanced Collaboration', description: 'All stakeholders work from one shared model' },
        { icon: Leaf, title: 'Sustainable Design', description: 'BIM supports energy analysis and green building strategies' }
    ];

    const workflowSteps = [
        { step: '01', title: 'Project Analysis', description: 'Understanding scope, standards, and objectives' },
        { step: '02', title: 'Data Collection', description: 'Architectural drawings, scans, and specifications' },
        { step: '03', title: '3D BIM Modeling', description: 'Creating coordinated digital models' },
        { step: '04', title: 'Clash Detection', description: 'Identifying and resolving conflicts' },
        { step: '05', title: 'Model Validation', description: 'Checking accuracy and compliance' },
        { step: '06', title: 'Final Delivery', description: 'Providing BIM models in required formats' }
    ];

    const softwareTools = [
        'Autodesk Revit',
        'Autodesk Navisworks',
        'AutoCAD',
        'BIM 360',
        'IFC Standards',
        'COBie Standards'
    ];

    const whyChooseUs = [
        'Highly skilled BIM engineers and modelers',
        'Use of industry-leading Autodesk building information modeling software',
        'Compliance with international BIM standards',
        'Fast turnaround times and cost-effective solutions',
        'End-to-end BIM support'
    ];

    const faqs = [
        {
            question: 'What are Building Information Modeling (BIM) services in construction?',
            answer: 'Building Information Modeling services in construction are digital services that create and manage a 3D data-rich model of a building to support planning, design, construction, and facility management. BIM services combine architectural, structural, and MEP data into one coordinated model, allowing teams to reduce errors, control costs, and improve collaboration throughout the project lifecycle.'
        },
        {
            question: 'How is building information modeling used in construction projects?',
            answer: 'Building information modeling in construction is used to design, visualize, coordinate, and simulate a project before and during construction. BIM allows contractors, architects, and engineers to detect clashes, plan schedules (4D BIM), manage costs (5D BIM), and ensure every building component fits together correctly before physical work begins.'
        },
        {
            question: 'What software is used for building information modeling (BIM)?',
            answer: 'The most widely used building information modelling BIM software is Autodesk Revit, along with Autodesk Navisworks, AutoCAD, and BIM 360. These Autodesk building information modeling tools allow professionals to create intelligent 3D models, perform clash detection, generate drawings, and manage construction data in one integrated platform.'
        },
        {
            question: 'What are the benefits of building information modeling in construction?',
            answer: 'The main benefits of building information modeling construction include improved design accuracy, reduced rework, better cost control, faster project delivery, and enhanced team collaboration. BIM also helps improve sustainability, safety, and long-term facility management by providing a complete digital record of the building.'
        },
        {
            question: 'What is the difference between BIM modeling and traditional 2D drafting?',
            answer: 'Traditional 2D drafting shows separate drawings, while building information modeling services create a single intelligent 3D model that contains real-time building data. BIM automatically updates all views when changes are made, reducing errors and making it far more efficient and accurate than traditional CAD drawings.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" className="w-full h-full">
                        <defs>
                            <pattern id="bim-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M0 40h80M40 0v80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-teal-400" />
                                <rect x="10" y="10" width="60" height="60" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-teal-400" />
                                <rect x="25" y="25" width="30" height="30" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-emerald-400" />
                                <circle cx="40" cy="40" r="5" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-teal-400" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#bim-pattern)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 py-24 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Animation */}
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                            <div className="relative">
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                                    {/* Animated circles */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-8 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                                    <div className="absolute inset-16 bg-gradient-to-br from-teal-500/40 to-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>

                                    {/* Center icon */}
                                    <div className="absolute inset-24 flex items-center justify-center">
                                        <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-500/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <Building className="text-white" size={56} />
                                        </div>
                                    </div>

                                    {/* Floating icons */}
                                    <div className="absolute top-4 left-4 animate-bounce">
                                        <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-teal-500/50 shadow-lg">
                                            <Layers className="text-teal-400" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 animate-bounce" style={{ animationDelay: '200ms' }}>
                                        <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-emerald-500/50 shadow-lg">
                                            <Box className="text-emerald-400" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 animate-bounce" style={{ animationDelay: '400ms' }}>
                                        <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/50 shadow-lg">
                                            <Cpu className="text-cyan-400" size={24} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 animate-bounce" style={{ animationDelay: '600ms' }}>
                                        <div className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-green-500/50 shadow-lg">
                                            <Scan className="text-green-400" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-teal-400 font-medium">BIM Services</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                                Building Information{' '}
                                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                                    Modeling Services
                                </span>
                            </h1>

                            <h2 className="text-xl lg:text-2xl text-teal-300 font-semibold mb-4">
                                Professional Building Information Modeling Services for Smarter Construction
                            </h2>

                            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                                We deliver advanced building information modeling services that transform how buildings are designed, constructed, and managed. Our BIM-driven workflows help architects, engineers, contractors, and developers eliminate errors, reduce costs, and bring their projects to life with precision.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={scrollToContact}
                                    className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center group"
                                >
                                    Get BIM Support
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                                </button>
                                <button
                                    onClick={() => router.push('/projects')}
                                    className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
                                >
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 lg:py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
                            In today&apos;s highly competitive and technically demanding construction industry, accurate planning, collaboration, and cost control are no longer optional — they are essential. At The Lotus Roots, we deliver advanced <strong className="text-teal-400">building information modeling services</strong> that transform how buildings are designed, constructed, and managed.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                            Whether you are planning a residential, commercial, or industrial project, our <strong className="text-teal-400">building information modeling in construction</strong> solutions provide you with a complete digital representation of your building — before construction even begins. This allows every stakeholder to visualize, coordinate, and optimize the project from the earliest design phase to facility management.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Is BIM Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                What Is Building Information Modeling{' '}
                                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">(BIM)?</span>
                            </h3>
                        </div>
                        <div className="bg-gray-800/50 p-8 lg:p-10 rounded-2xl border border-gray-700">
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                Building Information Modeling (BIM) is a digital process that creates an intelligent 3D model of a building, containing detailed physical and functional information about every component of a structure. Unlike traditional 2D drawings, <strong className="text-teal-400">building information modeling construction</strong> delivers a data-rich model that integrates architecture, structure, and MEP systems into one coordinated platform.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                BIM allows project teams to simulate construction, analyze performance, detect conflicts, and manage building data throughout the project lifecycle. By using <strong className="text-teal-400">Autodesk building information modeling</strong> tools such as Revit and Navisworks, BIM professionals can create accurate, collaborative, and dynamic models that improve design quality, reduce risks, and support efficient construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 lg:py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Why Choose Lotus Roots for{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">BIM Services</span>
                        </h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            We combine industry expertise, cutting-edge building information modelling BIM software, and a client-focused approach to deliver reliable BIM solutions across the UK and globally.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gray-800/50 p-8 lg:p-10 rounded-2xl border border-gray-700 mb-8">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We understand that every construction project is unique. That is why our building information modelling services are tailored to your specific requirements — whether you need conceptual BIM design, clash detection, or detailed as-built models. Our experienced BIM professionals ensure that your project is delivered with accuracy, compliance, and complete transparency.
                            </p>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-6 text-center">What Sets Us Apart</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {whyChooseUs.map((item, index) => (
                                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-teal-500/50 transition-colors duration-300">
                                    <CheckCircle className="text-teal-400 mt-0.5 flex-shrink-0" size={20} />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our BIM Services Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Our Building Information Modeling{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Services</span>
                        </h3>
                        <p className="text-gray-300 text-lg">Comprehensive BIM solutions from concept to completion</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {bimServices.map((service, index) => (
                            <div
                                key={index}
                                className="group p-6 lg:p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10"
                            >
                                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="text-white" size={28} />
                                </div>

                                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">{service.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <span
                                            key={featureIndex}
                                            className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 lg:py-20 bg-gray-800/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Industries We Serve with{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">BIM Services</span>
                        </h3>
                        <p className="text-gray-300 text-lg">Our building information modeling in construction solutions support a wide range of industries</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
                            >
                                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                                    <industry.icon className="text-teal-400 group-hover:text-white transition-colors duration-300" size={24} />
                                </div>
                                <h4 className="text-sm lg:text-base font-semibold text-white mb-2">{industry.name}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed hidden lg:block">{industry.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Benefits of Our{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">BIM Services</span>
                        </h3>
                        <p className="text-gray-300 text-lg">Measurable value at every project stage</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/30 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="text-white" size={22} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{benefit.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-16 lg:py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Our BIM{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Workflow Process</span>
                        </h3>
                        <p className="text-gray-300 text-lg">A structured approach to ensure quality and consistency</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workflowSteps.map((step, index) => (
                                <div key={index} className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                                        {step.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Software & Standards Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            BIM Software and{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Standards We Use</span>
                        </h3>
                        <p className="text-gray-300 text-lg">Industry-leading tools ensuring accuracy and compatibility</p>
                    </div>

                    <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                        {softwareTools.map((tool, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
                            >
                                <Cpu className="text-teal-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                                <span className="text-white font-semibold text-sm lg:text-base">{tool}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-300 mt-8 max-w-2xl mx-auto">
                        By using Autodesk building information modeling, we ensure seamless coordination, data exchange, and project control across all disciplines.
                    </p>
                </div>
            </section>

            {/* How BIM Improves Construction Section */}
            <section className="py-16 lg:py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                How BIM Improves{' '}
                                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Construction Projects</span>
                            </h3>
                        </div>
                        <div className="bg-gray-800/50 p-8 lg:p-10 rounded-2xl border border-gray-700">
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                Building information modeling in construction transforms how projects are delivered. BIM allows teams to simulate construction, detect problems early, and plan efficiently. This results in fewer delays, lower costs, and higher quality buildings.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                With building information modeling construction, stakeholders can visualize designs, review logistics, and collaborate in real time — making BIM an essential part of modern construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Coverage Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                            <Globe className="text-white" size={36} />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            BIM Services for the{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">UK, USA, Europe &amp; Worldwide</span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            The Lotus Roots provides building information modelling services to clients across the UK, USA, Europe, and beyond. Our remote BIM workflows allow us to support global projects with the same level of accuracy and professionalism.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 lg:py-20 bg-gray-800/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                            <Briefcase className="text-white" size={36} />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Our Experience in{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">BIM Services</span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We have successfully delivered BIM solutions for residential, commercial, healthcare, industrial, and infrastructure projects. Our expertise in Autodesk building information modeling ensures high-quality outputs that meet international standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            FAQs About{' '}
                            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">BIM Services</span>
                        </h3>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                                    {openFAQ === index ? (
                                        <ChevronUp className="text-teal-400 flex-shrink-0" size={22} />
                                    ) : (
                                        <ChevronDown className="text-gray-400 flex-shrink-0" size={22} />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border-t border-teal-500/20">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Get Expert Building Information Modeling Services Today
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        If you are looking for reliable, cost-effective, and high-quality building information modeling services, The Lotus Roots is your trusted partner. Let our BIM experts help you plan, coordinate, and deliver your construction project with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={scrollToContact}
                            className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center group"
                        >
                            <Building className="mr-2" size={20} />
                            Contact Us Today
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                        </button>
                        <button
                            onClick={() => router.push('/digital-engineering')}
                            className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
                        >
                            Back to Engineering Services
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BIMServicesContent;
