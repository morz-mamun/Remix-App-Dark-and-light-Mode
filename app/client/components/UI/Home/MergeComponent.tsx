
  export type FeatureGridVariant = "UI1" | "UI2" | "UI3" | "UI4"

  
  export interface FeatureGridProps {
    variant: FeatureGridVariant
  }

  export const blogs = [
    { 
      "_id": "64e86248129375e96214188f",
      "title": "Understanding React State Management",
      "description": "Explore various state management techniques in React, including Context API, Redux, and Zustand.",
      "category": "Web Development",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-12-01",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      },
    },
    {
      "_id": "64e86248129375e962141890",
      "title": "Top 10 Tailwind CSS Tricks",
      "description": "Learn some of the most effective Tailwind CSS tricks to supercharge your UI development.",
      "category": "CSS",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-28",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      },
    },
    { 
      "_id": "64e86248129375e962141891",
      "title": "A Beginner's Guide to TypeScript",
      "description": "Understand the basics of TypeScript and how it improves JavaScript development.",
      "category": "Programming",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-25",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141892",
      "title": "Node.js vs. Deno: What's the Difference?",
      "description": "A detailed comparison between Node.js and Deno to help you decide which runtime to use.",
      "category": "Backend Development",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-20",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141893",
      "title": "10 Productivity Tools for Developers",
      "description": "Discover the best tools to boost your productivity as a developer in 2024.",
      "category": "Productivity",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-18",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141894",
      "title": "How to Optimize Your Next.js Application",
      "description": "Learn tips and tricks to improve the performance of your Next.js applications.",
      "category": "Web Development",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-15",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141895",
      "title": "Understanding RESTful APIs",
      "description": "A comprehensive guide to understanding and building RESTful APIs in 2024.",
      "category": "API Development",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-10",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141896",
      "title": "The Importance of Unit Testing",
      "description": "Why every developer should prioritize unit testing and how to get started.",
      "category": "Testing",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-05",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141897",
      "title": "Exploring AI in Frontend Development",
      "description": "An overview of how AI is transforming frontend development and design.",
      "category": "AI and Machine Learning",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-11-02",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    },
    { 
      "_id": "64e86248129375e962141898",
      "title": "Mastering GraphQL Queries",
      "description": "Tips and best practices for writing efficient GraphQL queries.",
      "category": "GraphQL",
      "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
      "dateOfPublish": "2024-10-28",
      "author": {
        "_id": "64e86248129375e962141890",
        "name": "John Doe",
        "image": "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
        "designation": "Software Engineer"
      }
    }
  ]


  

export function MergeComponent({variant}: FeatureGridProps) {
    return (
        <section className="max-w-7xl mx-auto py-28">
            {/* heading */}
            <div>

            </div>
            <div className={`
                grid grid-cols-3 gap-x-6 
                ${variant === "UI1" || variant === "UI2" || variant === "UI3" ? "gap-y-[70px]" : ""}
                ${variant === "UI4" && "gap-y-[170px]"}
                `}>
            {blogs.map((blog) => (
                <div className={` 
                    ${variant === "UI1" && ""}
                    ${variant === "UI2" && "relative border border-stroke-primary rounded-2xl"} 
                    ${variant === "UI3" && "relative rounded-2xl overflow-hidden"}
                    ${variant === "UI4" && "relative rounded-2xl h-[260px]"}
                    space-y-3`} key={blog._id}>
                    {/* image */}
                    <div className={`
                        ${variant === "UI1" && "h-[200px] rounded-2xl overflow-hidden shadow-2xl shadow-quaternary"} 
                        ${variant === "UI2" && "h-[200px] rounded-t-2xl overflow-hidden"} 
                        ${variant === 'UI3'&& "w-full h-[380px] rounded-2xl overflow-hidden"}
                        ${variant === "UI4" && "w-full h-full rounded-2xl overflow-hidden"}
                        `}>
                        <img className="w-full h-full object-cover" src={blog.image} alt="" />
                    </div>
                    {/* text section */}
                    <div className={`
                        ${variant === "UI1" && "space-y-3 p-5"} 
                        ${variant === "UI2" && "space-y-3 p-5"}
                        ${variant === "UI3" && "space-y-3 p-5 absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.25)]"}
                        ${variant === "UI4" && "space-y-2 p-3 absolute bottom-0 translate-y-1/2 transform w-[360px] -translate-x-1/2 left-1/2 rounded-2xl bg-white shadow-[0px_30px_8px_0px_rgba(186,186,186,0.00),0px_19px_8px_0px_rgba(186,186,186,0.01),0px_11px_6px_0px_rgba(186,186,186,0.05),0px_5px_5px_0px_rgba(186,186,186,0.09),0px_1px_3px_0px_rgba(186,186,186,0.10)] h-[150px]"}
                        `}>
                    {/* UI1 time */}
                    <p className={`
                        ${variant === "UI1" && "text-quaternary font-semibold text-sm"} 
                        ${variant === "UI2" && "hidden"}
                        ${variant === "UI3" && "hidden"}
                        ${variant === "UI4" && "hidden"}
                        `}>Last updated 5 days ago</p>
                    <h2 className={`
                        ${variant === "UI1" && "text-secondary font-bold text-lg"} 
                        ${variant === "UI2" && "text-secondary font-bold text-lg"}
                        ${variant === "UI3" && "text-white font-bold text-lg"}
                        ${variant === "UI4" && "text-secondary font-bold text-lg h-[50px]"}
                        `}>{blog.title}</h2>
                    <p className={`
                        ${variant === "UI1" && "text-quaternary font-medium"} 
                        ${variant === "UI2" && "text-quaternary font-medium"}
                        ${variant === "UI3" && "text-white font-medium"}
                        ${variant === "UI4" && "text-quaternary font-medium"}
                        `}>{blog.description.slice(0, 80)}</p>
                    <p className={`
                        ${variant === "UI1" && "hidden"} 
                        ${variant === "UI2" && "text-quaternary font-semibold text-sm"}
                        ${variant === "UI3" && "hidden"}
                        ${variant === "UI4" && "hidden"}
                        `}>Last updated 5 days ago</p>
                    </div>

                </div>
            ))}
           
        </div>
        </section>
    )
}