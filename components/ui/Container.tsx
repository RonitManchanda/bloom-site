interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const maxWidth = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${maxWidth[size]} ${className}`}
    >
      {children}
    </div>
  );
}
