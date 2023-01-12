import React from "react";
import "./InputWithIcons.scss";
import { MusicVideo } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";

type InputWithIconsType = {
  startIcon?: typeof MusicVideo;
  endIcon?: typeof MusicVideo;
  placeholder: string;
};

const InputWithIcons = ({
  startIcon: StartIcon,
  placeholder,
  endIcon: EndIcon,
}: InputWithIconsType) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        placeItems: "center",
        borderRadius: "50px",
        gap: 1,
        boxShadow: "0px 3px 13px -12px rgb(0 0 0 / 75%)",
        px: 2,
        py: 1,
      }}
    >
      {StartIcon && <StartIcon color="disabled" fontSize="small" />}
      <InputBase
        sx={{
          color: "#adb8cb",
          width: "100%",
        }}
        placeholder={placeholder}
      />
      {EndIcon && <EndIcon color="disabled" fontSize="small" />}
    </Box>
  );
};

export default InputWithIcons;
