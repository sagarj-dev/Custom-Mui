import { Box, List, Typography } from "@mui/material";
import React from "react";
import Dropdown from "../../Components/Basics/Dropdown";
import GlowingButton from "../../Components/Basics/GlowingButton";
import ListMenuItem from "./ListMenuItem";

const CountBadge = ({ count }: { count: number }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f8fa",
        borderRadius: "100%",
        px: 1,
        py: 0.5,
      }}
    >
      <Typography variant="subtitle1" fontSize="14px">
        {count}
      </Typography>
    </Box>
  );
};

const Page6Sidebar = () => {
  return (
    <Box
      sx={{
        width: "16vw",
        maxWidth: "16vw",
        height: "fit-content",
      }}
    >
      <Dropdown title="Getting Started" color="primary">
        Getting Stated
      </Dropdown>
      <Dropdown title="Layout" color="disabled">
        Getting Stated
      </Dropdown>
      <Dropdown
        tag={<GlowingButton color="warning">NEW</GlowingButton>}
        title="Content"
        color="warning"
      >
        Getting Stated
      </Dropdown>
      <Dropdown title="Components" color="primary">
        <Dropdown
          title="Alert"
          color="primary"
          tag={<GlowingButton color="primary">12</GlowingButton>}
        >
          <List disablePadding>
            <ListMenuItem title="Link Color" color="disabled" />
            <ListMenuItem title="Additional Content" color="primary" />
            <ListMenuItem title="Dismissing" color="disabled" />
            <ListMenuItem title="JavaScript behavior" color="disabled" />
          </List>
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={10} />}
          title="Badge"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Breadcrumb"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Buttons"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Button Group"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown tag={<CountBadge count={5} />} title="Card" color="disabled">
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Carousel"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Collapse"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Dropdowns"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown tag={<CountBadge count={5} />} title="Forms" color="disabled">
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Input Group"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Jumbotron"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="List group"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Media object"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown tag={<CountBadge count={5} />} title="Modal" color="disabled">
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Navbar"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Pagination"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
        <Dropdown
          tag={<CountBadge count={5} />}
          title="Popovers"
          color="disabled"
        >
          Getting Stated
        </Dropdown>
      </Dropdown>
      <Dropdown title="Utilities" color="disabled">
        Getting Stated
      </Dropdown>
      <Dropdown title="Extend" color="disabled">
        Getting Stated
      </Dropdown>
      <Dropdown title="Migration" color="disabled">
        Getting Stated
      </Dropdown>
      <Dropdown title="About" color="disabled">
        Getting Stated
      </Dropdown>
    </Box>
  );
};

export default Page6Sidebar;
