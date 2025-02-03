import { useLoaderData } from "@remix-run/react";
import { blogs } from "~/client/data/blogs";

export const loader = async ({ params }: { params: { blogId: string } }) => {
  const blogId = params.blogId;
  const selectedBlog = blogs.find((blog) => blog._id === blogId);

  if (!selectedBlog) {
    throw new Response("Blog not found", { status: 404 });
  }

  return selectedBlog;
};

export const meta = ({ data }: { data: { title: string; shortDis: string, author: { image: string; name: string; designation: string; } } | undefined }) => {
  if (!data) {
    return [
      { title: "Blog Not Found" },
      { name: "description", content: "The requested blog could not be found." },
    ];
  }
  return [
    { title: data.title },
    { name: "description", content: data.shortDis },
  ];
};

export default function BlogDetails() {
  const blog = useLoaderData<typeof loader>();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-40">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img src={blog.image} alt={blog.title} className="w-full h-60 sm:h-96 dark:bg-gray-500" />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
          <div className="space-y-2">
            <h1 className="inline-block text-2xl font-semibold sm:text-3xl text-[#C86CFD]">{blog.title}</h1>
            <p className="text-xs ">By <span className="text-xs hover:underline">{blog.author.name}</span></p>
          </div>
          <div className="">
            <p>{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}