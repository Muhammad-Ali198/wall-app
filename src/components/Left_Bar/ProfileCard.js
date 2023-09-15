import { Avatar, AvatarGroup, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import imgBG from "../../images/imi7.jpg";
import { grey } from "@mui/material/colors";
import { Phone, VideoCall } from "@mui/icons-material";

const ProfileCard = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
    >
      <Box
        width={"100%"}
        height={"8rem"}
        sx={{
          backgroundImage: `url(${imgBG})`,
          backgroundSize: "100% 100%",
          overflow: "hidden",
          borderRadius: "1.5rem 1.5rem 0 0",
        }}
      ></Box>
      <Stack direction={"column"} alignItems={"center"}>
        <Avatar
          src="https://i.pravatar.cc/102"
          alt=""
          sx={{ mt: "-2.5rem", bgcolor: "white", width:"5rem", height:"5rem",  }}
        />
        <Typography>Eric Brickey</Typography>
        <Typography color={grey[500]}>Oslo, Karachi</Typography>
        <Box mt={2} textAlign={"center"}>
          <Typography>8 Mutual friends</Typography>
          <AvatarGroup total={10} >
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/102" />
            <Avatar alt="Travis Howard" src="https://i.pravatar.cc/204" />
            <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/207" />
            <Avatar alt="Trevor Henderson" src="https://i.pravatar.cc/120" />
          </AvatarGroup>
        </Box>
        <Button size="small" sx={{my:1,}} startIcon={<Phone />} variant="contained">Group Call</Button>
        <Button size="small" sx={{my:1}} startIcon={<VideoCall />} variant="outlined">Video Call</Button>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
