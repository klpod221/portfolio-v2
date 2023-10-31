import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ProjectItem = ({ project }) => {
  return (
    <Link
      href={project.url}
      title={`View ${project.title} project`}
      className="relative flex flex-col items-center justify-center group"
      aria-label={`View ${project.title} project`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center justify-center relative rounded-lg overflow-hidden group h-full w-full">
        {/* image */}
        <Image
          src={project.image}
          width={500}
          height={300}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />

        {/* title */}
        <div className="absolute flex flex-col items-center px-3 bottom-0 translate-y-full group-hover:translate-y-1/2 group-hover:bottom-1/2 transition-all duration-700">
          <div className="text-center text-[13px] font-medium">
            {project.description}
          </div>

          <div className="flex items-center gap-x-2 text-[11px] tracing-[0.2em]">
            {/* title 1 */}
            <div className="delay-100">LIVE</div>

            {/* title 2 */}
            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
              PROJECT
            </div>

            {/* icon */}
            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* title */}
      <div className="text-center text-[13px] font-medium mt-1">
        {project.title}
      </div>
    </Link>
  );
};

export default ProjectItem;
