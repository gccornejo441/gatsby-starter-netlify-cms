import React from "react";
import Image from "next/image";
import Workflow from "../public/images/workflow.svg";
import Link from "next/link";

const navigation = [
  { _id: 1, name: "About", href: "#" },
  { _id: 2, name: "Programs", href: "#" },
  { _id: 3, name: "Team", href: "#" },
  { _id: 4, name: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav
      className="items-center justify-between sm:h-10 lg:justify-between p-8 hidden md:flex relative z-20"
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
          <a className="font-medium text-orange-600 hover:text-orange-500">
            Home
          </a>
        </Link>
        {navigation.map((item) => (
          <Link key={item._id} href={item.href}>
            <a className="font-medium text-green-600 hover:text-green-900">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
