import React from "react";
import CircleIconButton from "../Basics/CircleIconButton";
import "./Sidebar1.scss";
import ExploreIcon from "@mui/icons-material/Explore";
import StarIcon from "@mui/icons-material/Star";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
const Sidebar1 = () => {
  return (
    <div className="Sidebar1">
      <div className="sidebar1-menu">
        <CircleIconButton icon={ExploreIcon} color="primary" />
        <CircleIconButton icon={StarIcon} />
        <CircleIconButton icon={MapsUgcIcon} badgeColor="primary" />
        <CircleIconButton icon={TrendingUpIcon} />
        <CircleIconButton icon={PublicIcon} />
        <CircleIconButton icon={ApartmentIcon} />
      </div>
      <div className="sidebar1-users">
        <CircleIconButton
          img="https://xsgames.co/randomusers/avatar.php?g=female"
          badgeColor="primary"
        />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        <CircleIconButton img="https://xsgames.co/randomusers/avatar.php?g=male" />
        <CircleIconButton icon={AddCircleRoundedIcon} />
      </div>
    </div>
  );
};

export default Sidebar1;
