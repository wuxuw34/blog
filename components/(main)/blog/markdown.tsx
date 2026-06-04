import type { ComponentPropsWithoutRef } from "react";

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractText(
      (children as { props: { children?: React.ReactNode } }).props.children,
    );
  }
  return "";
}

const markdownComponents = {
  h1: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl mt-12 mb-6 font-medium"
      id={extractText(props.children)}
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-lg mt-8 mb-4 font-medium"
      id={extractText(props.children)}
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="text-base mt-6 mb-3 font-medium"
      id={extractText(props.children)}
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h5">) => (
    <h5
      className="text-sm mt-5 mb-2 font-medium"
      {...props}
    />
  ),
  h5: (props: ComponentPropsWithoutRef<"h6">) => (
    <h6
      className="text-xs mt-4 mb-2 font-medium"
      {...props}
    />
  ),
  h6: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-xs mt-4 mb-2 font-medium"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="my-4 leading-relaxed text-foreground/85"
      {...props}
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-primary hover:underline underline-offset-4 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <img
      className="rounded-xl my-6 w-full object-cover"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-foreground"
      {...props}
    />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em
      className="italic"
      {...props}
    />
  ),
  del: (props: ComponentPropsWithoutRef<"del">) => (
    <del
      className="line-through text-muted-foreground/60"
      {...props}
    />
  ),
  code: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<"code"> & { className?: string }) => {
    const isInline = !className?.includes("language-");
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded-md bg-muted text-sm font-mono text-primary/80 before:content-none after:content-none"
          {...props}
        />
      );
    }
    return (
      <code
        className="block rounded-lg bg-muted text-sm font-mono leading-relaxed"
        {...props}
      />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 rounded-lg bg-muted p-4 overflow-x-auto text-sm font-mono leading-relaxed"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-4 pl-4 border-l-2 border-primary/30 text-muted-foreground italic"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 pl-6 list-disc space-y-1 text-foreground/85"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 pl-6 list-decimal space-y-1 text-foreground/85"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li
      className="my-1"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table
        className="w-full text-sm"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead
      className="bg-muted"
      {...props}
    />
  ),
  tbody: (props: ComponentPropsWithoutRef<"tbody">) => (
    <tbody
      className="divide-y divide-border"
      {...props}
    />
  ),
  tr: (props: ComponentPropsWithoutRef<"tr">) => (
    <tr
      className="even:bg-muted/50"
      {...props}
    />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="px-4 py-3 text-left font-medium"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="px-4 py-2.5 text-foreground/85"
      {...props}
    />
  ),
  input: (props: ComponentPropsWithoutRef<"input">) => (
    <input
      type="checkbox"
      className="mr-2 accent-primary"
      readOnly
      {...props}
    />
  ),
};

export default markdownComponents;
