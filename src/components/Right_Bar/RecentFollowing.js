import React from "react";
import FollowPost from "./FollowPost";
import { Box, Typography } from "@mui/material";
import { ViewAll } from "../StyledCompoents";

const RecentFollowing = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 1, mb:1 }}
      >
        <Typography fontWeight={"bold"} >Who to Follow</Typography>
        <ViewAll />
      </Box>
      <FollowPost />
      <FollowPost />
      <FollowPost />
      <FollowPost />
    </Box>
  );
};

export default RecentFollowing;
