interface GradientBackgroundProps {
  color?: string;
}

export default function GradientBackground({
  color = "#8C766D",
}: GradientBackgroundProps) {
  return (
    <div
      className="fixed inset-0 bg-linear-to-b from-(--color) to-transparent opacity-25"
      style={
        {
          "--color": color,
        } as React.CSSProperties
      }
    ></div>
  );
}
