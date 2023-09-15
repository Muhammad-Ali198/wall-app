import { Avatar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

export const SuggestionM = ({avatar, heading, parah}) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={avatar}/>
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

