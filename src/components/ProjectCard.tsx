import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link?: string;
}

function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white shadow-lg h-48">
        <Image
          alt={title}
          loading="lazy"
          width={768}
          height={768}
          decoding="async"
          className="h-full w-full object-cover"
          src={img}
        />
      </div>
      <div className="p-6">
        <p className="font-semibold text-xl mb-2 text-blue-gray-900">
          {title}
        </p>
        <p className="text-base font-normal text-gray-500 mb-6">{desc}</p>

        {/* Button nur anzeigen, wenn der Link existiert und nicht "#" ist */}
        {link && link !== "#" && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-2 px-4 rounded-lg text-xs font-bold uppercase shadow-md hover:shadow-lg hover:border hover:border-white transition duration-300 ease-in-out"
          >
            See details
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
