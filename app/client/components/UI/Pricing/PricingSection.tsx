import { useState } from "react";
import { nanoid } from "nanoid";

export default function PricingSection({ pricingPlans }: Readonly<{ pricingPlans: PricingPlan[] }>) {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  if (!pricingPlans || pricingPlans.length === 0) return null;

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)",
      }}
    >
      <div className="container px-6 pt-28 pb-7 mx-auto">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-4xl text-[#C86CFD]">
          Simple Pricing Plan
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-center xl:mt-6 text-gray-400">
          Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
          {pricingPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPlan(plan.name)
                }
              }}
              className={`flex justify-between items-center px-4 py-2 border cursor-pointer rounded-xl bg-white ${selectedPlan === plan.name
                ? "border-[#C86CFD] border-4 shadow-lg"
                : "border-gray-300"
                }`}
            >
              <h2
                className={`text-lg font-medium ${selectedPlan === plan.name ? "text-[#C86CFD]" : "text-gray-700"
                  }`}
              >
                {plan.name}
              </h2>
              <div>
                {plan.save !== "N/A" && (
                  <button className="p-2 mt-2 text-xs text-[#C86CFD] bg-gray-200 rounded-full">
                    Save {plan.save}
                  </button>
                )}
                <p className={`text-2xl font-semibold  ${selectedPlan === plan.name ? "text-[#C86CFD]" : ""}`}>{plan.price}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Plan Features */}
        <div className="p-8 mt-8 space-y-4 bg-white border border-gray-200 rounded-xl">
          <h3 className="text-lg font-semibold">Features of {selectedPlan} Plan:</h3>
          <ul className="space-y-2">
            {pricingPlans
              .find((plan) => plan.name === selectedPlan)
              ?.features.map((feature) => (
                <li key={nanoid()} className="flex justify-between items-center space-x-2">
                  <span>{feature}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ))}
          </ul>
        </div>

        {/* Choose Plan Button */}
        <div className="flex justify-center mt-8">
          <button
            style={{
              background: "radial-gradient(112.24% 139.91% at 100% 100%, #C86CFD 0%, #7A5AF8 100%)"
            }}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Choose {selectedPlan} Plan
          </button>
        </div>
      </div>
    </div>
  );
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  save: string;
  features: string[];
}
