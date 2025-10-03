import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const DOMAIN = "https://loopiweb.fr";

    return [
        {
            url: `${DOMAIN}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${DOMAIN}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];
}
