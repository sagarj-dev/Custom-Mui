import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AttachmentIcon from "@mui/icons-material/Attachment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import React from "react";

type TaskDetailsCardType = {
  mainImage?: string;
  users: string[];
  category: string;
  title: string;
  listCount?: number;
  attachmentCount?: number;
  pendingDays: number;
};

const TaskDetailsCard = ({
  mainImage,
  users,
  category,
  title,
  listCount,
  attachmentCount,
  pendingDays,
}: TaskDetailsCardType) => {
  return (
    <Box>
      <Card
        sx={{
          minWidth: "300px",
          border: pendingDays && pendingDays <= 1 ? "2px solid" : "none",
          borderColor: "error.main",
          mt: 2,
          boxShadow: "0px 3px 13px -12px rgb(0 0 0 / 75%)",
        }}
        elevation={0}
      >
        {mainImage && (
          <CardMedia
            component="img"
            alt="green iguana"
            height="150"
            image={mainImage}
          />
        )}
        <CardContent
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
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" fontSize="12px">
              {category}
            </Typography>

            <AvatarGroup max={5}>
              {users.map((user, i) => (
                <Avatar
                  key={i}
                  src={user}
                  sx={{
                    width: 30,
                    height: 30,
                  }}
                />
              ))}
            </AvatarGroup>
          </Box>
          <Typography variant="h1" fontSize="14px">
            {title}
          </Typography>

          {listCount && attachmentCount && pendingDays && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FormatListBulletedIcon color="disabled" />
                <Typography variant="subtitle1" fontSize={12}>
                  {listCount}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AttachmentIcon color="disabled" />
                <Typography variant="subtitle1" fontSize={12}>
                  {attachmentCount}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccessAlarmIcon
                  color={pendingDays <= 1 ? "error" : "disabled"}
                />
                <Typography
                  variant="subtitle1"
                  fontSize={12}
                  sx={{ color: pendingDays <= 1 ? "error.main" : "" }}
                >
                  {pendingDays} Days Left
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskDetailsCard;
