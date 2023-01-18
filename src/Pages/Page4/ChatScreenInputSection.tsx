import { Attachment, InsertPhoto, Send } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React from "react";

const ChatScreenInputSection = () => {
  return (
    <Box
      sx={{
        justifySelf: "flex-end",
        display: "flex",
        alignItems: "center",
        gap: 1,
        height: "40px",
        borderTop: "2px solid var(--light-grey)",
      }}
    >
      <Attachment color="disabled" />
      <InsertPhoto color="disabled" />
      <InputBase
        placeholder="Type a Message"
        sx={{
          fontSize: "14px",
          color: "#aab3c4",
          flexGrow: "1",
        }}
      />
      <Send color="primary" />
    </Box>
  );
};

export default ChatScreenInputSection;
