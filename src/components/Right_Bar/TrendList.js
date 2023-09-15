import React from "react";
import Trendpost from "./Trendpost";
import { ViewAll } from "../StyledCompoents";
import { Box, Typography } from "@mui/material";

const TrendList = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", padding:1 }}>
        <Typography />
        <ViewAll />
      </Box>
      <Trendpost />
      <Trendpost />
      <Trendpost />
      <Trendpost />
      <Trendpost />
    </Box>
  );
};

export default TrendList;
