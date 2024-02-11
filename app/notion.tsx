import { Client } from "@notionhq/client";
import { cache } from "react";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export interface Item {
  id: string;
  title: string;
  link?: string;
  summary?: string;
}

export const fetchItems = cache(async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "PublishedAt",
        direction: "descending",
      },
    ],
  });

  return response.results.map((item: any) => ({
    id: item.id,
    title: item.properties["Name"].title[0].plain_text,
    link: item.properties["Link"]?.url,
    summary: item.properties["Summary"]?.rich_text[0].plain_text,
    publishedAt: item.properties["PublishedAt"].date.start,
  }));
});
