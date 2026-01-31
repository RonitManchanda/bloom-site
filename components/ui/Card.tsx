export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-white/[0.06] ring-1 ring-white/10 shadow-xl shadow-black/30",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
