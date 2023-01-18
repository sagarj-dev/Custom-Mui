import { ArrowForward, ChatBubble, MoreHoriz } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import StyledPaper from "../../../Components/Basics/StyledPaper";
import theme from "../../../styles/MuiTheme/theme";
let alignX = {
  display: "flex",
  alignItems: "center",
};

type InfoCardProps = {
  bgColor?: "primary" | "secondary" | "error" | "info" | "success" | "warning";

  bgImage?: string;
  img?: string;
  title: string;
  count: number;
};
const InfoCard = ({ bgColor, bgImage, img, title, count }: InfoCardProps) => {
  return (
    <StyledPaper
      sx={{
        padding: "30px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: img ? 1 : 6,
        backgroundColor:
          !img && bgColor ? theme.palette[bgColor].main : "transperant",
        backgroundImage: `url(${bgImage})`,
        boxShadow:
          !img && bgColor
            ? `0px 7px 20px -4px ${theme.palette[bgColor].main}`
            : "none",
        backgroundSize: "cover",
      }}
    >
      {!img && bgColor && (
        <Box
          sx={{
            position: "absolute",
            top: "-5%",
            left: "10%",
          }}
        >
          <Typography
            variant="h1"
            fontSize="9rem"
            color="rgba(255,255,255,0.1)"
          >
            {count}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          ...alignX,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            ...alignX,
            gap: 3,
          }}
        >
          <ChatBubble color="disabled" />
          <Typography variant="subtitle2">{count} ARTICLES</Typography>
        </Box>
        <MoreHoriz color="disabled" />
      </Box>
      {img && <img src={img} />}
      <Box
        sx={{
          ...alignX,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="subtitle2">{title}</Typography>
        <ArrowForward color="disabled" />
      </Box>
    </StyledPaper>
  );
};

export default InfoCard;
