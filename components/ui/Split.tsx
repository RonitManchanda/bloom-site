export default function Split({
  children,
  reverse = false,
  className = "",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        "grid grid-cols-1 items-center gap-12 md:gap-16 lg:gap-20",
        "md:grid-cols-2",
        reverse ? "md:[&>*:first-child]:order-2" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
