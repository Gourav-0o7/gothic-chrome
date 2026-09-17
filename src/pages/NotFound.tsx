import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        <p className="text-[11px] uppercase tracking-gothic text-[#8fd8ff]">
          Lost in the vault
        </p>
        <h1 className="text-chrome mt-4 font-[family-name:var(--font-display)] text-7xl font-black sm:text-8xl">
          404
        </h1>
        <div className="chrome-rule mx-auto mt-4 w-40" />
        <p className="mt-5 text-sm text-muted-foreground">
          This chamber is sealed, or never was.
        </p>
        <Button
          asChild
          className="btn-chrome mt-8 px-8 text-xs font-bold uppercase tracking-[0.22em]"
        >
          <Link to="/">Return to the Surface</Link>
        </Button>
      </motion.div>
    </div>
  );
}
