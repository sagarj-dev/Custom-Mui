import { MusicVideo } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CircleIconButton.scss";

type CircleIconButtonType = {
  icon?: typeof MusicVideo;
  badgeColor?:
    | "primary"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | "disabled"
    | "action"
    | undefined;
  img?: string;
};

const CircleIconButton = ({
  icon: Icon,
  badgeColor,
  color = "disabled",
  img,
}: CircleIconButtonType) => {
  if (img) {
    return (
      <Badge
        color={badgeColor ? badgeColor : undefined}
        variant="dot"
        invisible={badgeColor ? false : true}
        overlap="circular"
      >
        <Avatar sx={{ width: 45, height: 45, cursor: "pointer" }} src={img} />
      </Badge>
    );
  }

  if (Icon) {
    return (
      <Badge
        color={badgeColor ? badgeColor : undefined}
        variant="dot"
        invisible={badgeColor ? false : true}
        overlap="circular"
      >
        <Box
          sx={{
            bgcolor: "white",
            p: 1.5,
            borderRadius: "100%",
            width: "23px",
            height: "23px",
            display: "grid",
            placeItems: "center",
            boxShadow: "-1px 4px 15px -12px rgba(0,0,0,0.75)",
            cursor: "pointer",
          }}
        >
          <Icon color={color} fontSize="small" />
        </Box>
      </Badge>
    );
  }
  return <></>;
};

export default CircleIconButton;
