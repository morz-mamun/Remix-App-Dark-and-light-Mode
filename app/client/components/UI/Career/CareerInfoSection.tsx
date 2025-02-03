import { nanoid } from 'nanoid';

interface CareerInfoSection {
  title: string;
  paragraphs: string[];
}

interface CareerInfoSectionProps {
  careerInfo: CareerInfoSection[];
}

export default function CareerInfoSection({ careerInfo }: Readonly<CareerInfoSectionProps>) {
  if (!careerInfo || careerInfo.length === 0) return null;

  return (
    <section className="px-4 py-5 container mx-auto pt-24 pb-12">
      {
        careerInfo.map((section) => (
          <div key={nanoid()} className="pt-5">
            <h3 className="text-xl font-semibold pb-5">{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={nanoid()} className="pb-3 text-gray-400">{paragraph}</p>
            ))}
          </div>
        ))
      }
    </section>
  )
}
