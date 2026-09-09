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
        {/* paper license + coin stack row */}
        <div className="relative flex h-16 items-end justify-center gap-2">
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

          {/* coin stack */}
          <div className="relative flex h-14 w-6 flex-col-reverse items-center justify-start">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={`${state}-${i}`}
                className="coin absolute h-2.5 w-2.5 rounded-full border"
                style={{
                  bottom: `${i * 4}px`,
                  borderColor: accent,
                  backgroundColor: "color-mix(in srgb, var(--paper) 70%, transparent)",
                  color: accent,
                  animation: positive
                    ? `coin-stack-up 5s ease-out infinite`
                    : `coin-stack-down 5s ease-out infinite`,
                  animationDelay: positive ? `${i * 0.3}s` : `${(6 - i) * 0.3}s`,
                  opacity: 0,
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center text-[5px] font-semibold">
                  $
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* up / down arrow */}
        <div className="relative mt-1 h-6 w-10">
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
        @keyframes coin-stack-up {
          0%, 12% { opacity: 0; transform: translateY(10px) scale(0.8); }
          25% { opacity: 1; transform: translateY(0) scale(1); }
          82% { opacity: 1; transform: translateY(0) scale(1); }
          94%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); }
        }
        @keyframes coin-stack-down {
          0%, 8% { opacity: 1; transform: translateY(0) scale(1); }
          20% { opacity: 0; transform: translateY(10px) scale(0.8); }
          88% { opacity: 0; transform: translateY(10px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
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
          .licenses .coin { opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}
