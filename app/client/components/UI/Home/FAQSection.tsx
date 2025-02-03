import { nanoid } from "nanoid";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqData }: { readonly faqData: readonly FAQ[] }) {
  if (!faqData || faqData.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-8 my-10 md:p-8 space-y-4">
      <h2 className="bg-gradient-to-r from-[#C86CFD] to-[#7A5AF8] text-transparent bg-clip-text text-5xl md:text-7xl font-bold text-center">Frequently asked questions</h2>
      <p className="max-w-md mx-auto mt-4 text-base pb-5 leading-relaxed text-[#26003D] opacity-80 text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
      <div className="space-y-4">
        {
        faqData?.map((faq) => (
          <details
            key={nanoid()}
            className="w-full border-l-[3px] border-[#C86CFD] shadow-sm rounded-md overflow-hidden group"
          >
            <summary className="flex items-center justify-between px-4 py-3 cursor-pointer group-open:bg-gray-50">
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl font-bold bg-[#e3c2f7] bg-opacity-30 rounded-full flex justify-center items-center h-8 w-8 text-[#C86CFD] group-open:hidden">
                +
              </span>
              <span className="text-2xl font-bold bg-[#e3c2f7] bg-opacity-30 rounded-full  justify-center items-center h-8 w-8 text-[#C86CFD] hidden group-open:flex">
                -
              </span>
            </summary>
            <p className=" py-4 ml-4 text-gray-400">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
