import { useState } from "react";
import { ProductArt } from "@/components/store/ProductArt";
import { cn } from "@/lib/utils";

/**
 * Product photo with graceful chrome line-art fallback while loading
 * or if the remote image fails.
 */
export function ProductImage({
  src,
  alt,
  category,
  className,
}: {
  src: string;
  alt: string;
  category: Parameters<typeof ProductArt>[0]["category"];
  className?: string;
}) {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {status !== "ok" && (
        <div className="absolute inset-0 bg-grid">
          <ProductArt category={category} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setStatus("ok")}
        onError={() => setStatus("error")}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          status === "ok" ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
