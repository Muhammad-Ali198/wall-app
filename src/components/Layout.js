import React from "react";
import { Box, Stack } from "@mui/material";
import RightBar from "./Right_Bar/RightBar";
import FeedMain from "./Feeds/FeedMain";
import LeftBar from "./Left_Bar/LeftBar";

const Layout = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={2} p={3}>
        <LeftBar />
        <FeedMain />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default Layout;
