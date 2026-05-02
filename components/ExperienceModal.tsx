"use client";
import Image from "next/image";
import { ExperienceDetail } from "@/data";

export default function ExperienceModal({ 
  experience, 
  onClose 
}: { 
  experience: ExperienceDetail; 
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] md:max-h-[90vh] rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "#1a1a1a", border: "1px solid rgba(250,179,135,0.22)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="flex-shrink-0 p-4 border-b sm:p-5 border-white/10">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                {/* Fixed image sizing */}
                {experience.logo ? (
                  <div className="relative flex-shrink-0 w-10 h-10 overflow-hidden rounded-full bg-white/10">
                    <Image 
                      src={experience.logo} 
                      alt={experience.company} 
                      width={40} 
                      height={40} 
                      className="object-cover"
                      unoptimized 
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-mono text-sm font-semibold text-white rounded-full"
                    style={{
                      background: "#252535",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {experience.initials}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-white break-words sm:text-lg">
                    {experience.role}
                  </h3>
                  <p className="text-xs break-words sm:text-sm text-white/60">
                    {experience.company}
                  </p>
                </div>
              </div>
              <p className="font-mono text-xs text-white/40">{experience.period}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 transition-colors text-white/60 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body - Scrollable - Fixed for desktop */}
        <div className="flex-1 p-4 overflow-y-auto sm:p-5">
          <h4 className="mb-3 font-mono text-xs tracking-widest text-white/40">
            KEY ACHIEVEMENTS
          </h4>
          <ul className="mb-6 space-y-2">
            {experience.description.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-xs leading-relaxed sm:text-sm text-white/70">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="mb-3 font-mono text-xs tracking-widest text-white/40">
            TECHNOLOGIES
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 font-mono text-xs break-words rounded-full"
                style={{
                  background: "rgba(250,179,135,0.1)",
                  color: "rgba(250,179,135,0.9)",
                  border: "1px solid rgba(250,179,135,0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}