import { Grid, makeStyles } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Hidden, Paper } from "@material-ui/core";
import Add from "../Grid/Add";
import Feed from "../Grid/Feed";
import Leftbar from "../Grid/Leftbar";
import Navbar from "../Grid/Navbar";
import Rightbar from "../Grid/Rightbar";
import { auth1 } from "../firebase"
import { useHistory } from "react-router";
import Header from "../Testhome/header/Header";
import Sidebar from "../Testhome/sidebar/Sidebar";
import Contacts from "../Testhome/contacts/Contacts";
import Stories from "../Testhome/stories/Stories";
import Form from "../Testhome/form/Form";
import Posts from "../Testhome/posts/Posts";
import { LoginAction, LogoutAction } from "../Testhome/store/actions/auth";
import { lightPrimary } from "../assets/Colors";
import Style from "../Testhome/Style"
import "./styles.css"
import Testhome from  "../Testhome"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
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
import { Container, Badge } from "@material-ui/core";

import {
  Bookmark,
  ExitToApp,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const drawerWidth = 210;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Home = ({user}) => {
  const history = useHistory("")
  const classes1 = useStyles();

  const dispatch = useDispatch();


  const mode = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth1.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(LoginAction(authUser));
      } else {
        dispatch(LogoutAction());
      }
    });
  }, [dispatch]);

  const classes = Style();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {auth1?.currentUser?.uid &&(
       <>
     <Testhome />
     <ThemeProvider theme={muiTheme}>
      <Paper
        elevation={0}
        className={classes.root}
        style={{ backgroundColor: !mode && lightPrimary }}
      >

          <Grid style={{marginTop:-45}} className={classes.app}>

            <Grid item  className={classes.app__body}>
              {/* ----Body---- */}
              <Hidden smDown>
                <Grid item container className={classes.body__right}  sm={2} xs={2}>
                  {/* ----Sidebar---- */}
                  <Leftbar user={user}/>
                </Grid>
                </Hidden>
              <Grid item container  className={classes.body__feed} xs={12} sm={8} md={6}>
                {/* ----Feed---- */}
                {/* <Grid item container className={classes.feed__stories}>
                  <Stories />
                </Grid> */}
                <Grid item style={{marginTop:"10%",position:"relative",zIndex: 999}} container className={classes.feed__form}>
                  {/* ----Upload Form---- */}
                  <Form />
                </Grid>
                <Grid item container className={classes.feed__posts}>
                  {/* ----Posts---- */}
                  <Posts />
                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item container className={classes.body__right} md={3} >
                  {/* ----Right sidebar---- */}
                  <Rightbar />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
  
      </Paper>
    </ThemeProvider>
       </>
      )}
      {!auth1?.currentUser?.uid &&(
       <>
  <Navbar />
      {/* <Add /> */}
      <Grid container className="mobile">

      <Posts />

      </Grid>
      {/* <Add /> */}
       </>
      )}

    </div>
  );
};

export default Home;