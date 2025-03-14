import React from "react";
import DescriptionSection from "./DescriptionSection";
import Image from "next/image";

const AboutMaiaLabs: React.FC = () => {
  return (
    <section className="container-x py-16 px-6">
      <DescriptionSection
        title="Start of a Company"
        subtitle="MaiaLabs"
        description="The start of a new journey."
      />

      {/* Centered Image (SVG file) */}
      <div className="flex justify-center mb-8">
        <Image
          src="/icons/company.svg"
          width={144}
          height={144}
          alt="MaiaLabs Logo"
          className="w-36 h-36" // Adjust size as needed
        />
      </div>

      {/* Text About MaiaLabs: Mission Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Building my company toward success
        </p>
        <p className="text-lg text-gray-700 mb-4">
          MaiaLabs was founded in 2024 by Milan Kiele with a mission to develop
          innovative content. The focus is on creating cutting-edge technology
          that drives business growth, fosters creativity, and empowers
          organizations to reach their full potential.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          At MaiaLabs, we believe in the power of technology to revolutionize
          industries. We are committed to pushing the boundaries of what’s
          possible by integrating artificial intelligence, blockchain, and
          data-driven solutions to create impactful products and services. Our
          team is passionate about turning bold ideas into reality.
        </p>
      </div>

      {/* Button Link to MaiaLabs Website */}
      <div className="text-center">
        <a
          href="https://maialabs.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-black border-2 border-transparent hover:scale-105 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Visit MaiaLabs
        </a>
      </div>
    </section>
  );
};

export default AboutMaiaLabs;
