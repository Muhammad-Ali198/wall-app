import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { ViewAll } from "../StyledCompoents";

const PhotosLising = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
      p={1}
    >
      <Container >
        <Box mb={2} display={"flex"} justifyContent={"space-between"}>
          <Typography fontWeight={"bold"}>Photo</Typography>
          <ViewAll />
        </Box>

        <ImageList cols={3} rowHeight={50} gap={10}>
          <ImageListItem >
            <img src={"https://picsum.photos/id/137/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/337/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/237/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://picsum.photos/id/937/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/637/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/737/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem >
            <img src={"https://picsum.photos/id/967/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/657/70/50"} loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={"https://picsum.photos/id/717/70/50"} loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Container>
    </Box>
  );
};

export default PhotosLising;
