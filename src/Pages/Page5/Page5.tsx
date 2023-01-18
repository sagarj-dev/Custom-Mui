import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page5.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import UserSection from "../../Components/UserSection1/UserSection";
import StyledPaper from "../../Components/Basics/StyledPaper";
import { Box } from "@mui/system";
import Page5Sidebar from "./Page5Sidebar";
import Page5Main from "./Page5Main";

const Page5 = () => {
  return (
    <div className="Page5">
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
                <Page5Sidebar />
              </Box>
              <Box>
                <Page5Main />
              </Box>
            </Box>
          </StyledPaper>
        </div>
        <Sidebar1 variant={2} />
      </main>
    </div>
  );
};

export default Page5;
