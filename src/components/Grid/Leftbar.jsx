import { Container, makeStyles, Typography, Badge } from "@material-ui/core";
import {
  Bookmark,
  List,
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
import "./styles.css"
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';




const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    zIndex:2,
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = ({user}) => {
  const classes = useStyles();
  const [profileUserData, setProfileUserData] = useState();
  const history = useHistory("");


  useEffect(() => {
    db.collection('users').doc(`${user?.uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])

const logout = () => {
  
    auth.signOut();
    history.push("/");
}
  return (
    <Container  className={classes.container}>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
      {/* <Badge badgeContent={411} color="error" className={classes.badge}> */}
      <a style={{display: "flex"}} className="port" href="/home">
        <Home className={classes.icon} />
        {/* </Badge> */}
        <Typography className={classes.text}>Homepage</Typography>
        </a>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <a style={{display: "flex"}} className="port" href={`/addpost`}>
        <PostAddIcon className={classes.icon} />
        <Typography className={classes.text}>Add Post</Typography>
        </a>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <ExitToApp onClick={logout} className={classes.icon} />
        <Typography onClick={logout} className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;