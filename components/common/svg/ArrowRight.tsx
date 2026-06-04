export default function ArrowRight({
  className = "",
}: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"stroke-muted-foreground group-hover:stroke-primary " + className}
    >
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        className="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
      ></line>
      <polyline
        points="12 5 19 12 12 19"
        className="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
      ></polyline>
    </svg>
  );
}
