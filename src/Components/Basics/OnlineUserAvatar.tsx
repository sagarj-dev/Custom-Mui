import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

type OnlineUserAvatarType = {
  img: string;
  bdgColor: "primary" | "secondary" | "error" | "info" | "success" | "warning";
};

const OnlineUserAvatar = ({ img, bdgColor }: OnlineUserAvatarType) => {
  return (
    <StyledBadge overlap="circular" variant="dot" color={bdgColor}>
      <Avatar alt="Remy Sharp" src={img} />
    </StyledBadge>
  );
};

export default OnlineUserAvatar;
