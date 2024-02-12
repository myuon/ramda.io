import { css } from "@kuma-ui/core";
import { Card } from "./components/Card";
import { fetchItems, fetchLinks, fetchProfile } from "./notion";

export default async function Page() {
  const items = await fetchItems();
  const profile = await fetchProfile();
  const links = await fetchLinks();

  return (
    <main>
      <header
        className={css`
          display: grid;
          place-items: center;
          height: 100vh;
          height: 100dvh;
          background-color: #1e293b;
          color: white;
          padding: 48px;
        `}
      >
        <div
          className={css`
            display: grid;
            place-items: center;
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
        </div>
      </header>

      <section
        className={css`
          display: grid;
          gap: 80px;
          padding: 48px 32px;
          max-width: 1080px;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            display: grid;
            place-items: center;
            gap: 16px;
          `}
        >
          <img
            src="/myuon.jpg"
            width={128}
            className={css`
              border-radius: 50%;
            `}
            alt="profile"
          />
          <h2>@myuon</h2>
          <p>{profile.summary}</p>
        </div>

        <div
          className={css`
            display: grid;
            place-items: center;
            gap: 32px;
          `}
        >
          {links.map((link) => (
            <a key={link.id} href={link.link}>
              <span
                className={css`
                  color: #64748b;
                  text-decoration: underline;

                  &:hover {
                    text-decoration: none;
                  }
                `}
              >
                {link.title}
              </span>
            </a>
          ))}
        </div>

        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
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
