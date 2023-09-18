import { Box, Typography } from "@mui/material";
import React from "react";
import { ViewAll } from "../StyledCompoents";
import RecentlyActiveUserData from "../../Data/RecentlyActiveUserData";

const RecentActive = () => {
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
        <Typography fontWeight={"bold"}></Typography>
        <ViewAll />
      </Box>
      <Box m={0.5}>
      <RecentlyActiveUserData />
      </Box>
    </Box>
  );
};

export default RecentActive;
