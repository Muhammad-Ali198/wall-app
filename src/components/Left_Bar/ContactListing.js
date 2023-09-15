import {
  Error,
  Mail,
  Person,
  Phone,
  Public,
  ThumbUpSharp,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const ContactListing = () => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={6}
      width={"95%"}
      boxShadow={"1px 23px 45px -11px rgba(0,0,0,0.5)"}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary="191 Main St, Bar Harbor, ME 04609, United States"
              sx={{ fontSize: "4px" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="092654 60634" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="ericbrickey@gmail.com" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Error />
            </ListItemIcon>
            <ListItemText primary="Edit description" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ThumbUpSharp />
            </ListItemIcon>
            <ListItemText primary="331 people like this" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Public />
            </ListItemIcon>
            <ListItemText primary="https://www.crema.com" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactListing;
