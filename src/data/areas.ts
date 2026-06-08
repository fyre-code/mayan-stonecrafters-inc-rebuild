// The 17 service areas. The `intro` and `whyReasons` are the ONE place creative
// writing is allowed — every claim is grounded in real facts from the original
// mayanstonecrafters.com site (family-owned by Gabriel & Fernanda, 15+/20+ yrs,
// serves Brevard County residential + commercial, in-shop fabrication, granite/
// quartz/marble, no-obligation consultation, fast response, military discount,
// satisfaction guaranteed, free quotes). No fabricated stats, addresses, or claims.

export interface Area {
  slug: string;
  name: string;
  // short locality framing, factual
  blurb: string;
  // 4 reasons tailored to the area, grounded in real company facts
  whyReasons: { title: string; body: string; icon: string }[];
}

const ICONS = {
  localCraftsmen:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893734789_local-craftsmen-icon.png",
  inShopFabrication:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893699147_in-shop-fabrication-icon.png",
  residentialCommercial:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893712650_residential-commercial-icon.png",
  guarantee:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893708248_guarantee-icon.png",
  familyFounded:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893688001_family-founded-icon.png",
  landmarkProjects:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893728821_landmark-projects-icon.png",
  materialsInStock:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893703762_materials-in-stock-icon.png",
  quality:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893693049_quality-icon.png",
  communityLocation:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893721656_community-location-icon.png",
  showroom:
    "https://pbrlhyansxjdndccwtau.supabase.co/storage/v1/object/public/media-public/b042dbdc-ac03-47b9-8d0f-927de97de461/root/1780893716759_showroom-icon.png",
} as const;

const reason = (title: string, body: string, icon: string) => ({ title, body, icon });

function defaultReasons(name: string) {
  return [
    reason(
      "Local Brevard County Craftsmen",
      `Mayan Stonecrafters is a family-owned business that has served the Brevard County area for over a decade. ${name} homeowners get a contractor who knows the region and is present on every job to ensure quality and efficiency.`,
      ICONS.localCraftsmen,
    ),
    reason(
      "In-Shop Fabrication, Endless Choices",
      `All of our fabrication is done in our own shop to control quality. We keep different lots of granite and quartz in stock and purchase from a range of suppliers, so ${name} customers can choose from hundreds of materials and styles.`,
      ICONS.inShopFabrication,
    ),
    reason(
      "Residential & Commercial Experience",
      `From kitchens and baths to restaurants, commercial offices, and government buildings, our team brings the same trained staff, efficient systems, and state-of-the-art equipment to every ${name} project.`,
      ICONS.residentialCommercial,
    ),
    reason(
      "Risk-Free, Fast, and Backed by Our Promise",
      `We offer ${name} a no-obligation consultation, free quotes, swift response times, and a military discount. Our promise: every project not only looks stunning but is installed to meet all your desired preferences.`,
      ICONS.guarantee,
    ),
  ];
}

