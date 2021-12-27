import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "../Grid/Navbar"
import { Container, makeStyles, Badge } from "@material-ui/core";
import App from "../../../src/App"
import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import { useState,useEffect } from "react";
import { db,auth } from "../firebase"
import { useHistory } from "react-router";
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom"



const drawerWidth = 210;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#E8E8E8",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  backgroundColor: "#E8E8E8",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }),marginTop:-100, }}
          >
            <MenuIcon />
          </IconButton>
    <Navbar handleDrawerOpen={(handleDrawerOpen)}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List style={{backgroundColor: "#E8E8E8" }}>
        <Link style={{display: "flex"}} className="port" to="/home">
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Homepage"} />
              
            </ListItem>
            </Link>
            <Divider />

            <Link style={{display: "flex"}} className="port" to="/friends">
            <ListItem button>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Friends"} />
              
            </ListItem>
            </Link>

            <Divider />

            <Link style={{display: "flex"}} className="port" to="/academics">
            <ListItem button>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={"Academics"} />
              
            </ListItem>
            </Link>

<Divider />

<Link style={{display: "flex"}} className="port" to="/mainmessagespage">
            <ListItem button>
              <ListItemIcon>
              <Badge badgeContent={200} color="secondary">
            
            <Mail />

          </Badge>
              </ListItemIcon>
              <ListItemText primary={"Messages"} />
              
            </ListItem>
    </Link>

<Divider />
{/* Extra to be added Here */}
<Link style={{display: "flex"}} className="port" to="/manageposts">
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Posts"} />
              
            </ListItem>
            </Link>

<Divider />

<Link style={{display: "flex"}} className="port" to="/manageposts">
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Posts"} />
              
            </ListItem>
            </Link>
        </List>
        <Divider />

      </Drawer>
      <Main open={open} style={{backgroundColor: "#E8E8E8" }}>
  </Main>   
   </Box>
    </>
  );

}
