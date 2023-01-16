import { Breadcrumbs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";

const MyBreadcrumb = () => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid #edeff2",
      }}
    >
      <Box
        sx={{
          pr: 4,
          pl: 5,
          pb: 2,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" color="disabled" />}
          aria-label="breadcrumb"
        >
          <Typography variant="h2">Space</Typography>
          <Typography variant="h2">Name Space</Typography>
          <Typography variant="h2">Name Task</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default MyBreadcrumb;
