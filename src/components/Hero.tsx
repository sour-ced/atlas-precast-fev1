"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AngledButton from "@/components/AngledButton";
import { hero } from "@/data/home-content";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt="Atlas Precast"
          fill
          sizes="100vw"
          preload
          className="object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-16 lg:px-20 pb-20 sm:pb-28">
        <motion.p
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-accent font-semibold uppercase tracking-[0.15em] mb-4"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white font-heading tracking-wide text-5xl sm:text-6xl lg:text-7xl max-w-3xl leading-[0.95]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/85 text-lg sm:text-xl max-w-2xl mt-6"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <AngledButton href="/our-work" light>
            View Our Work
          </AngledButton>
          <AngledButton href="/products" light>
            Explore Products
          </AngledButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="block w-px h-8 bg-white/50"
        />
      </motion.div>
    </section>
  );
}
