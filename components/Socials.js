import Link from "next/link";

import { RiFacebookLine, RiGithubLine, RiTwitchLine } from "react-icons/ri";

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com/klpod221",
    icon: <RiFacebookLine />,
  },
  {
    name: "Github",
    url: "https://github.com/klpod221",
    icon: <RiGithubLine />,
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/klpod221",
    icon: <RiTwitchLine />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {socials.map((link, index) => {
        return (
          <Link
            href={link.url}
            key={index}
            className="hover:text-accent transition-all duration-300"
            title={link.name}
            target="_blank"
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
