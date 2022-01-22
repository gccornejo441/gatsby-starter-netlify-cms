import React, { ReactNode } from "react";
import Footer from "./Footer";
import Housing_meta from "./Housing_meta";
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};


const Layout = ({ children, title = "HouseKeeper" }: Props) => (
  <div>
    <Housing_meta title={title} />
    <div className="flex bg-blue-600">
      <div className="bg-lime-500 text-white w-2/3 ">
        Corona, California
      </div>
      <svg
        className="inset-y-0 h-12 text-lime-500"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0 0, 0 100, 80 100" />
      </svg>
      <div className="bg-blue-600 w-1/3">facebook</div>
    </div>
    <header className="md:pb-6 mx-auto max-w-7xl bg-transparent">
      <Navbar />
    </header>
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
