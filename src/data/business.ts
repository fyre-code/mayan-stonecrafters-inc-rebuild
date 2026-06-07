export const business = {
  name: "Mayan Stonecrafters, Inc.",
  shortName: "Mayan Stonecrafters",
  tagline: "Your #1 source for Cabinets and Countertops",
  email: "design@mayanstonecrafters.com",
  domain: "https://www.mayanstonecrafters.com",
  logo: "/images/mayan-stonecrafters-logo.png",

  locations: [
    {
      name: "Melbourne",
      address: "445 Stan Dr Ste 2",
      cityStateZip: "Melbourne, FL 32904-1089",
      phone: "(321) 821-4381",
      phoneHref: "tel:+13218214381",
      hours: [
        "Mon – Fri: 8:00 AM – 5:00 PM",
        "Sat: 10:00 AM – 1:00 PM",
        "Sun: Closed",
      ],
    },
    {
      name: "Indian Harbour Beach",
      address: "308 E Eau Gallie Blvd",
      cityStateZip: "Indian Harbour Beach, FL 32937",
      phone: "(321) 479-0419",
      phoneHref: "tel:+13214790419",
      hours: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sat – Sun: Closed"],
    },
  ],

  // Primary phone used in CTAs / hero
  phone: "(321) 821-4381",
  phoneHref: "tel:+13218214381",

  // Hyppo-hosted contact form (used for "Message Us" / "Contact Us" CTAs)
  contactFormUrl:
    "https://hyppohq.io/f/mayan-stonecrafters/contact-mayn-stonecrafters?theme=light",

  payments: [
    "Visa",
    "Mastercard",
    "American Express",
    "Discover Card",
    "Cash",
    "Check",
    "Debit",
    "Zelle",
  ],

  social: {
    instagram: "https://www.instagram.com/mayanstonecraftersinc",
    facebook: "https://www.facebook.com/profile.php?id=61576636062267",
  },

  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "150K", label: "Projects Completed" },
    { value: "97%", label: "Happy Clients" },
    { value: "4.7", label: "Company Rating" },
  ],

  badges: [
    { src: "/images/military-discount-badge.png", alt: "Military discounts offered by Mayan Stonecrafters" },
    { src: "/images/satisfaction-guaranteed-badge.png", alt: "Satisfaction guaranteed by Mayan Stonecrafters" },
    { src: "/images/free-quotes-badge.png", alt: "Free quotes from Mayan Stonecrafters" },
    { src: "/images/certified-professional-badge.png", alt: "Certified professional stone craftsmen" },
  ],

  brandPartners: [
    { src: "/images/cambria-brand-logo.png", alt: "Cambria quartz surfaces logo" },
    { src: "/images/silestone-brand-logo.png", alt: "Silestone logo" },
    { src: "/images/caesarstone-brand-logo.png", alt: "Caesarstone logo" },
  ],
} as const;

export const services = [
  { slug: "flooring", title: "Flooring" },
  { slug: "bathroom-remodeling", title: "Bathroom Remodeling" },
  { slug: "cabinet-refacing", title: "Cabinet Refacing" },
  { slug: "cabinet-refinishing", title: "Cabinet Refinishing" },
  { slug: "countertop-installation", title: "Countertop Installation" },
  { slug: "countertop-fabrication", title: "Countertop Fabrication" },
  { slug: "countertop-refinishing", title: "Countertop Refinishing" },
  { slug: "granite-countertop-installation", title: "Granite Countertop Installation" },
  { slug: "tile-collections", title: "Tile Collections" },
] as const;

export const countertops = [
  { slug: "bathroom", title: "Bathroom" },
  { slug: "cabinets", title: "Cabinets" },
  { slug: "granite", title: "Granite" },
  { slug: "kitchen", title: "Kitchen" },
  { slug: "marble", title: "Marble" },
  { slug: "quartz", title: "Quartz" },
] as const;

export const cambriaPages = [
  { slug: "design-palette", title: "Design Palette" },
  { slug: "inspiration-gallery", title: "Inspiration Gallery" },
  { slug: "why-cambria", title: "Why Cambria" },
  { slug: "cambria-videos", title: "Cambria Videos" },
] as const;
