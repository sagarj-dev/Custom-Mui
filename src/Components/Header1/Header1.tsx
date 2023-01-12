import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./Header1.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InputWithIcons from "../Basics/InputWithIcons";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
const Header1 = () => {
  return (
    <div className="Header1">
      <div className="left">
        <CircleIconButton icon={MenuIcon} />
        <Typography variant="h1">Constructor</Typography>
      </div>
      <div className="navbar">
        <Typography variant="subtitle1">Dashboard</Typography>
        <Typography variant="subtitle1">Avout Us</Typography>
        <Typography variant="subtitle1">News</Typography>
        <Typography variant="subtitle1">User Policy</Typography>
        <Typography variant="subtitle1">Contact</Typography>
        <MoreHorizIcon color="disabled" />
      </div>
      <div className="input">
        <InputWithIcons
          startIcon={SearchIcon}
          endIcon={ArrowForwardIosIcon}
          placeholder="Search Products, Orders, and Clients"
        />
      </div>
      <div className="right">
        <PersonIcon color="disabled" />
        <Typography variant="h1">Clayton</Typography>
        <CircleIconButton icon={NotificationsIcon} badgeColor="info" />
        <CircleIconButton icon={CancelIcon} />
      </div>
    </div>
  );
};

export default Header1;
