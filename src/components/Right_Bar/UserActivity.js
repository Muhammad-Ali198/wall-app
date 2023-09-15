import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const UserActivity = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        width: "16rem",
      }}
    >
      <Box height={40} sx={{ display: "flex" }} gap={"5px"} px={3}>
        <Avatar src="https://i.pravatar.cc/366" />
        <Box sx={{display:'inherit', alignItems:'center', gap: 3}}>
          <Typography fontSize={"13px"} fontWeight={"bold"}>
            Monkey
          </Typography>
          <Typography fontSize={"10px"} color={grey[500]}>
            12 minutes ago
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserActivity;
