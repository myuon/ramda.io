import type { Item } from "./notion";

// Notion を経由せず、このリポジトリの public/works/ に置いた作品
export const staticWorks: Item[] = [
  {
    id: "works/sat-sticky-notes",
    title: "付箋の探索",
    link: "/works/sat-sticky-notes",
    summary:
      "失敗から学ぶ、ということ。行き止まりの理由を付箋に書く探索と、書かない探索を、地図の塗り分けで競わせる",
    publishedAt: "2026-11-24",
    image: "/works/sat-sticky-notes/thumbnail.jpg",
    hasVideo: true,
  },
  {
    id: "works/regex-railway",
    title: "正規表現線",
    link: "/works/regex-railway",
    summary:
      "正規表現を路線図にする。文字列は列車になって分岐し、合流し、終点を目指す",
    publishedAt: "2026-11-23",
    image: "/works/regex-railway/thumbnail.jpg",
    hasVideo: true,
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
