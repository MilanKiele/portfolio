// footer

import { title } from "@/constants";
import SocialMediaContainer from "./SocialMediaContainer";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text text-center text-low text-gray-800">
            &copy; {CURRENT_YEAR} {title}. All rights reserved.
          </p>
          <div className="flex gap-8 items-center">
            <SocialMediaContainer size={32} />
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="/legal"
              className="text text-low font-normal text-gray-800 hover:text-black transition-colors"
            >
              Legal Information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
