interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "bloom" | "violet" | "sage" | "outline";
  size?: "small" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[--color-ink]/5 text-[--color-ink-light]",
    bloom: "bg-[--color-bloom]/10 text-[--color-bloom-deep]",
    violet: "bg-[--color-violet]/10 text-[--color-violet]",
    sage: "bg-[--color-sage]/10 text-[--color-sage]",
    outline:
      "bg-transparent border border-[--color-border-strong] text-[--color-ink-muted]",
  };

  const sizes = {
    small: "px-2.5 py-1 text-xs",
    default: "px-3.5 py-1.5 text-xs",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
