"use server";

import { css } from "@kuma-ui/core";
import { Card } from "../components/Card";

export default async function Page() {
  return (
    <section>
      <h2>Card</h2>

      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          align-items: flex-start;
          gap: 16px;
        `}
      >
        <Card
          title="Hello"
          summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
        />

        <Card
          title="Hello"
          summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
          href="https://example.com"
        />

        <Card
          title="lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
          summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
          href="https://example.com"
        />

        <Card title="title" summary="" href="https://example.com" />

        <Card
          title="title"
          summary="lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates."
          href="https://example.com"
          date="2024/01/29"
        />
      </div>
    </section>
  );
}
