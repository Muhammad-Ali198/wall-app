import React from "react";
import { Box, Typography } from "@mui/material";
import { ViewAll } from "../StyledCompoents";
import FollowingData from "../../Data/FollowingData";

const RecentFollowing = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          m: 2,
        }}
      >
        <Typography fontWeight={"bold"}>Who to Follow</Typography>
        <ViewAll />
      </Box>
      <Box >
        <FollowingData />
      </Box>
    </Box>
  );
};

export default RecentFollowing;
