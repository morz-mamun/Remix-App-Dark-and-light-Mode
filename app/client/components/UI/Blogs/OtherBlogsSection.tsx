import { Link } from '@remix-run/react';
import { nanoid } from 'nanoid';

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: {
    name: string;
  };
}

interface OtherBlogsSectionProps {
  otherBlogs: Blog[];
}

export default function OtherBlogsSection({ otherBlogs }: Readonly<OtherBlogsSectionProps>) {
  if (!otherBlogs || otherBlogs.length === 0) return null;

  return (
    <div className='container px-6 py-10 mx-auto'>
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#b650f1]">Other Blogs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-16 mt-10'>
        {
          otherBlogs.map((blog) => (
            <Link to={`/blogs/${blog._id}`} key={nanoid()} className="flex flex-col bg-white border shadow-sm rounded-xl">
              <img className="w-full h-auto rounded-t-xl" src={blog.image} alt="Blog" />
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="mt-1 text-gray-500">
                  {blog.description.slice(0, 50) + "..."}
                </p>
                <p className="mt-5 text-xs text-gray-500">
                  By {blog.author.name}
                </p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
