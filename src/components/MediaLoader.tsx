import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MediaLoaderProps {
  onComplete: () => void;
}

export default function MediaLoader({ onComplete }: MediaLoaderProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = window.setTimeout(() => setCount((prev) => prev - 1), 700);
      return () => window.clearTimeout(timer);
    }

    const finishTimer = window.setTimeout(onComplete, 500);
    return () => window.clearTimeout(finishTimer);
  }, [count, onComplete]);

  useEffect(() => {
    const safetyTimer = window.setTimeout(onComplete, 4000);
    return () => window.clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="film-grain" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-[7vh] w-full bg-black" />
        <div className="absolute bottom-0 left-0 h-[7vh] w-full bg-black" />
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[4px] border-cyan-300/90 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
          <motion.div
            key={count}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-8xl font-bold tracking-tight text-cyan-300"
          >
            {count > 0 ? count : "!"}
          </motion.div>

          <motion.div
            className="absolute top-0 left-1/2 h-1/2 w-1 origin-bottom bg-cyan-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mt-10 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300 animate-pulse">
          Initializing Media Reel...
        </div>
      </div>
    </div>
  );
}