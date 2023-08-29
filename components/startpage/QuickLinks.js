import { useState } from "react";
import Link from "next/link";

import RiIcons from "react-icons/ri";

const QuickLinks = () => {
  const [quickLinks, setQuickLinks] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-4 gap-4 text-3xl mt-6">
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
    </div>
  );
};
