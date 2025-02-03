import FeaturedBlogsSection from "~/client/components/UI/Blogs/FeaturedBlogsSection";
import OtherBlogsSection from "~/client/components/UI/Blogs/OtherBlogsSection";
import { blogs } from "~/client/data/blogs";

export default function Blogs() {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(135deg, #FBD7FF 10%, #FFDEC1 80%)"
        }}
      >
        <div className="container px-6 py-10 mx-auto pt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#b650f1]">Blogs & articles</h2>
          <p className="max-w-lg mx-auto mt-4 text-base pb-5 leading-relaxed  text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
        </div>
      </div>
      {/* Featured Blogs */}
      <FeaturedBlogsSection featuredBlogs={blogs} />
      <OtherBlogsSection otherBlogs={blogs} />
    </section>
  )
}
