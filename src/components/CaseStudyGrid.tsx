import Image from "next/image";
import clsx from "clsx";
import AngledButton from "@/components/AngledButton";
import Reveal from "@/components/Reveal";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyGrid({
  caseStudies,
  onDark = false,
}: {
  caseStudies: CaseStudy[];
  onDark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
      {caseStudies.map((cs, i) => (
        <Reveal key={cs.slug} direction="up" delay={(i % 3) * 0.1}>
          <div className="group flex flex-col gap-5">
            <div className="w-full aspect-[1.85/1] relative overflow-hidden shadow-sm">
              <Image
                src={cs.backgroundImg}
                alt={cs.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all ease-in-out duration-500"
              />
            </div>
            <span
              className={clsx(
                "text-sm sm:text-base font-bold uppercase h-12 line-clamp-2",
                onDark ? "text-white" : "text-primary"
              )}
            >
              {cs.title}
            </span>
            <AngledButton href={`/our-work/${cs.slug}`} light={onDark} className="w-full lg:w-44">
              View Case Study
            </AngledButton>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
