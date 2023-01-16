import { Box, Typography } from "@mui/material";
import React from "react";

type ActivityListItemType = {
  title: string;
  assignedTo?: string;
  dateTime: string;
};
let ActivityListItem = ({
  title,
  assignedTo,
  dateTime,
}: ActivityListItemType) => {
  return (
    <Box display={"flex"} justifyContent="space-between">
      <Box display={"flex"} alignItems="center" gap={1}>
        <Typography variant="h1" color="primary.main">
          You
        </Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h1" color="primary.main">
          {assignedTo}
        </Typography>
      </Box>

      <Typography variant="h1">{dateTime}</Typography>
    </Box>
  );
};

let data: ActivityListItemType[] = [
  {
    title: "Created This Task",
    dateTime: "Sep 3, 16:00 pm",
  },
  {
    title: "Assigned To:",
    dateTime: "Sep 3, 15:00 pm",
    assignedTo: "Kenneth Jordan",
  },
  {
    title: "Chandge Due Date frorn 6 Days 11 am to 6 days ago. 2pm",
    dateTime: "Sep 3.14:00 pm",
  },
  {
    title: "Created Sub Task: aChange Style Now»",
    dateTime: "Sep 3, 12:00 pm",
  },
  {
    title: "Assigned To:",
    dateTime: "Sep 3, 11:00 pm",
    assignedTo: "Kenneth Jordan",
  },
  {
    title: "Chandge Due Date from 6 Days Ago, I I am to 6 days ago, 2pm",
    dateTime: "Sep 3, 11:40 pm",
  },
];
const Right2 = () => {
  return (
    <Box borderBottom="2px solid #edeff2" pb={3}>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            my: 3,
          }}
        >
          LAST ACTIVITY BY TASK
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {data.map((d) => (
            <ActivityListItem
              dateTime={d.dateTime}
              title={d.title}
              assignedTo={d?.assignedTo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Right2;
