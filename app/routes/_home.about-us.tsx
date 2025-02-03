import AboutUsInfo from "~/client/components/UI/AnoutUs/AboutUsInfo";
import { whyBest } from "~/client/data/whyBest";

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
        }}
      >
        <div className="container px-6 py-10 mx-auto pt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#b650f1]">About us</h2>
          <p className="max-w-lg mx-auto mt-4 text-base pb-5 leading-relaxed  text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
        </div>
      </div>
      <AboutUsInfo aboutUsInfo={whyBest} />
    </div>
  )
}
