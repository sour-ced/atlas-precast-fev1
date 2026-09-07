import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Atlas Precast case studies",
};

export default function OurWorkPage() {
  return (
    <section className="px-6 md:px-16 lg:px-20 pt-32 pb-20 bg-primary">
      <div className="max-w-[100rem] mx-auto">
        <Reveal direction="up">
          <SectionHeading light>Our Work</SectionHeading>
        </Reveal>
        <Reveal direction="up">
          <p className="text-white/90 font-light text-xl sm:text-2xl md:text-3xl py-8 max-w-4xl">
            We take great pride in producing durable, economical, and
            customisable precast solutions for commercial and residential
            projects. Backed by 60 years of experience, our streamlined
            processes ensure quick turnaround and high-quality craftsmanship.
            Explore our latest projects below to see how we elevate designs,
            optimise performance, and deliver exceptional results.
          </p>
        </Reveal>
        <div className="mt-10">
          <CaseStudyGrid caseStudies={caseStudies} onDark />
        </div>
      </div>
    </section>
  );
}
