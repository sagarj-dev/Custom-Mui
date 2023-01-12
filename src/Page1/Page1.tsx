import React from "react";
import Header1 from "../Components/Header1/Header1";
import "./Page1.scss";
import Sidebar1 from "../Components/Sidebar1/Sidebar1";
import UserSection1 from "../Components/UserSection1/UserSection1";
const Page1 = () => {
  return (
    <div className="Page1">
      <Header1 />
      <main>
        <Sidebar1 />
        <UserSection1 />
      </main>
    </div>
  );
};

export default Page1;
