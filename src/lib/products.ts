export type Category =
  | "belts"
  | "wallets"
  | "necklaces"
  | "caps"
  | "rings"
  | "keychains"
  | "bracelets"
  | "eyewear"
  | "limited";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number; // INR
  compareAt?: number; // strike-through price
  /** Units remaining — shows a scarcity badge like "2 Left" */
  stockLeft?: number;
  materials: string;
  description: string;
  /** Real product photography (Shopify CDN) */
  image: string;
  edition?: string;
};

const CDN = "https://cdn.shopify.com/s/files/1/0759/7837/5307/files";

const img = (file: string, v: string, width = 900) =>
  `${CDN}/${file}?v=${v}&width=${width}`;

export const CATEGORY_LABELS: Record<Category, string> = {
  belts: "Belts",
  wallets: "Wallets",
  necklaces: "Necklaces",
  caps: "Caps",
  rings: "Rings",
  keychains: "Keychains",
  bracelets: "Bracelets",
  eyewear: "Eyewear",
  limited: "Chrome Limited",
};

export const CATEGORIES: Category[] = [
  "belts",
  "wallets",
  "necklaces",
  "caps",
  "rings",
  "keychains",
  "bracelets",
  "eyewear",
  "limited",
];

export const PRODUCTS: Product[] = [
  // ── BELTS ──────────────────────────────────────────────
  {
    id: "black-multicolored-ch-belt",
    name: "Black Multicolored CH Belt",
    category: "belts",
    price: 859,
    materials: "Webbed strap · multicolor chrome cross hardware",
    description:
      "Obsidian webbed strap studded with multicolor chrome cross snaps along its full length.",
    image: img("Untitleddesign-2026-09-10T152202.873.png", "1789033952"),
  },
  {
    id: "white-multicolor-ch-belt",
    name: "White Multicolor CH Belt",
    category: "belts",
    price: 859,
    materials: "Webbed strap · multicolor chrome cross hardware",
    description:
      "The light-side twin — bone-white webbing with rainbow chrome crosses edge to edge.",
    image: img("Untitleddesign-2026-09-10T151918.571.png", "1789033811"),
  },
  {
    id: "star-knife-buckle-belt",
    name: "Star Knife Buckle Belt",
    category: "belts",
    price: 999,
    materials: "Leather · cast star-dagger buckle",
    description:
      "A sculpted star-and-dagger buckle in mirror chrome, mounted on hardened black leather.",
    edition: "Vault Exclusive",
    image: img("Untitleddesign-2026-09-11T155836.315.png", "1789122532"),
  },

  // ── WALLETS / METAL CASES ──────────────────────────────
  {
    id: "ch-metal-case-black",
    name: "CH Metal Case Black",
    category: "wallets",
    price: 599,
    stockLeft: 2,
    materials: "Hard shell · chrome clasp",
    description:
      "An armored cigarette-style case in matte black with a polished chrome cross clasp.",
    image: img("2468d352971aaec4747a.webp", "1786610516"),
  },
  {
    id: "ch-metal-case-silver",
    name: "CH Metal Case Silver",
    category: "wallets",
    price: 599,
    materials: "Hard shell · mirror chrome",
    description:
      "Liquid-silver hard case, engraved cross at center. Holds cards, cash, or coffins.",
    image: img("ac15c92a6e8f07e0096a.webp", "1786610546"),
  },
  {
    id: "big-ch-cross-metal-case",
    name: "Big CH Cross Metal Case",
    category: "wallets",
    price: 999,
    stockLeft: 2,
    materials: "Heavy gauge shell · oversized cross plate",
    description:
      "The statement case — an oversized chrome cross riveted across brushed black steel.",
    edition: "Vault Exclusive",
    image: img("PXL_20260827_141416092.jpg", "1787840483"),
  },
  {
    id: "triple-cross-metal-case",
    name: "Triple Cross Metal Case",
    category: "wallets",
    price: 899,
    materials: "Hard shell · triple cross hardware",
    description:
      "Three chrome crosses marched across a blackened shell. Triple the seal.",
    image: img("PXL_20260827_141529520_2.jpg", "1787840285"),
  },

  // ── NECKLACES ──────────────────────────────────────────
  {
    id: "ch-necklace-limited-1",
    name: "CH Necklace Limited",
    category: "necklaces",
    price: 899,
    materials: "Stainless steel · chrome cross pendant",
    description:
      "Our house cross on a heavyweight rolo chain — cold to the touch, warm to the faithful.",
    edition: "Limited",
    image: img("PXL_20260830_050109996.MP.jpg", "1788068042"),
  },
  {
    id: "rose-cross-necklace",
    name: "Rose Cross Necklace",
    category: "necklaces",
    price: 799,
    materials: "Steel · rose-wrapped cross pendant",
    description:
      "A chrome cross entwined with a cast rose. Beauty and ruin on the same chain.",
    image: img("PXL_20260830_042749282.MP.jpg", "1788066605"),
  },
  {
    id: "thorn-cross-necklace",
    name: "Thorn Cross Necklace",
    category: "necklaces",
    price: 749,
    materials: "Steel · thorned cross pendant",
    description:
      "Barbs bloom from every edge of the cross. Faith with teeth.",
    image: img("PXL_20260830_043849107.MP.jpg", "1788067731"),
  },
  {
    id: "iced-out-cross-necklace",
    name: "Iced Out Cross Necklace",
    category: "necklaces",
    price: 699,
    materials: "Steel · pavé cross pendant",
    description:
      "A cross fully iced with faceted stones. Catches the light like a blade in a spotlight.",
    image: img("PXL_20260830_042629352.MP.jpg", "1788067268"),
  },
  {
    id: "ch-duo-necklace",
    name: "CH DUO Necklace",
    category: "necklaces",
    price: 499,
    materials: "Steel · double pendant",
    description:
      "Twin charms on a single chain — the layered look, pre-solved.",
    image: img("PXL_20260905_083526083.MP.jpg", "1788600040"),
  },
  {
    id: "onyx-black-necklace",
    name: "Onyx Black Necklace",
    category: "necklaces",
    price: 599,
    materials: "Blackened steel · onyx beads",
    description:
      "Matte black cross on onyx beads. The quiet one that still gets stares.",
    image: img("PXL_20260905_083907566.MP.jpg", "1788600296"),
  },
  {
    id: "gothic-skull-cross",
    name: "Gothic Skull Cross",
    category: "necklaces",
    price: 899,
    materials: "Stainless steel · skull crucifix",
    description:
      "A crucifix crowned with a skull, on a pearl-linked chain. Memento mori, worn daily.",
    image: img(
      "Men-s-Hip-Hop-Exaggerated-Square-Pearl-Chain-Cross-Jesus-201-Stainless-Steel-Zinc-Alloy-Pendant-Necklace-5.webp",
      "1786959471",
    ),
  },

  // ── CAPS ───────────────────────────────────────────────
  {
    id: "black-ch-cap",
    name: "Black CH Cap",
    category: "caps",
    price: 849,
    stockLeft: 2,
    materials: "Cotton twill · chrome emblem",
    description:
      "Structured six-panel in deep black with the house emblem front and center.",
    image: img("Untitleddesign-2026-08-19T200141.981.png", "1787149913"),
  },
  {
    id: "blue-ch-cap",
    name: "Blue CH Cap",
    category: "caps",
    price: 549,
    materials: "Cotton twill · chrome emblem",
    description:
      "Midnight blue panels, mirror emblem. A flash of color for the all-black fit.",
    image: img("Untitleddesign-2026-08-19T200414.036.png", "1787150065"),
  },
  {
    id: "ch-logo-black-bb-fitted-cap",
    name: "CH Logo Black BB Fitted Cap",
    category: "caps",
    price: 749,
    stockLeft: 2,
    materials: "Fitted crown · embroidered logo",
    description:
      "Fitted cap with gothic embroidered lettering across the crown. No strap, no compromise.",
    image: img("ChatGPTImageSep11_2026_01_18_12PM.png", "1789112916"),
  },
  {
    id: "mc-x-ch-black-bb-fitted-cap",
    name: "MC × CH Black BB Fitted Cap",
    category: "caps",
    price: 799,
    materials: "Fitted crown · dual emblem",
    description:
      "The collaboration cap — two emblems, one crown, strictly limited.",
    edition: "Collab Drop",
    image: img("WhatsAppImage2026-09-01at7.05.19PM.jpg", "1788961742"),
  },

  // ── RINGS ──────────────────────────────────────────────
  {
    id: "snake-ring",
    name: "Snake Ring",
    category: "rings",
    price: 349,
    materials: "Stainless steel · coiled serpent",
    description:
      "A serpent coiled into a band, scales cut deep. It bites the finger gently.",
    image: img("8073bf02c99002aa95c0.webp", "1786435050"),
  },
  {
    id: "coffin-ring",
    name: "Coffin Ring",
    category: "rings",
    price: 299,
    materials: "Stainless steel · coffin cast",
    description:
      "A wearable coffin in polished steel. For those who plan ahead.",
    image: img("68e456e79baa60436716.webp", "1786435551"),
  },
  {
    id: "y2k-ring-4",
    name: "4.0 New Y2K Ring",
    category: "rings",
    price: 149,
    materials: "Alloy · mirror polish",
    description:
      "The chunky Y2K statement band, fourth casting. Chrome at its loudest.",
    image: img("3a77600121b8b9116bbd.webp", "1786434629"),
  },
  {
    id: "ch-heavy-steel-ring",
    name: "CH Heavy Stainless Steel Limited Ring",
    category: "rings",
    price: 499,
    materials: "Heavy stainless · engraved cross",
    description:
      "Serious weight, serious steel. The house cross engraved deep into the band.",
    edition: "Limited",
    image: img("Untitleddesign-2026-09-12T235943.923.png", "1789237815"),
  },

  // ── KEYCHAINS ──────────────────────────────────────────
  {
    id: "black-monster-keychain",
    name: "Black Monster Keychain",
    category: "keychains",
    price: 199,
    materials: "Zinc alloy · blackened finish",
    description:
      "A little monster to guard your keys. Blackened alloy, always hungry.",
    image: img("Untitleddesign-2026-09-14T092817.272.png", "1789358309"),
  },
  {
    id: "dice-keychain",
    name: "Dice Keychain",
    category: "keychains",
    price: 199,
    materials: "Cast alloy · chrome dice",
    description:
      "A pair of chrome dice on a ring. Roll for entry, roll for exit.",
    image: img("Untitleddesign-2026-09-06T033517.526.png", "1788645935"),
  },
  {
    id: "y2k-carabiner",
    name: "Y2K Carabiner",
    category: "keychains",
    price: 249,
    materials: "Cast alloy · spring gate",
    description:
      "A sculptural carabiner clip in mirror chrome. Clip it to belt loops, bags, belts of fate.",
    image: img("Untitleddesign-2026-09-06T033549.498.png", "1788645972"),
  },
  {
    id: "krome-h8-keychain",
    name: "Krome H8 Keychain",
    category: "keychains",
    price: 249,
    materials: "Cast alloy · engraved H8 plate",
    description:
      "H8 stamped in solid chrome. Wear the grudge, lose the keys never.",
    image: img("Untitleddesign-2026-09-10T212217.600.png", "1789055549"),
  },

  // ── BRACELETS ──────────────────────────────────────────
  {
    id: "chrome-ch-bracelet",
    name: "Chrome CH Bracelet",
    category: "bracelets",
    price: 449,
    materials: "Steel links · chrome cross charms",
    description:
      "Linked steel with hanging cross charms. It announces you before you speak.",
    image: img("Untitleddesign-2026-09-05T224118.907.png", "1788628322"),
  },
  {
    id: "classic-snake-bracelet",
    name: "Classic Snake Bracelet",
    category: "bracelets",
    price: 399,
    materials: "Steel · serpent links",
    description:
      "A serpent wound into a bracelet, mirror-finished head to tail.",
    image: img("Untitleddesign-2026-09-05T223922.713.png", "1788628203"),
  },
  {
    id: "ch-red-beaded-bracelet",
    name: "CH Gothic Red Beaded Bracelet",
    category: "bracelets",
    price: 159,
    materials: "Crimson beads · chrome cross bead",
    description:
      "Crimson beads strung around a single chrome cross. Blood-colored restraint.",
    image: img("Untitleddesign-2026-09-07T215051.602.png", "1788798062"),
  },

  // ── EYEWEAR ────────────────────────────────────────────
  {
    id: "ch-glasses-silver",
    name: "CH Glasses Silver",
    category: "eyewear",
    price: 699,
    compareAt: 899,
    stockLeft: 2,
    materials: "Chrome frame · dark tinted lens",
    description:
      "The signature frames — polished chrome wire temples, dark lens, eternal 1986.",
    edition: "Signature",
    image: img("Untitleddesign-2026-09-13T003056.881.png", "1789239714"),
  },
  {
    id: "ch-glasses-golden",
    name: "CH Glasses Golden",
    category: "eyewear",
    price: 799,
    stockLeft: 2,
    materials: "Gold-tone frame · dark tinted lens",
    description:
      "The signature silhouette in warmed gold. For saints who prefer their halo brass.",
    image: img("Untitleddesign-2026-09-13T003237.292.png", "1789239799"),
  },
  {
    id: "ch-golden-glasses-with-logo",
    name: "CH Golden Glasses With Logo",
    category: "eyewear",
    price: 829,
    compareAt: 999,
    materials: "Gold-tone frame · logo-etched temple",
    description:
      "House insignia etched down the gold temples. Recognition without a word.",
    image: img("Untitleddesign-2026-09-13T002807.990.png", "1789239502"),
  },
  {
    id: "ch-rimless-glasses",
    name: "CH Rimless Glasses",
    category: "eyewear",
    price: 899,
    materials: "Rimless lens · chrome hardware",
    description:
      "Frameless lens floating on chrome pins. Barely there, entirely unavoidable.",
    image: img("Untitleddesign-2026-09-13T003706.782.png", "1789240070"),
  },
  {
    id: "ch-transparent-glasses",
    name: "CH Transparent Glasses",
    category: "eyewear",
    price: 849,
    materials: "Clear frame · chrome emblem",
    description:
      "Ghost-clear acetate with chrome hardware. Invisible frame, visible intent.",
    image: img("PXL_20260826_124513134.jpg", "1787751153"),
  },

  // ── CHROME LIMITED ─────────────────────────────────────
  {
    id: "mc-limited-1",
    name: "MC Limited Piece 01",
    category: "limited",
    price: 1299,
    materials: "Atelier casting · one run only",
    description:
      "First of the numbered chrome run. Cast once, photographed once, gone forever.",
    edition: "1 of 14",
    image: img("WhatsAppImage2026-08-24at7.37.35PM.jpg", "1787581323"),
  },
  {
    id: "snake-sword",
    name: "Snake Sword Pendant",
    category: "limited",
    price: 1499,
    materials: "Steel · serpent-hilted blade",
    description:
      "A blade with a serpent coiled down its length. Not sharp; entirely dangerous.",
    edition: "Chrome Limited",
    image: img("PXL_20260821_163830744.MP_2.jpg", "1787590449"),
  },
  {
    id: "rare-ch",
    name: "Rare CH Relic",
    category: "limited",
    price: 1799,
    materials: "Heavy chrome · archival casting",
    description:
      "The rarest plate in the ledger. If it is in stock, someone hesitated.",
    edition: "Chrome Limited",
    image: img("PXL_20260821_163817806.MP_1.jpg", "1787590710"),
  },
];

export function formatPrice(inr: number): string {
  return `₹${inr.toLocaleString("en-IN")}`;
}
