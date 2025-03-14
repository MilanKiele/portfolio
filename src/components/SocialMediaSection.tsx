import DescriptionSection from "./DescriptionSection";
import SplineNext from "@splinetool/react-spline/next";

function SocialMediaSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="relative container-x w-full flex flex-col md:flex-row items-center justify-center py-12 px-8 pt-0">
        <div className="flex flex-col-reverse w-full h-full lg:flex-row pt-0">


          {/* Left side: Skewed Image */}
          <div className="relative w-[40%] h-[70vh] max-h-[500px] flex m-auto perspective">
            <div className="relative w-full h-full transform-style preserve-3d transform rotate-x-12 rotate-y-6">
              <SplineNext
                scene="/spline/bot.spline" className="max-w-full" />
            </div>
          </div>

          {/* Right side: Content Section with Buttons */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-1/2 h-full pb-8 px-8 pt-0 md:p-16">
            {/* Small Section Header */}

            <DescriptionSection
              title="Where you can find my stuff"
              subtitle="Social"
              description="Hello There"
            />

            <div className="flex flex-col gap-6 w-full max-w-xs mx-auto">
              {/* Github Button */}
              <a
                href="https://github.com/MilanKiele"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-transparent border-2 border-black hover:text-black py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                Github - See My Code
              </a>

              {/* YouTube Button */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-transparent border-2 border-black hover:text-black py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                YouTube - Watch Videos
              </a>

              {/* MaiaLabs Button */}
              <a
                href="https://maialabs.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-transparent border-2 border-black hover:text-black py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              >
                MaiaLabs - Explore Company
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;
