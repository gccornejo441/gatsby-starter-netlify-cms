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
    <header className="md:py-6 mx-auto max-w-7xl bg-transparent">
      <Navbar />
    </header>
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
