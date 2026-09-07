import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { values as valuesType } from "@/data/home-content";

export default function ValuesGrid({ values }: { values: typeof valuesType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((v, i) => (
        <Reveal key={v.id} direction="up" delay={(i % 3) * 0.1}>
          <div className="flex flex-col items-center text-center gap-5 p-8 bg-white h-full border-t-2 border-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent">
            <div className="relative w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src={v.img} alt={v.title} fill sizes="40px" className="object-contain" />
              </div>
            </div>
            <h3 className="font-heading text-xl text-primary uppercase tracking-wide">{v.title}</h3>
            <p className="text-grey-foreground text-sm leading-relaxed">{v.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
