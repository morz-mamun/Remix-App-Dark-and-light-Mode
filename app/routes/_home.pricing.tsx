import WeAreBestSection from "~/client/components/UI/Home/WeAreBestSection";
import PricingSection from "~/client/components/UI/Pricing/PricingSection";
import { pricingPlans } from "~/client/data/pricingPlans";
import { whyBest } from "~/client/data/whyBest";

export default function Pricing() {
  return (
    <div>
      <PricingSection pricingPlans={pricingPlans} />
      <WeAreBestSection whyBest={whyBest} />
    </div>
  )
}
