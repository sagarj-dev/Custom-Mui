import styled from "@emotion/styled";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledAccordian = styled(Accordion)(({ theme }) => ({
  "&": {
    backgroundColor: "transparent",
  },

  "& .MuiAccordionDetails-root": {
    backgroundColor: "white",
    paddingTop: 0,
    paddingBottom: 0,
  },
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 0",

    "& .MuiBox-root": {
      justifySelf: "flex-end",
    },
  },
}));

StyledAccordian.defaultProps = {
  elevation: 0,
};
type DropdownProps = {
  children: React.ReactNode;
  tag?: React.ReactNode;
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "disabled";

  title: string;
};
const Dropdown = ({
  children,
  color = "disabled",
  title,
  tag,
}: DropdownProps) => {
  return (
    <Box>
      <StyledAccordian>
        <AccordionSummary expandIcon={<KeyboardArrowDown color="disabled" />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              fontSize="30px"
              color={`${color}.main`}
            >
              &#x2022;
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="14px"
              color={`${color}.main`}
            >
              {title}
            </Typography>
          </Box>

          <Box mr={1}>{tag}</Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </StyledAccordian>
    </Box>
  );
};

export default Dropdown;
