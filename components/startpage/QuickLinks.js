import { useState, useEffect } from "react";
import Link from "next/link";

import * as Icon from "react-icons/ri";

const QuickLinks = () => {
  const [quickLinks, setQuickLinks] = useState([]);

  useEffect(() => {
    setQuickLinks([
      {
        name: "Facebook",
        url: "https://facebook.com/",
        icon: <Icon.RiFacebookLine />,
      },
      {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: <Icon.RiYoutubeLine />,
      },
      {
        name: "Github",
        url: "https://github.com/",
        icon: <Icon.RiGithubLine />,
      },
      {
        name: "Gitlab",
        url: "https://gitlab.com/",
        icon: <Icon.RiGitlabLine />,
      },
    ]);
  }, []);

  return (
    <div className="flex items-center gap-x-10 text-3xl mt-6">
      {quickLinks.map((link, index) => {
        return (
          <Link
            href={link.url}
            key={index}
            className="text-white hover:text-accent transition-all duration-300"
            title={link.name}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
