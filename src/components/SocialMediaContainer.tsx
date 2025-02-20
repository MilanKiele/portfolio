// socialmedia container

import React from "react";
import Image from "next/image";

const SocialMediaContainer = ({ size = 36 }) => {
  // const DiscordLink = "https://discord.gg";
  // const TwitchLink = "https://twitch.tv";
  const YoutubeLink = "https://youtube.com";
  const GithubLink = "https://github.com/maialabs";
  const CompanyLink = "https://maialabs.net";

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="p-2 rounded-full flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center transform hover:scale-125 transition-transform">
          <a
            href={YoutubeLink}
            className="rounded-full"
            id="youtube-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/logo-youtube.svg"
              alt="YouTube"
              width={size}
              height={size}
              className="svg-icon"
            />
          </a>
        </div>
      </div>
      <div className="p-2 rounded-full flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center transform hover:scale-125 transition-transform">
          <a
            href={CompanyLink}
            className="rounded-full"
            id="company-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/logo-company.svg"
              alt="Company"
              width={size}
              height={size}
              className="svg-icon"
            />
          </a>
        </div>
      </div>
      {/* <div className="p-2 rounded-full flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center transform hover:scale-125 transition-transform">
          <a
            href={TwitchLink}
            className="rounded-full"
            id="twitch-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/logo-twitch.svg"
              alt="Twitch"
              width={size}
              height={size}
              className="svg-icon"
            />
          </a>
        </div>
      </div> */}
      <div className="p-2 rounded-full flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center transform hover:scale-125 transition-transform">
          <a
            href={GithubLink}
            className="rounded-full"
            id="github-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/logo-github.svg"
              alt="Github"
              width={size}
              height={size}
              className="svg-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaContainer;
