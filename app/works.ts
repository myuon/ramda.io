import type { Item } from "./notion";

// Notion を経由せず、このリポジトリの public/works/ に置いた作品
export const staticWorks: Item[] = [
  {
    id: "works/code-factory",
    title: "コードファクトリー",
    link: "/works/code-factory",
    summary:
      "プログラムを書くと工場が建つ。値が箱になってベルトを流れ、本当に計算する",
    publishedAt: "2026-11-22",
    image: "/works/code-factory/thumbnail.jpg",
  },
];
