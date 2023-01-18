import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import {
  AccessTime,
  Delete,
  Description,
  Inbox,
  Info,
  Label,
  Send,
  Settings,
} from "@mui/icons-material";

const StyledList = styled(List)(({ theme }) => ({
  "&.MuiList-root": {
    width: "100%",
    "&& .MuiListItem-gutters": {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  "& .MuiListItemText-primary": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .MuiListItemButton-root": {
    transition: "all 0.3s ease",
    color: theme.palette.action.disabled,
    transformOrigin: "left center",
    padding: 0,

    "& .count": {
      marginRight: 30,
      backgroundColor: "rgba(254, 100, 59, 0.2)",
      height: "20px",
      width: "20px",
      display: "grid",
      placeItems: "center",
      borderRadius: "100%",
      padding: "0.1rem 0.1rem",
      color: theme.palette.warning.main,
    },
    // "&:hover": {
    //   transform: "scale(1.1)",
    //   backgroundColor: "white",
    //   borderRadius: 7,
    // },
    // "&:hover .MuiListItemIcon-root": {
    //   color: theme.palette.primary.main,
    // },
    // "&:hover .MuiTypography-root": {
    //   color: theme.palette.primary.main,
    // },
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

const MyList = () => {
  return (
    <div>
      <StyledList>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Inbox
              </Typography>
              <Typography variant="subtitle1" fontSize="14px" className="count">
                3
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Panding Emails
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Sent
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Drafts
              </Typography>
              <Typography variant="subtitle1" fontSize="14px" className="count">
                1
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Spam
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Trash
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Label />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Labels
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Settings
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </StyledList>
    </div>
  );
};

export default MyList;
