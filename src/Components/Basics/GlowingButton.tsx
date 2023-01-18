import { Email } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/MuiTheme/theme";
type GlowingButtonType = {
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children: React.ReactNode;
  icon?: typeof Email;
};
const GlowingButton = ({ color, children, icon: Icon }: GlowingButtonType) => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          boxShadow: `0px 7px 20px -4px ${theme.palette[color].main}`,
          cursor: "pointer",
          borderRadius: "50px",
          py: 1.5,
          "&:hover": {
            boxShadow: `0px 7px 15px -4px ${theme.palette[color].main}`,
            backgroundColor: theme.palette[color].main,
          },
        }}
        fullWidth
        startIcon={Icon && <Icon fontSize="large" sx={{ mr: 2 }} />}
        color={color}
      >
        <Typography fontSize="12px">{children}</Typography>
      </Button>
    </Box>
  );
};

export default GlowingButton;
