import BannerSection from "~/client/components/UI/Home/BannerSection";
import FAQSection from "~/client/components/UI/Home/FAQSection";
import { FeatureSection } from "~/client/components/UI/Home/FeatureSection";
import { MergeComponent } from "~/client/components/UI/Home/MergeComponent";
import ReviewSection from "~/client/components/UI/Home/ReviewSection";
import StepsSection from "~/client/components/UI/Home/StepsSection";
import WeAreBestSection from "~/client/components/UI/Home/WeAreBestSection";
import { faqData } from "~/client/data/faqData";
import { stats } from "~/client/data/stats";
import { whyBest } from "~/client/data/whyBest";

export default function Index() {
  return (
    <div>
      <div style={{
        background:"linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
      }}>
       
        <BannerSection />
      </div>
      {/* Feature Section */}
      <FeatureSection variant="UI1" />
      <FeatureSection variant="UI2" />
      <FeatureSection variant="UI3" />
      {/* Merge Component */}
      <MergeComponent variant="UI1"/>
      <MergeComponent variant="UI2"/>
      <MergeComponent variant="UI3"/>
      <MergeComponent variant="UI4"/>
      <ReviewSection stats={stats} />
      <StepsSection />
      <WeAreBestSection whyBest={whyBest} />
      <FAQSection faqData={faqData} />
    </div>
  )
}
