import { Box, Typography } from "@mui/material";
import React from "react";
import { ViewAll } from "../StyledCompoents";
import UserActivity from "./UserActivity";

const RecentActive = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 1,
          mb: 1,
        }}
      >
        <Typography fontWeight={"bold"}></Typography>
        <ViewAll />
      </Box>
      <UserActivity />
      <UserActivity />
      <UserActivity />
      <UserActivity />
      <UserActivity />
    </Box>
  );
};

export default RecentActive;
