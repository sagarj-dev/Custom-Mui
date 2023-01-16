import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InputWithIcons from "../Basics/InputWithIcons";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box } from "@mui/system";
import { Face, LocationOn } from "@mui/icons-material";

type HeaderType = {
  variant: 1 | 2;
};

const Header = ({ variant }: HeaderType) => {
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
      {variant === 1 && (
        <div className="input">
          <InputWithIcons
            startIcon={SearchIcon}
            endIcon={ArrowForwardIosIcon}
            placeholder="Search Products, Orders, and Clients"
          />
        </div>
      )}
      {variant === 2 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <InputWithIcons startIcon={SearchIcon} placeholder="Search..." />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocationOn color="disabled" />
            <Typography variant="subtitle1">New York</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Face color="disabled" />
            <Typography variant="subtitle1">Adrain Nader</Typography>
          </Box>
        </Box>
      )}
      <div className="right">
        {variant === 1 && (
          <>
            <PersonIcon color="disabled" />
            <Typography variant="h1">Clayton</Typography>
            <CircleIconButton icon={NotificationsIcon} badgeColor="info" />
            <CircleIconButton icon={CancelIcon} />
          </>
        )}
        {variant === 2 && (
          <Box
            sx={{
              mr: 1,
            }}
          >
            <CircleIconButton icon={CancelIcon} />
          </Box>
        )}
      </div>
    </div>
  );
};

export default Header;
