import { Avatar, Badge, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: "50%",
    right: "-6%",
    fontSize: "0.8rem",
    height: "1.6rem",
    width: "1.6rem",
    borderRadius: "100%",
  },
}));

type AvatarLargeType = {
  src: string;
  size: number;
  badgeContent: string | number;
};

const AvatarLarge = ({ src, size, badgeContent }: AvatarLargeType) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(50deg, rgba(50,104,250,1) 75%, rgba(206,210,250,1) 75%)",
        padding: "2px",
        borderRadius: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f7f8fa",
          padding: "0.5rem",
          borderRadius: "100%",
        }}
      >
        <StyledBadge
          color="primary"
          badgeContent={badgeContent}
          overlap="circular"
        >
          <Avatar sx={{ width: size, height: size }} src={src} />
        </StyledBadge>
      </Box>
    </Box>
  );
};

export default AvatarLarge;
