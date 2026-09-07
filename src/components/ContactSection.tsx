import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact-us" className="scroll-mt-24 px-6 md:px-16 lg:px-20 py-20 bg-grey-light">
      <div className="max-w-[100rem] mx-auto">
        <Reveal direction="up">
          <SectionHeading>Want to know more?</SectionHeading>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-16 lg:gap-12 xl:gap-20 lg:px-12 mt-10 lg:items-stretch">
          <Reveal
            direction="left"
            className="col-span-1 order-last lg:order-first lg:col-span-3"
          >
            <div className="relative h-full min-h-[22rem]">
              <div className="skew-edge-r relative h-full overflow-hidden bg-primary">
                <Image
                  src="/images/backgrounds/contact/contact-form-background.png"
                  alt="Atlas Precast team on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-2/5 aspect-square border-4 border-grey-light shadow-lg overflow-hidden">
                <Image
                  src="/images/backgrounds/contact/contact-form-accent.png"
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="col-span-1 lg:col-span-4 flex items-center">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
