"use client";

// import Image from "next/image";
import SocialMediaContainer from "./SocialMediaContainer";

function Hero() {
  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md py-12 my-8">
      <div className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          {/* Hero Header */}
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 antialiased font-sans">
            Milan Kiele <br /> Development Portfolio
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:pr-16 xl:pr-28 antialiased font-sans uppercase">
            Founder of MaiaLabs - Just doing things
          </p>

          <SocialMediaContainer />
        </div>

        {/* Hero Image */}
        {/* <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/2.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        /> */}
      </div>
    </header>
  );
}

export default Hero;
