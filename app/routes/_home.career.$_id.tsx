import { Link } from "@remix-run/react";

export default function CareerDetails() {
  return (
    <div className="container mx-auto py-24 space-y-7 text-center">
      <h2 className="pb-4 text-3xl md:text-4xl font-bold">Coming Soon!</h2>
      <div className="flex justify-center">
        <Link
          to="/career" className=" px-4 py-2 rounded-md text-white font-semibold"
          style={{
            background: "radial-gradient(112.24% 139.91% at 100% 100%, #C86CFD 0%, #7A5AF8 100%)"
          }}
        >
          Back to Career
        </Link>
      </div>
    </div>
  )
}
