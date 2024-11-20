import SocialMediaContainer from "./SocialMediaContainer";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text text-center text-low">
            &copy; {CURRENT_YEAR} Milan Kiele. All rights reserved.
          </p>
          <ul className="flex gap-8 items-center">
            <SocialMediaContainer size={32} />
          </ul>
          <ul className="flex gap-8 items-center">
            <a
              href="/legal"
              className="text text-low font-normal text-gray-700 hover:text-gray-900 transition-colors"
            >
              Legal Information
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
