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
        ticketUrl: z.string().optional(),
        facebookEventUrl: z.string().optional(),
        featuredBands: z.array(z.string()).optional(),
    }),
});

const photosAlbum = defineCollection({
    name: "photosAlbum",
    directory: "content/photos",
    include: "**/*.md",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        cover: z.string(),
        photos: z.array(z.string()),
        venue: z.string(),
        photographer: z.object({
            name: z.string(),
            instagram: z.string().optional(),
        })
    }),
});

export default defineConfig({
    content: [concerts, photosAlbum],
});
