import { Search } from "@mui/icons-material";
import { Box, styled, Tab, Tabs } from "@mui/material";
import React from "react";
import InputWithIcons from "../Basics/InputWithIcons";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SortIcon from "@mui/icons-material/Sort";
import MenuIcon from "@mui/icons-material/Menu";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const StyledTabsPanel = styled(Tabs)(({ theme }) => ({
  "& .MuiButtonBase-root": {
    color: theme.palette.action.disabled,
    padding: "12px 20px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
  },
}));

type StyledTabsType = {
  children: React.ReactNode;
};

const StyledTabs = ({ children }: StyledTabsType) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        border: "2px solid",
        borderColor: "#edeff2",
        mx: 4,
        borderRadius: "15px",
        minHeight: "100%",
        minWidth: "72vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "7vh",
          flexGrow: "1",
          pr: 4,
          pl: 2,
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid",
          borderColor: "#edeff2",
        }}
      >
        <StyledTabsPanel
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab
            icon={<PlaylistAddCheckIcon />}
            iconPosition="start"
            label="Dashbord"
          />
          <Tab icon={<ViewComfyIcon />} iconPosition="start" label="Boards" />
          <Tab icon={<DateRangeIcon />} iconPosition="start" label="Calender" />
          <Tab icon={<SortIcon />} iconPosition="start" label="Gantt" />
          <Tab icon={<MenuIcon />} iconPosition="start" label="Timeline" />
          <Tab
            icon={<TrendingUpIcon />}
            iconPosition="start"
            label="Activity"
          />
        </StyledTabsPanel>
        <InputWithIcons startIcon={Search} placeholder="Search Tasks" />
      </Box>
      <Box sx={{ pr: 4, pl: 5, mb: 2, mt: 3 }}>{children}</Box>
    </Box>
  );
};

export default StyledTabs;
