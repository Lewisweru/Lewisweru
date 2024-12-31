import React, { useState } from 'react';
import { Github, Globe, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Professional nail salon",
    description: "A Professional nail salon website",
    image: "https://github.com/Lewisweru/Lewisweru/raw/main/public/jesse.jpg",
    tags: ["React", "Node.js", "Typescript"],
    github: "https://github.com/Lewisweru/Jessenails",
    demo: "https://jessynails.netlify.app"
  },
  {
    id: 2,
    title: "Artist's website",
    description: "Website",
    image: "https://github.com/Lewisweru/Lewisweru/raw/main/public/Maxthumbnail.jpg",
    tags: ["Typescript", "React", "Vite"],
    github: "https://github.com/Lewisweru/icymax",
    demo: "https://icymaxy.netlify.app"
  },
  {
    id: 3,
    title: "Mejalyne E-store",
    description: "Dynamic store showcasing both hardware and household items",
    image: "https://github.com/Lewisweru/Lewisweru/raw/main/public/thumbnail.jpg",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com/Lewisweru/Mejalynhardware",
    demo: "https://mejalynebarakahardware.netlify.app"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/80 text-white text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Globe className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}