interface IllustrationProps {
  type: "handshake" | "growth" | "shield" | "compass" | "heart" | "clock";
  className?: string;
  size?: number;
}

export default function Illustration({
  type,
  className = "",
  size = 120,
}: IllustrationProps) {
  const illustrations: Record<string, React.ReactNode> = {
    handshake: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#E8708F"
          strokeWidth="2"
        />
        <path
          d="M35 65c0-8 6-14 14-14h4l12-10 12 10h4c8 0 14 6 14 14v4H35v-4z"
          fill="#F2A3B3"
        />
        <path
          d="M45 55l15-12 15 12"
          stroke="#C44D6E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="70" r="4" fill="#C44D6E" />
        <circle cx="68" cy="70" r="4" fill="#C44D6E" />
        <path
          d="M55 80a5 5 0 0 0 10 0"
          stroke="#C44D6E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#9B7ED9"
          strokeWidth="2"
        />
        <path
          d="M60 85V50"
          stroke="#9B7ED9"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M60 50c0-15 8-20 8-20s-8 5-8 20z" fill="#C4B5E8" />
        <path d="M60 50c0-15-8-20-8-20s8 5 8 20z" fill="#C4B5E8" />
        <path d="M60 60c0-10 12-15 12-15s-12 5-12 15z" fill="#9B7ED9" />
        <path d="M60 60c0-10-12-15-12-15s12 5 12 15z" fill="#9B7ED9" />
        <ellipse cx="60" cy="88" rx="12" ry="4" fill="#E8708F" opacity="0.3" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#7DAD94"
          strokeWidth="2"
        />
        <path
          d="M60 30l25 12v20c0 18-12 28-25 33-13-5-25-15-25-33V42l25-12z"
          fill="#B5D4C3"
          stroke="#7DAD94"
          strokeWidth="2"
        />
        <path
          d="M52 60l6 6 12-12"
          stroke="#7DAD94"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#E8708F"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="30"
          fill="white"
          stroke="#F2A3B3"
          strokeWidth="2"
        />
        <path d="M60 40l8 15h-16l8-15z" fill="#E8708F" />
        <path d="M60 80l-8-15h16l-8 15z" fill="#C4B5E8" />
        <circle cx="60" cy="60" r="4" fill="#C44D6E" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#E8708F"
          strokeWidth="2"
        />
        <path
          d="M60 85s-25-15-25-35c0-12 10-18 18-18 5 0 7 3 7 3s2-3 7-3c8 0 18 6 18 18 0 20-25 35-25 35z"
          fill="#F2A3B3"
          stroke="#C44D6E"
          strokeWidth="2"
        />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="#F7F3EE"
          stroke="#9B7ED9"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="32"
          fill="white"
          stroke="#C4B5E8"
          strokeWidth="2"
        />
        <path
          d="M60 40v20l12 8"
          stroke="#9B7ED9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="60" r="4" fill="#9B7ED9" />
      </svg>
    ),
  };

  return (
    <div
      className={`inline-flex ${className}`}
      style={{ width: size, height: size }}
    >
      {illustrations[type]}
    </div>
  );
}
