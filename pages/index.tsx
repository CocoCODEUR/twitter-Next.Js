import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widget from "../components/Widget";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>My Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-9">
        <SideBar />

        <Feed />

        <Widget />
      </main>
    </div>
  );
};

export default Home;
