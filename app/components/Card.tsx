"use server";

import { css } from "@kuma-ui/core";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export interface CardProps {
  title: string;
  summary?: string;
  href?: string;
  date?: string;
}

const LinkWrapper = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return href ? <Link href={href}>{children}</Link> : <>{children}</>;
};

export const Card = ({ title, summary, href, date }: CardProps) => {
  return (
    <LinkWrapper href={href}>
      <div
        className={css`
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
          border-radius: 6px;
          padding: 20px;
          border: 1px solid #f1f5f9;
          display: grid;
          gap: 16px;
        `}
      >
        <div
          className={css`
            display: grid;
            gap: 36px;
          `}
        >
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
              line-height: 20px;
              color: #475569;
            `}
          >
            {summary || "-"}
          </p>
        </div>
        {date ? (
          <small
            className={css`
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
