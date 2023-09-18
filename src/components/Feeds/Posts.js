import {
  DeleteOutline,
  Message,
  MoreHoriz,
  Share,
  ThumbUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import PostInputBar from "./PostInputBar";
import { grey } from "@mui/material/colors";

const Posts = ({ text, images }) => {
  // comment section on and off

  const [showComment, setShowComment] = useState(false);

  // Posted comments section

  const [commentList, setCommentList] = useState([{ text: "hoome" }]);

  // State for the current input

  const [input, setInput] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendClick = (event) => {
    event.preventDefault();
    if(input.length <= null ){
      return
    }else{
      
      setCommentList([...commentList, { text: input }]);
      setInput("");
    }
  };

  const handleDelete = (idx) => {
    let temp = commentList.filter((obj, idx2) => idx2 !== idx);
    setCommentList(temp);
  };

  return (
    <Box
      width={"95%"}
      bgcolor={"white"}
      borderRadius={6}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"left"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src="https://i.pravatar.cc/301" />
              </ListItemIcon>
              <ListItemText primary="NoobCoPro" secondary="a day ago" />
            </ListItemButton>
          </ListItem>
        </List>
        <IconButton sx={{ paddingRight: "2rem" }}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <Typography p={"0 1.5rem"}>{text}</Typography>
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {images.map((image, index) => (
          <img key={index} width={"30%"} src={image} loading="lazy" alt="#" />
        ))}
      </Container>
      <Box sx={{ display: "flex", justifyContent: "space-around" }} py={1}>
        <Button startIcon={<ThumbUp />} variant="text">
          324 likes
        </Button>
        <Button
          startIcon={<Message />}
          variant="text"
          color="secondary"
          onClick={() => setShowComment(!showComment)}
        >
          {`${commentList.length} Comments`}
        </Button>
        <Button startIcon={<Share />} variant="text" color="error">
          45 Shares
        </Button>
      </Box>
      <Box
        p={"1rem 1rem"}
        component={"div"}
        bgcolor={"white"}
        display={"flex"}
        gap={1}
      >
        <Avatar src="https://i.pravatar.cc/300" />
        <PostInputBar
          showComment={showComment}
          setShowComment={setShowComment}
          handleSendClick={handleSendClick}
          handleInputChange={handleInputChange}
          input={input}
        />
      </Box>
      <Box sx={{ display: showComment ? "block" : "none" }}>
        <Divider />

        {commentList.map((item, idx) => (
          <Box
            width={"98%"}
            p={"10px 15px"}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            borderRadius={4}
            sx={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              flexWrap: "wrap",
              p: 1,
            }}
          >
            <Stack
              // display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
              direction={"row"}
              bgcolor={grey[200]}
              borderRadius={2}
            >
              <Typography
                width={"100%"}
                sx={{ wordBreak: "break-all" }}
                key={idx}
                borderRadius={4}
                // bgcolor={grey[200]}
                p={1}
              >
                {item.text}
              </Typography>
              <IconButton
                sx={{ color: "tomato" }}
                onClick={() => handleDelete(idx)}
              >
                {/* <MoreHoriz /> */}
                <DeleteOutline />
              </IconButton>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Posts;
