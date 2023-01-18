import { ArrowForward, Search } from "@mui/icons-material";
import { Button, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "url('https://img.freepik.com/free-photo/businessman-with-his-staff_1098-2177.jpg?t=st=1674027439~exp=1674028039~hmac=6ecaff6b91943af6e9650ea47a8d711959090e502d287498bab1137b2c4c2578')",
        backgroundSize: "cover",
        backgroundOrigin: "center",
        height: "450px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          background: "rgba(0,0,0,0.4)",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Typography variant="h1" fontSize="25px" color="common.white">
              Welcome
            </Typography>
            <Typography variant="body1" fontSize="25px" color="common.white">
              How Can We Help?
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.1)",
              py: 2,
              px: 3,
              gap: 2,
              borderRadius: "50px",
              width: "100%",
            }}
          >
            <Search htmlColor="rgba(255,255,255,0.5)" />
            <InputBase
              placeholder="How Can We Help You?"
              sx={{
                flexGrow: "1",
                color: "white",
              }}
            />
            <ArrowForward htmlColor="rgba(255,255,255,0.5)" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h1" color="common.white">
              Popular Search:
            </Typography>
            <Box>
              <Button sx={{ color: "white" }}>Print</Button>
              <Button sx={{ color: "white" }}>Resize</Button>
              <Button sx={{ color: "white" }}>Billing</Button>
              <Button sx={{ color: "white" }}>Search</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
