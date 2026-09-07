import Reveal from "@/components/Reveal";

export default function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <Reveal direction="up">
      <div className="max-w-4xl mx-auto text-center px-4">
        <span className="text-6xl text-accent font-heading leading-none">&ldquo;</span>
        <p className="text-primary text-xl sm:text-2xl font-light leading-relaxed -mt-4">
          {quote}
        </p>
        <p className="mt-6 text-lg">
          <span className="font-semibold text-primary">{author}.</span>{" "}
          <span className="text-grey-foreground">{role}</span>
        </p>
      </div>
    </Reveal>
  );
}
