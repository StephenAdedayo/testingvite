import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
      content: ["housing", "property", "mailing"],
    },
    {
      name: "About Us",
      href: "/about",
      content: ["You is mad", "You is crazy"],
    },

    {
      name: "Contact Us",
      href: "/contact",
      content: ["number", "deletion"],
    },

    {
      name: "Service",
      href: "/service",
      content: ["rental", "air service", "drinks"],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const [activeLink, setActiveLink] = useState(null);

  const handleActiveLink = (index) => {
    setIsOpen(true);
    setActiveLink(index);
  };

  const handleBoxClose = () => {
    setIsOpen(false);
    setActiveLink(null);
  };

  return (
    <>
      <nav className="px-40 py-4 bg-indigo-100 w-full flex justify-between transition-all duration-500 delay-75 ease-in-out">
        <img src="" alt="IMAGE" title="navimage" />

        <ul className="flex items-center gap-4">
          {links.map((link, index) => {
            const isactive = location.pathname === link.href;

            return (
              <Link
                onMouseEnter={() => handleActiveLink(index)}
                key={index}
                to={link.href}
                className={`${
                  isactive
                    ? "border-blue-500 border-b-2 p-1 rounded-[4px]"
                    : null
                } border-blue-500 hover:border-b-2 p-1 rounded-[4px] `}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>

      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleBoxClose}
        className={`${
          isOpen ? "max-h-screen" : "max-h-0 "
        } absolute h-100 top-15 z-10 right-0 left-0 transition-all px-40  duration-500 ease-in-out bg-indigo-300 w-full`}
      >
        {links[activeLink]?.content.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex flex-col capitalize my-3"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
