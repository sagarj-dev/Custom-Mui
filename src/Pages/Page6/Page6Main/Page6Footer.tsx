import {
  ArrowUpward,
  Facebook,
  Forum,
  Instagram,
  KeyboardArrowDown,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CircleIconButton from "../../../Components/Basics/CircleIconButton";

const alignX = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const Page6Footer = () => {
  return (
    <Box
      sx={{
        ...alignX,
        py: 2,
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          ...alignX,
        }}
      >
        <Typography variant="subtitle1">
          &#169; 2019 Home Box Office, Inc. All rights reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          ...alignX,
        }}
      >
        <CircleIconButton icon={Facebook} />
        <CircleIconButton icon={Twitter} />
        <CircleIconButton icon={Instagram} />
        <CircleIconButton icon={Pinterest} />
      </Box>
      <Box
        sx={{
          ...alignX,
          border: "2px solid var(--light-grey)",
          py: 1,
          px: 2,
          borderRadius: "50px",
        }}
      >
        <Typography variant="subtitle1">English lenguage</Typography>
        <KeyboardArrowDown color="disabled" />
      </Box>
      <Box
        sx={{
          ...alignX,
        }}
      >
        <CircleIconButton icon={Forum} />
        <CircleIconButton icon={ArrowUpward} />
      </Box>
    </Box>
  );
};

export default Page6Footer;
