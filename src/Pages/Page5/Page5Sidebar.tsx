import { Add, Label, Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import GlowingButton from "../../Components/Basics/GlowingButton";
import MyList from "../../Components/Basics/MyList";

const Page5Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box px={2}>
        <GlowingButton color="warning" icon={Mail}>
          Compose
        </GlowingButton>
      </Box>
      <Box mt={5}>
        <MyList />
      </Box>

      <Box mt={5}>
        <List disablePadding>
          <ListItem
            sx={{
              py: 0,
            }}
          >
            <ListItemText>
              <Typography variant="subtitle1" fontSize="14px">
                Lebels
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Label color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  Notes
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Label color="error" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  Important Letters
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Label color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  From Family
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Label color="warning" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  Imagium
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Label color="info" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  Work
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              py: 0.5,
            }}
          >
            <ListItemButton
              sx={{
                py: 0,
              }}
            >
              <ListItemIcon>
                <Add color="disabled" />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="subtitle1" fontSize="14px">
                  New Label
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Page5Sidebar;
