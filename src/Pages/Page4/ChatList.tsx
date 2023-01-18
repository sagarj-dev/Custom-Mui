import { Call, Message, People, Search, Settings } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import InputWithIcons from "../../Components/Basics/InputWithIcons";
import OnlineUserAvatar from "../../Components/Basics/OnlineUserAvatar";
type ChatListElmProps = {
  name: string;
  users: {
    img: string;
    status: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  }[];
  msg: string;
  isActive: boolean;
};
const ChatListElm = ({ name, users, msg, isActive }: ChatListElmProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        maxWidth: "100%",
        p: 2,
        borderBottom: "1px solid var(--light-grey)",
        borderRadius: "20px",
        backgroundColor: isActive ? "primary.main" : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: -3,
        }}
      >
        {users.map((user, i) => (
          <Box
            sx={{
              mt: i ? -1.5 : 0,
            }}
          >
            <OnlineUserAvatar img={user.img} bdgColor={user.status} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color={isActive ? "white" : ""}
            variant="subtitle2"
            fontSize="12px"
          >
            Online
          </Typography>
          <Typography
            color={isActive ? "white" : ""}
            variant="subtitle2"
            fontSize="12px"
          >
            12:45
          </Typography>
        </Box>
        <Typography color={isActive ? "white" : ""} variant="h2">
          {name}
        </Typography>
        <Typography
          color={isActive ? "white" : ""}
          variant="subtitle2"
          fontSize="12px"
          mt={1}
          pr={2}
        >
          {msg}
        </Typography>
      </Box>
    </Box>
  );
};

const data: ChatListElmProps[] = [
  {
    name: "Alberta Reyes",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
        status: "secondary",
      },
    ],
    msg: "Adwords Keyword Research For Beginners",
    isActive: false,
  },
  {
    name: "Andrew Bass",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
        status: "primary",
      },
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
        status: "info",
      },
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
        status: "secondary",
      },
    ],
    msg: "There IS a lot of exciting stuff go•ng on in the stars above us that make astronomy",
    isActive: false,
  },
  {
    name: "Ina Roberson",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
        status: "secondary",
      },
    ],
    msg: "AdWords Keyword Research For Beginners",
    isActive: true,
  },
  {
    name: "The Amazing Hubble",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
        status: "secondary",
      },
    ],
    msg: "AdWords Keyword Research For Beginners",
    isActive: false,
  },
  {
    name: "Floyd Lloyd",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/female/7.jpg",
        status: "secondary",
      },
    ],
    msg: "AdWords Keyword Research For Beginners",
    isActive: false,
  },
  {
    name: "Floyd Lloyd",
    users: [
      {
        img: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
        status: "secondary",
      },
    ],
    msg: "AdWords Keyword Research For Beginners",
    isActive: false,
  },
];

const ChatList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid var(--light-grey);",
          width: "100%",
        }}
      >
        <InputWithIcons
          startIcon={Search}
          placeholder="Search in Messages"
          disableShadow
        />
      </Box>
      {/* https://prnt.sc/sSL1ejVAQvRj */}
      {data.map((d) => (
        <ChatListElm
          isActive={d.isActive}
          msg={d.msg}
          users={d.users}
          name={d.name}
        />
      ))}

      <Box
        sx={{
          justifySelf: "flex-end",
          display: "flex",
          justifyContent: "space-evenly",
          py: 1,
        }}
      >
        <People color="disabled" />
        <Message color="primary" />
        <Call color="disabled" />
        <Settings color="disabled" />
      </Box>
    </Box>
  );
};

export default ChatList;
