"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-500"
      style={{ background: "#1E1E2E" }}
    >
      <div className="loadingspinner">
        <div id="square1" />
        <div id="square2" />
        <div id="square3" />
        <div id="square4" />
        <div id="square5" />
      </div>
    </div>
  );
}