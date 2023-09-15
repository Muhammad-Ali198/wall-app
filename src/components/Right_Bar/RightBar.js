import { Box, Stack } from "@mui/material";
import RecentPost from "./RecentPost";
import TrendList from "./TrendList";
import React from "react";
import RecentFollowing from "./RecentFollowing";
import RecentActive from "./RecentActive";
const RightBar = () => {
  return (
    <Box
    bgcolor={"red"} flex={1} sx={{ overflow:"scroll", height:"100vh", '&::-webkit-scrollbar': { display: 'none' },display:{xs:"none", sm: "none", md:"flex"}}}
    >
      <Stack flexDirection={"column"} gap={2} alignItems={"center"} mt={1}>
        <RecentPost />
        <TrendList />
        <RecentFollowing />
        <RecentActive />
      </Stack>
    </Box>
  );
};

export default RightBar;
