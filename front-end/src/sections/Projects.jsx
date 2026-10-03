import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { projects } from '../data/projects';

const clientLogos = [
  'Partner A',
  'Partner B',
  'Partner C',
  'Partner D',
  'Partner E',
  'Partner F',
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <SectionHeader
          eyebrow="Our Work"
          title="Applications Across Industries"
          description="Explore some of the projects and applications where our rubber products have delivered reliable performance."
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Client/Partner Logos */}
        <motion.div
          className="bg-charcoal-50 rounded-2xl p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-lg font-bold text-charcoal-900 text-center mb-6">
            Clients & Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="h-16 bg-white rounded-lg border border-charcoal-100 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-charcoal-400">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-charcoal-400 text-center mt-4">
            Placeholder logos — replace with actual client/partner logos.
          </p>
        </motion.div>

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
