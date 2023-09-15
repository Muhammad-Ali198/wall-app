import { Message, MoreHoriz, Share, ThumbUp } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Imag1 from "../../images/imi2.jpg";
import Imag2 from "../../images/imi4.jpg";
import Imag3 from "../../images/imi6.jpg";
import PostInputBar from "./PostInputBar";

const Posts = () => {
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
      <Box  sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >
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
        <IconButton sx={{paddingRight:"2rem"}}>
          <MoreHoriz />
        </IconButton>
      </Box>
      <Typography p={"0 1.5rem"}>Beautiful cities...</Typography>
      <Container sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <img
          width={"30%"}
          src={Imag1}
          loading="lazy"
          alt="#"
        />
        <img
          width={"30%"}
          src={Imag2}
          loading="lazy"
          alt="#"
        />
        <img
          width={"30%"}
          src={Imag3}
          loading="lazy"
          alt="#"
        />
      </Container>
      <Box sx={{ display: "flex", justifyContent: "space-around"  }}py={1}>
        <Button startIcon={<ThumbUp />} variant="text">
          324 likes
        </Button>
        <Button startIcon={<Message />} variant="text" color="secondary">
          2 Comments
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
       <PostInputBar />
      </Box>
    </Box>
  );
};

export default Posts;