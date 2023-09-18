import styled from "@emotion/styled";
import {
  EmojiEmotionsOutlined,
  ImageOutlined,
  PersonOutlined,
  SendOutlined,
  VideoCallOutlined,
} from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  borderRadius: 20,
  width: "88%",
  backgroundColor: grey[200],
  display: "flex",
  justifyContent: "space-between",
  padding: "3px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  color: "black",
  paddingRight: "1rem",
  marginLeft: "10px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingLeft: "1rem",
  width: "100%",
}));

const CreatePostInputBar = ({
  handleInputChange,
  inputState,
  handleOnClick,
  handleImageInput,
}) => {
  return (
    <>
      <Search>
        <StyledInputBase
          value={inputState}
          placeholder="Whats in your mind....."
          inputProps={{ "aria-label": "search" }}
          onChange={handleInputChange}
        />

        <SearchIconWrapper>
          <IconButton component="label">
            <input
              type="file"
              hidden
              onClick={handleImageInput}
            />
            <ImageOutlined />
          </IconButton>
          <VideoCallOutlined />
          <EmojiEmotionsOutlined />
          <PersonOutlined />
          <IconButton onClick={handleOnClick}>
            <SendOutlined />
          </IconButton>
        </SearchIconWrapper>
      </Search>
    </>
  );
};

export default CreatePostInputBar;
