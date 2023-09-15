import { } from "@mui/icons-material";
import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import SuggestionData from "../../Data/SuggestionData";

const Suggestions = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
    >
      <Box sx={{ display: "flex",alignItems:"center",  justifyContent: "space-between", m:1 }}>
        <Typography fontWeight={"bold"} m={"10px 0 0 1.6rem"}>Suggestions</Typography>
        <Typography />
      
        </Box>
        <Box m={1} flexWrap={"wrap"} justifyContent={"center"}>
          <SuggestionData />
      </Box>
    </Box>
  );
};

export default Suggestions;
