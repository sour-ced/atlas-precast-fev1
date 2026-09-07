import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProductsGrid from "@/components/ProductsGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Atlas Precast products",
};

export default function ProductsPage() {
  return (
    <section className="px-6 md:px-16 lg:px-20 pt-32 pb-20 bg-background">
      <div className="max-w-[100rem] mx-auto">
        <Reveal direction="up">
          <SectionHeading>Products</SectionHeading>
        </Reveal>
        <Reveal direction="up">
          <p className="text-primary font-light text-xl sm:text-2xl md:text-3xl py-8 max-w-4xl">
            All ATLAS precast concrete products are expertly engineered to offer
            exceptional durability, superior craftsmanship, and significant cost
            efficiencies. Designed to ensure flexible, reliable, and long-lasting
            solutions, they seamlessly elevate your residential, commercial, and
            industrial projects, delivering both quality and value.
          </p>
        </Reveal>
        <ProductsGrid products={products} />
      </div>
    </section>
  );
}
