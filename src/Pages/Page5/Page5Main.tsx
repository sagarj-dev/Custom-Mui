import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  CheckCircle,
  CheckCircleOutlineOutlined,
  CheckOutlined,
  Drafts,
  Flag,
  Folder,
  Forward,
  Info,
  Label,
  Settings,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Button, Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CircleIconButton from "../../Components/Basics/CircleIconButton";

const HeadrMenu = [
  { icon: <CheckOutlined color="disabled" />, title: "Select" },
  { icon: <Forward color="disabled" />, title: "Forward" },
  { icon: <Info color="disabled" />, title: "Spam" },
  { icon: <Drafts color="disabled" />, title: "Read" },
  { icon: <Label color="disabled" />, title: "Label" },
  { icon: <Folder color="disabled" />, title: "Folder" },
  { icon: <Flag color="disabled" />, title: "Fix" },
];

const EmailPrev = ({ i }: { i: number }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f7f8fa",
        px: 4,
        py: 1,
        borderRadius: "50px",
        my: 1,
      }}
    >
      <Checkbox
        icon={<CheckCircleOutlineOutlined color="disabled" />}
        checkedIcon={<CheckCircle color="primary" />}
      />
      <CircleIconButton
        img={`https://xsgames.co/randomusers/assets/avatars/${
          i % 3 === 0 ? "male" : "female"
        }/${i * 3}.jpg`}
      />
      <Typography variant="h1">Nannie Carpenter</Typography>
      <Typography variant="subtitle1">The Glossary Of Telescopes</Typography>
      <Typography variant="subtitle2">
        The Universe Through A Child S Eyes
      </Typography>
      <Typography variant="subtitle1">03:29 AM</Typography>
      <Checkbox
        icon={<StarBorderOutlined color="disabled" />}
        checkedIcon={<Star color="info" />}
      />
    </Box>
  );
};

const Page5Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        px: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {HeadrMenu.map((m) => (
          <Button startIcon={m.icon} disableRipple>
            <Typography variant="subtitle2">{m.title}</Typography>
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: "1",
          mt: 2,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
          <EmailPrev i={d} />
        ))}
      </Box>
      <Box
        sx={{
          justifySelf: "flex-end",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowDownward color="disabled" />
        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <ArrowBack color="disabled" />
          <Typography variant="subtitle1" fontSize="14px">
            1 - 50 from 8016
          </Typography>
          <ArrowForward color="disabled" />
        </Box>
        <Settings color="disabled" />
      </Box>
    </Box>
  );
};

export default Page5Main;
