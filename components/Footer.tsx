import React from "react";
import Image from "next/image";
import Workflow from "../public/images/workflow.svg";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const hours = [
  { name: "<FaFacebook className='w-4 h-4'/>", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Instagram", href: "#" },
];

const Socials = () => (
  <ul className="grid grid-cols-4 md:grid-cols-1 md:gap-4 md:justify-items-center my-5">
    <li className="text-white bg-orange-500 p-3 rounded-full max-w-fit">
      <FaFacebookF className="w-6 h-6" />
    </li>
    <li className="text-white bg-orange-500 p-3 rounded-full max-w-fit">
      <FaTwitter className="w-6 h-6" />
    </li>
    <li className="text-white bg-orange-500 p-3 rounded-full max-w-fit">
      <FaYoutube className="w-6 h-6" />
    </li>
    <li className="text-white bg-orange-500 p-3 rounded-full max-w-fit">
      <FaInstagram className="w-6 h-6" />
    </li>
  </ul>
);

const Footer = () => {
  return (
    <footer className="font-montserrat px-5 mx-auto max-w-7xl text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] content-around md:justify-items-center">
        <div>
          <div className="py-5">
            <Image
              alt="Workflow logo"
              src={Workflow}
              width="260px"
              height="60px"
            />
          </div>
          <p className="font-semibold w-1/2 md:w-full text-xs xl:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            posuere odio commodo venenatis fermentum. Vestibulum.
          </p>
        </div>
        <div className="md:mt-5">
          <h2 className="font-bold text-gray-900">Hours & Contact</h2>
          <ul className="text-gray-500 text-sm">
            <li>Hours of Operation</li>
            <li>Mon - Fri</li>
            <li>8am - 5pm</li>
          </ul>
        </div>
        <div className="md:mt-5">
          <div>
            <h2 className="font-bold text-gray-900">Location</h2>
            <ul>
              <li className="text-gray-900 font-semibold text-sm">
                <p>
                  Your Address Here <br /> 1234 Choppy Avenue
                  <br />
                  Los Angeles, CA 92554
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:mt-5">
          <h2 className="font-bold text-gray-900">Social Media</h2>
          <Socials />
        </div>
      </div>
      <div className="text-[0.5rem] md:text-xs font-semibold text-gray-600 text-center py-10 mt-5 border-t-[1px]">
        <span>Copyright © 2022 HomeKeeper All Right Reservered</span>
      </div>
    </footer>
  );
};

export default Footer;
