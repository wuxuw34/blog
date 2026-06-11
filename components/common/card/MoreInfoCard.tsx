import Button from "../button/Button";
import ArrowRight from "../svg/ArrowRight";

interface MoreInfoCardProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  bntClick?: () => void;
  bntText?: string;
  delay?: number;
}

export default function MoreInfoCard({
  title,
  children,
  bntClick,
  bntText,
  delay = 0,
}: MoreInfoCardProps) {
  return (
    <div
      className="animate flex flex-col gap-3 w-full md:flex-row"
      style={{
        animationDelay: delay * 100 + 'ms',
      }}
    >
      <div className="text-xl font-medium min-w-36">{title}</div>
      <div className="flex-1 flex-col flex gap-1">
        <div className="text-muted-foreground/80">{children}</div>
        {bntText && (
          <Button
            className=" self-end mt-3"
            onClick={bntClick}
          >
            {bntText}
            <ArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
}
