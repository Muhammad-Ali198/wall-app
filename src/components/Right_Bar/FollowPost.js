import {} from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const FollowPost = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        mb: 2,
        width: "16rem",
      }}
    >
      <Box
        height={40}
        sx={{ display: "flex" }}
        gap={"5px"}
  
      >
        <Avatar src="https://i.pravatar.cc/301"  />
        <Box>
          <Typography fontSize={"10px"} fontWeight={"bold"}>
            Monkey
          </Typography>
          <Typography fontSize={"10px"} color={grey[500]}>
            @Anfkmcrk_krmkfr
          </Typography>
        </Box>
      </Box>
      <Button
        color="secondary"
        disabled={false}
        variant="outlined"
        sx={{borderRadius:5, fontSize:"10px"}}
        borderRadius= {5}
      >Follow</Button>
    </Box>
  );
};

export default FollowPost;
