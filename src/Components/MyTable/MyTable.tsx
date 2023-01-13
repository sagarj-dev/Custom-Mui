import { styled, Table, Typography } from "@mui/material";
import React from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { Box } from "@mui/system";
import { Flag } from "@mui/icons-material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
const StyledTable = styled(Table)(({ theme }) => ({}));
type StyledBoxType = {
  children: React.ReactNode;
};
const StyledBox = ({ children }: StyledBoxType) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
};
type rowsType = {
  icon: JSX.Element;
  tasks: JSX.Element;
  subTasks: JSX.Element;
  assigned: JSX.Element;
  date: JSX.Element;
  priority: JSX.Element;
}[];
const rows = [
  {
    icon: <CheckCircleIcon color="primary" />,
    tasks: (
      <StyledBox>
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
        <AttachmentIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: (
      <StyledBox>
        <SubjectIcon color="disabled" />
        <Typography variant="h2">0</Typography>
      </StyledBox>
    ),
    assigned: (
      <StyledBox>
        <Typography variant="h2">Isaac Gregory</Typography>
      </StyledBox>
    ),
    date: (
      <StyledBox>
        <Typography variant="h2">12 Sep, 2pm</Typography>
      </StyledBox>
    ),
    priority: (
      <StyledBox>
        <Flag color="primary" />
      </StyledBox>
    ),
  },
  {
    icon: <CheckCircleIcon color="disabled" />,
    tasks: (
      <StyledBox>
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: (
      <StyledBox>
        <SubjectIcon color="disabled" />
        <Typography variant="h2">3</Typography>
      </StyledBox>
    ),
    assigned: <></>,
    date: <></>,
    priority: <></>,
  },
  {
    icon: <SubdirectoryArrowRightIcon color="disabled" />,
    tasks: (
      <StyledBox>
        <CheckCircleIcon color="disabled" />
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
        <AttachmentIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: <></>,
    assigned: (
      <StyledBox>
        <Typography variant="h2">Isaac Gregory</Typography>
      </StyledBox>
    ),
    date: (
      <StyledBox>
        <Typography variant="h2">12 Sep, 2pm</Typography>
      </StyledBox>
    ),
    priority: (
      <StyledBox>
        <Flag color="disabled" />
      </StyledBox>
    ),
  },
  {
    icon: <SubdirectoryArrowRightIcon color="disabled" />,
    tasks: (
      <StyledBox>
        <CheckCircleIcon color="disabled" />
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: <></>,
    assigned: (
      <StyledBox>
        <Typography variant="h2">Isaac Gregory</Typography>
      </StyledBox>
    ),
    date: (
      <StyledBox>
        <Typography variant="h2">12 Sep, 2pm</Typography>
      </StyledBox>
    ),
    priority: (
      <StyledBox>
        <Flag color="disabled" />
      </StyledBox>
    ),
  },
  {
    icon: <SubdirectoryArrowRightIcon color="disabled" />,
    tasks: (
      <StyledBox>
        <CheckCircleIcon color="disabled" />
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: <></>,
    assigned: (
      <StyledBox>
        <Typography variant="h2">Isaac Gregory</Typography>
      </StyledBox>
    ),
    date: (
      <StyledBox>
        <Typography variant="h2">12 Sep, 2pm</Typography>
      </StyledBox>
    ),
    priority: (
      <StyledBox>
        <Flag color="disabled" />
      </StyledBox>
    ),
  },
  {
    icon: <CheckCircleIcon color="disabled" />,
    tasks: (
      <StyledBox>
        <Typography variant="h2">
          Make Money Online Through Advertising
        </Typography>
        <SubjectIcon color="disabled" />
        <AttachmentIcon color="disabled" />
      </StyledBox>
    ),
    subTasks: (
      <StyledBox>
        <SubjectIcon color="disabled" />
        <Typography variant="h2">0</Typography>
      </StyledBox>
    ),
    assigned: (
      <StyledBox>
        <Typography variant="h2">Isaac Gregory</Typography>
      </StyledBox>
    ),
    date: (
      <StyledBox>
        <Typography variant="h2">12 Sep, 2pm</Typography>
      </StyledBox>
    ),
    priority: (
      <StyledBox>
        <Flag color="disabled" />
      </StyledBox>
    ),
  },
];
const MyTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <UnfoldMoreIcon color="disabled" />
            </TableCell>
            <TableCell align="left">
              <Typography variant="h2">NAME TASKS</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h2">SUBTASKS</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h2">ASSIGNEE</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h2">DUE DATE</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h2">PRIORITY</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.icon}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.tasks}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.subTasks}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.assigned}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.priority}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
