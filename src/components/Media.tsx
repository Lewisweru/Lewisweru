import { motion } from 'framer-motion';

interface MediaProps {
  onClose: () => void;
}

const videoProjects = [
  {
    id: '01',
    title: 'Fertilizer Advertising Spot',
    client: 'Commercial Campaign',
    description:
      'A promotional ad cut built for product visibility, clear messaging, and strong brand recall.',
    src: '/Advertising-a-ferterlizer%20for%20a%20company.mp4',
    tags: ['Video Ad', 'Commercial Edit', 'Brand Story']
  },
  {
    id: '02',
    title: 'Mental Wellness Presentation Video',
    client: 'Wellness Company Presentation',
    description:
      'A presentation-focused visual piece created to communicate a mental wellness system with clarity, calm pacing, and professional delivery.',
    src: '/Avideoforamentalwellnesscompanyfortheirpresentationoftheirsystm.mp4',
    tags: ['Presentation Video', 'Wellness Brand', 'Story-Led Edit']
  },
  {
    id: '03',
    title: 'Website Kenya Campaign Video',
    client: 'Website Kenya (Meta Campaign)',
    description:
      'A digital advertising creative for Website Kenya, optimized for Meta placement, showing how to promote website development and branding services to SMEs.',
    src: '/websitepromotionvideoforwebsiteskenya.mp4',
    tags: ['Meta Campaign', 'Digital Ads', 'Brand Awareness']
  },
  {
    id: '04',
    title: 'Website Development Promo',
    client: 'Contact Us to Get Started 🚀',
    description:
      'A high-energy promo video for website development services, aimed at conversion on social and landing pages.',
    src: '/Contact%20us%20to%20get%20started%F0%9F%9A%80.mp4',
    tags: ['Promo', 'Website Dev', 'Conversion']
  }
];

export default function Media({ onClose }: MediaProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white selection:bg-cyan-300 selection:text-black">
      <div className="film-grain" />

      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute top-0 left-0 h-[5vh] w-full bg-black md:h-[8vh]" />
        <div className="absolute bottom-0 left-0 h-[5vh] w-full bg-black md:h-[8vh]" />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(0,0,0,0.55))] opacity-30" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="mb-4 h-px w-20 bg-cyan-300" />
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300">Lewis Weru Media</p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full border border-cyan-300/70 bg-black/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 transition-colors hover:bg-cyan-300/10"
            >
              Back Home
            </button>
          </div>

          <div className="mt-16 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h1 className="max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-[0.08em] text-white md:text-7xl">
                Cinematic Editing.
                <span className="block text-cyan-300">Motion-Led Storytelling.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                I focus on aesthetics, clean framing, strong angles, and the small details that make an edit feel intentional. Every piece is shaped to look polished, communicate clearly, and leave a strong visual impression.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#video-work"
                  className="rounded-full border border-cyan-300 bg-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  View Works
                </a>
                <a
                  href="#production-flow"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-cyan-300 hover:text-cyan-300"
                >
                  Process
                </a>
              </div>
            </motion.div>
          </div>

          <div
            id="video-work"
            className="mt-20 grid gap-8 xl:grid-cols-2"
          >
            {videoProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: project.id === '01' ? 0.15 : 0.25 }}
                className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-black/60 shadow-2xl"
              >
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-xs uppercase tracking-[0.4em] text-cyan-300">{project.id} · {project.client}</h3>
                  <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">{project.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                </div>
                <div className="border-t border-white/10">
                  <video
                    controls
                    preload="metadata"
                    className="w-full object-contain"
                  >
                    <source src={project.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Tools Used</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Canva', 'Google Nano Banana Pro', 'Google Flow', 'Google Veo'].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">PDF Case Study</p>
            <h3 className="mt-2 text-lg font-semibold text-white">Organic Nation Catalogue</h3>
            <p className="mt-2 text-sm text-slate-300">Designed and developed the catalog for a company, with embedded browser preview.</p>
            <div className="mt-4 h-[70vh] rounded-xl border border-white/15 overflow-hidden">
              <iframe
                src="/OrganicNationCatalogue%20(5).pdf"
                className="h-full w-full"
                title="Organic Nation Catalogue"
              />
            </div>
          </div>

          <div id="featured-work" className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.article
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">01</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Video Portfolio</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Lead with your strongest edited ads, product promos, reels, and client-facing campaigns.
              </p>
            </motion.article>

            <motion.article
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">02</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Logos & Labels</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Add brand identity work in a clean gallery with client name, industry, and a short design note.
              </p>
            </motion.article>

            <motion.article
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">03</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Campaign Systems</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Group related deliverables together when one company has video, packaging, logos, and rollout assets.
              </p>
            </motion.article>
          </div>

          <div id="production-flow" className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Production Flow</p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Concept + Rough Selects</h3>
                  <p className="mt-2 text-sm text-slate-300">Shape the core mood, best takes, and story spine before the cut starts accelerating.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Edit + Sound Design</h3>
                  <p className="mt-2 text-sm text-slate-300">Lock pacing, transitions, impact beats, and sonic texture to make scenes land harder.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Grade + Final Delivery</h3>
                  <p className="mt-2 text-sm text-slate-300">Push tone, contrast, and finish quality for release-ready delivery across platforms.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-black">
              <div className="h-full min-h-[320px] bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-300 bg-cyan-300/10 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
                  <div className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
