/**
 * Everything the business is likely to change lives in this file.
 * Edit it, save, and every page updates.
 *
 * Lines marked TODO are placeholders that need real information
 * before the site goes live.
 */

export type Hours = { days: string; time: string };
export type DetailPackage = {
  name: string;
  summary: string;
  includes: string[];
  /** Leave as null to show "Call for a quote". Example: "From $180". */
  price: string | null;
  /** Rough time on site. Leave as null to hide. Example: "About 3 hours". */
  duration: string | null;
};
export type GalleryPhoto = {
  /** File inside /public/gallery, for example "f150-saddle.jpg". */
  file: string;
  /** Describe the photo for people who can't see it. */
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export const site = {
  name: "Southern Leather and Trim",
  shortName: "Southern Leather",
  tagline: "Katzkin leather interiors and auto detailing in Ocoee, Florida",
  description:
    "Southern Leather and Trim installs Katzkin leather interiors and details cars, trucks and SUVs at 67 Geneva St. in Ocoee, Florida. Call 407-701-4410 for a quote.",

  phone: {
    display: "407-701-4410",
    href: "tel:+14077014410",
  },
  email: "southernleatherandtrim@gmail.com",

  address: {
    street: "67 Geneva St.",
    city: "Ocoee",
    state: "FL",
    zip: "34761",
  },

  /**
   * TODO: add opening hours. While this list is empty the site shows
   * "Call for hours". Example:
   *   { days: "Monday to Friday", time: "8:00 am to 5:00 pm" },
   *   { days: "Saturday", time: "By appointment" },
   */
  hours: [] as Hours[],

  /** TODO: confirm the towns you serve. Used in copy and for search engines. */
  serviceArea: ["Ocoee", "Winter Garden", "Windermere", "Apopka", "Orlando"],

  /**
   * TODO: set to true only if the shop is in Katzkin's authorized installer
   * network. It adds the words "Authorized Katzkin installer" to the site.
   */
  katzkinAuthorized: false,

  /** TODO: add profile links if you have them. Empty ones are hidden. */
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },

  /**
   * TODO: add photos of finished work. Put the image files in
   * /public/gallery and list them here. The Gallery link appears in the
   * menu once there is at least one photo.
   */
  gallery: [] as GalleryPhoto[],
};

/**
 * TODO: these packages are sensible defaults, not the shop's real menu.
 * Rename, reprice and rewrite them to match what you actually offer.
 */
export const detailPackages: DetailPackage[] = [
  {
    name: "Interior detail",
    summary: "For seats, carpet and touch points that need a reset.",
    includes: [
      "Full vacuum, including trunk or cargo area",
      "Carpets, mats and cloth seats shampooed",
      "Leather cleaned and conditioned",
      "Dash, console, door panels and vents wiped down",
      "Interior glass cleaned",
    ],
    price: null,
    duration: null,
  },
  {
    name: "Exterior detail",
    summary: "For paint that has lost its slickness and shine.",
    includes: [
      "Foam pre-soak and hand wash",
      "Wheels, tires and wheel wells cleaned",
      "Paint decontaminated with clay",
      "Wax or sealant applied by hand",
      "Exterior glass and trim finished",
    ],
    price: null,
    duration: null,
  },
  {
    name: "Full detail",
    summary: "Inside and out in one visit.",
    includes: [
      "Everything in the interior detail",
      "Everything in the exterior detail",
      "Door jambs cleaned",
      "Tires dressed",
    ],
    price: null,
    duration: null,
  },
];

/** TODO: edit to match the extras you offer. */
export const detailAddOns: string[] = [
  "Pet hair removal",
  "Odor treatment",
  "Headlight restoration",
  "Engine bay cleaning",
];

export const leatherOptions: { name: string; text: string }[] = [
  {
    name: "Colors and materials",
    text: "Katzkin offers more than 120 colors and materials, from factory-style black and grey to tan, red and suede-like accents.",
  },
  {
    name: "Two-tone",
    text: "Put one color on the bolsters and another on the seat inserts.",
  },
  {
    name: "Contrast stitching",
    text: "Pick a thread color that stands out from the leather, or one that disappears into it.",
  },
  {
    name: "Perforation",
    text: "Perforated inserts add texture and help the seat breathe in Florida heat.",
  },
  {
    name: "Piping and embroidery",
    text: "Add a piped edge along the seams or a stitched logo on the headrest.",
  },
  {
    name: "Heated and cooled seats",
    text: "Seat heaters and ventilation can go in while the covers are off. Ask what fits your vehicle.",
  },
];

/** The leather install really is a sequence, so the site numbers these. */
export const leatherSteps: { title: string; text: string }[] = [
  {
    title: "Tell us your vehicle",
    text: "Year, make, model and trim level. That tells us which Katzkin pattern fits your seats and what it costs.",
  },
  {
    title: "Choose your design",
    text: "Pick the leather color, stitching and inserts. Come by the shop to see and feel real samples before you decide.",
  },
  {
    title: "We order your kit",
    text: "Katzkin cuts and sews the interior for your exact seats, then ships it to us.",
  },
  {
    title: "Drop off and pick up",
    text: "We strip the cloth, fit the leather to the factory seats and put everything back. Most vehicles are ready in a day or two.",
  },
];

export const leatherFaqs: { q: string; a: string }[] = [
  {
    q: "Is this a seat cover?",
    a: "No. We take the cloth upholstery off your seats and fit the Katzkin leather directly to the factory foam and frames. It looks and sits like a leather interior that came with the vehicle.",
  },
  {
    q: "How long will you need my vehicle?",
    a: "Most installs take a day or two once your kit has arrived. We'll give you a firm drop-off and pick-up time when you book.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the vehicle, the number of rows and the options you choose. Send us your year, make and model and we'll give you a price.",
  },
  {
    q: "Is there a warranty?",
    a: "Katzkin covers its interiors with a limited warranty of 3 years or 36,000 miles, whichever comes first. Ask us for the current terms.",
  },
  {
    q: "My seats have side airbags. Is that a problem?",
    a: "Katzkin designs its kits for seats with side airbags. Tell us your exact vehicle and we'll confirm what applies to it.",
  },
  {
    q: "Can you add heated or cooled seats?",
    a: "On many vehicles, yes. The best time to add them is during the leather install, while the seats are already apart.",
  },
];

export const detailFaqs: { q: string; a: string }[] = [
  {
    q: "How long does a detail take?",
    a: "It depends on the package and the condition of the vehicle. Tell us what you drive and what it needs and we'll give you a time.",
  },
  {
    q: "Do I need an appointment?",
    a: "Yes. Call or send a request and we'll find a day that works.",
  },
  {
    q: "Can you clean and condition leather seats?",
    a: "Yes. Leather is what we work with every day, so we know how to clean it without drying it out.",
  },
];

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

/**
 * The public address of the site. On Vercel this is filled in for you.
 * Set NEXT_PUBLIC_SITE_URL once you connect a custom domain.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
