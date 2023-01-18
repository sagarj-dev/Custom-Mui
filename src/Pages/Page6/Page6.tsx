import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page6.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import Page6Sidebar from "./Page6Sidebar";
import Page6Main from "./Page6Main/Page6Main";

const Page6 = () => {
  return (
    <div className="Page6">
      <Header1 variant={1} />
      <main>
        <Sidebar1 variant={1} />
        <Page6Sidebar />
        <Page6Main />
      </main>
    </div>
  );
};

export default Page6;
