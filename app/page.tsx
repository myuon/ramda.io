import Link from "next/link";
import { css } from "@kuma-ui/core";

export default function Index() {
  return (
    <main>
      <header
        className={css`
          display: grid;
          place-items: center;
          height: 100vh;
          background-color: #1e293b;
          color: white;
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
          height: 100vh;
        `}
      >
        <h2>Items</h2>
      </section>
    </main>
  );
}
