import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "large" | "small";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
    focus-ring disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[--color-ink] text-white
      hover:bg-[--color-ink-light]
      active:scale-[0.98]
    `,
    secondary: `
      bg-[--color-bloom] text-white
      hover:bg-[--color-bloom-deep]
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent border border-[--color-border-strong]
      text-[--color-ink]
      hover:bg-[--color-ink] hover:text-white hover:border-[--color-ink]
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-[--color-ink-light]
      hover:text-[--color-ink] hover:bg-[--color-cream-dark]
      active:scale-[0.98]
    `,
  };

  const sizes = {
    small: "px-4 py-2 text-sm rounded-lg gap-2",
    default: "px-6 py-3 text-sm rounded-xl gap-2",
    large: "px-8 py-4 text-base rounded-2xl gap-3",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
