import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      content: ["housing", "property", "mailing"],
    },
    {
      name: "About Us",
      content: ["You is mad", "You is crazy"],
    },

    {
      name: "Contact Us",
      content: ["number", "deletion"],
    },

    {
      name: "Service",
      content: ["rental", "air service", "drinks"],
    },
  ];

  const [activeLink, setActiveLink] = useState(null);

  const handleActiveLink = (index) => {
    setIsOpen(true);
    setActiveLink(index);
  };

  const handleBoxClose = () => {
    setIsOpen(false);
    setActiveLink(null)
  };

  return (
    <>
      <nav className="px-40 py-8 bg-indigo-100 w-full flex justify-between">
        <img src="" alt="IMAGE" title="navimage" />

        <ul className="flex items-center gap-4">
          {links.map((link, index) => (
            <a
              onMouseEnter={() => handleActiveLink(index)}
            //   onMouseLeave={handleBoxClose}
              key={index}
              href=""
            >
              {link.name}
            </a>
          ))}
        </ul>
      </nav>

      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleBoxClose}
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } absolute h-100 top-20 right-0 left-0 transition-all px-40  duration-500 ease-in-out bg-indigo-300 w-full`}
      >
        {links[activeLink]?.content.map((link, index) => (
          <a key={index} href="">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
