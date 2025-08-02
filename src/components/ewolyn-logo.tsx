import { cn } from "@/lib/utils";

export function EwolynLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 50"
      className={cn("font-bold uppercase", className)}
      aria-label="Ewolyn"
    >
      <defs>
        <linearGradient id="split-w-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="white" />
          <stop offset="50%" stopColor="#FFD447" />
        </linearGradient>
      </defs>
      <text x="0" y="40" fontSize="40" fill="white">
        E
      </text>
      <text x="25" y="40" fontSize="40" fill="url(#split-w-gradient)">
        W
      </text>
      <text x="65" y="40" fontSize="40" fill="white">
        OLYN
      </text>
    </svg>
  );
}
