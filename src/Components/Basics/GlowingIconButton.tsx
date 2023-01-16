import { PlayArrow } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import theme from "../../styles/MuiTheme/theme";

type GlowingIconButtonType = {
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};
const GlowingIconButton = ({ color }: GlowingIconButtonType) => {
  return (
    <Box
      sx={{
        backgroundColor: `${color}.main`,
        width: "35px",
        height: "35px",
        borderRadius: "100%",
        display: "grid",
        placeItems: "center",
        boxShadow: `0px 9px 24px -3px ${theme.palette[color].main}`,
        cursor: "pointer",
      }}
    >
      <PlayArrow
        sx={{
          color: "white",
        }}
      />
    </Box>
  );
};

export default GlowingIconButton;
