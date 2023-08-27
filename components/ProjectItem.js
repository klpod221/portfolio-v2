import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ProjectItem = ({ project }) => {
  return (
    <Link
      href={project.url}
      passHref
      title={`View ${project.title} project`}
      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
    >
      <div className="flex items-center justify-center relative overflow-hidden group">
        {/* image */}
        <Image
          src={project.image}
          width={500}
          height={300}
          alt={project.title}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />

        {/* title */}
        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
          <div className="flex items-center gap-x-2 text-[13px] tracing-[0.2em]">
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
    </Link>
  );
};

export default ProjectItem;
