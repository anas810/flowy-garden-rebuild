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
        {/* price tag */}
        <div
          key={state}
          className="relative flex items-center justify-center"
          style={{
            color: accent,
            animation: positive
              ? "license-grow 2.6s ease-in-out infinite"
              : "license-shrink 2.6s ease-in-out infinite",
          }}
        >
          <svg
            viewBox="0 0 48 48"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 L38 24 L24 38 L6 20 L6 6 L20 6 Z" />
            <circle cx="13" cy="13" r="2.5" fill="currentColor" stroke="none" />
          </svg>

          {/* ticking number */}
          <span
            className="absolute -right-2 -top-1 text-[10px] font-semibold"
            style={{
              color: accent,
              animation: positive
                ? "license-tick-up 2.6s ease-out infinite"
                : "license-tick-down 2.6s ease-out infinite",
            }}
          >
            {positive ? "+1" : "-1"}
          </span>
        </div>

        {/* rising / falling bar + arrow */}
        <div className="relative mt-2 h-10 w-16">
          <svg
            viewBox="0 0 64 40"
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
                  d="M8 32 L24 24 L40 28 L56 8"
                  opacity={0.55}
                  style={{ animation: "license-draw 2.6s ease-in-out infinite" }}
                  strokeDasharray="80"
                  strokeDashoffset="80"
                />
                <path
                  d="M48 8 L56 8 L56 16"
                  style={{ animation: "license-arrow 2.6s ease-in-out infinite" }}
                />
              </>
            ) : (
              <>
                <path
                  d="M8 8 L24 16 L40 12 L56 32"
                  opacity={0.55}
                  style={{ animation: "license-draw 2.6s ease-in-out infinite" }}
                  strokeDasharray="80"
                  strokeDashoffset="80"
                />
                <path
                  d="M48 32 L56 32 L56 24"
                  style={{ animation: "license-arrow 2.6s ease-in-out infinite" }}
                />
              </>
            )}
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes license-grow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        @keyframes license-shrink {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.85); }
        }
        @keyframes license-tick-up {
          0% { opacity: 0; transform: translateY(6px); }
          25% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0; transform: translateY(-14px); }
        }
        @keyframes license-tick-down {
          0% { opacity: 0; transform: translateY(-6px); }
          25% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(10px); }
          100% { opacity: 0; transform: translateY(14px); }
        }
        @keyframes license-draw {
          0% { stroke-dashoffset: 80; opacity: 0; }
          15% { opacity: 0.55; }
          70% { stroke-dashoffset: 0; opacity: 0.55; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes license-arrow {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(${positive ? "-2px" : "2px"}); }
        }
        @media (prefers-reduced-motion: reduce) {
          .licenses * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
