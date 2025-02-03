import { nanoid } from "nanoid";

interface AboutUsInfo {
  title: string;
  paragraphs: string[];
}

export default function AboutUsInfo({ aboutUsInfo }: Readonly<{ aboutUsInfo: AboutUsInfo[] }>) {
  if (!aboutUsInfo || aboutUsInfo.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-5 container mx-auto pb-12">
      {aboutUsInfo ?
        aboutUsInfo.map((section) => (
          <div key={nanoid()} className="pt-5">
            <h3 className="text-xl font-semibold pb-5">{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={nanoid()} className="pb-3 text-gray-400">{paragraph}</p>
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
