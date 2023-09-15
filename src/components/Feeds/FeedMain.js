import { Box, Stack } from "@mui/material";
import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const FeedMain = () => {
  return (
    <Box bgcolor={"coral"} flex={2} sx={{overflow:"scroll", height:"100vh",'&::-webkit-scrollbar': { display: 'none' }, display:{xs:"block"}}}>
      <Stack direction={"column"} alignItems={"center"} spacing={1} gap={2} mt={2}>
        <CreatePost />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </Stack>
    </Box>
  );
};

export default FeedMain;
