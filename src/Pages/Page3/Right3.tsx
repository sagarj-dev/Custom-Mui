import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OnlineUserAvatar from "../../Components/Basics/OnlineUserAvatar";
import StyledPaper from "../../Components/Basics/StyledPaper";
const Comment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <Box>
        <OnlineUserAvatar
          img="https://xsgames.co/randomusers/assets/avatars/male/28.jpg"
          bdgColor="secondary"
        />
      </Box>
      <StyledPaper
        sx={{
          padding: 2,
          flexGrow: "1",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography variant="h1">You</Typography>
            <Typography variant="subtitle2">Commented</Typography>
          </Box>
          <Typography variant="subtitle2">Just Now</Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            my: 2,
          }}
        >
          Internet Advertising What Went Wrong
        </Typography>
      </StyledPaper>
    </Box>
  );
};
const Right3 = () => {
  return (
    <Box borderBottom="2px solid #edeff2" pb={3}>
      <Box
        sx={{
          px: 2,
          gap: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            my: 2,
          }}
        >
          LAST ACTIVITY BY TASK
        </Typography>
        <Comment />
      </Box>
    </Box>
  );
};

export default Right3;
