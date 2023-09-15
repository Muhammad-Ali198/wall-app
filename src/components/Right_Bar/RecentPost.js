import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { ViewAll } from "../StyledCompoents";

const RecentPost = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Box p={1}>
        <Box mb={1} display={"flex"} justifyContent={"space-between"}>
          <Typography fontWeight={"bold"}></Typography>
          <ViewAll />
        </Box>

        <ImageList cols={2} rowHeight={130} gap={10}>
          <ImageListItem>
            <img src={"https://picsum.photos/id/137/70/50"} alt="#" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/337/70/50"} alt="#" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default RecentPost;
