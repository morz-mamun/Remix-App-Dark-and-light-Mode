import { Link } from "@remix-run/react";
import Logo from "./Logo";

export default function Footer({ logoPath, smallLogo }: { readonly logoPath: string, readonly smallLogo: string }) {
  return (
    <footer className="container mx-auto py-6 space-y-4">
      {/* Logo */}
      <div className="flex justify-center">
        <Logo smallLogo={smallLogo} logoPath={logoPath} />
      </div>


      <p className="text-2xl max-w-sm mx-auto px-2 text-center text-gray-400">Join 31,000+ other & never miss out on new tips, tutorials and More</p>


      {/* Get Started Button */}
      <div className="flex justify-center">
        <Link
          to="/" className=" px-4 py-2 rounded-md text-white font-semibold"
          style={{
            background: "radial-gradient(112.24% 139.91% at 100% 100%, #C86CFD 0%, #7A5AF8 100%)"
          }}
        >
          Get Started
        </Link>
      </div>

      {/* Divider */}
      <hr className="w-full h-[2px] my-6 bg-gray-200 border-0 dark:bg-gray-400" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-2 justify-center items-center">
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 text-xl text-gray-400 justify-start">
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/career">Career</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-start md:justify-end">
          <img src="/assets/footer/website.png" alt="Social Icon" className="h-10 w-10" />
          <img src="/assets/footer/facebook.png" alt="Social Icon" className="h-10 w-10" />
          <img src="/assets/footer/twitter.png" alt="Social Icon" className="h-10 w-10" />
          <img src="/assets/footer/youtube.png" alt="Social Icon" className="h-10 w-10" />
        </div>
      </div>
    </footer>
  )
}
