import ContactFormSection from "~/client/components/UI/ContactUs/ContactFormSection";
import FAQSection from "~/client/components/UI/Home/FAQSection";
import { faqData } from "~/client/data/faqData";

export default function ContactUs() {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
        }}
      >
        <ContactFormSection />
      </div>
      <FAQSection faqData={faqData} />
    </div>
  )
}
