import { KeyboardArrowRight } from "@mui/icons-material";
import { ListItem, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type ListMenuItemProps = {
  title: string;
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "disabled";
};
const ListMenuItem = ({ title, color }: ListMenuItemProps) => {
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            fontSize="30px"
            color={`${color}.main`}
          >
            &#x2022;
          </Typography>
          <Typography variant="h2" color={`${color}.main`}>
            {title}
          </Typography>
        </Box>
        <KeyboardArrowRight color={color} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListMenuItem;
