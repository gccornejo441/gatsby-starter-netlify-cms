import React from "react";
import Image from "next/image";
import Workflow from "../public/images/workflow.svg";
import Link from "next/link";

const navigation = [
  { _id: 1, name: "About Us", href: "#" },
  { _id: 2, name: "Testimonals", href: "#" },
  { _id: 3, name: "Contact Us", href: "#" },
  { _id: 4, name: "Get A Quote", href: "#" },
];

const Navbar = () => {
  return (
    <nav
      className="items-center justify-between lg:justify-between p-3 hidden md:flex relative z-20 bg-white"
      aria-label="Global"
    >
      <Link href="#">
        <a>
          <span className="sr-only">Workflow</span>
          <Image
            src={Workflow}
            alt="Workflow logo"
            width="260px"
            height="60px"
          />
        </a>
      </Link>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <Link href="#">
          <a className="font-medium text-green-600 hover:text-sky-500">
            Services
          </a>
        </Link>
        {navigation.map((item) => (
          <Link key={item._id} href={item.href}>
            {item._id !== 4 ? (
              <a className="font-medium text-sky-500 hover:text-green-600">
                {item.name}
              </a>
            ) : (
              <a className="font-medium text-white bg-lime-500 px-4 py-1 rounded-md">
                {item.name}
              </a>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
