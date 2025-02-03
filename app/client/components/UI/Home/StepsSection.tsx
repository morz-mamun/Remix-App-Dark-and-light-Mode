export default function StepsSection() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center space-y-7">
          <h2 className="bg-gradient-to-r from-[#C86CFD] to-[#7A5AF8] text-transparent bg-clip-text text-5xl md:text-7xl font-bold text-center ">Create Color Palettes in 3 Steps</h2>
          <p className="max-w-md mx-auto mt-4 text-base pb-5 leading-relaxed text-[#26003D] opacity-80 text-center">Follow our quick and easy process to generate beautiful, AI-powered palettes tailored to your needs.</p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          {/* Step 1 */}
          <li className="relative flex items-start">
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8  border-l-[3px] border-dotted border-gray-300 h-full" aria-hidden="true"></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="white"/>
  <path d="M0.5 40C0.5 18.1848 18.1848 0.5 40 0.5C61.8152 0.5 79.5 18.1848 79.5 40C79.5 61.8152 61.8152 79.5 40 79.5C18.1848 79.5 0.5 61.8152 0.5 40Z" stroke="url(#paint0_radial_155_24393)" strokeOpacity="0.2"/>
  <path d="M42.2721 32.0833L32.3353 42.0202M32.3353 42.0202L28.6432 45.7122C27.2157 47.1397 26.5019 47.8535 26.126 48.7612C25.75 49.6688 25.75 50.6782 25.75 52.6971V54.25H27.303C29.3218 54.25 30.3312 54.25 31.2388 53.8741C32.1465 53.4981 32.8602 52.7843 34.2878 51.3568L43.6244 42.0202M32.3353 42.0202H43.6244M43.6244 42.0202L47.9167 37.7279M51.4138 34.2821L53.965 36.8333M51.4138 34.2821L52.7783 32.9175C53.2414 32.4543 53.4731 32.2227 53.6341 31.9967C54.4554 30.8432 54.4554 29.2959 53.6341 28.1424C53.4731 27.9164 53.2414 27.6848 52.7783 27.2217C52.3152 26.7585 52.0837 26.5269 51.8576 26.366C50.7041 25.5447 49.1567 25.5447 48.0033 26.366C47.7773 26.5269 47.5457 26.7585 47.0826 27.2217L45.7179 28.5863M51.4138 34.2821L45.7179 28.5863M45.7179 28.5863L43.1667 26.035" stroke="url(#paint1_radial_155_24393)" strokeWidth="2.375" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <radialGradient id="paint0_radial_155_24393" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(-134.379) scale(111.931 85.6923)">
      <stop stopColor="#C86CFD"/>
      <stop offset="1" stopColor="#7A5AF8"/>
    </radialGradient>
    <radialGradient id="paint1_radial_155_24393" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.25 54.25) rotate(-134.38) scale(39.8756 30.5279)">
      <stop stopColor="#C86CFD"/>
      <stop offset="1" stopColor="#7A5AF8"/>
    </radialGradient>
  </defs>
