import { MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { grey } from "@mui/material/colors";

export const SuggestionM = ({ avatar, heading, parah }) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={avatar} />
          </ListItemIcon>
          <ListItemText
            primary={heading}
            secondary={parah}
            sx={{ fontSize: "4px" }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export const TrendListM = ({ TrendAbout, TrendLocation, TrendImage }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
      width: "16rem",
    }}
  >
    <Box
      borderRadius={4}
      ml={1}
      height={40}
      sx={{ display: "flex" }}
      gap={"5px"}
    >
      <img src={TrendImage} alt="#" />
      <Box>
        <Typography fontSize={"0.7rem"}>{TrendLocation}</Typography>
        <Typography fontSize={"0.5rem"} fontWeight={"bold"}>
          {TrendAbout}
        </Typography>
        <Typography fontSize={"0.4rem"} color={"blue"}>
          #Sanam #Nisha
        </Typography>
      </Box>
    </Box>
    <IconButton sx={{ paddingRight: "1rem" }}>
      <MoreHoriz />
    </IconButton>
  </Box>
);

export const RecentFollowingM = ({ PageName, PageTag, PageImage }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      mb: 2,
      width: "16rem",
      p:"5px 10px"
    }}
  >
    <Box height={40} sx={{ display: "flex" }} gap={"5px"}>
      <Avatar src={PageImage} />
      <Box>
        <Typography fontSize={"10px"} fontWeight={"bold"}>
          {PageName}
        </Typography>
        <Typography fontSize={"10px"} color={grey[500]}>
          {PageTag}
        </Typography>
      </Box>
    </Box>
    <Typography flex={1} />
    <Box>
      <Button
        color="secondary"
        disabled={false}
        variant="outlined"
        sx={{ borderRadius: 5, fontSize: "10px" }}
        borderRadius={5}
      >
        Follow
      </Button>
    </Box>
  </Box>
);

export const RecentlyActiveM = ({UserName, UserImage}) => (
  <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        width: "16rem",
      }}
      p={"5px 10px"}
    >
      <Box height={40} sx={{ display: "flex" }} gap={"5px"} >
        <Avatar src={UserImage} />
        <Box sx={{display:'inherit', alignItems:'center', gap: 3}}>
          <Typography fontSize={"13px"} fontWeight={"bold"}>
            {UserName}
          </Typography>
          <Typography flex={2} />
          <Typography fontSize={"10px"} color={grey[500]}>
            12 minutes ago
          </Typography>
        </Box>
      </Box>
    </Box>
)