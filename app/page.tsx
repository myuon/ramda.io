import Link from "next/link";
import { css } from "@kuma-ui/core";
import { fetchItems } from "./notion";
import { Card } from "./components/Card";

export default async function Page() {
  const items = await fetchItems();

  return (
    <main>
      <header
        className={css`
          display: grid;
          place-items: center;
          height: 100vh;
          background-color: #1e293b;
          color: white;
          padding: 48px 16px;
        `}
      >
        <div
          className={css`
            display: grid;
            justify-content: center;
            gap: 48px;
          `}
        >
          <div
            className={css`
              display: grid;
              place-items: center;
            `}
          >
            <h1>λ</h1>
            <h2>ramda.io</h2>
          </div>
          <div
            className={css`
              display: flex;
              justify-content: center;
              gap: 8px;
              font-size: 14px;
            `}
          >
            <Link href="https://github.com/myuon">GITHUB</Link>
            <Link href="https://twitter.com/myuon_myon">TWITTER</Link>
          </div>
        </div>
      </header>

      <section
        className={css`
          display: grid;
          place-items: center;
          gap: 48px;
          padding: 48px 16px;
        `}
      >
        <h2>@myuon</h2>

        <div
          className={css`
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 16px;
          `}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              summary={item.summary}
              href={item.link}
              date={item.publishedAt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
