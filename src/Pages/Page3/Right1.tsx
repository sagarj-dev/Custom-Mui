import { KeyboardArrowRight } from "@mui/icons-material";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GlowingIconButton from "../../Components/Basics/GlowingIconButton";
const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  paddingRight: 20,
  marginLeft: 20,
}));
const Right1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 2,
        pb: 2,
        borderBottom: "2px solid #edeff2;",
      }}
    >
      <StyledBox
        sx={{
          borderRight: "2px solid #edeff2;",
        }}
      >
        <Typography variant="subtitle1">CREATED</Typography>
        <Typography variant="h2">Sep 2, 9:06 pm</Typography>
      </StyledBox>
      <StyledBox
        sx={{
          borderRight: "2px solid #edeff2;",
        }}
      >
        <Typography variant="subtitle1">TIME TRACKED</Typography>
        <Box
          display={"flex"}
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <GlowingIconButton color="primary" />
          <Typography variant="h2">0:00</Typography>
        </Box>
      </StyledBox>
      <StyledBox>
        <Typography variant="subtitle1">START DATE</Typography>
        <Typography variant="h2">Sep 3, 9:06 pm</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="subtitle1">
          <KeyboardArrowRight color="disabled" />
        </Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="subtitle1">DUE DATE</Typography>
        <Typography variant="h2">Sep 4, 9:06 pm</Typography>
      </StyledBox>
    </Box>
  );
};

export default Right1;
