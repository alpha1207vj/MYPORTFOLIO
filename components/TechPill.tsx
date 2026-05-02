import type { Tag } from "@/data";

export default function TechPill({ tag }: { tag: Tag }) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-md text-white/50"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#111111",
      }}
    >
      {tag.icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={tag.icon} alt={tag.name} className="flex-shrink-0 object-contain w-5 h-5" />
      )}
      {tag.name}
    </span>
  );
}