import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CloudIcon from "@mui/icons-material/Cloud";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import BuildIcon from "@mui/icons-material/Build";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledList = styled(List)(({ theme }) => ({
  "&.MuiList-root": {
    border: `2px solid #edeff2`,
    borderRadius: "20px",

    "&& .MuiListItem-root": {
      "&:nth-child(odd)": {
        borderRight: `2px solid #edeff2`,
        borderBottom: `2px solid #edeff2`,
      },
      "&:nth-child(even)": {
        borderBottom: `2px solid #edeff2`,
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
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.action.disabled,
    "&:hover": {
      transform: "scale(1.2)",
      backgroundColor: "white",
      borderRadius: 7,
    },
    "&:hover .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
    "&:hover .MuiTypography-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root": {
      display: "grid",
      placeItems: "center",
      margin: "1rem 0.7rem 0.5rem 0.7rem",
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
        <ListItem component={Link} to="/">
          <ListItemButton>
            <ListItemIcon>
              <ViewComfyIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Dashboard</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/2">
          <ListItemButton>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Notes</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/3">
          <ListItemButton>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Tasks</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/4">
          <ListItemButton>
            <ListItemIcon>
              <CloudIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Files</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/5">
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Emails</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/6">
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Clients</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem component={Link} to="/7">
          <ListItemButton>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Calender</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Settings</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </StyledList>
    </div>
  );
};

export default ListMenu;
