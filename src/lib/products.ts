export type Category = "belts" | "wallets" | "necklaces" | "hats" | "eyewear";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number; // USD
  materials: string;
  description: string;
  edition?: string;
};

export const CATEGORY_LABELS: Record<Category, string> = {
  belts: "Belts",
  wallets: "Wallets",
  necklaces: "Necklaces",
  hats: "Hats",
  eyewear: "Eyewear",
};

export const CATEGORIES: Category[] = [
  "belts",
  "wallets",
  "necklaces",
  "hats",
  "eyewear",
];

export const PRODUCTS: Product[] = [
  {
    id: "crossfire-belt",
    name: "Crossfire Buckle Belt",
    category: "belts",
    price: 495,
    materials: "Full-grain leather · .925 silver buckle",
    description:
      "Hand-burnished black leather with a cast silver cross-and-dagger buckle, polished to a mirror edge.",
    edition: "Edition of 120",
  },
  {
    id: "obsidian-link-belt",
    name: "Obsidian Link Belt",
    category: "belts",
    price: 620,
    materials: "Chromed hardware · Italian calf",
    description:
      "Sculpted link hardware over obsidian calf leather. The links catch light like liquid chrome.",
    edition: "Edition of 80",
  },
  {
    id: "sable-bifold",
    name: "Sable Bifold Wallet",
    category: "wallets",
    price: 340,
    materials: "Nubuck leather · silver cross rivet",
    description:
      "Six card slots, a hidden bill chamber, and a single silver cross riveted over the spine.",
    edition: "Edition of 200",
  },
  {
    id: "iron-malo",
    name: "Iron Malo Chain Wallet",
    category: "wallets",
    price: 410,
    materials: "Waxed leather · zinc alloy chain",
    description:
      "A trucker's malo with a heavy swing chain and engraved plate. Built to outlive trends.",
  },
  {
    id: "eternal-flame-pendant",
    name: "Eternal Flame Pendant",
    category: "necklaces",
    price: 780,
    materials: ".925 silver · black onyx",
    description:
      "A flame in frozen silver suspended on black onyx beads. Weighted, cold, and permanent.",
    edition: "Edition of 60",
  },
  {
    id: "serpent-collar",
    name: "Serpent Collar",
    category: "necklaces",
    price: 940,
    materials: "Chrome-plated bronze",
    description:
      "A coiled serpent collar with mirror finish. Scales cut by hand, one at a time.",
    edition: "Edition of 40",
  },
  {
    id: "midnight-wide-brim",
    name: "Midnight Wide Brim",
    category: "hats",
    price: 385,
    materials: "Wool felt · chromed band clasp",
    description:
      "A statement brim in midnight felt with a polished chrome clasp band that anchors the silhouette.",
  },
  {
    id: "gargoyle-trucker",
    name: "Gargoyle Trucker Cap",
    category: "hats",
    price: 165,
    materials: "Cotton twill · pewter emblem",
    description:
      "Structured trucker with a pewter gargoyle emblem and gothic embroidered lettering.",
  },
  {
    id: "crimson-saint",
    name: "Crimson Saint Shades",
    category: "eyewear",
    price: 1120,
    materials: "Silver frame · crimson mirrored lens",
    description:
      "Our signature cross-temple frames with blood-red mirrored lenses. Heavy, jewel-like, unapologetic.",
    edition: "Edition of 50",
  },
  {
    id: "glacier-visor",
    name: "Glacier Visor Shades",
    category: "eyewear",
    price: 980,
    materials: "Chrome frame · ice-blue gradient lens",
    description:
      "A wraparound visor in polished chrome with ice-blue gradient lenses. Pure 1985, built for 2026.",
    edition: "Edition of 75",
  },
  {
    id: "onyx-signature",
    name: "Onyx Signature Frames",
    category: "eyewear",
    price: 860,
    materials: "Black acetate · silver cross hardware",
    description:
      "Matte onyx acetate with silver cross hardware at each temple. The quiet one in the family.",
  },
  {
    id: "reliquary-card-holder",
    name: "Reliquary Card Holder",
    category: "wallets",
    price: 220,
    materials: "Shell cordovan · silver stud",
    description:
      "A slim reliquary for cards, in shell cordovan with a single consecrated silver stud.",
  },
];

export function formatPrice(usd: number): string {
  return `$${usd.toLocaleString("en-US")}`;
}