</svg>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-secondary">Choose your preferred color code</h3>
              <p className="mt-4 text-base text-tertiary">Choose a color code from your mind or select the color code from your existing brand or website</p>
            </div>
          </li>
          {/* Step 2 */}
          <li className="relative flex items-start">
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-[3px] border-dotted border-gray-300 h-full" aria-hidden="true"></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="white"/>
  <path d="M0.5 40C0.5 18.1848 18.1848 0.5 40 0.5C61.8152 0.5 79.5 18.1848 79.5 40C79.5 61.8152 61.8152 79.5 40 79.5C18.1848 79.5 0.5 61.8152 0.5 40Z" stroke="url(#paint0_radial_155_24399)" strokeOpacity="0.2"/>
  <path d="M47.8593 35.2213C47.8555 30.5503 47.7849 28.1308 46.4249 26.4741C46.1624 26.1542 45.869 25.8608 45.5492 25.5983C43.8014 24.1641 41.2048 24.1641 36.0115 24.1641C30.8182 24.1641 28.2215 24.1641 26.4738 25.5983C26.1538 25.8608 25.8605 26.1542 25.5979 26.4741C24.1636 28.2217 24.1636 30.8182 24.1636 36.0111C24.1636 41.2041 24.1636 43.8005 25.5979 45.5482C25.8604 45.868 26.1538 46.1614 26.4738 46.4239C28.1306 47.7837 30.5502 47.8543 35.2216 47.8581M43.2114 35.2901L47.9071 35.2227M43.1892 55.8367L47.8847 55.7691M55.7883 43.2029L55.7439 47.8891M35.2663 43.2245L35.222 47.9105M39.1881 35.2901C37.8695 35.5263 35.7531 35.7692 35.2663 38.4952M51.8664 55.7691C53.1884 55.5532 55.3084 55.3428 55.8372 52.6246M51.8664 35.2901C53.185 35.5263 55.3014 35.7692 55.7883 38.4952M39.2082 55.767C37.8896 55.5316 35.773 55.2898 35.2847 52.5641" stroke="url(#paint1_radial_155_24399)" strokeWidth="2.375" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <radialGradient id="paint0_radial_155_24399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(-134.379) scale(111.931 85.6923)">
      <stop stopColor="#C86CFD"/>
      <stop offset="1" stopColor="#7A5AF8"/>
    </radialGradient>
    <radialGradient id="paint1_radial_155_24399" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.8372 55.8367) rotate(-134.38) scale(44.3152 33.9268)">
      <stop stopColor="#C86CFD"/>
      <stop offset="1" stopColor="#7A5AF8"/>
    </radialGradient>
  </defs>
</svg>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-secondary">Paste your color code in FreeTools </h3>
              <p className="mt-4 text-base text-tertiary">Choose a color code from your mind or select the color code from your existing brand or website</p>
            </div>
          </li>
          {/* Step 3 */}
          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <path d="M17.4167 33.2493H15.8334C9.86222 33.2493 6.87667 33.2493 5.02167 31.3943C3.16669 29.5394 3.16669 26.5538 3.16669 20.5827V15.8327C3.16669 9.86155 3.16669 6.876 5.02167 5.021C6.87667 3.16602 9.86222 3.16602 15.8334 3.16602H19C24.9711 3.16602 27.9568 3.16602 29.8117 5.021C31.6667 6.876 31.6667 9.86155 31.6667 15.8327V16.6243M11.0834 11.0827H23.75V18.2077H17.4167M11.0834 18.2077H17.4167M11.0834 11.4987V25.3327H17.4167V18.2077M27.5609 22.805C27.897 21.953 29.1029 21.953 29.4391 22.805L29.4972 22.9527C30.318 25.0339 31.9654 26.6813 34.0466 27.5021L34.1943 27.5602C35.0463 27.8964 35.0463 29.1022 34.1943 29.4384L34.0466 29.4965C31.9654 30.3173 30.318 31.9647 29.4972 34.0459L29.4391 34.1936C29.1029 35.0456 27.897 35.0456 27.5609 34.1936L27.5028 34.0459C26.682 31.9647 25.0345 30.3173 22.9534 29.4965L22.8057 29.4384C21.9537 29.1022 21.9537 27.8964 22.8057 27.5602L22.9534 27.5021C25.0345 26.6813 26.682 25.0339 27.5028 22.9527L27.5609 22.805Z" stroke="url(#paint0_radial_155_24406)" strokeWidth="2.375" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <radialGradient id="paint0_radial_155_24406" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.8333 34.8326) rotate(-134.379) scale(44.3061 33.9198)">
      <stop stopColor="#C86CFD"/>
      <stop offset="1" stopColor="#7A5AF8"/>
    </radialGradient>
  </defs>
</svg>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-secondary">Generate stunning color palattes!</h3>
              <p className="mt-4 text-base text-tertiary">Choose a color code from your mind or select the color code from your existing brand or website</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
