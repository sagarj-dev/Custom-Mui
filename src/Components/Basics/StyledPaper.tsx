import { Paper } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import React from "react";

type StyledPaperType = {
  children: React.ReactNode;
  sx?: CSSProperties;
};

const StyledPaper = ({ children, sx }: StyledPaperType) => {
  return (
    <Paper
      elevation={0}
      sx={{
        boxShadow: "0px 3px 13px -12px rgb(0 0 0 / 75%)",
        borderRadius: "10px",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default StyledPaper;
