import React from "react";
import Header1 from "../../Components/Header1/Header";
import "./Page3.scss";
import Sidebar1 from "../../Components/Sidebar1/Sidebar";
import UserSection from "../../Components/UserSection1/UserSection";
import StyledTabs from "../../Components/StyledTabs/StyledTabs";

import MyBreadcrumb from "../../Components/MyBreadcrumb/MyBreadcrumb";
import { Box } from "@mui/system";
import { Button, InputBase, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  AccessTime,
  Apps,
  AttachFile,
  Download,
  Flag,
  Reorder,
} from "@mui/icons-material";

import AttachmentCard from "../../Components/Basics/Cards/AttachmentCard";

import StyledPaper from "../../Components/Basics/StyledPaper";
import Right1 from "./Right1";
import Right2 from "./Right2";
import Right3 from "./Right3";

const Page3 = () => {
  return (
    <div className="Page3">
      <Header1 variant={1} />
      <main>
        <Sidebar1 />
        <UserSection variant={1} />
        <div className="main">
          <StyledTabs>
            <MyBreadcrumb />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                pr: 4,
                pl: 5,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  borderRight: "2px solid #edeff2",
                  pr: 2,
                  maxWidth: "100%",
                }}
              >
                <Box mt={3}>
                  <Typography variant="h2">Name Task</Typography>
                  <StyledPaper
                    sx={{
                      padding: 2,
                    }}
                  >
                    <Typography variant="subtitle2">Name Task</Typography>
                  </StyledPaper>
                </Box>
                <Box mt={3}>
                  <Typography variant="h2">Description Task</Typography>
                  <StyledPaper
                    sx={{
                      padding: 2,
                    }}
                  >
                    <Typography variant="subtitle2">
                      Description Task
                    </Typography>
                  </StyledPaper>
                </Box>
                <Box mt={3}>
                  <Typography variant="h2">Sub Tasks ToDo</Typography>
                  <StyledPaper
                    sx={{
                      padding: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <FiberManualRecordIcon
                        color="disabled"
                        fontSize="small"
                      />
                      <Typography variant="h2">|</Typography>
                      <Typography variant="h2">Description Task</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Flag color="disabled" />
                      <AttachFile color="disabled" />
                      <AccessTime color="disabled" />
                      <img
                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                        }}
                      />
                      <Button variant="contained">Save</Button>
                    </Box>
                  </StyledPaper>
                </Box>
                <Box
                  mt={5}
                  pt={4}
                  sx={{
                    borderTop: "2px solid #edeff2;",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h2">Attachments</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Apps color="disabled" />
                      <Reorder color="disabled" />
                      <StyledPaper
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          marginLeft: 3,
                          cursor: "pointer",
                          padding: "10px",
                        }}
                      >
                        <Download color="disabled" />
                        <Typography variant="subtitle1">
                          Download All
                        </Typography>
                      </StyledPaper>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                  }}
                >
                  <AttachmentCard
                    userImage="https://xsgames.co/randomusers/assets/avatars/male/24.jpg"
                    img="https://i.picsum.photos/id/958/200/300.jpg?hmac=oCwv3AFzS5VqZv3nvDJ3H5RzcDH2OiL2g-GGwWL5fsI"
                    filename="Frame6.jpg"
                    date="Sep 7 at 2:42PM"
                  />
                  <AttachmentCard
                    userImage="https://xsgames.co/randomusers/assets/avatars/female/24.jpg"
                    img="https://i.picsum.photos/id/890/200/300.jpg?hmac=INUR_Xore_GSEXH-cqmLjy_lJcK8tslVvXwwac-9o8M"
                    filename="ReadMe.doc"
                    date="Sep 7 at 2:42PM"
                  />
                  <AttachmentCard
                    userImage="https://xsgames.co/randomusers/assets/avatars/male/25.jpg"
                    img="https://i.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY"
                    filename="change.pdf"
                    date="Sep 7 at 2:42PM"
                  />
                  <AttachmentCard
                    userImage="https://xsgames.co/randomusers/assets/avatars/female/25.jpg"
                    img="https://i.picsum.photos/id/171/200/300.jpg?hmac=NHia9vzbBwrKnBFwp7cDZPSxFcVF_VGbnFO5LAjWnuE"
                    filename="ReadMe.doc"
                    date="Sep 7 at 2:42PM"
                  />
                </Box>
              </Box>
              {/* now right side */}
              <Box>
                <Right1 />
                <Right2 />
                <Right3 />
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <InputBase
                    placeholder="Comment on Task"
                    sx={{
                      backgroundColor: "white",
                      flexGrow: "1",
                    }}
                  />
                  <Button variant="contained">Comment</Button>
                </Box>
              </Box>
            </Box>
          </StyledTabs>
        </div>
      </main>
    </div>
  );
};

export default Page3;
