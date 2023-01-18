import { Box } from "@mui/system";
import React from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenInputSection from "./ChatScreenInputSection";
import ChatScreenMsgs from "./ChatScreenMsgs";

const ChatScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        px: 4,
      }}
    >
      <ChatScreenHeader />
      <ChatScreenMsgs />
      <ChatScreenInputSection />
    </Box>
  );
};

export default ChatScreen;
