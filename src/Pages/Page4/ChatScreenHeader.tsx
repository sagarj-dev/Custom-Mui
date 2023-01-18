import { Call, MoreHoriz, OpenInFull, Videocam } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
const SX_innerBox = {
  display: "flex",
  gap: 2,
};
const ChatScreenHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid var(--light-grey)",
        alignItems: "center",
        height: "50px",
      }}
    >
      <Box sx={SX_innerBox}>
        <Call color="disabled" />
        <Videocam color="disabled" />
      </Box>
      <Box>
        <Typography variant="subtitle2">Ina Roberson</Typography>
      </Box>
      <Box sx={SX_innerBox}>
        <OpenInFull color="disabled" />
        <MoreHoriz color="disabled" />
      </Box>
    </Box>
  );
};

export default ChatScreenHeader;
