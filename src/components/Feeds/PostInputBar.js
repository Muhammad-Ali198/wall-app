import styled from "@emotion/styled";
import { AttachFile, EmojiEmotionsOutlined, Send } from "@mui/icons-material";
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

const PostInputBar = ({
  setShowComment,
  handleSendClick,
  handleInputChange,
  input,
}) => {
  return (
    <>
      <Search>
        <StyledInputBase
          value={input}
          placeholder="Leave your review....."
          inputProps={{ "aria-label": "search" }}
          onChange={handleInputChange}
        />
        <SearchIconWrapper>
          <EmojiEmotionsOutlined />
          <AttachFile />
          <IconButton
            sx={{ pl: "2px", m: "0" }}
            onClick={(event) => {
              handleSendClick(event);
              setShowComment(true);
            }}
          >
            <Send />
          </IconButton>
        </SearchIconWrapper>
      </Search>
    </>
  );
};

export default PostInputBar;
