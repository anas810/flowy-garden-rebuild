type State = "expansion" | "contraction";

export function Licenses({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="licenses pointer-events-none absolute right-6 top-[24%] w-36 sm:right-16 sm:w-44"
      aria-hidden="true"
    >
      <span className="label block text-center text-[10px] text-muted-foreground">
        Licenses
      </span>

      <div className="relative mt-4 flex h-28 flex-col items-center justify-center">
        {/* paper license + price tag */}
        <div className="relative flex h-16 items-center justify-center">
          {/* paper license */}
          <svg
            viewBox="0 0 40 48"
            className="h-10 w-8"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="28" height="40" rx="2" />
            <path d="M12 14 L28 14" />
            <path d="M12 22 L28 22" />
            <path d="M12 30 L22 30" />
            <circle cx="28" cy="34" r="3" fill="currentColor" stroke="none" opacity={0.25} />
          </svg>

          {/* price tag overlapping bottom-right of license */}
          <svg
            viewBox="0 0 28 36"
            className="absolute -right-2 -bottom-1 h-8 w-6"
            fill="none"
          >
            {/* tag body */}
            <path
              d="M14 3 L25 12 L25 33 L3 33 L3 12 Z"
              fill="color-mix(in srgb, var(--paper) 70%, transparent)"
              stroke={accent}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* hole */}
            <circle cx="14" cy="12" r="2.5" fill="var(--background)" stroke={accent} strokeWidth="1.2" />
            {/* string loop */}
            <path d="M14 9 L14 4" stroke={accent} strokeWidth="1.2" strokeLinecap="round" />
            {/* dollar text */}
            <text
              x="14"
              y="27"
              textAnchor="middle"
              fontSize="6"
              fontWeight="600"
              fill={accent}
              style={{ letterSpacing: "-0.3px" }}
            >
              {positive ? "$ $ $ $ $" : "$ $"}
            </text>
          </svg>
        </div>

        {/* up / down arrow */}
        <div className="relative mt-2 h-6 w-10">
          <svg
            viewBox="0 0 40 24"
            className="h-full w-full"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {positive ? (
              <>
                <path
                  d="M4 20 L20 8 L36 20"
                  opacity={0.7}
                  style={{ animation: "license-arrow-up 2.4s ease-in-out infinite" }}
                />
                <path d="M20 4 L20 14" style={{ animation: "license-arrow-up 2.4s ease-in-out infinite" }} />
              </>
            ) : (
              <>
                <path
                  d="M4 4 L20 16 L36 4"
                  opacity={0.7}
                  style={{ animation: "license-arrow-down 2.4s ease-in-out infinite" }}
                />
                <path d="M20 20 L20 10" style={{ animation: "license-arrow-down 2.4s ease-in-out infinite" }} />
              </>
            )}
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes license-arrow-up {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes license-arrow-down {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(3px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .licenses * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
