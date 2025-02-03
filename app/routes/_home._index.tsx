import { useTheme } from "~/client/components/ThemeProvider";
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
  const { theme } = useTheme()
  return (
    <div>
      <div style={{
        background:"linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
      }}>
       
        <BannerSection />
      </div>
      {/* Feature Section */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Theme Demo</h2>
        <p className="mb-2">This box will change its background color based on the current theme.</p>
        <p className="font-bold">Current theme: {theme}</p>
      </div>
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
