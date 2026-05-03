import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const concerts = defineCollection({
    name: "concerts",
    directory: "content/concerts",
    include: "**/*.md",
    schema: z.object({
        id: z.string(),
        date: z.string(),
        venue: z.string(),
        city: z.string(),
        country: z.string(),
        isFree: z.boolean().optional(),
        ticketUrl: z.string().optional()
    }),
});

export default defineConfig({
    content: [concerts],
});
