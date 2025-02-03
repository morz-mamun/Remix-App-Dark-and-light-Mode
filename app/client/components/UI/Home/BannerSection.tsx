export default function BannerSection() {
  return (
    <div className="container mx-auto py-24 text-center">
      <p className="text-[#320050] pt-10 md:pt-20 text-lg">
        Redefining Color Creation : Stunning palettes in seconds
      </p>
      <h1
        style={{
          fontFamily: "'Shantell Sans', sans-serif",
        }}
        className="text-3xl md:text-7xl font-bold text-[#5A2678] pt-10">
        Never Waste Hours <br />
        Finding Colors Again!
      </h1>
      <p className="text-[#320050] pt-10  text-3xl">
        Enter your color code
      </p>
      {/* Input Field */}
      <div className="w-full pt-9 pb-6">
        <div className="mx-auto flex items-center justify-center w-[210px] h-[50px] bg-gradient-to-b from-[#e3d5ff] to-[#ffe7e7] rounded-full overflow-hidden shadow-md cursor-pointer">
          <input
            placeholder="Color Hex Code"
            id="input"
            name="text"
            type="text"
            className="w-[200px] h-[40px] border-none outline-none caret-[#ff5100] bg-white rounded-full pl-[15px] tracking-[0.8px] text-[13.4px] text-[#131313]"
          />
        </div>
      </div>
      {/* Generate Button */}
      <button type="button" className="button">
        <span className="fold"></span>

        <div className="points_wrapper">
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
          <i className="point"></i>
        </div>

        <span className="inner"
        ><svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
            <polyline
              points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
            ></polyline></svg
          >Generate</span
        >
      </button>
    </div>
  )
}
