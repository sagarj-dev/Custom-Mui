import React from "react";
import Header1 from "../../Components/Header1/Header1";
import "./Page2.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar1";
import UserSection1 from "../../Components/UserSection1/UserSection1";
import StyledTabs from "../../Components/StyledTabs/StyledTabs";

import MyAccord from "../../Components/MyAccord/MyAccord";
import MyTable from "../../Components/MyTable/MyTable";
const Page2 = () => {
  return (
    <div className="Page2">
      <Header1 />
      <main>
        <Sidebar1 />
        <UserSection1 />
        <div className="main">
          <StyledTabs>
            <MyAccord>
              <MyTable />
            </MyAccord>
            <MyAccord>
              <MyTable />
            </MyAccord>
            <MyAccord>
              <MyTable />
            </MyAccord>
            <MyAccord>
              <MyTable />
            </MyAccord>
          </StyledTabs>
        </div>
      </main>
    </div>
  );
};

export default Page2;
