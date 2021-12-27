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
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState,useEffect,useRef } from "react";
import { db,auth1 } from "../firebase"
import { useParams } from "react-router";
import "./styles.css"
import * as actions from '../../store/action';
// import NumberFormat from 'react-number-format';
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleTheme } from "../../store1/actions/util";
import { useDispatch, useSelector } from "react-redux";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#E8E8E8",
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
    backgroundColor: "#fff",
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
    color: "#3f51b5",
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

function Navbar({ handleDrawerOpen }){
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.util);

  const changeTheme = () => {
    dispatch(ToggleTheme());
  };

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
auth1.onAuthStateChanged((authUser) =>{
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
        <Link to="/">
        <div style={{fontWeight: "500",color: "#3f51b5"}}>UoN_ACES</div>
        </Link>
           
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          {!auth1?.currentUser?.uid &&(
            <div style={{display: "flex",alignItems: "center"}}>

        <Link to="/">
        <div style={{fontWeight: "500",color: "#3f51b5"}}>UoN_ACES</div>
        </Link>
        </div>
          )}
          {auth1?.currentUser?.uid &&(
            <div style={{display: "flex",alignItems: "center"}}>
                    <MenuIcon style={{color: "#3f51b5"}} onClick={handleDrawerOpen}/>

        <Link to="/">
        <div style={{fontWeight: "500",color: "#3f51b5",marginLeft:5}}>UoN_ACES</div>
        </Link>
        </div>
          )}

        </Typography>
        <div className={classes.search}>
          <Search style={{color: "#3f51b5"}}/>
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel style={{color: "#3f51b5"}} className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search style={{color: "#3f51b5"}}
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          {auth1?.currentUser?.uid &&(
            <>
                                    <a href={`/home`}>
          <div style={{fontWeight: "600",color: "#3f51b5",marginRight:10}}>Home</div>
          </a>
          {/* <a href={`/mainmessagespage`}>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            
            <Mail style={{color: "#3f51b5"}}/>
           
          </Badge>
          </a> */}
          <Link to={`/notifications`}>
          <Badge badgeContent={200} color="secondary" className={classes.badge}>
            <Notifications style={{color: "#3f51b5"}} />
          </Badge>
          </Link>
          {/* <a href={`/profileview`}>
          <Avatar
            alt={`${profileUserData?.username}`}
            src={`${auth?.currentUser?.photoURL}`}
          />
          </a> */}
<div >
<NavItem   icon={<CaretIcon  />}>
        <DropdownMenu ></DropdownMenu>
      </NavItem>
      </div>

            </>
          )}
      {!auth1?.currentUser?.uid &&(
        <div style={{display: "flex",justifyContent: "space-between",width: 150}}>
                      <Link to="/home">
          <div style={{fontWeight: "500",color: "#3f51b5"}}>Home</div>
          </Link>
          <Link to="/register">
          <div style={{fontWeight: "500",marginLeft:10,color: "#3f51b5"}}>Register</div>
          </Link>
          <Link to="/login">
          <div style={{fontWeight: "500",marginLeft:10,marginRight:0,color: "#3f51b5"}}>Login</div>
          </Link>
        </div>
      )}
        </div>
      </Toolbar>
    </AppBar>
  );
};





function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  const [profileUserData, setProfileUserData] = useState();
  useEffect(() => {
    db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])


const dispatch = useDispatch();
const mode = useSelector((state) => state.util);

const changeTheme = () => {
  dispatch(ToggleTheme());
};
const [open, setOpen] = useState(false);

const classes = useStyles({ open });
const history = useHistory("");

const logout1 = () => {
  dispatch(actions.logout());
  history.push("/")
}

  return (
    <div className="dropdown" style={{ height: 180, backgroundColor: "#E8E8E8", border: "2px solid #3f51b5" }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <Link to={`/profileview/${auth1?.currentUser?.uid}`}>
          <DropdownItem
          leftIcon={<Avatar
            alt={`${profileUserData?.username}`}
            src={`${profileUserData?.photoURL}`}
          />}
          ><span style={{color: "#3f51b5"}}> {`${profileUserData?.firstName}`} {`${profileUserData?.lastName}`}</span></DropdownItem>
          </Link>

          <DropdownItem
            leftIcon={<div className={classes.nav__links} style={{marginTop:5}} onClick={changeTheme}>
            {mode ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </div>}
            >
            <span style={{color: "#3f51b5"}}>{mode ? "Dark Mode" : "Light Mode"}</span>
          </DropdownItem>

          <DropdownItem
            leftIcon={<ExitToApp onClick={logout1}/>}
            >
            <span style={{color: "#3f51b5"}} onClick={logout1}>Logout</span>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar;