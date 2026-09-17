import { Button } from "@/components/ui/button";
import { Emblem } from "@/components/store/Emblem";
import { ProductImage } from "@/components/store/ProductImage";
import { ProductArt } from "@/components/store/ProductArt";
import { SiteHeader } from "@/components/store/SiteHeader";
import { SiteFooter } from "@/components/store/SiteFooter";
import { ProductCard } from "@/components/store/ProductCard";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  PRODUCTS,
  formatPrice,
} from "@/lib/products";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Gem, Flame } from "lucide-react";
import { Link } from "react-router";

const MARQUEE_WORDS = [
  "Sterling Silver",
  "Hand Cast",
  "Limited Editions",
  "Made in Los Angeles",
  "Since 1988",
  "Chrome Forever",
];

const HOUSE_PILLARS = [
  {
    icon: Shield,
    title: "Cast, Not Stamped",
    body: "Every buckle and clasp is lost-wax cast in .925 silver, then hand-polished to a mirror edge.",
  },
  {
    icon: Flame,
    title: "Burnished Leather",
    body: "Full-grain hides, vegetable-tanned and burnished by hand until they hold a deep obsidian sheen.",
  },
  {
    icon: Gem,
    title: "Numbered Editions",
    body: "Each artifact is stamped, numbered, and archived in the atelier ledger. When it sells out, it is gone.",
  },
];

const HERO_ID = "ch-rimless-glasses";

export default function Landing() {
  const featured = PRODUCTS.slice(0, 4);
  const hero = PRODUCTS.find((p) => p.id === HERO_ID) ?? PRODUCTS[0];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06070a] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[11px] uppercase tracking-gothic text-[#8fd8ff]"
              >
                Est. 1988 — Los Angeles
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-5 font-[family-name:var(--font-display)] text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl"
              >
                <span className="text-chrome">GOTHIC</span>
                <br />
                <span className="text-chrome">CHROME</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="chrome-rule mt-6 w-56 origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg"
              >
                Belts, wallets, necklaces, hats and eyewear — cast in silver,
                dipped in chrome, finished by hand. Heavy metal for the ones who
                never left{' '}1986.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  className="btn-chrome h-12 px-7 text-xs font-bold uppercase tracking-[0.22em]"
                >
                  <Link to="/shop">
                    Enter the Collection
                    <ArrowRight className="ml-3 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="btn-ghost-chrome h-12 px-7 text-xs font-bold uppercase tracking-[0.22em]"
                >
                  <Link to="/shop?category=eyewear">Chrome Eyewear</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
              >
                {[".925 Sterling", "Hand Cast", "Numbered"].map((stat) => (
                  <div key={stat} className="flex items-center gap-2.5">
                    <span className="size-1.5 rotate-45 bg-[#8fd8ff]" />
                    <span className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                      {stat}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero artifact — rotating chrome showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="chrome-panel glow-cyan relative rounded-lg p-8 sm:p-10">
                <div className="chrome-inset relative aspect-square overflow-hidden rounded-md">
                  <ProductImage
                    src={hero.image}
                    alt={hero.name}
                    category={hero.category}
                  />
                  <div className="scanlines absolute inset-0" />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                      Signature Artifact
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {hero.name}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-chrome">
                    {formatPrice(hero.price)}
                  </span>
                </div>
                <div className="chrome-rule-soft mt-5" />
                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Blue-cut lens · Chrome hardware
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHROME MARQUEE ──────────────────────────────────── */}
      <div className="relative border-y border-border bg-[#0a0c11] py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 whitespace-nowrap text-[11px] uppercase tracking-[0.34em] text-muted-foreground"
              >
                {word}
                <span className="inline-block size-1.5 rotate-45 bg-[#8fd8ff]/70" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORY GATES ──────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-gothic text-[#8fd8ff]">
              Eight Chambers
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
              The <span className="text-chrome">Vaults</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={`/shop?category=${cat}`}
                className="chrome-panel shine group block overflow-hidden rounded-lg p-5 transition-colors hover:border-[#8fd8ff]/40"
              >
                <div className="chrome-inset aspect-square overflow-hidden rounded-md">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <ProductArt category={cat} />
                  </div>
                </div>
                <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {CATEGORY_LABELS[cat]}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {PRODUCTS.filter((p) => p.category === cat).length} artifacts
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED ARTIFACTS ──────────────────────────────── */}
      <section className="border-y border-border bg-[#08090d]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-gothic text-[#ff5c72]">
                Fresh From The Bench
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
                Featured <span className="text-chrome">Artifacts</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              Full collection <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOUSE PILLARS ───────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {HOUSE_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="chrome-panel rounded-lg p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-md border border-border bg-[#06070a] text-[#8fd8ff]">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <div className="chrome-rule-soft mt-3 w-16" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <Emblem className="mx-auto h-12 w-12" />
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight sm:text-5xl">
            <span className="text-chrome">Claim Your Artifact</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Editions are small and the ledger closes fast. Enter the vault and
            mark what is yours before it is stamped for someone else.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="btn-chrome h-12 px-8 text-xs font-bold uppercase tracking-[0.22em]"
            >
              <Link to="/shop">Shop the Vault</Link>
            </Button>
            <Button
              asChild
              className="btn-ghost-chrome h-12 px-8 text-xs font-bold uppercase tracking-[0.22em]"
            >
              <Link to="/auth?returnTo=%2Fshop">Become a Member</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
