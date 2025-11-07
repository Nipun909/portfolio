import { motion } from 'framer-motion';

// NOTE
// Replaced Next.js <Image> with a plain <img> tag and switched example images to
// public (unsplash) URLs to avoid runtime errors in environments that don't
// serve local `/images/...` assets. If you run this in a Next.js project and
// prefer Next/Image, swap the <img> back to <Image> and ensure the files exist
// under the `public/` folder or provide correct remote patterns in next.config.js.

// Example project data (replace the `image` URLs with your own hosted images)
const projects = [
  {
    title: 'Creative UI Dashboard',
    description: 'A modern analytics dashboard design with interactive charts.',
    // Public placeholder image (replace with your own public URL or /images/... if available)
    image:
      'https://images.unsplash.com/photo-1581276879432-15a3b6b2f6f4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Travel App Concept',
    description: 'Clean mobile UI for a travel booking app with minimal layout.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Brand Identity Design',
    description: 'Logo and color system created for a modern tech startup.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="w-full min-h-screen bg-gradient-to-br from-[#050a1f] via-[#050a1f] to-[#000000] text-white py-20 px-6 sm:px-10 flex flex-col items-center"
    >
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        SHOWCASE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0a0f25] border border-white/10 rounded-2xl shadow-lg hover:shadow-blue-500/30 overflow-hidden transition-all duration-500 flex flex-col"
            aria-label={`${project.title} project card`}
            role="group"
          >
            {/* Image area */}
            <div className="relative w-full h-56 overflow-hidden bg-gray-900">
              {/* Use a plain img tag to avoid Next.js image loader issues in sandbox/test envs */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">{project.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                >
                  View Details
                </a>
                <span className="text-xs text-gray-400">UI · Graphic · Motion</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
