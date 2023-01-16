import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box } from "@mui/system";
import { CloudCircle, Flag } from "@mui/icons-material";
const StyledAccordian = styled(Accordion)(({ theme }) => ({
  boxShadow: "0px 3px 10px -12px rgb(0 0 0 / 75%)",

  "& .MuiAccordionSummary-root": {
    flexDirection: "row-reverse",
    borderBottom: "1px solid #edeff2",
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
}));

type MyAccordType = {
  children: React.ReactNode;
};
const MyAccord = ({ children }: MyAccordType) => {
  return (
    <Box sx={{ my: 2 }}>
      <StyledAccordian elevation={0}>
        <AccordionSummary expandIcon={<ArrowDownwardIcon color="disabled" />}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              ml: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Typography variant="h1">Space Tasks 1</Typography>
              <Typography variant="subtitle1">12 Tasks</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Flag color="disabled" />
                <Typography variant="subtitle1">
                  Start Date: Sep 20, 9pm
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CloudCircle color="disabled" />
                <Typography variant="subtitle1">
                  Start Date: Sep 20, 9pm
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            px: 4,
            py: 2,
          }}
        >
          {children}
        </AccordionDetails>
      </StyledAccordian>
    </Box>
  );
};

export default MyAccord;
