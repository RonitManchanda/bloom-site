type Variant = "default" | "pink" | "violet" | "green" | "outline";

export default function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  const styles =
    variant === "pink"
      ? "bg-pink-500/15 text-pink-200 ring-1 ring-pink-400/25"
      : variant === "violet"
        ? "bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/25"
        : variant === "green"
          ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/25"
          : variant === "outline"
            ? "bg-transparent text-white/80 ring-1 ring-white/15"
            : "bg-white/10 text-white/85 ring-1 ring-white/10";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        styles,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
