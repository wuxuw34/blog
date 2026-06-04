import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  transparent?: boolean;
};

export default function Button({
  className,
  transparent = false,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "group px-2 rounded-lg flex flex-row items-center border bg-muted text-muted-foreground/80 border-border text-sm py-1 hover:text-primary/60 cursor-pointer hover:bg-card transition-all duration-150 gap-1",
        className,
        {
          "bg-transparent hover:bg-transparent": transparent,
        },
      )}
    >
      {props.children}
    </button>
  );
}
