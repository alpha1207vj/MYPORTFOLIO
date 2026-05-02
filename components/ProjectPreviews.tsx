"use client";

import Image from "next/image";

type PreviewProps = {
  src: string;
  alt: string;
};

function Preview({ src, alt }: PreviewProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}

export function JobPortalPreview()  { return <Preview src="/projects/jobportal.png"  alt="Job Portal" />; }
export function KanbanPreview()     { return <Preview src="/projects/kanban.png"      alt="Kanban" />; }
export function CryptoPreview()     { return <Preview src="/projects/crypto.png"      alt="Crypto" />; }
export function DesktopPreview()    { return <Preview src="/projects/trading.png"     alt="Trading" />; }
export function AuctionPreview()    { return <Preview src="/projects/contrasto.png"   alt="Auction" />; }
export function ArduinoPreview()    { return <Preview src="/projects/portfolio.png"     alt="Arduino" />; }

const PREVIEWS = {
  jobportal: JobPortalPreview,
  kanban: KanbanPreview,
  crypto: CryptoPreview,
  desktop: DesktopPreview,
  auction: AuctionPreview,
  arduino: ArduinoPreview,
} as const;

export default PREVIEWS;