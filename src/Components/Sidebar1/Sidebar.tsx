import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./Sidebar.scss";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Box } from "@mui/system";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";

type SidebarType = {
  variant?: 1 | 2;
};

const Sidebar = ({ variant = 1 }: SidebarType) => {
  return (
    <div className={`${variant === 1 ? "Sidebar1" : "Sidebar1 Sidebar2"}`}>
      {variant === 1 && (
        <div className="sidebar1-menu">
          <CircleIconButton icon={ExploreIcon} color="primary" />
          <CircleIconButton icon={StarIcon} />
          <CircleIconButton icon={MapsUgcIcon} badgeColor="primary" />
          <CircleIconButton icon={TrendingUpIcon} />
          <CircleIconButton icon={PublicIcon} />
          <CircleIconButton icon={ApartmentIcon} />
        </div>
      )}
      {variant === 2 && <div></div>}

      <div className="sidebar1-users">
        <CircleIconButton
          img="https://xsgames.co/randomusers/avatar.php?g=female"
          badgeColor="primary"
        />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        {variant === 1 && <CircleIconButton icon={AddCircleRoundedIcon} />}
      </div>

      {variant === 2 && (
        <Box mb={4}>
          <CircleIconButton icon={ArrowForward} />
        </Box>
      )}
    </div>
  );
};

export default Sidebar;
