import Link from "next/link";

function ProjectCard({ img, title, desc, link }: any) {
  return (
    <div className="relative flex flex-col rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white shadow-lg h-48">
        <img
          alt={title}
          loading="lazy"
          width="768"
          height="768"
          decoding="async"
          className="h-full w-full object-cover"
          src={img}
        />
      </div>
      <div className="p-6">
        <a className="text-blue-gray-900 hover:text-gray-800 transition-colors">
          <h5 className="font-semibold text-xl mb-2">{title}</h5>
        </a>
        <p className="text-base font-normal text-gray-500 mb-6">{desc}</p>

        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-2 px-4 rounded-lg text-xs font-bold uppercase shadow-md hover:shadow-lg hover:border hover:border-white transition duration-300 ease-in-out"
          >
            See details
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
