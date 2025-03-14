import { title } from "@/constants";
import SocialMediaContainer from "./SocialMediaContainer";

function Hero() {
  return (
    <section id="hero" className="container-x w-full">
      <div className="bg-white w-full bg-opacity-80 backdrop-blur-md py-24 my-10 flex items-center justify-center">
        <div className="text-center w-full">
          {/* Hero Header */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 antialiased font-sans">
            {title} <br /> Development Portfolio
          </h1>

          {/* Hero Subheading */}
          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6 antialiased font-sans uppercase">
            Artificial Intelligence Developer
          </p>

          <SocialMediaContainer />
        </div>
      </div>
    </section>
  );
}

export default Hero;