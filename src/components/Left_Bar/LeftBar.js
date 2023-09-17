import { Box, Stack } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileCard";
import ContactListing from "./ContactListing";
import PhotosLising from "./PhotosLising";
import Suggestions from "./Suggestions";


const LeftBar = () => {
  return (
    <Box bgcolor={"orange"} flex={1} sx={{ overflow:"scroll", height:"100vh", '&::-webkit-scrollbar': { display: 'none' },display:{xs:"none", sm: "flex"}}}>
      <Stack flexDirection={"column"} gap={2} alignItems={"center"} mt={1} >
        <ProfileCard />
        <ContactListing />
        <PhotosLising />
        <Suggestions />
      </Stack>
    </Box>
  );
};

export default LeftBar;
