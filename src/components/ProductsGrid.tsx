"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { Product } from "@/data/products";

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {products.map((p, i) => (
          <Reveal key={p.id} direction="up" delay={(i % 3) * 0.1}>
            <button
              onClick={() => setActive(p)}
              className="group relative w-full aspect-[4/3] overflow-hidden bg-grey-light text-left"
            >
              <Image
                src={p.imgOffset}
                alt={p.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white font-heading text-xl uppercase tracking-wide">
                  {p.label}
                </h3>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProductModal product={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = product.imgDetails.length ? product.imgDetails : [product.img];

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-primary/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto bg-grey-light">
          <Image
            src={images[imgIndex]}
            alt={product.label}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {images.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 flex gap-2 p-3 overflow-x-auto thin-scroll bg-gradient-to-t from-black/50 to-transparent">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setImgIndex(i)}
                  className={`relative w-14 h-14 shrink-0 border-2 ${
                    i === imgIndex ? "border-accent" : "border-white/60"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-10 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-3xl text-primary uppercase tracking-wide">
              {product.label}
            </h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 text-primary hover:text-accent transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <p className="text-grey-foreground leading-relaxed">{product.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {product.keywords.slice(0, 8).map((k) => (
              <span
                key={k}
                className="text-xs uppercase tracking-wide px-3 py-1 border border-grey-mid text-primary/70"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
