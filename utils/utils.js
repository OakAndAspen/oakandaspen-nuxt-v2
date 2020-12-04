import {meta} from "../config/app.js";

/*
 * A function that generates the meta tags for a page
 *
 * Uses the website's meta information and the page's given metadata
 * The page must have:
 * - title
 * - description
 * - keywords
 * - type (optional)
 * - image(optional)
 */
export function getMetadata(page) {
    let title = page.title + " - " + meta.site.name;
    let description = page.description;
    let keywords = page.keywords + ", " + meta.site.keywords;
    let type = page.type || meta.site.defaultType || "website";
    let image = page.image || meta.site.logo;
    let url = meta.site.url;

    return {
        title: title,
        meta: [
            // --- Primary Meta Tags ---
            {hid: "keywords", name: "keywords", content: keywords},
            {hid: "description", name: "description", content: description},
            {hid: "copyright", name: "copyright", content: meta.madeFor.company},
            {hid: "author", name: "author", content: meta.madeBy.author},

            // --- Open Graph / Facebook ---
            {hid: "og:title", name: "og:title", content: title},
            {hid: "og:type", name: "og:type", content: type},
            {hid: "og:url", name: "og:url", content: url},
            {hid: "og:image", name: "og:image", content: image},
            {hid: "og:site_name", name: "og:site_name", content: meta.site.name},
            {hid: "og:description", name: "og:description", content: description},

            // --- Twitter ---
            {hid: "twitter:card", name: "twitter:card", content: type},
            {hid: "twitter:title", name: "twitter:title", content: title},
            {hid: "twitter:description", name: "twitter:description", content: description},
            {hid: "twitter:url", name: "twitter:url", content: url},
            {hid: "twitter:image", name: "twitter:image", content: image}
        ]
    }
}
