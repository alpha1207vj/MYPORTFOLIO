import BottomNav from "@/components/BottomNav";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, PERSONAL } from "@/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 mx-auto max-w-page">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 font-mono text-xs transition-colors text-white/40 hover:text-white"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back home
        </Link>
        <h1 className="mb-2 font-serif text-2xl text-white sm:text-4xl">All Projects</h1>
      
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

     {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-12 pb-24">
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
   
  );
}