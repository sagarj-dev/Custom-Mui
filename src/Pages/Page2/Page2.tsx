import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page2.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import UserSection from "../../Components/UserSection1/UserSection";
import StyledTabs from "../../Components/StyledTabs/StyledTabs";

import MyAccord from "../../Components/MyAccord/MyAccord";
import MyTable from "../../Components/MyTable/MyTable";
import { Box } from "@mui/material";
const Page2 = () => {
  return (
    <div className="Page2">
      <Header1 variant={1} />
      <main>
        <Sidebar1 />
        <UserSection variant={1} />
        <div className="main">
          <StyledTabs>
            <Box
              sx={{
                pr: 4,
                pl: 5,
              }}
            >
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
            </Box>
          </StyledTabs>
        </div>
      </main>
    </div>
  );
};

export default Page2;
