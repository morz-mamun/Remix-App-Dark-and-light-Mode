import { nanoid } from "nanoid";

export default function ReviewSection({ stats }: { readonly stats: readonly { readonly title: string, readonly stats: string }[] }) {
  return (
    <div className="container max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-2">
        <h2 className="text-3xl md:text-[56px] leading-[56px] pb-2 ">What we&apos;re doing</h2>
        <p className="text-[#212121] text-2xl">Renewable energy under 5 Country.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {
          stats?.length ?
          stats?.map((stat) => (
            <div key={nanoid()} className="flex flex-col items-center justify-center p-3 text-center">
              <h3 className="text-2xl md:text-[40px] leading-[40px] pb-2">{stat.stats}</h3>
              <p className="text-[#212121]">{stat.title}</p>
            </div>
          ))
          :
          <div>Loading...</div>
        }
      </div>
    </div>
  )
}
