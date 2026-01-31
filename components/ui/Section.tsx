export default function Section({
  id,
  children,
  className = "",
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={[
        "relative",
        tone === "muted" ? "bg-[#070A12]" : "",
        // BIG vertical padding (this is the key)
        "py-20 sm:py-24 md:py-32",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
