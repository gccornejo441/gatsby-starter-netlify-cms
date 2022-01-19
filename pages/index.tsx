import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Main from "../components/Main";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Layout title="HomeKeeper">
        <Hero />
        <Main />
      </Layout>
    </>
  );
};

export default Home;
