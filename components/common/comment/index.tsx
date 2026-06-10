"use client";
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { useEffect, useRef } from "react";

export default function Comment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: "Ov23liDI1gWtDIG887O7",
      clientSecret: "3e85418b4ffe9243b279f921c60b6f77a8bb94bb",
      repo: "blog",
      owner: "wuxuw34",
      admin: ["wuxuw34"],
      distractionFreeMode: false,
    });
    gitalk.render(containerRef.current!);
  }, []);

  return (
    <div
      id="gitalk-container"
      ref={containerRef}
    ></div>
  );
}
