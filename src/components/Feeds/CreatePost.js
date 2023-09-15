import { Avatar, Box, IconButton,Typography } from "@mui/material";
import React from "react";
import CreatePostInputBar from "./CreatePostInputBar";
import { MoreHoriz } from "@mui/icons-material";

const CreatePost = () => {
  return (
    <Box
      width={"95%"}
      mt={1}
      bgcolor={"white"}
      borderRadius={6}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Typography
        p={"9px 15px"}
        fontWeight={"bold"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Create Post
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Typography>
      <Box
        component={"div"}
        bgcolor={"white"}
        p={"10px 15px"}
        display={"flex"}
        gap={1}
      >
        <Avatar src="https://i.pravatar.cc/300" />
        <CreatePostInputBar />
      </Box>
    </Box>
  );
};

export default CreatePost;
