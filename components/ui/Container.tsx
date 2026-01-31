export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
