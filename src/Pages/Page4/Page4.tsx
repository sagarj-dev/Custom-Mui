import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page4.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import UserSection from "../../Components/UserSection1/UserSection";
import StyledTabs from "../../Components/StyledTabs/StyledTabs";

import MyAccord from "../../Components/MyAccord/MyAccord";
import MyTable from "../../Components/MyTable/MyTable";
import StyledPaper from "../../Components/Basics/StyledPaper";
import { Box } from "@mui/system";
import ChatList from "./ChatList";
const Page4 = () => {
  return (
    <div className="Page4">
      <Header1 variant={2} />
      <main>
        <UserSection variant={2} />
        <div className="main">
          <StyledPaper
            sx={{
              height: "calc(100% - 1rem)",
              maxHeight: "calc(100% - 1rem)",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "25% 75%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                }}
              >
                <ChatList />
              </Box>
              <Box>asd</Box>
            </Box>
          </StyledPaper>
        </div>
        <Sidebar1 variant={2} />
      </main>
    </div>
  );
};

export default Page4;
