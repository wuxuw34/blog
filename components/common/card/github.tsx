"use client";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";
import apis from "@/apis";

interface GithubProps {
  username?: string;
}

const id = "github-" + new Date().getFullYear();

export default function GithubCard({ username }: GithubProps) {
  const options = useRef<EChartsOption>({
    title: {
      show: false,
    },
    tooltip: {},
    visualMap: {
      min: 0,
      max: 5,
      type: "piecewise",
      orient: "horizontal",
      left: "center",
      top: 65,
      show: false,
      pieces: [
        { min: 21, color: "oklch(45% 0.12 52.3)" },
        { min: 11, max: 20, color: "oklch(52% 0.135 52.3)" },
        { min: 6, max: 10, color: "oklch(60.9% 0.156 52.3)" },
        { min: 1, max: 5, color: "oklch(72% 0.11 52.3)" },
        { min: 0, max: 1, color: "oklch(95% 0.02 52.3)" },
      ],
    },
    calendar: {
      top: 30,
      left: 42,
      cellSize: [18, 18],
      range: "2026",
      itemStyle: {
        borderWidth: 2,
        borderColor: "transparent",
        color: "transparent",
      },
      splitLine: {
        show: false,
      },
      yearLabel: { show: false },
      dayLabel: {
        show: true,
        firstDay: 1,
        width: 42,
        nameMap: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
    },
    series: {
      type: "heatmap",
      coordinateSystem: "calendar",
      data: [],
    },
  });
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState("");

  useEffect(() => {
    const cache = localStorage.getItem(id);
    if (cache) {
      const update = () => {
        setImg(cache);
      };
      update();
      return;
    }
    const chart = echarts.init(canvas.current);
    apis.github(username || "wuxuw34").then((data) => {
      const contributions = data.contributions.map((contribution) => {
        return [contribution.date, contribution.count];
      });
      options.current.series = {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: contributions,
      };
      chart.setOption(options.current);
      setTimeout(() => {
        setImg(chart.getDataURL());
        localStorage.setItem(id, chart.getDataURL());
      }, 100);
    });

    return () => {
      canvas.current = null;
      chart.dispose();
    };
  }, []);

  return (
    <div ref={container}>
      {img ? (
        <img
          src={img}
          alt="github"
          className="w-full"
        />
      ) : (
        <canvas
          ref={canvas}
          width={1000}
          height={180}
        ></canvas>
      )}
    </div>
  );
}
