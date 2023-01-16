import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OnlineUserAvatar from "../OnlineUserAvatar";

type AttachmentCardType = {
  filename: string;
  date: string;
  img: string;
  userImage: string;
};

const AttachmentCard = ({
  filename,
  date,
  img,
  userImage,
}: AttachmentCardType) => {
  return (
    <Box
      sx={{
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url('${img}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "130px",
          width: "110px",
          position: "relative",
          borderRadius: "10px",
          //   backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%,50%)",
          }}
        >
          <OnlineUserAvatar img={userImage} bdgColor="secondary" />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 7,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 1,
        }}
      >
        <Typography variant="h2">{filename}</Typography>
        <Typography variant="subtitle1">{date}</Typography>
      </Box>
    </Box>
  );
};

export default AttachmentCard;
