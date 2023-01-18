import { Box } from "@mui/material";
import React from "react";
import ChatBubble from "./ChatBubble";

const ChatScreenMsgs = () => {
  return (
    <Box
      sx={{
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        py: 1,
      }}
    >
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/44.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="left"
      />
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/45.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="right"
      />
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="left"
      />
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/47.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="right"
      />
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/48.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="left"
      />
      <ChatBubble
        img="https://xsgames.co/randomusers/assets/avatars/male/44.jpg"
        msg="lorensadjfgDFEASG EAWfd wef wef wef wef asf asd asd c as daW SED FEVC WSE F WERDVG AW3EFG "
        msgType="right"
      />
    </Box>
  );
};

export default ChatScreenMsgs;
