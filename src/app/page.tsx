import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import ValuesGrid from "@/components/ValuesGrid";
import Testimonial from "@/components/Testimonial";
import ContactSection from "@/components/ContactSection";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import Reveal from "@/components/Reveal";
import AngledButton from "@/components/AngledButton";
import { keyBenefits, vision, values, testimonial } from "@/data/home-content";
import { stats } from "@/data/site";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 md:px-16 lg:px-20 py-16 bg-primary-dark">
        <div className="max-w-[100rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 0.1}>
              <StatCounter end={s.end} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative px-6 md:px-16 lg:px-20 py-20 lg:py-28 bg-primary overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 15% 0%, var(--color-primary-light) 0%, transparent 60%)",
            opacity: 0.35,
          }}
        />
        <div className="relative max-w-[100rem] mx-auto">
          <Reveal direction="up">
            <SectionHeading light>Why Choose Us</SectionHeading>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-10">
            <div className="lg:col-span-4">
              <Reveal direction="right">
                <h3 className="text-accent font-heading text-3xl tracking-wide">
                  Key benefits of Atlas
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed max-w-sm">
                  What sets us apart, in our own words &mdash; explore each point below.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal direction="up">
                <Accordion items={keyBenefits} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-20 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <Reveal direction="up">
            <SectionHeading>Vision</SectionHeading>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-2 mt-6">
            <div className="hidden lg:block lg:col-span-2" />
            <div className="col-span-1 lg:col-span-7 space-y-6 text-lg">
              <Reveal direction="up">
                <p className="font-semibold text-xl text-primary">{vision.heading}</p>
              </Reveal>
              {vision.paragraphs.map((p, i) => (
                <Reveal key={p} direction="up" delay={(i + 1) * 0.1}>
                  <p className="text-grey-foreground leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-20 bg-grey-mid">
        <div className="max-w-[100rem] mx-auto">
          <Reveal direction="up">
            <SectionHeading>Values</SectionHeading>
          </Reveal>
          <div className="mt-6">
            <ValuesGrid values={values} />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-20 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <Reveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <SectionHeading>Featured Work</SectionHeading>
              <AngledButton href="/our-work">View All Projects</AngledButton>
            </div>
          </Reveal>
          <div className="mt-10">
            <CaseStudyGrid caseStudies={caseStudies.slice(0, 3)} />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-20 bg-grey-mid">
        <div className="max-w-[100rem] mx-auto">
          <Reveal direction="up">
            <SectionHeading className="text-center mx-auto w-fit">Testimonials</SectionHeading>
          </Reveal>
          <div className="mt-6">
            <Testimonial {...testimonial} />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
