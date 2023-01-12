import { Person } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./ListMenu.scss";

const StyledList = styled(List)(({ theme }) => ({
  "&.MuiList-root": {
    border: `2px solid ${theme.palette.action.disabled}`,
    borderRadius: "20px",

    "&& .MuiListItem-root": {
      "&:nth-child(odd)": {
        borderRight: `2px solid ${theme.palette.action.disabled}`,
        borderBottom: `2px solid ${theme.palette.action.disabled}`,
      },
      "&:nth-child(even)": {
        borderBottom: `2px solid ${theme.palette.action.disabled}`,
      },
      "&:nth-last-child(2)": {
        borderBottom: "none",
      },
      "&:nth-last-child(1)": {
        borderBottom: "none",
      },
    },
    "&& .MuiListItem-gutters": {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },

  "& .MuiListItemButton-root": {
    display: "flex",
    flexDirection: "column",
    color: theme.palette.action.disabled,

    "& .MuiListItemIcon-root": {
      display: "grid",
      placeItems: "center",
      color: theme.palette.action.disabled,
    },
  },
}));

StyledList.defaultProps = {
  disablePadding: true,
};

const ListMenu = () => {
  return (
    <div>
      <StyledList
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Notes</ListItemText>
          </ListItemButton>
        </ListItem>
      </StyledList>
    </div>
  );
};

export default ListMenu;
