import { Link } from "@remix-run/react";
import { nanoid } from 'nanoid';

interface FeaturedBlog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: {
    image: string;
    name: string;
    designation: string;
  };
}

interface FeaturedBlogsSectionProps {
  featuredBlogs: FeaturedBlog[];
}

export default function FeaturedBlogsSection({ featuredBlogs }: Readonly<FeaturedBlogsSectionProps>) {
  if (!featuredBlogs || featuredBlogs.length === 0) {
    return null;
  }

  const firstBlog = featuredBlogs[0];
  const nextFourBlogs = featuredBlogs.slice(1, 5);

  return (
    <section className="container px-6 py-10 mx-auto">
      <div className="lg:flex lg:items-center lg:justify-between">
        {/* First Blog */}
        <div className="lg:w-3/4 lg:px-6">
          <img className="object-cover object-center w-full h-80 xl:h-[22rem] rounded-xl" src={firstBlog?.image} alt="First Blog" />

          <div>
            <div className="mt-6 text-sm text-[#b650f1] uppercase">
              <Link to={`/blogs/${firstBlog?._id}`} >Want to know</Link>
            </div>
            <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight ">
              {firstBlog?.title}
            </h1>

            <div className="flex items-center pt-2">
              <img className="object-cover object-center w-10 h-10 rounded-full" src={firstBlog?.author?.image} alt="" />

              <div className="mx-4">
                <h1 className="text-sm ">{firstBlog?.author?.name}</h1>
                <p className="text-sm ">{firstBlog?.author?.designation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Four Blogs */}
        <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 ">
          {
            nextFourBlogs?.map((blog: FeaturedBlog) => (
              <div key={nanoid()} >
                <div>
                  <h3 className="text-blue-500 capitalize">{blog?.description.slice(0, 20) + "..."}</h3>

                  <Link to={`/blogs/${blog._id}`} className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    {blog.title}
                  </Link>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

