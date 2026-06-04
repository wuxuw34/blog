import { useCallback, useEffect, useRef } from "react";

interface State {
  id: string;
  offset: number;
}

const getActiveRange = (headings: string[]): State[] => {
  const offsets: number[] = [];
  const activeHeadings: State[] = [];
  for (let i = 0; i < headings.length; i++) {
    const element = document.getElementById(headings[i]);
    if (element) {
      offsets.push(element.getBoundingClientRect().top);
    }
  }
  let flag = false;
  for (let i = 0; i < offsets.length - 1; i++) {
    if (offsets[i + 1] > 0 && !flag && i !== offsets.length - 2) {
      activeHeadings.push({
        id: headings[i],
        offset:
          (offsets[i] > 0 ? offsets[i + 1] - offsets[i] : offsets[i + 1]) /
          (offsets[i + 1] - offsets[i]),
      });
      flag = true;
      continue;
    } else if (
      (offsets[i] <= window.innerHeight &&
        offsets[i + 1] >= window.innerHeight) ||
      i === offsets.length - 2
    ) {
      const offset =
        (window.innerHeight - offsets[i]) / (offsets[i + 1] - offsets[i]);
      activeHeadings.push({
        id: headings[i],
        offset: offset > 1 ? 1 : offset,
      });
      flag = false;
      break;
    }
    if (flag) {
      activeHeadings.push({ id: headings[i], offset: 1 });
    }
  }
  return activeHeadings;
};

export default function useToc(
  headings: string[],
  callback?: (range: State[]) => void,
) {
  const handleScroll = useCallback(() => {
    const range = getActiveRange(headings);
    callback?.(range);
  }, [headings, callback]);

  useEffect(()=>{
    handleScroll();
  },[])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {};
}
