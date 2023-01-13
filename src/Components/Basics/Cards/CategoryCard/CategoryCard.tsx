import { Add } from "@mui/icons-material";

import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { Divider, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CategoryCard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 3px 13px -12px rgb(0 0 0 / 75%)",
        width: "100%",
      }}
    >
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderRightWidth: "3px",
          borderRadius: "30px",
          borderColor: "primary.main",
        }}
      />
      <Box
        sx={{
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2">TO DO</Typography>
          <Typography
            variant="h2"
            fontSize={12}
            sx={{
              border: "2px solid #f5f6f7",
              py: 1,
              px: 1.5,
              ml: 1,
              borderRadius: "100%",
            }}
          >
            5
          </Typography>
        </Box>
        <Box sx={{ ml: 3 }}>
          <IconButton>
            <MoreHoriz color="disabled" />
          </IconButton>
          <IconButton>
            <Add color="disabled" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default CategoryCard;
