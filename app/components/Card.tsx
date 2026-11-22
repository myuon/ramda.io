"use server";

import { css } from "@kuma-ui/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
dayjs.extend(relativeTime);

export interface CardProps {
  title: string;
  summary?: string;
  href?: string;
  date?: string;
  image?: string;
}

const LinkWrapper = ({
  href,
  children,
  external,
}: {
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}) => {
  return href ? (
    external ? (
      <a href={href}>{children}</a>
    ) : (
      <Link href={href}>{children}</Link>
    )
  ) : (
    <>{children}</>
  );
};

export const Card = ({ title, summary, href, date, image }: CardProps) => {
  return (
    <LinkWrapper href={href} external>
      <div
        className={css`
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          border-radius: 6px;
          padding: 20px;
          border: 1px solid #f1f5f9;
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 48px;
          height: 100%;
          transition: all 0.3s ease;

          &:hover {
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
              0 4px 6px -4px rgb(0 0 0 / 0.1);
            background-color: #f8fafc;
          }
        `}
      >
        <div
          className={css`
            display: grid;
            gap: 16px;
          `}
        >
          {image ? (
            <Image
              src={image}
              alt=""
              width={1200}
              height={630}
              sizes="(max-width: 720px) 100vw, 360px"
              className={css`
                display: block;
                width: calc(100% + 40px);
                height: auto;
                margin: -20px -20px 4px;
                border-radius: 6px 6px 0 0;
              `}
            />
          ) : null}
          <h3
            className={css`
              font-size: 24px;
              font-weight: 600;
            `}
          >
            {title}
          </h3>
          <p
            className={css`
              font-size: 14px;
              line-height: 24px;
              color: #475569;
            `}
          >
            {summary || "-"}
          </p>
        </div>
        {date ? (
          <small
            className={css`
              display: grid;
              align-items: flex-end;
              font-size: 12px;
              color: #64748b;
            `}
          >
            {dayjs(date).fromNow()}
          </small>
        ) : null}
      </div>
    </LinkWrapper>
  );
};
