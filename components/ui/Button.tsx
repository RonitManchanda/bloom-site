import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99] focus-ring";

  const style =
    variant === "secondary"
      ? "bg-white/10 hover:bg-white/15 ring-1 ring-white/10"
      : variant === "ghost"
        ? "bg-transparent hover:bg-white/5 ring-1 ring-white/10"
        : "bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-95 shadow-lg shadow-pink-500/15";

  const classes = [base, style, className].join(" ");

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
