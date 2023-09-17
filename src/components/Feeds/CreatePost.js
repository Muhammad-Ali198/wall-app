import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import CreatePostInputBar from "./CreatePostInputBar";
import { MoreHoriz } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const CreatePost = ({ dataState, setDataState }) => {
  const [inputState, setInputState] = useState("");
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };

  const handleOnClick = () => {
    setDataState([...dataState, { text: inputState, images: images }]);
    setInputState("");
    setImages([]);
  };

  const handleImageInput = (e) => {
    const files = e.target.files;
    if (files) {
      let imagesArr = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onloadend = () => {
          imagesArr.push(reader.result);
        };
        reader.readAsDataURL(files[i]);
      }
      setImages(imagesArr);
    }
  };
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
        borderRadius={1}
        m={"0 0.9rem"}
        sx={{ backgroundColor: grey[200] }}
        gap={1}
      >
        <Typography
          variant="p"
          fontSize={"0.5rem"}
          sx={{ overflowWrap: "break-word", wordWrap: "break-all" }}
        >
          {inputState}
        </Typography>
      </Box>
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {images.map((image, index) => (
          <img key={index} width={"30%"} src={image} loading="lazy" alt="#" />
        ))}
      </Container>
      <Box
        component={"div"}
        bgcolor={"white"}
        p={"10px 15px"}
        display={"flex"}
        gap={1}
      >
        <Avatar src="https://i.pravatar.cc/300" />
        <CreatePostInputBar
          handleInputChange={handleInputChange}
          handleOnClick={handleOnClick}
          inputState={inputState}
          handleImageInput={handleImageInput}
        />
      </Box>
    </Box>
  );
};

export default CreatePost;
