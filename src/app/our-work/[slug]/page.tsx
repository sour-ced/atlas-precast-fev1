import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AngledButton from "@/components/AngledButton";
import Reveal from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata(
  props: PageProps<"/our-work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} | Our Work`,
    description: caseStudy.paragraphs[0],
  };
}

export default async function CaseStudyPage(props: PageProps<"/our-work/[slug]">) {
  const { slug } = await props.params;
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  if (index === -1) notFound();

  const caseStudy = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <section className="px-6 md:px-16 lg:px-20 pt-32 pb-20 bg-background">
      <div className="max-w-[100rem] mx-auto">
        <Reveal direction="up">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl sm:text-4xl font-heading uppercase tracking-wide underline decoration-2 underline-offset-[16px] decoration-accent text-primary">
              Case Studies
            </h2>
            <AngledButton href={`/our-work/${next.slug}`} className="hidden lg:inline-flex">
              Next Project
            </AngledButton>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 py-12">
          <div className="space-y-16">
            <Reveal direction="left">
              <div className="flex">
                <div className="bg-primary w-1/2 lg:w-full aspect-[1/2.3] lg:aspect-[1/1.3] relative overflow-hidden">
                  <div className="w-[185%] lg:w-[140%] aspect-[1.85/1] absolute top-[15%] left-[15%]">
                    <Image
                      src={caseStudy.backgroundImg}
                      alt={caseStudy.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-1/2 aspect-[1/2.3] flex lg:hidden items-end justify-center py-8">
                  <div className="w-[65%] aspect-square relative">
                    <Image
                      src={caseStudy.secondaryDetailImg}
                      alt=""
                      fill
                      sizes="30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" className="text-primary lg:pl-20 lg:pr-10 space-y-6">
              <h2 className="font-bold text-xl lg:text-2xl uppercase">{caseStudy.title}</h2>
              <ul className="text-lg lg:text-xl list-disc list-outside pl-6 space-y-2">
                <li>
                  <span className="font-bold">Our Scope: </span>
                  {caseStudy.scope}
                </li>
                <li>
                  <span className="font-bold">Address: </span>
                  {caseStudy.address}
                </li>
                <li>
                  <span className="font-bold">Features: </span>
                  {caseStudy.features}
                </li>
              </ul>
              {caseStudy.paragraphs.map((p) => (
                <p key={p} className="text-lg lg:text-xl">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <div className="h-fit w-full space-y-10 lg:space-y-20">
            <Reveal direction="right" className="w-full aspect-square lg:px-12 xl:px-16 items-end justify-end hidden lg:flex">
              <div className="w-[45%] aspect-square relative ml-auto">
                <Image src={caseStudy.secondaryDetailImg} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal direction="right" className="w-full aspect-video relative">
              <Image
                src={caseStudy.mainDetailImg}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
            <AngledButton href={`/our-work/${next.slug}`} className="w-full lg:hidden">
              Next Project
            </AngledButton>
          </div>
        </div>
      </div>
    </section>
  );
}
