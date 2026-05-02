
import BottomNav from "@/components/BottomNav";
import TechPill from "@/components/TechPill";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import ExperienceList from "@/components/ExperienceList";
import Link from "next/link";

import {
  PERSONAL,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
} from "@/data";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <main className="px-6 mx-auto max-w-page">
        {/* HERO SECTION */}
        <section id="home" className="relative pt-16 pb-8 overflow-hidden animate-fade-up">
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden border-2 rounded-full sm:w-14 sm:h-14 md:w-24 md:h-24 border-white/20">
                  <img 
                    src="/me.png" 
                    alt={PERSONAL.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="font-serif leading-tight text-white" style={{ fontSize: "clamp(2rem, 6vw, 3.6rem)" }}>
                  Hi, I&apos;m {PERSONAL.name} <span className="inline-block animate-wave">👋</span>
                </h1>
              </div>
              <p 
                className="max-w-md mb-5 text-sm leading-relaxed text-white/50"
                dangerouslySetInnerHTML={{ __html: PERSONAL.tagline }}
              />
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs font-medium px-5 py-2.5 rounded-full tracking-wide transition-all duration-200 w-full sm:w-auto hover:bg-white/90"
                  style={{ background: "#ffffff", color: "#0a0a0a" }}
                >
                  Get in touch 
                   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs px-5 py-2.5 rounded-full tracking-wide transition-all duration-200 text-white/50 hover:text-white w-full sm:w-auto"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  View projects
                </a>
              </div>
            </div>
          </div>
        </section>
     
        {/* ABOUT SECTION */}
        <section id="about" className="pt-8 pb-6 reveal">
          <h2 className="mb-4 font-serif text-3xl text-white">About Me</h2>
          <p
            className="max-w-xl mb-4 text-sm leading-loose text-white/50"
            dangerouslySetInnerHTML={{ __html: PERSONAL.bio }}
          />
          <h3 className="mb-2 font-mono text-xs tracking-widest text-white/40">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <TechPill key={s.name} tag={s} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="pt-6 pb-6 reveal">
          <h2 className="mb-5 font-serif text-3xl text-white">Event Experience</h2>
          <ExperienceList experiences={EXPERIENCE} />

          <h2 className="mt-8 mb-4 font-serif text-2xl text-white">Education</h2>
         {EDUCATION.map((edu) => (
  <div key={edu.institution} className="py-2">
    <div className="flex items-start gap-3">
      <div
  className="flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden font-mono text-xs font-semibold text-white rounded-full"
  style={{
    background: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.15)",
  }}
>
  {edu.logo ? (
    <img src={edu.logo} alt={edu.institution} className="object-cover w-full h-full" />
  ) : (
    edu.initials
  )}
</div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
          <p className="text-sm font-medium text-white/90">{edu.degree}</p>
          <span className="font-mono text-xs whitespace-nowrap text-white/40">
            {edu.period}
          </span>
        </div>
        <p className="text-xs mt-0.5 text-white/40">{edu.institution}</p>
      </div>
    </div>
  </div>
))}
        </section>

        {/* PROJECTS SECTION */}
        {/* PROJECTS SECTION */}
<section id="projects" className="pt-6 pb-8 reveal">
  <h2 className="mb-5 font-serif text-2xl text-white sm:text-3xl">My Projects</h2>
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
    {PROJECTS.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}
  </div>
  <div className="flex justify-center mt-6">
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5 rounded-full tracking-wide transition-all duration-200 text-white/50 hover:text-white"
      style={{ border: "1px solid rgba(255,255,255,0.15)" }}
    >
      View all projects
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>
</section>

        {/* CONTACT FORM */}
        <ContactForm />

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-4">
          <span className="font-mono text-xs text-white/40">
            © 2026 Joel CODJA
          </span>
          <div className="flex items-center gap-5">
            <a href={PERSONAL.github} target="_blank" rel="noreferrer" className="font-mono text-xs transition-colors text-white/40 hover:text-white">GitHub</a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer" className="font-mono text-xs transition-colors text-white/40 hover:text-white">LinkedIn</a>
            <a href={PERSONAL.twitter} target="_blank" rel="noreferrer" className="font-mono text-xs transition-colors text-white/40 hover:text-white">Twitter</a>
          </div>
        </footer>
      </main>

      <BottomNav />
    </>
  );
}