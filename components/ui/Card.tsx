interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "soft";
  hover?: boolean;
  padding?: "none" | "default" | "large";
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
  padding = "default",
}: CardProps) {
  const variants = {
    default: "bg-white border border-[--color-border]",
    elevated: `
      bg-white
      shadow-[0_1px_2px_rgba(26,22,20,0.04),0_4px_12px_rgba(26,22,20,0.04),0_16px_32px_rgba(26,22,20,0.04)]
    `,
    bordered: "bg-transparent border border-[--color-border-strong]",
    soft: "bg-[--color-cream-dark] border border-transparent",
  };

  const paddings = {
    none: "",
    default: "p-6 md:p-8",
    large: "p-8 md:p-10",
  };

  const hoverStyles = hover
    ? `
      transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
      hover:border-[--color-border-strong]
      hover:shadow-[0_16px_48px_rgba(26,22,20,0.08)]
      hover:-translate-y-1
    `
    : "";

  return (
    <div
      className={`
        rounded-2xl md:rounded-3xl
        ${variants[variant]}
        ${paddings[padding]}
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
