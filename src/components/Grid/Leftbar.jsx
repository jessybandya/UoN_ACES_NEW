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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    zIndex:2,
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
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


function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}
  
function abbrNum(number, decPlaces) {
// 2 decimal places => 100, 3 => 1000, etc
decPlaces = Math.pow(10,decPlaces);

// Enumerate number abbreviations
var abbrev = [ "K", "M", "B", "T" ];

// Go through the array backwards, so we do the largest first
for (var i=abbrev.length-1; i>=0; i--) {

    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10,(i+1)*3);

    // If the number is bigger or equal do the abbreviation
    if(size <= number) {
         // Here, we multiply by decPlaces, round, and then divide by decPlaces.
         // This gives us nice rounding to a particular decimal place.
         number = Math.round(number*decPlaces/size)/decPlaces;

         // Add the letter for the abbreviation
         number += abbrev[i];

         // We are done... stop
         break;
    }
}

return number;
}
  return (
    <Container   className={classes.container}>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
      {/* <Badge badgeContent={411} color="error" className={classes.badge}> */}
      <a style={{display: "flex"}} className="port" href="/home">
        <Home className={classes.icon} />
        {/* </Badge> */}
        <Typography className={classes.text}>Homepage</Typography>
        </a>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <a style={{display: "flex"}} className="port" href={`/friends`}>
        <PeopleAltIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
        </a>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>
        <a style={{display: "flex"}} className="port" href={`/academics`}>
        <MenuBookIcon className={classes.icon} />
        <Typography className={classes.text}>Academics</Typography>
        </a>
      </div>
      <div className={classes.item} className="leftNav" style={{display: "flex",alignItems:"center",height:50,cursor:"pointer",borderRadius:10}}>

      <a href={`/mainmessagespage`} style={{display: "flex",alignItems:"center"}}>
          <Badge badgeContent={200} color="secondary" className={classes.badge}>
            
            <Mail className={classes.icon}/>

          </Badge>
          <Typography className={classes.text}>Messages</Typography>

          </a>
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