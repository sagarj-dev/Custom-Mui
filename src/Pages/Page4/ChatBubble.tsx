import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIconButton from "../../Components/Basics/CircleIconButton";
type ChatBubbleProps = {
  msgType: "left" | "right";
  img: string;
  msg: string;
};
const ChatBubble = ({ msgType, img, msg }: ChatBubbleProps) => {
  return (
    <Box
      sx={{
        width: "45%",

        alignSelf: msgType === "left" ? "flex-start" : "flex-end",
        flexDirection: msgType === "left" ? "row" : "row-reverse",
        display: "flex",
        mt: 1,
        gap: 2,
      }}
    >
      <CircleIconButton img={img} />
      <Box
        sx={{
          mt: 1,
          flexGrow: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: msgType === "left" ? "row" : "row-reverse",
          }}
        >
          <Typography variant="h1" fontSize="12px">
            Stephen Park
          </Typography>
          <Typography variant="subtitle1" fontSize="12px">
            12:45
          </Typography>
        </Box>
        <Box
          sx={{
            my: 1,
          }}
        >
          <Typography
            variant="h2"
            fontSize="13px"
            textAlign={msgType === "left" ? "start" : "end"}
          >
            {msg}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
