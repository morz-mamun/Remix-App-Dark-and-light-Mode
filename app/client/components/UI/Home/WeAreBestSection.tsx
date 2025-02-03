import { nanoid } from "nanoid";

interface WhyBestSection {
  title: string;
  paragraphs: string[];
}

interface WeAreBestSectionProps {
  whyBest: WhyBestSection[];
}

export default function WeAreBestSection({ whyBest }: Readonly<WeAreBestSectionProps>) {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-5  pt-24 pb-12">
      <h2 className="bg-gradient-to-r from-[#C86CFD] to-[#7A5AF8] text-transparent bg-clip-text text-5xl md:text-7xl font-bold text-center ">How We Are The Best?</h2>
      <p className="max-w-md mx-auto mt-4 text-base pb-5 leading-relaxed text-[#26003D] opacity-80 text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
      {whyBest ?
        whyBest?.map((section) => (
          <div key={nanoid()} className="pt-5">
            <h3 className="text-2xl text-tertiary font-semibold pb-5">{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={nanoid()} className="pb-3 text-tertiary">{paragraph}</p>
            ))}
          </div>
        ))
        :
        <div className="pt-5">
          <h3 className="text-xl font-semibold pb-5">Loading...</h3>
        </div>
      }
    </section>
  );
}
