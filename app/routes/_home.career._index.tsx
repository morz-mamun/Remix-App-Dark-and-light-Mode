import { Link } from "@remix-run/react";
import { nanoid } from 'nanoid';
import CareerInfoSection from "~/client/components/UI/Career/CareerInfoSection";
import { whyBest } from "~/client/data/whyBest";

export default function Career() {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
        }}
      >
        <div className="container px-6 py-10 mx-auto pt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#b650f1]">Grow your career</h2>
          <p className="max-w-lg mx-auto mt-4 text-base pb-5 leading-relaxed  text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
          {/* Join Now Button */}
          <div className="flex justify-center">
            <Link
              to={`/career/${nanoid()}`} className=" px-4 py-2 rounded-md text-white font-semibold"
              style={{
                background: "radial-gradient(112.24% 139.91% at 100% 100%, #C86CFD 0%, #7A5AF8 100%)"
              }}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
      <CareerInfoSection careerInfo={whyBest} />
    </section>
  )
}
