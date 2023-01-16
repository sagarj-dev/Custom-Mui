import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./UserSection.scss";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AvatarLarge from "../AvatarLarge/AvatarLarge";
import { Typography } from "@mui/material";
import ListMenu from "../ListMenu/ListMenu";
import ContactIconList from "../ContactIconList/ContactIconList";
import { Box } from "@mui/system";
import { ArrowForward, Help, Message } from "@mui/icons-material";

type IconButtonWIthArrowType = {
  startIcon: typeof PersonIcon;
  title: string;
};
const IconButtonWIthArrow = ({
  startIcon: Icon,
  title,
}: IconButtonWIthArrowType) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Icon color="disabled" />
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <ArrowForward color="disabled" />
    </Box>
  );
};

type UserSectionType = {
  variant: 1 | 2;
};

const UserSection = ({ variant }: UserSectionType) => {
  return (
    <div className="UserSection1">
      <div className="topMenu">
        <CircleIconButton icon={PersonIcon} />
        <CircleIconButton icon={MoreHorizIcon} />
      </div>
      <div className="userDetails">
        <AvatarLarge
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          badgeContent={4}
          size={110}
        />
        <div>
          <Typography variant="subtitle1">Hello Alfred Brynt</Typography>
          <Typography variant="subtitle2">adrian.nader@yahoo.com</Typography>
        </div>
        <ListMenu />
        {variant === 1 && <ContactIconList />}
        {variant === 2 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 2,
            }}
          >
            <IconButtonWIthArrow startIcon={Message} title="Send FeedBack" />
            <IconButtonWIthArrow startIcon={Help} title="Send FeedBack" />
          </Box>
        )}
      </div>
    </div>
  );
};

export default UserSection;
