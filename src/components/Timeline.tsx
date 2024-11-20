"use client";

import React from "react";
import DescriptionSection from "./DescriptionSection";
import Image from "next/image";

// Timeline data with optional images
const timelineData = [
  {
    date: "2026-06",
    title: "Expanding MaiaLabs Services",
    description: "Focus on IT, AI, and Blockchain innovations worldwide.",
    image: "/image/maia.webp",
  },
  {
    date: "2025-03",
    title: "Launching Content Creation Platform",
    description:
      "A modern platform for creators with monetization and analytics features.",
    image: "/image/yt.webp", // Optional image for this event
  },
  {
    date: "2024-01",
    title: "Started AI Analytics Platform",
    description: "Developing AI-driven tools to empower data visualization.",
    image: "/image/analytics.jpg", // Optional image for this event
  },
  {
    date: "2023-05",
    title: "Launched Blockchain Payment System",
    description: "A secure blockchain-based payment gateway for businesses.",
    image: "/image/blockchain.webp", // Optional image for this event
  },
];

const HorizontalTimeline: React.FC = () => {
  return (
    <section className="py-12 px-6 relative">
      <DescriptionSection
        title="My Journey"
        subtitle="Timeline"
        description="See latest milestones and achievements in my journey."
      />

      <div className="relative flex items-center">
        {/* Wrapper Div for Scrollable Timeline */}
        <div className="overflow-hidden relative w-full overflow-y-hidden">
          {/* Scrollable Timeline */}
          <div className="flex gap-10 py-6 pl-6 pr-6 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-100">
            {timelineData.map((event, index) => (
              <div
                key={index}
                className={`flex-shrink-0 z-[0] grow-0 w-full max-w-sm shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105`} // Scale on hover
              >
                <h3 className="text-lg font-bold text-gray-700">
                  {event.date}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-700 mb-4">{event.description}</p>

                {/* Optional Image below text */}
                {event.image && (
                  <div className="w-full flex justify-center mt-4">
                    <Image
                      src={event.image} // This can be a URL or an imported image path
                      alt={event.title}
                      className="object-cover max-w-full h-auto rounded-lg shadow-lg"
                      width={768} // Set a specific width (required for Next.js Image component)
                      height={432} // Set a specific height (required for Next.js Image component)
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
