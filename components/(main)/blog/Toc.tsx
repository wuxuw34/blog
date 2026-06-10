"use client";
import useToc from "@/hooks/useToc";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

type TocProps =
  | {
      post: Post;
      headings?: never;
    }
  | {
      headings: TocItem[];
      post?: never;
    };

interface TocItemState {
  id: string;
  offset: number;
}

export function parseDirectoryStructure(str: string): TocItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const matches = Array.from(str.matchAll(headingRegex));

  if (matches.length === 0) {
    return [];
  }

  const toc: TocItem[] = [];
  const stack: { item: TocItem; level: number }[] = [];

  matches.forEach((match) => {
    const level = match[1].length;
    const name = match[2].trim();

    const newItem: TocItem = {
      name,
      level,
      children: [],
    };

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      toc.push(newItem);
    } else {
      stack[stack.length - 1].item.children.push(newItem);
    }

    stack.push({ item: newItem, level });
  });

  return toc;
}

const getChildren = (toc: TocItem) => {
  const arr: string[] = [];
  arr.push(toc.name);
  if (toc.children.length > 0) {
    toc.children.forEach((child) => arr.push(...getChildren(child)));
  }
  return arr;
};

export default function Toc({ post, headings: _headings }: TocProps) {
  const toc = useMemo(() => {
    return _headings || parseDirectoryStructure(post.content);
  }, [post, _headings]);
  const headings = useMemo(() => {
    return toc.flatMap((item) => getChildren(item));
  }, [toc]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [states, setStates] = useState<TocItemState[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useToc([...headings, "article-end"], (range) => {
    const active = range.find((item) => item.offset === 1) || range[0];
    setActiveId(active?.id);
    setStates(range);
  });

  const progress = useMemo(() => {
    if (states.length === 0) return 0;
    const total = states.reduce((sum, s) => sum + s.offset, 0);
    return Math.round((total / states.length) * 100);
  }, [states]);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);


  useEffect(()=>{
    // eslint-disable-next-line 
    setIsMounted(true);
  },[])

  function renderTocItem(toc: TocItem) {
    const index = states.findIndex((state) => state?.id === toc.name);

    let className = "relative";

    if (index >= 0) {
      className += " bg-muted";
      if (index === 0) {
        className += " rounded-tl-xl rounded-tr-xl";
      } else if (index === states.length - 1) {
        className += " rounded-bl-xl rounded-br-xl";
      }
    }

    return (
      <li key={toc.name}>
        <a
          className={clsx(
            "px-3 py-1 text-muted-foreground/80 text-md leading-7.5 hover:font-medium cursor-pointer relative w-full inline-block",
            activeId === toc.name && "font-medium text-red-500",
            className,
          )}
          style={{
            paddingLeft: 16 * toc.level,
          }}
          onClick={() => {
            setActiveId(toc.name);
          }}
          href={`#${toc.name}`}
        >
          <div
            className="absolute left-0 top-0 w-0.5 bg-linear-to-t from-primary to-primary h-full bg-no-repeat"
            style={{
              backgroundSize:
                index >= 0 ? `2px ${states[index].offset * 100 + "%"} ` : 0,
              backgroundPosition: index === 0 ? "bottom" : "top",
            }}
          ></div>
          {toc.name}
        </a>
        <ul>{toc.children.map((child) => renderTocItem(child))}</ul>
      </li>
    );
  }

  function renderMobileTocItem(item: TocItem) {
    return (
      <li key={item.name}>
        <a
          className={clsx(
            "block py-2.5 text-sm hover:bg-muted transition-colors border-l-2",
            activeId === item.name
              ? "text-primary font-medium border-primary"
              : "border-transparent text-muted-foreground",
          )}
          style={{ paddingLeft: 16 + item.level * 16, paddingRight: 16 }}
          href={`#${item.name}`}
          onClick={() => setIsExpanded(false)}
        >
          {item.name}
        </a>
        {item.children.length > 0 && (
          <ul>{item.children.map((child) => renderMobileTocItem(child))}</ul>
        )}
      </li>
    );
  }

  const displayTitle =
    activeId && activeId !== "article-end"
      ? activeId
      : toc[0]?.name || post?.title || "";

  if (!isMounted)
    return null;

  return (
    <>
      {/* Desktop TOC */}
      <div className="hidden md:block">
        <ul className="mt-4">{toc.map((item) => renderTocItem(item))}</ul>
      </div>

      {createPortal(
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <div className="max-w-sm mx-auto">
            <button
              onClick={() => setIsExpanded(true)}
              className="relative w-full bg-card/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg shadow-black/5 overflow-hidden text-left active:scale-[0.98] transition-transform"
            >
              <div className="relative flex items-center gap-2.5 pl-4 pr-2.5 py-2">
                <span className="text-xs font-semibold text-primary tabular-nums shrink-0 min-w-[2.25rem] text-right">
                  {progress}%
                </span>
                <span className="text-sm text-foreground/60 truncate flex-1">
                  {displayTitle}
                </span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
                  <Icon
                    icon="mdi:chevron-up"
                    className="w-4 h-4"
                  />
                </span>
              </div>
            </button>
          </div>

          {/* Expanded bottom sheet */}
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsExpanded(false)}
                />
                <motion.div
                  className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl max-h-[70vh] flex flex-col"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
                >
                  {/* Drag handle */}
                  <div className="flex justify-center pt-2.5 pb-1 shrink-0">
                    <div className="w-10 h-1 rounded-full bg-border" />
                  </div>
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-2 shrink-0">
                    <h3 className="text-base font-medium">目录</h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="p-1 -mr-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon
                        icon="mdi:close"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  {/* Content */}
                  <div className="overflow-y-auto flex-1 pb-2">
                    <ul>{toc.map((item) => renderMobileTocItem(item))}</ul>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>,
        document?.body,
      )}
    </>
  );
}
