"use client";
import Image from "next/image";
import { useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { ExperienceDetail } from "@/data";

export default function ExperienceList({ experiences }: { experiences: ExperienceDetail[] }) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetail | null>(null);

  return (
    <>
      <div className="pb-2">
        <div className="flex flex-col min-w-full">
          {experiences.map((job, i) => (
            <div
              key={job.company}
              className="flex flex-col gap-2 px-3 py-3 -mx-3 transition-colors rounded-lg cursor-pointer sm:flex-row sm:items-start sm:justify-between hover:bg-white/5"
              onClick={() => setSelectedExperience(job)}
              style={{
                borderBottom:
                  i < experiences.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
              }}
            >
              <div className="flex items-start flex-1 min-w-0 gap-3">
                <div
  className="flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden font-mono text-xs font-semibold text-white rounded-full"
  style={{
    background: "#1a1a1a",
    border: "1px solid rgba(255,255,255,0.15)",
  }}
>
  {job.logo ? (
   <Image src={job.logo} alt={job.company} width={32} height={32} className="object-cover" unoptimized />
  ) : (
    job.initials
  )}
</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium break-words text-md text-white/90">
                    {job.role}
                  </p>
                  <p className="text-xs mt-0.5 text-white/40 break-words">
                    {job.company}
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs whitespace-nowrap text-white/40 ml-11 sm:ml-0">
                {job.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </>
  );
}