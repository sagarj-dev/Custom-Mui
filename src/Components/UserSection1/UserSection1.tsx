import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./UserSection1.scss";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AvatarLarge from "../AvatarLarge/AvatarLarge";
import { Typography } from "@mui/material";
import ListMenu from "../ListMenu/ListMenu";
import ContactIconList from "../ContactIconList/ContactIconList";
const UserSection1 = () => {
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
        <ContactIconList />
      </div>
    </div>
  );
};

export default UserSection1;
