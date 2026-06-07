import { business } from "./business";

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  path: string; // e.g. "/about-us/"
}

const LOGO_URL =
  "https://www.mayanstonecrafters.com/images/mayan-stonecrafters-logo.png";
const LOGO_ALT =
  "Mayan Stonecrafters, Inc. circular Mayan-style emblem logo in black, white, and red";

export function buildMeta(seo: PageSeo) {
  const url = `${business.domain}${seo.path}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    author: business.name,
    image: LOGO_URL,
    imageAlt: LOGO_ALT,
    url,
    canonical: url,
    siteName: business.name,
  };
}
