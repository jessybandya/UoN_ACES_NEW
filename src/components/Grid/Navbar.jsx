import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState,useEffect } from "react";
import { db,auth } from "../firebase"
import { useParams } from "react-router";
import "./styles.css"
// import NumberFormat from 'react-number-format';
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
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
const [user, setUser] = useState([]);
useEffect(() => {
auth.onAuthStateChanged((authUser) =>{
  if(authUser){
    setUser(authUser)
  }else{
    setUser(false);
  }
})
}, [])
// {abbrNum(1200000,3)}
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const [profileUserData, setProfileUserData] = useState();



  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
        <a href="/">
        <div style={{fontWeight: "500",color: "#fff"}}>UoN_ACES</div>
        </a>
           
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          {!auth?.currentUser?.uid &&(
            <div style={{display: "flex",alignItems: "center"}}>

        <a href="/">
        <div style={{fontWeight: "500",color: "#fff"}}>UoN_ACES</div>
        </a>
        </div>
          )}
          {auth?.currentUser?.uid &&(
            <div style={{display: "flex",alignItems: "center"}}>
                    <MenuIcon />

        <a href="/">
        <div style={{fontWeight: "500",color: "#fff",marginLeft:5}}>UoN_ACES</div>
        </a>
        </div>
          )}

        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          {auth?.currentUser?.uid &&(
            <>
                                    <a href={`/home`}>
          <div style={{fontWeight: "600",color: "#fff",marginRight:10}}>Home</div>
          </a>
          <a href={`/mainmessagespage`}>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            
            <Mail style={{color: "#fff"}}/>
           
          </Badge>
          </a>
          <a href={`/notifications`}>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications style={{color: "#fff"}} />
          </Badge>
          </a>
          <a href={`/profileview`}>
          <Avatar
            alt={`${profileUserData?.username}`}
            src={`${auth?.currentUser?.photoURL}`}
          />
          </a>
            </>
          )}
      {!auth?.currentUser?.uid &&(
        <div style={{display: "flex",justifyContent: "space-between",width: 150}}>
                      <a href="/home">
          <div style={{fontWeight: "500",color: "#fff"}}>Home</div>
          </a>
          <a href="/register">
          <div style={{fontWeight: "500",marginLeft:10,color: "#fff"}}>Register</div>
          </a>
          <a href="/login">
          <div style={{fontWeight: "500",marginLeft:10,marginRight:0,color: "#fff"}}>Login</div>
          </a>
        </div>
      )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;