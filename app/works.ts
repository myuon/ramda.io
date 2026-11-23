import type { Item } from "./notion";

// Notion を経由せず、このリポジトリの public/works/ に置いた作品
export const staticWorks: Item[] = [
  {
    id: "works/regex-railway",
    title: "正規表現線",
    link: "/works/regex-railway",
    summary:
      "正規表現を路線図にする。文字列は列車になって分岐し、合流し、終点を目指す",
    publishedAt: "2026-11-23",
    image: "/works/regex-railway/thumbnail.jpg",
  },
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
