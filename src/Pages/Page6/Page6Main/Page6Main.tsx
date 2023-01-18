import { MoreHoriz, Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import StyledPaper from "../../../Components/Basics/StyledPaper";
import Hero from "./Hero";
import InfoCard from "./InfoCard";
import Page6Footer from "./Page6Footer";

const cardColumnStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  flexGrow: "1",
};

const FeaturedArticlesList = [
  "Share Designs with your Team",
  "Accessign your invoice",
  "Introduction to Projects",
  "Sing up to Service",
  "Purchase Premium Elements",
  "use Photos in Grids",
  "Account Setup",
  "Security",
  "Advanced Search",
  "Obtain Print Quality Files",
  "Design with Service",
  "Change your account",
  "Publish Team Templates",
  "Upgrade to Pro Version",
  "Working as a Team",
  "Nonprofit Program",
];
const Page6Main = () => {
  return (
    <Box
      sx={{
        flexGrow: "1",
        px: 4,
        pt: 2,
        borderLeft: "2px solid var(--light-grey)",
      }}
    >
      <Hero />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          py: 3,
        }}
      >
        <Box
          sx={{
            ...cardColumnStyle,
          }}
        >
          <InfoCard title="Account Managment" count={28} img="/111.png" />
          <InfoCard title="Automated Emails" count={36} bgColor="warning" />
          <InfoCard title="Account Managment" count={28} />
        </Box>
        <Box
          sx={{
            ...cardColumnStyle,
          }}
        >
          <InfoCard title="Create and Send" count={28} bgColor="primary" />
          <InfoCard
            title="Help With Setup & Installation"
            count={28}
            img="/222.png"
          />
          <InfoCard
            title="Deliverability and B0Lmces"
            count={28}
            bgImage="https://i.picsum.photos/id/933/200/300.jpg?hmac=8zdipGWKGkHz8wyA9J63P3fzghuUL9wqV5Y34b8mLTI"
          />
        </Box>
        <Box
          sx={{
            ...cardColumnStyle,
          }}
        >
          <InfoCard title="Billing and Payment" count={28} />
          <InfoCard
            title="Integrations and API"
            count={28}
            bgImage="https://i.picsum.photos/id/819/200/300.jpg?hmac=QrFu2y-FbDRBR4OFiSYDWP-w2egSTjiMkeagJb0rqM0"
          />
          <InfoCard title="Billing and Payment" count={28} img="/333.png" />
        </Box>
      </Box>

      <StyledPaper
        sx={{
          padding: "3rem 4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Star color="info" />
            <Typography variant="h1">Featured Articles</Typography>
          </Box>
          <MoreHoriz color="disabled" />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            rowGap: 4,
            mt: 5,
          }}
        >
          {FeaturedArticlesList.map((a) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="h1" fontSize="25px" color="info.main">
                &#x2022;
              </Typography>
              <Typography variant="subtitle2">{a}</Typography>
            </Box>
          ))}
        </Box>
      </StyledPaper>
      <Page6Footer />
    </Box>
  );
};

export default Page6Main;