export const areas: Area[] = [
  {
    slug: "brevard-county",
    name: "Brevard County",
    blurb:
      "Serving all of Brevard County with custom countertop fabrication and installation.",
    whyReasons: [
      reason(
        "Born and Built in Brevard County",
        "Gabriel and Fernanda started Mayan Stonecrafters over a decade ago with the goal of becoming the leading countertop fabricators in Brevard County - and we have proudly been part of the growth and development of Central Florida ever since.",
        ICONS.familyFounded,
      ),
      reason(
        "Trusted on Landmark Projects",
        "Our team has participated in projects at famous restaurants and bars, commercial offices, government buildings, and Patrick Space Force Base - the same expertise we bring to homes across the county.",
        ICONS.landmarkProjects,
      ),
      reason(
        "Hundreds of Materials In Stock",
        "We keep different lots of granite and quartz in stock and purchase from multiple suppliers, letting Brevard County customers choose from hundreds of different materials and styles.",
        ICONS.materialsInStock,
      ),
      reason(
        "Quality You Can Count On",
        "With a trained staff, efficient systems, and state-of-the-art equipment, all of our fabrication is done in-shop to control quality - because we believe in producing the highest quality countertops.",
        ICONS.quality,
      ),
    ],
  },
  { slug: "cape-canaveral", name: "Cape Canaveral", blurb: "Custom countertops and cabinets for Cape Canaveral homes and businesses.", whyReasons: defaultReasons("Cape Canaveral") },
  { slug: "cocoa", name: "Cocoa", blurb: "Countertop fabrication and installation serving Cocoa, Florida.", whyReasons: defaultReasons("Cocoa") },
  { slug: "cocoa-beach", name: "Cocoa Beach", blurb: "Stone countertops and cabinet services for Cocoa Beach.", whyReasons: defaultReasons("Cocoa Beach") },
  { slug: "grant-valkaria", name: "Grant-Valkaria", blurb: "Serving Grant-Valkaria with custom stone countertops and cabinets.", whyReasons: defaultReasons("Grant-Valkaria") },
  { slug: "indian-harbour-beach", name: "Indian Harbour Beach", blurb: "Our Indian Harbour Beach location serves the surrounding coastal communities.", whyReasons: [
      reason(
        "A Location Right in Your Community",
        "With a location at 308 E Eau Gallie Blvd, Indian Harbour Beach, our team is close by and present on every job to ensure quality and efficiency for local homeowners.",
        ICONS.communityLocation,
      ),
      ...defaultReasons("Indian Harbour Beach").slice(1),
    ] },
  { slug: "indialantic", name: "Indialantic", blurb: "Custom countertops and cabinets for Indialantic homes.", whyReasons: defaultReasons("Indialantic") },
  { slug: "malabar", name: "Malabar", blurb: "Stone fabrication and installation serving Malabar, Florida.", whyReasons: defaultReasons("Malabar") },
  { slug: "melbourne", name: "Melbourne", blurb: "Our Melbourne showroom is the home base for our custom countertop work.", whyReasons: [
      reason(
        "Our Home Base Showroom",
        "Our showroom at 445 Stan Dr Ste 2, Melbourne is where it all happens - all of our fabrication is done in-shop, so Melbourne customers can see materials in person and get faster, hands-on service.",
        ICONS.showroom,
      ),
      ...defaultReasons("Melbourne").slice(1),
    ] },
  { slug: "melbourne-beach", name: "Melbourne Beach", blurb: "Custom stone countertops for Melbourne Beach homes.", whyReasons: defaultReasons("Melbourne Beach") },
  { slug: "melbourne-village", name: "Melbourne Village", blurb: "Serving Melbourne Village with countertop fabrication and installation.", whyReasons: defaultReasons("Melbourne Village") },
  { slug: "palm-bay", name: "Palm Bay", blurb: "Countertop and cabinet services for Palm Bay, Florida.", whyReasons: defaultReasons("Palm Bay") },
  { slug: "palm-shores", name: "Palm Shores", blurb: "Custom countertops and cabinets serving Palm Shores.", whyReasons: defaultReasons("Palm Shores") },
  { slug: "rockledge", name: "Rockledge", blurb: "Stone fabrication and installation serving Rockledge.", whyReasons: defaultReasons("Rockledge") },
  { slug: "satellite-beach", name: "Satellite Beach", blurb: "Custom countertops and cabinets for Satellite Beach homes.", whyReasons: defaultReasons("Satellite Beach") },
  { slug: "titusville", name: "Titusville", blurb: "Serving Titusville with custom stone countertops and cabinets.", whyReasons: defaultReasons("Titusville") },
  { slug: "west-melbourne", name: "West Melbourne", blurb: "Countertop fabrication and installation serving West Melbourne.", whyReasons: defaultReasons("West Melbourne") },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
