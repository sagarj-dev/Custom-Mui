import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/system";
const ContactIconList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid",
        borderRadius: "50px",
        width: "90%",
        p: 1,
        mt: 4,
        borderColor: "#edeff2",
      }}
    >
      <CallIcon color="warning" />
      <EmailIcon color="secondary" />
      <SnippetFolderIcon color="success" />
      <TelegramIcon color="primary" />
      <WhatsAppIcon color="secondary" />
    </Box>
  );
};

export default ContactIconList;
