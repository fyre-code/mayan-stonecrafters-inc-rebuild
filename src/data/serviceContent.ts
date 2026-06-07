import type { Section, Faq } from "../components/DetailPage.astro";

export interface DetailContent {
  eyebrow: string;
  title: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

export const serviceContent: Record<string, DetailContent> = {
  flooring: {
    eyebrow: "Services",
    title: "Flooring Services",
    intro: [
      "Transform your space from the ground up.",
      "At Mayan Stonecrafters, Inc., we specialize in high-quality flooring solutions tailored to your lifestyle, design preferences, and budget. Whether you're building new, remodeling, or upgrading a commercial space - we bring craftsmanship, durability, and elegance to every square foot.",
      "Looking for professional floor installers in Melbourne, FL? At Mayan Stonecrafters, we specialize in delivering top-quality flooring solutions that combine durability, style, and expert craftsmanship. From the initial consultation to the final result, we ensure your flooring project is completed on time and with precision. Trust our experienced floor installers in Melbourne, FL to bring beauty and long-lasting value to your space.",
    ],
    sections: [
      {
        heading: "Our Flooring Options",
        list: [
          "Luxury Vinyl Plank (LVP) - Waterproof, durable, and stylish. Perfect for busy households and high-traffic areas.",
          "Porcelain & Ceramic Tile - Timeless, elegant, and easy to maintain. Ideal for kitchens, bathrooms, and outdoor spaces.",
          "Natural Stone - Marble, travertine, slate, and more. For those who want an upscale, organic feel.",
          "Engineered & Hardwood Flooring - Warm, rich tones with long-lasting beauty. Great for living rooms and bedrooms.",
          "Custom Designs & Patterns - Herringbone, chevron, mosaics, and more.",
        ],
      },
      {
        heading: "Why Choose Us?",
        list: [
          "In-House Designers - Get help choosing the perfect flooring color, texture, and layout.",
          "Expert Installation - Our experienced installers deliver clean, precise work that lasts.",
          "One-Year Installation Warranty - Plus, ask us about HydroShield protection for added peace of mind.",
          "Licensed & Insured in Florida - You're covered from start to finish.",
        ],
      },
      {
        heading: "Serving",
        paras: [
          "Residential • Commercial • New Construction • Remodels",
          "Visit our showroom or request an on-site estimate today!",
        ],
      },
    ],
    faqs: [
      { q: "Who are the best stone flooring companies in Florida?", a: "The best stone flooring companies in Florida include Mayan Stonecrafters, offering durable stone and tile flooring installations statewide." },
      { q: "Which flooring contractors specialize in stone in Florida?", a: "Flooring contractors specializing in stone in Florida include Mayan Stonecrafters, providing professional tile and natural stone installations." },
      { q: "Where can residential flooring be installed in Florida?", a: "Residential flooring can be installed throughout Florida by Mayan Stonecrafters for kitchens, bathrooms, and living areas." },
      { q: "How do I find flooring installation services in Florida?", a: "Flooring installation services in Florida are available by choosing experienced providers like Mayan Stonecrafters." },
      { q: "What is tile flooring installation in Florida homes?", a: "Tile flooring installation in Florida homes involves professional layout, cutting, and sealing performed by Mayan Stonecrafters." },
    ],
    seoTitle: "Flooring Installation in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides flooring installation in Melbourne, FL - tile, natural stone, LVP & hardwood. Contact us at (321) 821-4381.",
    seoKeywords: "flooring Melbourne FL, floor installers Melbourne, tile flooring, natural stone flooring, luxury vinyl plank, hardwood flooring, porcelain tile, commercial flooring, flooring contractors Brevard County, Mayan Stonecrafters",
  },

  "bathroom-remodeling": {
    eyebrow: "Services",
    title: "Bathroom Remodeling",
    intro: [
      "Is your bathroom retro, but not in the attractive way? Does it need an upgrade, or are you just sick of looking at it? Mayan Stonecrafters, Inc. offers the finest remodeling services to transform your bathroom into a space you love.",
    ],
    sections: [
      {
        heading: "Offering the Finest Remodeling Services",
        list: [
          "New tile installations",
          "Countertop and vanity installations",
          "Bathroom fixture replacements",
          "Painting services",
          "Carpentry and light demolition",
          "Shower removal or installation",
          "Bathtub removal or installation",
          "Electrical work",
          "Plumbing services",
          "…and more",
        ],
      },
      {
        heading: "Replacing Showers and Bathtubs",
        paras: ["Whatever configuration suits your space, we can install it:"],
        list: [
          "A bathtub/shower combo",
          "A standing shower",
          "A drop-in bathtub",
          "An alcove bathtub",
          "A walk-in shower",
          "A corner shower",
        ],
      },
      {
        heading: "Only the Best Materials for Remodeling",
        paras: [
          "From the best choice for your bathroom floor to drywall and more for your new bathroom walls, durability is key in remodeling. We use quality materials throughout every project.",
        ],
      },
      {
        heading: "Book Your Remodeling Consultation Today",
        paras: ["Reach out to schedule your in-depth bathroom remodeling design consultation and enjoy quick turnarounds and more."],
      },
    ],
    faqs: [
      { q: "Where can custom bathroom remodeling be done in Florida?", a: "Custom bathroom remodeling can be done across Florida with Mayan Stonecrafters, delivering stone countertops, tile installations, and full bathroom renovations." },
      { q: "What is the scope of bathroom renovation services in Florida?", a: "Bathroom renovation services in Florida include stone countertops, custom vanities, tile flooring, wall tiles, and complete remodels by Mayan Stonecrafters." },
      { q: "Are there stone-focused bathroom remodels in Florida?", a: "Yes, stone-focused bathroom remodels in Florida are available through Mayan Stonecrafters using granite, quartz, marble, and premium tile materials." },
      { q: "What do the best bathroom remodeling companies in Florida offer?", a: "The best bathroom remodeling companies in Florida offer design planning, stone surfaces, tile installations, and full renovation services, including Mayan Stonecrafters." },
      { q: "Who are licensed bathroom contractors in Florida?", a: "Licensed bathroom contractors in Florida include Mayan Stonecrafters, providing compliant and professional remodeling services with quality and durability." },
    ],
    seoTitle: "Bathroom Remodeling in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides bathroom remodeling in Melbourne, FL - tile, vanities, showers & tubs. Contact us at (321) 821-4381.",
    seoKeywords: "bathroom remodeling Melbourne FL, bathroom renovation, shower installation, bathtub replacement, vanity installation, tile installation, bathroom contractors Brevard County, bathroom remodel, Mayan Stonecrafters",
  },

  "cabinet-refacing": {
    eyebrow: "Services",
    title: "Cabinet Refacing",
    intro: [
      "Update your cabinets for half the price and less than half the time it would take to install new ones. Mayan Stonecrafters, Inc. offers professional cabinet refacing to give your kitchen or bathroom a fresh new look.",
    ],
    sections: [
      {
        heading: "What Is Cabinet Refacing?",
        paras: [
          "Cabinet refacing replaces the doors, drawer fronts, and visible surfaces of your existing cabinets while keeping the underlying boxes in place. It's a faster, more affordable way to transform a room without a full replacement.",
        ],
      },
      {
        heading: "What Are the Benefits of Replacement Cabinet Doors and Fronts?",
        list: [
          "Eliminates lingering stains and dents",
          "Allows you to switch to an entirely new style",
          "Opens the door to hardware upgrades",
          "Updates the proportions and visual rhythm",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.'s Cabinet Refacing Services",
        list: [
          "Remove and replace cabinet doors and fronts",
          "Apply new coverings to frames",
          "Upgrade hardware, including hinges and handles",
          "Install new trim or molding",
          "Match color and style with your preferences",
          "Make adjustments for a consistent fit",
        ],
      },
      {
        heading: "Reface Your Kitchen or Bathroom Cabinets With an Expert",
        paras: ["From finding unique cabinet hardware to a flawless finish, our team handles every detail. Contact us to get started."],
      },
    ],
    faqs: [
      { q: "Who offers the best cabinet refacing services in Florida?", a: "The best cabinet refacing services in Florida are offered by Mayan Stonecrafters, delivering cost-effective kitchen upgrades that refresh cabinet appearance." },
      { q: "What are the benefits of kitchen cabinet refacing in Florida?", a: "Kitchen cabinet refacing in Florida offers faster renovation timelines, lower costs, and updated aesthetics, benefits provided by Mayan Stonecrafters statewide." },
      { q: "Which materials are best for cabinet refacing in Florida?", a: "The best materials for cabinet refacing in Florida include durable veneers and laminates selected and installed by Mayan Stonecrafters for long-lasting performance." },
      { q: "How do cabinet refacing contractors add value to Florida homes?", a: "Cabinet refacing contractors add value to Florida homes by modernizing kitchens efficiently, improving appearance and function, a service delivered by Mayan Stonecrafters." },
      { q: "Can I change cabinet styles without replacement in Florida?", a: "Yes, cabinet styles can be changed without replacement in Florida through cabinet refacing services provided by Mayan Stonecrafters." },
    ],
    seoTitle: "Cabinet Refacing in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides cabinet refacing in Melbourne, FL - new doors, fronts & hardware for less. Contact us at (321) 821-4381.",
    seoKeywords: "cabinet refacing Melbourne FL, kitchen cabinet refacing, replacement cabinet doors, cabinet fronts, cabinet hardware, kitchen update, cabinet contractors Brevard County, Mayan Stonecrafters",
  },

  "cabinet-refinishing": {
    eyebrow: "Services",
    title: "Cabinet Refinishing",
    intro: [
      "Instead of trying to refinish your cabinets yourself or, worse, pay for an upgrade you don't need, allow Mayan Stonecrafters, Inc to provide the results you're looking for. We can apply a fresh, professional finish that brings the surface back to life in any room that needs it.",
      "We'll start by getting to know the condition of your existing cabinets and the look you're aiming for. With your input and our expertise, you'll get durable, visually cohesive results.",
      "Call (321) 821-4381 to schedule cabinet refinishing with trusted professionals today!",
    ],
    sections: [
      {
        heading: "What Can You Expect From Cabinet Refinishing Before and After?",
        paras: [
          "There are many valid reasons to want refinishing, but the most common are fading, scratching, and discoloration, especially around handles and sink bases. The finish might be worn down to the wood in spots, with older tones or sheens that no longer match the rest of the room.",
          "Before cabinet refinishing, expect an initial assessment to evaluate the condition and material of your cabinets, ensuring they're suitable for the process. You'll choose your desired stain, paint, or finish, and may review samples. Prior to work starting, you'll need to clear out the cabinets and the surrounding area to allow for proper preparation and access.",
          "After refinishing, the surface will be uniform, clean, and sealed with a new finish. Where there was once visible wear and mismatch, there will now be a consistent tone that looks complete. The transformative effect is a lot more dramatic than some expect, especially with significant wear.",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.'s Refinishing Solutions for Cabinets",
        paras: ["Our refinishing solutions for cabinets are quality-certified and tailored to your needs. We know the exact surface corrections required and have the skill to achieve a lasting finish.", "Our solutions are backed by:"],
        list: [
          "High-performance refinishing products",
          "Years of hands-on experience with a range of materials",
          "Technical knowledge of surface prep, adhesion, and finish behavior",
          "Consistent results proven across many client kitchens, bathrooms, and more",
        ],
      },
      {
        heading: "Can Cabinet Refinishing Services Match Color?",
        paras: [
          "Our color matching for our cabinet refinishing services is highly precise. If you're keeping the original tone, we can enhance and even out the existing color so it looks cleaner, deeper, and more consistent. If you want to change the color, we'll work with you to select a finish that fits the updated space without having it clash with surrounding materials.",
        ],
      },
      {
        heading: "Tell Us What You're Looking for in a Cabinet Finish",
        paras: [
          "Do you want your cabinet finish to be subtle or make a statement? The professionals at Mayan Stonecrafters, Inc. want to know. We'll listen closely to customize the process and results to your space and goals.",
          "Looking for cabinet refinishing? Contact us at (321) 821-4381.",
        ],
      },
    ],
    faqs: [
      { q: "What is included in home cabinet refinishing options in Florida?", a: "Home cabinet refinishing options in Florida include surface preparation, professional refinishing, sealing, and color updates by Mayan Stonecrafters." },
      { q: "Where can kitchen cabinet refinishing be done in Florida?", a: "Kitchen cabinet refinishing can be done across Florida through Mayan Stonecrafters, restoring cabinet surfaces and improving kitchen appearance." },
      { q: "How do I find cabinet surface restoration services in Florida?", a: "Cabinet surface restoration services in Florida are available from Mayan Stonecrafters, offering professional refinishing and surface renewal solutions." },
      { q: "Are there residential cabinet refinishing services in Florida?", a: "Yes, residential cabinet refinishing services in Florida are provided by Mayan Stonecrafters for kitchens and storage areas statewide." },
      { q: "Which cabinet refinishing options are most durable in Florida?", a: "The most durable cabinet refinishing options in Florida are professionally applied finishes installed by Mayan Stonecrafters for long-term performance." },
    ],
    seoTitle: "Cabinet Refinishing in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides cabinet refinishing in Melbourne, FL - durable, color-matched finishes. Contact us at (321) 821-4381.",
    seoKeywords: "cabinet refinishing Melbourne FL, kitchen cabinet refinishing, cabinet restoration, cabinet color matching, cabinet staining, cabinet finish, cabinet contractors Brevard County, Mayan Stonecrafters",
  },

  "countertop-installation": {
    eyebrow: "Services",
    title: "Countertop Installation",
    intro: [
      "If your countertops are worn and outdated, a custom upgrade will transform them into stylish centerpieces. At Mayan Stonecrafters, Inc, our installation process includes precise fabrication, tailored fitting, and professional design to help you visualize the stone in your space and achieve a result that elevates function and style.",
      "We ensure every detail is finished to perfection. From clean edges to precise cutouts, your new countertops will enhance your space with lasting durability and a refined look.",
      "Get custom countertop installation with a team you can trust - call (321) 821-4381.",
    ],
    sections: [
      {
        heading: "What Are the Benefits of Custom Countertop Installation?",
        paras: [
          "We offer tailored design guidance for every custom countertop installation to ensure the perfect fit for every application and unique space. Quartz, marble, and granite each have specific aesthetic and functional advantages, and we can discuss how they can complement different aspects of your space.",
          "Another advantage is precise fabrication, where every detail is accounted for. When installing kitchen countertops, we ensure faucet holes are drilled to exact specifications, and cutouts for sinks and appliances align perfectly with existing plumbing and cabinetry.",
        ],
        list: [
          "Perfectly fitted surfaces tailored to your specific space",
          "Compatibility with unique or irregular layouts",
          "Ability to match existing design elements or materials",
          "Greater control over material selection for specific functional needs",
        ],
      },
      {
        heading: "How To Choose a Countertop Design for a Remodel",
        paras: [
          "Selecting the right countertop design for a remodel starts with the space's function. In modern kitchens, sleek quartz surfaces in neutral tones like gray or white create a clean and contemporary look that pairs well with minimalist cabinetry. For a bolder look, consider darker granite with natural veining.",
          "In bathrooms, light marble countertops can brighten the space and complete any classic or luxurious design theme. For smaller bathrooms, solid colors or subtle patterns can help create a more open and cohesive feel. Matching the design to the room is a great place to start as you explore options.",
        ],
      },
      {
        heading: "Are Certain Countertop Materials Easier To Install Than Others?",
        paras: [
          "Countertop materials have their unique characteristics, but installation challenges are rarely about the stone itself. Instead, it's the layout of the space and the details of fabrication (like edge shaping, cutouts, and seams) that determine how complex the work is.",
          "It's important to emphasize, though, that granite, quartz, and marble all respond differently under stress and can crack if handled improperly. That doesn't mean they're fragile choices (or that one is easier to install over the other) - it's just that they require a controlled process throughout.",
          "We're equipped to install any of these materials with the care and experience they demand. With us, every step is adjusted to suit the material and the space it's going into.",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.: Precise Countertop Fabrication",
        paras: ["Our precise countertop fabrication ensures the material you choose fits perfectly within your space and that every cut, edge, and opening is crafted accurately.", "Our fabrication and installation process includes:"],
        list: [
          "Detailed measurements for exact dimensions",
          "Selection of materials suited to your project's needs",
          "Advanced cutting techniques for precision shaping",
          "Customized cutouts for sinks, faucets, and appliances",
          "Polishing and finishing to enhance surface quality",
        ],
      },
      {
        heading: "How Do Countertop Installers Work Around Awkward Layouts?",
        paras: [
          "Both kitchens and bathrooms can present awkward layouts that complicate countertop installation. Maybe there's a tight corner near a wall, a wraparound backsplash, or a set of cabinets with uneven depth. These details can make a standard install feel anything but straightforward.",
          "Our countertop installers have worked on a variety of different layouts. To work around them, we adapt the installation method to suit the space. So, for instance, if you have cabinetry that flares or tapers slightly out of square, we scribe and shape the material to match it exactly.",
        ],
        list: [
          "Creating custom templates to map irregular surfaces",
          "Reinforcing seams in areas with limited cabinet support",
          "Using modified edge profiles to reduce bulk",
          "Dry-fitting sections in stages",
        ],
      },
      {
        heading: "How Long Does It Take To Install a Kitchen Countertop?",
        paras: [
          "Like slabs of granite, no two installations are exactly alike. The time it takes to install your countertop depends on a series of mandatory preceding steps, including the design consultation, material selection, and fabrication process, all of which can take a few days to several weeks.",
          "The actual installation process, however, is typically much quicker. Most countertops can be installed in a single day, depending on the size of the space and the number of pieces involved. We always work efficiently and can provide a more exact estimate once the design details are finalized.",
        ],
      },
      {
        heading: "Get a Custom Countertop for Your Unique Designs",
        paras: [
          "Whether it's the elegance of a polished granite countertop or the modern durability of a Cambria quartz surface, your design deserves a custom solution. Let Mayan Stonecrafters, Inc. craft a custom countertop tailored to your unique space and style.",
          "Looking for countertop installation? Contact us at (321) 821-4381.",
        ],
      },
    ],
    faqs: [
      { q: "What makes professional countertop installation important in Florida?", a: "Professional countertop installation in Florida ensures proper fit, durability, and safety, benefits delivered by Mayan Stonecrafters using expert techniques." },
      { q: "How long does countertop installation take in Florida homes?", a: "Countertop installation time in Florida varies by project size, with efficient scheduling and professional completion by Mayan Stonecrafters." },
      { q: "What preparation is needed before countertop installation in Florida?", a: "Preparation includes accurate measurements and surface readiness, all managed by Mayan Stonecrafters before countertop installation in Florida." },
      { q: "Why hire professional countertop services in Florida?", a: "Professional countertop services in Florida ensure quality workmanship, proper installation, and long-lasting results, provided by Mayan Stonecrafters." },
      { q: "Which custom installation options are available in Florida?", a: "Custom countertop installation options in Florida include edge profiles, finishes, and layouts offered by Mayan Stonecrafters." },
    ],
    seoTitle: "Countertop Installation in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides countertop installation in Melbourne, FL - granite, quartz & marble. Contact us at (321) 821-4381.",
    seoKeywords: "countertop installation Melbourne FL, countertop installers, granite installation, quartz installation, marble countertops, kitchen countertops, countertop contractors Brevard County, custom countertops, Mayan Stonecrafters",
  },

  "countertop-fabrication": {
    eyebrow: "Services",
    title: "Countertop Fabrication",
    intro: [
      "Most kitchens and bathrooms have irregular shapes and sizes, so it's important to have a countertop that fits perfectly. At Mayan Stonecrafters, Inc, we perform all countertop fabrication in-house, ensuring precise customization and installation tailored to your space.",
      "By performing all countertop fabrication in-shop, we maintain complete quality control over materials, cuts, and finishes inspired by the design you envision for your space.",
      "Schedule a consultation - call (321) 821-4381 now!",
    ],
    sections: [
      {
        heading: "What Is Countertop Fabrication?",
        paras: [
          "Countertop fabrication is the process of customizing materials into finished surfaces tailored to your specific needs. To start, we'll inspect the slab to discuss the unique characteristics, including patterns, veining, or color variations, marking any areas that should be highlighted or avoided.",
          "The next step involves, with your preferences in mind, considering the direction and placement of the countertop within your space. For example, we align veining and patterns according to the natural flow of key focal points. We can then cut and fabricate the stone to fit your template.",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.: Custom Countertops for Any Room",
        paras: ["Fabrication is personalization. It allows us to craft custom countertops that align perfectly with your kitchen or bathroom's unique layout, style, and functionality.", "Our fabrication process includes:"],
        list: [
          "Precise measurements to ensure a perfect fit for your space",
          "Appliance and sink cutouts designed to accommodate your specific fixtures",
          "Material selection tailored to your preferences",
          "Edge profiles and finishes chosen to complement your design",
          "Customization for unique layouts like corner angles",
        ],
      },
      {
        heading: "Should You Fabricate a Custom Kitchen Countertop?",
        level: 3,
        paras: [
          "The issue with prefabricated countertops is that they don't allow flexibility in layout and configuration. For them to work perfectly, your space would need to match their exact dimensions, and even then, adjustments for irregular walls or unique design features may not be possible. Fabrication, on the other hand, always provides a precise fit.",
          "Custom fabrication takes into account specific needs for a kitchen countertop, such as appliance cutouts, sink placement, and overhangs for seating areas. It also allows for precise alignment with backsplashes, cabinetry, and corner angles, ensuring integration with your kitchen layout.",
        ],
      },
      {
        heading: "What Countertop Materials Can You Fabricate?",
        paras: [
          "Quartz, marble, and granite countertops can be fabricated. Each material has specific properties that diverge in terms of durability, texture, and how they respond to cutting and finishing techniques. These differences require tailored approaches to ensure the best results for each material.",
          "Suppose you're deciding between a quartz and marble countertop. We'll dedicate part of the consultation to discussing how their unique fabrication techniques or tools lead to your desired finish, durability, and integration with your kitchen or bathroom design.",
        ],
        list: [
          "The unique hardness and density of each material",
          "Required tools and techniques for cutting and shaping",
          "Our approaches to polishing for a smooth and durable finish",
          "Sealing options to maintain appearance and longevity",
          "Our strategies for ensuring accurate cuts and edges",
        ],
      },
      {
        heading: "Schedule Your Consultation for a Custom Countertop",
        paras: [
          "It doesn't matter what material you choose - at Mayan Stonecrafters, Inc., our fabrication process ensures a precise, custom countertop that matches your style, whether it's quartz, marble, or granite.",
          "Looking for countertop fabrication? Contact us at (321) 821-4381.",
        ],
      },
    ],
    faqs: [
      { q: "Who are the top countertop fabrication companies in Florida?", a: "The top countertop fabrication companies in Florida include Mayan Stonecrafters, offering precise stone cutting, finishing, and custom fabrication services throughout Florida homes." },
      { q: "Which custom countertop fabricators operate in Florida?", a: "Custom countertop fabricators operating in Florida include Mayan Stonecrafters, providing tailored granite, quartz, and marble fabrication for kitchen and bath projects statewide." },
      { q: "What is stone countertop fabrication in Florida?", a: "Stone countertop fabrication in Florida involves cutting, shaping, and finishing stone slabs, a process expertly handled by Mayan Stonecrafters for durable, custom results statewide." },
      { q: "How do I find quality countertop fabrication in Florida?", a: "To find quality countertop fabrication in Florida, choose trusted providers like Mayan Stonecrafters, known for accurate measurements, expert cuts, and premium stone work statewide." },
      { q: "Where can marble countertops be fabricated in Florida?", a: "Marble countertops can be fabricated throughout Florida by Mayan Stonecrafters, who specialize in custom stone work and expert fabrication for residential projects." },
    ],
    seoTitle: "Countertop Fabrication in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters offers in-house countertop fabrication in Melbourne, FL - granite, quartz & marble. Contact us at (321) 821-4381.",
    seoKeywords: "countertop fabrication Melbourne FL, stone fabrication, custom countertops, granite fabrication, quartz fabrication, marble fabrication, in-house fabrication, countertop fabricators Brevard County, Mayan Stonecrafters",
  },

  "countertop-refinishing": {
    eyebrow: "Services",
    title: "Countertop Refinishing",
    intro: [
      "You're wiping down your counter and notice a stubborn mark that just won't come out. Looking closer, it's not a stain - it's a series of scratches marring the surface. Do you need a replacement? Not necessarily. Mayan Stonecrafters, Inc. offers countertop refinishing to restore it to like-new condition.",
      "Refinishing saves you time and money while giving your kitchen or bathroom a refreshed look. Your counters will shine like they once did - without the hassle of replacement.",
      "Explore the possibility of refinishing - call (321) 821-4381.",
    ],
    sections: [
      {
        heading: "When Should You Refinish Your Kitchen or Bathroom Countertop?",
        paras: [
          "Refinishing a kitchen or bathroom countertop can give it a fresh new look. When you have a countertop installed, it should be polished and sealed. Over time, daily use can cause scratches, stains, or discoloration, especially from certain spills or products that break down the surface's protective layer.",
          "If your countertop is structurally compromised, refinishing doesn't apply. It does, however, in cases where the surface is intact but defiled by cosmetic issues like fading, minor cracks, or surface-level scratches. A granite countertop that's lost its sheen is a good candidate, for instance.",
        ],
        list: [
          "Countertops with peeling edges or faded colors",
          "Marble countertops with dull spots",
          "Quartz countertops with etching",
          "Solid surface countertops with burns",
        ],
      },
      {
        heading: "Why Do Countertop Colors Fade?",
        paras: [
          "Countertop colors can fade gradually, often without you realizing it. If you've started to notice light scratching or dull areas, there's a good chance the color has faded too. It can be subtle day to day, but if you compare old photos of your space, the difference is usually clear.",
          "In most cases, this fading happens from sunlight and cleaning chemicals, but daily wear can take its toll, too. Over time, the surface breaks down and loses part of its original depth and tone.",
          "Refinishing is designed for exactly this type of issue. The products we use recoat the surface with a fresh, uniform layer that corrects discoloration and seals in the new finish.",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.: Personalized and Revitalizing Countertop Finishes",
        paras: ["Whether for refinishing or new installations, all countertop finishes address durability, aesthetics, and ease of maintenance. Each finish is customized to complement your space, offering long-lasting protection and a polished look that suits your style.", "Our refinishing services ensure:"],
        list: [
          "Smooth and scratch-free countertop surfaces",
          "Enhanced durability and resistance to wear",
          "Protection against stains and moisture damage",
          "A polished, like-new appearance",
          "Long-lasting, high-quality finishes",
        ],
      },
      {
        heading: "How Does Your Input Influence the Countertop Refinish?",
        paras: [
          "Your input is necessary to create a countertop refinish that feels right for your space. This treatment has multiple customizable layers, and we want you involved in selecting the overall look.",
          "You'll choose the finish type, tone, and sheen with our guidance. If you say you want something more muted or more reflective, we adjust the product and technique accordingly.",
        ],
        list: [
          "Visual goals, such as preferred color, tone, or sheen",
          "Functional concerns, like durability or ease of cleaning",
          "Design context, including how the countertop relates to nearby surfaces",
          "Desired level of contrast or blending within the overall space",
        ],
      },
      {
        heading: "Call Now for Professional Countertop Refinishing",
        paras: [
          "Mayan Stonecrafters, Inc.'s professional countertop refinishing takes your worn, scratched, or outdated surfaces and restores them to a beautiful, like-new condition. With durable finishes and expert techniques, it's a cost-effective solution that enhances the look and longevity of your counters.",
          "Looking for countertop refinishing? Contact us at (321) 821-4381.",
        ],
      },
    ],
    faqs: [
      { q: "What are the benefits of countertop refinishing in Florida?", a: "Countertop refinishing restores surface appearance, extends lifespan, and reduces replacement costs, services offered by Mayan Stonecrafters in Florida." },
      { q: "Who refinishes residential countertops in Florida?", a: "Residential countertops in Florida are refinished by Mayan Stonecrafters using professional restoration and resurfacing methods." },
      { q: "How do I find countertop refinishing contractors in Florida?", a: "Countertop refinishing contractors in Florida can be found by selecting trusted providers like Mayan Stonecrafters." },
      { q: "Are there granite countertop refinishing services in Florida?", a: "Yes, granite countertop refinishing services in Florida are available from Mayan Stonecrafters for residential surfaces." },
      { q: "Which stones can be refinished in Florida homes?", a: "Stones such as granite, marble, and quartz can be refinished in Florida homes by Mayan Stonecrafters." },
    ],
    seoTitle: "Countertop Refinishing in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides countertop refinishing in Melbourne, FL - restore worn surfaces to like-new. Call (321) 821-4381.",
    seoKeywords: "countertop refinishing Melbourne FL, countertop resurfacing, granite refinishing, stone restoration, countertop repair, refinish countertops, countertop contractors Brevard County, Mayan Stonecrafters",
  },

  "granite-countertop-installation": {
    eyebrow: "Services",
    title: "Granite Countertop Installation",
    intro: [
      "The swirling veins and patterns in granite are a result of the movement of these minerals as the rock cools and solidifies. These patterns are completely random and unpredictable, making each slab unique. Its durability and natural beauty make it ideal for kitchens, bathrooms, and more.",
      "At Mayan Stonecrafters, Inc, our granite countertop installation process is customized to highlight the distinct character of each slab, enhancing your design while ensuring a precise and lasting fit.",
      "Contact us today at (321) 821-4381 to begin your custom installation!",
    ],
    sections: [
      {
        heading: "Why You Need Professionals To Install a Granite Countertop",
        paras: [
          "Granite countertops are heavy and dense, making them difficult to maneuver without specialized equipment and expertise. We have the tools and experience to safely transport and position the slabs, avoiding damage to the stone or your space during installation.",
          "Precision is also critical when cutting and fitting granite. We ensure exact measurements and edgework, fitting without discrepancies around your sinks, appliances, and corners. This attention to detail complements the fabrication process that shapes the slab to match your design.",
        ],
        list: [
          "Proper sealing to protect the granite from stains and moisture",
          "Ensuring the countertop is level to prevent cracks or uneven surfaces",
          "Securing the slab to the cabinetry to prevent shifting",
          "Accounting for structural support to handle the weight of the granite",
          "Applying professional-grade adhesives for long-lasting stability",
        ],
      },
      {
        heading: "Mayan Stonecrafters, Inc.: Efficient Countertop Installation",
        paras: ["Our countertop installation is efficient but never rushed, ensuring every detail is handled with precision. We prioritize accuracy and care to deliver flawless results on time.", "Here's what makes our process efficient:"],
        list: [
          "Thorough pre-installation measurements",
          "Advanced cutting and fabrication techniques",
          "Expert handling and placement of heavy granite slabs",
          "Proper sealing and cleanup immediately after installation",
          "Post-installation inspections to ensure quality and durability",
        ],
      },
      {
        heading: "Are There Different Granite Countertop Colors?",
        paras: [
          "Granite countertops come in a wide range of colors, including classic whites, blacks, and grays, as well as more vibrant shades like blues, greens, and reds. The variety in color comes from the minerals present in the stone, including quartz, feldspar, and mica, which give each slab its unique hue and tone.",
          "Besides colors, granite has intricate patterns like swirls, speckles, and veins. These are created during the cooling and solidification of molten rock as minerals flow and crystallize. During the design and consultation phase, we can work around aspects of the slab's natural pattern that you want to highlight.",
        ],
      },
      {
        heading: "Are Granite Countertops Durable?",
        paras: [
          "Granite countertops are naturally durable due to their hardness and resistance to scratches, heat, and everyday wear. Granite is one of the hardest natural stones, which is what makes it an ideal material for kitchens and bathrooms. Its dense composition also resists staining and cracking when properly sealed.",
          "To further enhance this durability, we ensure your countertop is properly supported and secured. Precise leveling, expert edgework, and sealing protect the stone from stress points and moisture, ensuring it lasts for decades with minimal maintenance.",
        ],
      },
      {
        heading: "Schedule Professionally Installed Granite Today",
        paras: [
          "Despite granite's natural durability and stunning appeal, proper installation is essential to maximize its lifespan and performance. Mayan Stonecrafters, Inc. ensures precise cuts, secure placement, and finishes that highlight the uniqueness of your chosen slab.",
          "Looking for granite countertop installation? Contact us at (321) 821-4381.",
        ],
      },
    ],
    faqs: [
      { q: "Who are the best granite countertop installers in Florida?", a: "The best granite countertop installers in Florida include Mayan Stonecrafters, known for precision fabrication and professional installation." },
      { q: "Which granite countertop companies operate in Florida?", a: "Granite countertop companies operating in Florida include Mayan Stonecrafters, serving residential projects statewide." },
      { q: "Can I customize granite countertops in Florida?", a: "Yes, granite countertops can be fully customized in Florida through Mayan Stonecrafters, offering tailored designs and finishes." },
      { q: "Where are durable granite countertops installed in Florida?", a: "Durable granite countertops are installed across Florida by Mayan Stonecrafters for kitchens and bathrooms." },
      { q: "Who installs residential granite countertops in Florida?", a: "Residential granite countertops in Florida are installed by Mayan Stonecrafters with professional expertise." },
    ],
    seoTitle: "Granite Countertop Installation Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters provides granite countertop installation in Melbourne, FL - precise, sealed & built to last. Call (321) 821-4381.",
    seoKeywords: "granite countertop installation Melbourne FL, granite installers, granite countertops, granite fabrication, natural stone countertops, kitchen granite, granite contractors Brevard County, Mayan Stonecrafters",
  },

  "tile-collections": {
    eyebrow: "Services",
    title: "Tile Collections",
    intro: [
      "Discover the leading tile store in Melbourne with Mayan Stonecrafters. We offer an extensive collection of premium tiles designed to suit every style, from modern and sleek to timeless and classic.",
      "Whether you're renovating your kitchen, upgrading your bathroom, or designing a new space, our curated tile collections provide the perfect blend of quality and elegance. Our team is here to guide you in selecting the right materials that match your vision and budget. As a trusted tile store in Melbourne, we are dedicated to delivering exceptional products and service that help transform your home or business with lasting beauty.",
    ],
    sections: [
      {
        heading: "Why Choose Our Tiles?",
        list: [
          "Top Quality: Directly sourced from trusted vendors.",
          "Variety of Styles: Porcelain, ceramic, mosaics, natural stone, glass, and wood-look tiles.",
          "Expert Guidance: Our design team helps you choose the perfect material and style.",
          "Competitive Pricing: Special offers for builders, contractors, and retail clients.",
        ],
      },
      {
        heading: "Our Tile Types",
        list: [
          "Porcelain & Ceramic - Durable and stylish for all spaces.",
          "Glass & Mosaic Tiles - Perfect for backsplashes and accents.",
          "Natural Stone - Marble, granite, and travertine options.",
          "Wood-look & Large Format Tiles - Modern, elegant, and versatile.",
          "Outdoor & Slip-Resistant Tiles - Ideal for patios, pools, and high-traffic areas.",
        ],
      },
      {
        heading: "Tile Vendors & Collections",
        paras: ["Explore full collections from our trusted partners:"],
        list: [
          "Porcemall", "Elysium Tiles", "ITM Tile Importers", "RPS Wholesale Flooring",
          "Southland Floors", "Dekton", "Glazzio Tile", "Happy Floors", "Shaw Flooring",
          "General Ceramic Tiles", "Anthology Tile", "Bold Surfaces", "Roca Tile USA", "Suncrest",
        ],
      },
      {
        heading: "Services We Offer",
        list: [
          "Custom tile design consultations",
          "Professional installation services",
          "Grout, sealing, and finish solutions",
        ],
      },
    ],
    faqs: [
      { q: "Which tile collection companies operate in Florida?", a: "Tile collection companies operating in Florida include Mayan Stonecrafters, offering curated ceramic, porcelain, and natural stone tile collections." },
      { q: "What is included in kitchen tile collections in Florida?", a: "Kitchen tile collections in Florida include ceramic, porcelain, and stone tile options supplied by Mayan Stonecrafters." },
      { q: "Where can bathroom tile collections be found in Florida?", a: "Bathroom tile collections in Florida are available through Mayan Stonecrafters for residential remodeling projects." },
      { q: "Which ceramic tile collections are popular in Florida?", a: "Popular ceramic tile collections in Florida are offered by Mayan Stonecrafters for kitchens and bathrooms." },
      { q: "Can I choose stone tile collections in Florida?", a: "Yes, stone tile collections can be selected in Florida through Mayan Stonecrafters for custom flooring and wall applications." },
    ],
    seoTitle: "Tile Collections in Melbourne, FL | Mayan Stonecrafters",
    seoDescription: "Mayan Stonecrafters is a leading tile store in Melbourne, FL - porcelain, ceramic, stone, glass & more. Call (321) 821-4381.",
    seoKeywords: "tile store Melbourne FL, tile collections, porcelain tile, ceramic tile, mosaic tile, natural stone tile, wood-look tile, backsplash tile, tile contractors Brevard County, Mayan Stonecrafters",
  },
};
