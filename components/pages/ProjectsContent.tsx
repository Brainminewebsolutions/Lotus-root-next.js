'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projectsData';

// Helper function to get status badge color
function getStatusBadgeClass(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-600 text-white';
    case 'On-Going':
      return 'bg-yellow-600 text-white';
    default:
      return 'bg-blue-600 text-white';
  }
}

export default function ProjectsContent() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(12);
  const projectRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const router = useRouter();

  const scrollToContact = () => {
    router.push('/contact');
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 12, projects.length));
  };

  useEffect(() => {
    globalThis.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(globalThis.innerWidth < 768);
    checkMobile();
    globalThis.addEventListener('resize', checkMobile);
    return () => globalThis.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (globalThis.innerHeight + globalThis.scrollY >= document.body.offsetHeight - 1000) {
        if (visibleProjects < projects.length) {
          loadMoreProjects();
        }
      }
    };

    globalThis.addEventListener('scroll', handleScroll);
    return () => globalThis.removeEventListener('scroll', handleScroll);
  }, [visibleProjects]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our work — real solutions we have built for clients across many industries, delivered by our global team at Ecomes. ({projects.length} projects)
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <button
                key={project.id}
                type="button"
                ref={(el) => { projectRefs.current[index] = el; }}
                className="relative h-80 rounded-lg overflow-hidden cursor-pointer group text-left"
                onMouseEnter={() => !isMobile && setActiveProject(project.id)}
                onMouseLeave={() => !isMobile && setActiveProject(null)}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 6 ? 'eager' : 'lazy'}
                  quality={75}
                />
                
                {/* Overlay with project details */}
                <div className={`absolute inset-0 bg-black bg-opacity-85 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h2 className="text-2xl font-bold text-white mb-3 text-center">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Project Stats Grid */}
                  <div className={`grid ${project.sqft ? 'grid-cols-2' : 'grid-cols-1'} gap-4 w-full mb-2`}>
                    <div className="flex items-center justify-center text-blue-400">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-sm">{project.city}</span>
                    </div>
                    {project.sqft && (
                      <div className="flex items-center justify-center text-green-400">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <span className="font-semibold text-sm">{project.sqft} sq ft</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {visibleProjects < projects.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMoreProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Tell us about your idea. We will show you how our skills and tools can bring it to life.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
