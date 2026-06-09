interface GradientBackgroundProps {
  color?: string;
}

export default function GradientBackground({
  color = "#e4dbd8",
}: GradientBackgroundProps) {
  return (
    <div
      className="fixed inset-0 bg-linear-to-b from-(--color) to-transparent opacity-25 z-0 pointer-events-none"
      style={
        {
          "--color": color,
        } as React.CSSProperties
      }
    ></div>
  );
}
