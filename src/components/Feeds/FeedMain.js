import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const FeedMain = () => {
  const [dataState, setDataState] = useState([
    {
      text: "Beautiful Isn't it ........",
      images: [
        "https://source.unsplash.com/featured/300x201",
        "https://source.unsplash.com/featured/300x203",
        "https://source.unsplash.com/featured/300x204",
      ],
    },
  ]);

  return (
    <Box
      bgcolor={""}
      flex={2}
      sx={{
        overflow: "scroll",
        height: "100vh",
        "&::-webkit-scrollbar": { display: "none" },
        display: { xs: "block" },
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={1}
        gap={2}
        mt={2}
      >
        <CreatePost dataState={dataState} setDataState={setDataState} />
        {dataState.map((item, idx) => (
          <Posts key={idx} text={item.text} images={item.images} />
        ))}
        {/* <Posts />
        <Posts />
        <Posts /> */}
      </Stack>
    </Box>
  );
};

export default FeedMain;
