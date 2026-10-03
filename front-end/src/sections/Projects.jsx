import { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Show 3 examples as requested
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-10 lg:py-14 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-forest-600 mb-1">
            Our Work
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 leading-tight">
            Applications Across Industries
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
