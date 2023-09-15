import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const Trendpost = ({ ran }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        width: "16rem",
      }}
    >
      <Box
        borderRadius={4}
        ml={1}
        height={40}
        sx={{ display: "flex" }}
        gap={"5px"}
      >
        <img src="https://picsum.photos/id/354/70/50" alt="#" />
        <Box>
          <Typography fontSize={"10px"}>Trending in India</Typography>
          <Typography fontSize={"10px"} fontWeight={"bold"}>
            COVID-19 LIVE
          </Typography>
          <Typography fontSize={"10px"} color={"blue"}>
            #Sanam #Nisha
          </Typography>
        </Box>
      </Box>
      <IconButton sx={{ paddingRight: "1rem" }}>
        <MoreHoriz />
      </IconButton>
    </Box>
  );
};

export default Trendpost;
