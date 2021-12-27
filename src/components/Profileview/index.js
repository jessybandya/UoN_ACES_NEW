import React, {useState, useEffect} from 'react'
import "./styles.css"
import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NumberFormat from 'react-number-format';
import { db, auth1, storage } from "../firebase"
import { useParams } from "react-router-dom"
import { Button, Modal, Form, Input, Upload, Tabs } from "antd";
import { ToastProvider, useToasts } from "react-toast-notifications";
import "antd/es/modal/style";
import "antd/es/slider/style";
import ImgCrop from "antd-img-crop";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
// import img from "../../assets/jedd.jpg"
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import "./styles.css"
import firebase from 'firebase'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import PostAddIcon from '@mui/icons-material/PostAdd';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Charts from '../Charts';
import $ from 'jquery';
import EditIcon from '@mui/icons-material/Edit';
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}








const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    fontSize: 16,
  },
}));


function Profileview() {
  const classes = useStyles();
  const { uid } = useParams();
  const [profileUserData, setProfileUserData] = useState();
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);



  const [bio, setBio] = useState('');
  const [bioPresent, setBioPresent] = useState(false)
  const [username, setUsername] = useState('');
  const [usernamePresent, setUsernamePresent] = useState(false)
  const [firstName, setFirstName] = useState('');
  const [firstNamePresent, setFirstNamePresent] = useState(false)
  const [lastName, setlastName] = useState('');
  const [lastNamePresent, setlastNamePresent] = useState(false)
  const [lastName1, setlastName1] = useState('');
  const [lastNamePresent1, setlastNamePresent1] = useState(false)
  const [location, setLocation] = useState('');
  const [locationPresent, setlocationPresent] = useState(false)
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [placeOfWorkPresent, setPlaceOfWorkPresent] = useState(false)
  const [school, setSchool] = useState('');
  const [schoolPresent, setSchoolPresent] = useState(false)
  const [birthday, setBirthday] = useState('');
  const [birthdayPresent, setBirthdayPresent] = useState(false)
  const [open1, setOpen1] = useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [imageURL, setImageURL] = useState('');
  const [progress, setProgress] = useState(0);

// Table
const [open, setOpen] = React.useState(false);
const [dashboard, setDashboard] = React.useState(false);
const [updateProfile, setUpdateProfile] = React.useState(false);


const handleChange = (e) => {
  setImageURL(e.target.files[0]);
};

const uploadFileWithClick = () => {
  document.getElementsByClassName('inputImage')[0].click();
}



const handleClose1 = () => {
  setOpen1(false);
  setImageURL("");
};

const descriptionElementRef = React.useRef(null);
React.useEffect(() => {
  if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
          descriptionElement.focus();
      }
  }
}, [open]);

useEffect(() => {
  if (imageURL !== '') {
      setOpen1(true)
  }
}, [imageURL])

const handleClickOpen = () => {
  setOpen(true);
};

const handleClickDashboardOpen = () => {
  setDashboard(true);
};

const handleClickUpdateProfiledOpen = () => {
  setUpdateProfile(true);
};

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory()









const handleClose = () => {
  setOpen(false);
};
const handleCloseDashboard = () => {
  setDashboard(false);
};
const handleCloseUpdateProfile = () => {
  setUpdateProfile(false);
};

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  
  let dispatch = useDispatch()


  //Rendering selectively






   const currentUserId= `${auth1?.currentUser?.uid}`
   var currentUser = firebase.auth().currentUser;

   const handleUpload = (event) => {

    document.getElementsByClassName('progress')[0].style.display = 'block';
    event.preventDefault();
    const uploadTask = storage.ref(`profileImages/${currentUserId}`).put(imageURL);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        (error) => {
            console.log(error);
            toast.error(error.message)

        },
        () => {
            storage
                .ref("profileImages")
                .child(`${currentUserId}`)
                .getDownloadURL()
                .then(url => {
                    currentUser.updateProfile({
                        profilePhoto: url
                    }).then(function () {
                        db.collection('users').doc(`${currentUserId}`).update({
                            photoURL: url
                        }).then(function () {
                            handleClose1();
                            setProgress(0);

                            toast.success("Successfully Updated your profile image.")

                        })
                    })
                })
        }
    )
}



// First Name
const addFirstName = () => {
  $('.firstName')[0].style.display = 'none';
  $('.firstNameFields')[0].style.display = 'flex';
}
const collapseFirstName = () => {
  $('.firstName')[0].style.display = 'block';
  $('.firstNameFields')[0].style.display = 'none';
}
const firstNameUpdate = () => {
if (101 - firstName.length < 0 || firstName.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      firstName: firstName
    }).then(
      toast.success("First name been successfully updated"),
      collapseFirstName()
    )
}
}
const firstNameSet = (e) => {
  setFirstName(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[1].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[1].style.opacity = 0.4;
  } else {
      $('.saveButton')[1].style.opacity = 1;
      $('.saveButton')[1].style.backgroundColor = '#2D88FF';
  }
}
useEffect(() => {
if (firstNamePresent === false) {
    console.log()
} else {
    $('.firstName')[0].innerText = "Edit";
    $('.firstNameText')[0].innerText = firstName;
}
}, [firstNamePresent])

// Last Name
const addLastName = () => {
  $('.lastName')[0].style.display = 'none';
  $('.lastNameFields')[0].style.display = 'flex';
}

const collapseLastName = () => {
  $('.lastName')[0].style.display = 'block';
  $('.lastNameFields')[0].style.display = 'none';
}

const lastNameUpdate = () => {
if (101 - lastName.length < 0 || lastName.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      lastName: lastName
    }).then(
      toast.success("Last name been successfully updated"),
      collapseLastName()
    )
}
}

const lastNameSet = (e) => {
  setlastName(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[2].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[2].style.opacity = 0.4;
  } else {
      $('.saveButton')[2].style.opacity = 1;
      $('.saveButton')[2].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (lastNamePresent === false) {
    console.log()
} else {
    $('.lastName')[0].innerText = "Edit";
    $('.lastNameText')[0].innerText = lastName;
}
}, [lastNamePresent])


// School
const addSchool = () => {
  $('.school')[0].style.display = 'none';
  $('.schoolFields')[0].style.display = 'flex';
}

const collapseSchool = () => {
  $('.school')[0].style.display = 'block';
  $('.schoolFields')[0].style.display = 'none';
}

const schoolUpdate = () => {
if (101 - school.length < 0 || school.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      others: school
    }).then(
      toast.success("Profesional field has been successfully updated"),
      collapseSchool()
    )
}
}

const schoolSet = (e) => {
  setSchool(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[5].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[5].style.opacity = 0.4;
  } else {
      $('.saveButton')[5].style.opacity = 1;
      $('.saveButton')[5].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (schoolPresent === false) {
    console.log()
} else {
    $('.school')[0].innerText = "Edit";
    $('.schoolText')[0].innerText = school;
}
}, [schoolPresent])


// Location
const addLocation = () => {
  $('.location')[0].style.display = 'none';
  $('.locationFields')[0].style.display = 'flex';
}

const collapseLocation = () => {
  $('.location')[0].style.display = 'block';
  $('.locationFields')[0].style.display = 'none';
}

const locationUpdate = () => {
if (101 - location.length < 0 || location.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      bio: location
    }).then(
      toast.success("Bio has been successfully updated"),
      collapseLocation()
    )
}
}

const locationSet = (e) => {
  setLocation(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[3].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[3].style.opacity = 0.4;
  } else {
      $('.saveButton')[3].style.opacity = 1;
      $('.saveButton')[3].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (locationPresent === false) {
    console.log()
} else {
    $('.location')[0].innerText = "Edit";
    $('.locationText')[0].innerText = location;
}
}, [locationPresent])


// Place Of Work
const addPlaceOfWork = () => {
  $('.placeOfWork')[0].style.display = 'none';
  $('.placeOfWorkFields')[0].style.display = 'flex';
}

const collapsePlaceOfWork = () => {
  $('.placeOfWork')[0].style.display = 'block';
  $('.placeOfWorkFields')[0].style.display = 'none';
}

const placeOfWorkUpdate = () => {
if (101 - placeOfWork.length < 0 || placeOfWork.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      year: placeOfWork
    }).then(
      toast.success("Year been successfully updated"),
      collapsePlaceOfWork()
    )
}
}

const placeOfWorkSet = (e) => {
  setPlaceOfWork(e.target.value)
  if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
      $('.saveButton')[4].style.backgroundColor = '#3A3B3C';
      $('.saveButton')[4].style.opacity = 0.4;
  } else {
      $('.saveButton')[4].style.opacity = 1;
      $('.saveButton')[4].style.backgroundColor = '#2D88FF';
  }
}

useEffect(() => {
if (placeOfWorkPresent === false) {
    console.log()
} else {
    $('.placeOfWork')[0].innerText = "Edit";
    $('.placeOfWorkText')[0].innerText = placeOfWork;
}
}, [placeOfWorkPresent])






// Birthday
const addBirthday = () => {
  $('.birthday')[0].style.display = 'none';
  $('.birthdayFields')[0].style.display = 'flex';
}

const collapseBirthday = () => {
  $('.birthday')[0].style.display = 'block';
  $('.birthdayFields')[0].style.display = 'none';
}

const birthdayUpdate = () => {
if (101 - birthday.length < 0 || birthday.length === 0) {
    return;
} else {
    db.collection('users').doc(currentUserId).update({
      gender: birthday
    }).then(
      toast.success("Gender been successfully updated"),
      collapseBirthday()
    )
}
}

const birthdaySet = (e) => {
  setBirthday(e.target.value)
  // if ('') {
  //     $('.saveButton')[7].style.backgroundColor = '#3A3B3C';
  //     $('.saveButton')[7].style.opacity = 0.4;
  // } else {
  //     $('.saveButton')[7].style.opacity = 1;
  //     $('.saveButton')[7].style.backgroundColor = '#2D88FF';
  // }
}

useEffect(() => {
if (birthdayPresent === false) {
    console.log()
} else {
    $('.birthday')[0].innerText = "Edit";
    $('.birthdayText')[0].innerText = birthday;
}
}, [birthdayPresent])

   useEffect(() => {
    db.collection('users').doc(`${currentUserId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])


const deleteUser1 = (e) => {
  e.preventDefault()

  toast.success("Sorry!\nWe're Still working on this...")
}








  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  
  useEffect(() => {
    db.collection('users').doc(`${uid}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])

    
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
      <>
<div style={{backgroundColor: "#E8E8E8",margin:20}}  class="container">
    <div class="main-body">
    
          <nav aria-label="breadcrumb" class="main-breadcrumb">

          </nav>
    
          <div class="row gutters-sm" style={{marginTop:15}}>
            <div class="col-md-4 mb-3">
              <div class="">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                        <img src={profileUserData?.photoURL} alt={profileUserData?.username} className="profileAvatar "/>
                    <div class="mt-3">
                      <h4>{profileUserData?.firstName} {profileUserData?.lastName}</h4>
                      <div style={{fontSize: 18,color: "#808080"}}>Bio</div>
                      {profileUserData?.bio === '' ?(
                        <span style={{fontSize: 15,color: "#808080"}}>MOTIVATE || INSPIRE || INNOVATE</span>
                      ):(
                        <span style={{fontSize: 15,color: "#808080"}} >{profileUserData?.bio}</span>
                      )}
                      <div>
                      <span style={{display: "flex",justifyContent: "space-between"}}> 

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Follower(s)</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(123456789,1)}
                      </div>
                      </div>

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Following</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(1200000,1)}
                      </div>
                      </div>

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Post(s)</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(1500,1)}
                      </div>
                      </div>
                      </span>
                      
                      </div>
                      {auth1?.currentUser?.uid === uid ?(
                        <>
      <button style={{marginLeft:10,color: "#3f51b5",border: "1px solid #3f51b5",backgroundColor: "#fff"}} class="btn " onClick={handleClickUpdateProfiledOpen}>Edit Profile</button>
                        </>
                      ):(
                        <>
                        {auth1?.currentUser?.uid &&(
                        <>
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} class="btn ">Follow</button>
                     <a href={`/mainmessagespage`}>
                     <button style={{marginLeft:10,color: "#3f51b5",border: "1px solid #3f51b5",backgroundColor: "#fff"}} class="btn ">Message</button>
                     </a>                     
                       </>
                        )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="mt-3">
                <ul class="list-group list-group-flush">

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">Jessy Alex</span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div class="col-md-8">
              <div class="mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {profileUserData?.firstName} {profileUserData?.lastName}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {profileUserData?.email}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      @{profileUserData?.username}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Year</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {profileUserData?.year}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Category</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {profileUserData?.category}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Reg No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {auth1?.currentUser?.uid === uid ?(
                        <>
                      {profileUserData?.reg}
                        </>
                      ):(
                        <>
                        It's Private
                        </>
                      )}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {profileUserData?.gender}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Other Professional levels</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {profileUserData?.others === ''?(
                      <>
                      N/A
                      </>
                    ):(
                      <>
                      {profileUserData?.others}
                      </>
                    )}
                    </div>
                  </div>
                  <hr/>
                  {/* <div class="row">
                    <div class="col-sm-12">
                      <a class="btn" style={{backgroundColor: "#3f51b5",color: "#fff"}}  href={`/profileedit`}>Edit</a>
                    </div>
                  </div> */}
                </div>
              </div>
              
{/*  */}
                  </div>
                </div>

              </div>


              </div>

              <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={updateProfile}
      >
            <ToastContainer/>

        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseUpdateProfile}>
          <div style={{textAlign: "center"}}>
        <span style={{color: "#3f51b5"}}>My Profile Update</span>
        </div>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>




<div class="wrapper bg-white mt-sm-5">
    <h4  class="pb-4 border-bottom">Account settings</h4>
    <div class="d-flex align-items-start py-3 border-bottom"> 
    <Dialog
                open={open1}
                onClose={handleClose1}
                scroll={scroll}
                className="dialog2"
            >
                <div class="makeStyles-paper-1">
                    <div class="profileHead2">
                        <p>Are you sure you want to change your profile picture ?</p>
                        <progress value={progress} max="100" style={{ display: 'none' }} className="progress" />
                        <div style={{alignSelf: "center"}} className="buttons">
                            <button style={{color: "#3f51b5"}} onClick={handleUpload}>Yes</button>
                            <button  style={{color: "#3f51b5"}} onClick={handleClose1}>No</button>
                        </div>
                    </div>
                </div>
            </Dialog>
                    <img onClick={uploadFileWithClick} src={profileUserData?.photoURL} className="profileAvatar " />
                    <input style={{display: "none"}} onChange={handleChange} type="file" accept="image/*" className='inputImage' />

                    <div class="pl-sm-4 pl-2" id="img-section"> <b style={{color: "#88888888"}}>Profile Photo</b>
            <p></p> 
            <div class="">  <button onClick={uploadFileWithClick} style={{color: "#3f51b5",border: "1px solid #3f51b5"}} class="btn border button">Upload</button> </div>
        </div>
    </div>
    <div class="py-2">

        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">First Name</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  onClick={addFirstName} class="bg-light form-control" value={`${profileUserData?.firstName}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}} onClick={addFirstName} className="firstName"/>
            </div>
            </div>

                <div className="firstNameFields">
                    <textarea value={firstName} placeholder="Update your first name" onChange={firstNameSet} className="bioInput" />
                    <p style={{fontSize:15}}>{`${101 - firstName.length} characters remaining`}</p>
                    <div style={{display: "flex",marginTop:-15}}className="cancelAndSaveButtons">
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapseFirstName} >Cancel</button>
                        <button onClick={firstNameUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Last Name</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" onClick={addLastName} value={`${profileUserData?.lastName}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}} onClick={addLastName} className="lastName"/>
            </div>
            </div>

                <div className="lastNameFields">
                    <textarea value={lastName} placeholder="Update your last name" onChange={lastNameSet} className="bioInput" />
                    <p style={{fontSize:15}}>{`${101 - lastName.length} characters remaining`}</p>
                    <div  style={{display: "flex",marginTop:-15}} className="cancelAndSaveButtons">
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapseLastName} >Cancel</button>
                        <button onClick={lastNameUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>        
            </div>
        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">BIO</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" onClick={addLocation} value={`${profileUserData?.bio}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}} onClick={addLocation} className="location"/>
            </div>
            </div>

                <div className="locationFields">
                    <textarea value={location} placeholder="Update your Bio" onChange={locationSet} className="bioInput" />
                    <p style={{fontSize:15}}>{`${101 - location.length} characters remaining`}</p>
                    <div style={{display: "flex",marginTop:-15}} className="cancelAndSaveButtons">
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapseLocation} >Cancel</button>
                        <button onClick={locationUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>           
            
            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Year Of Study</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  class="bg-light form-control" onClick={addPlaceOfWork} value={`${profileUserData?.year}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}}  onClick={addPlaceOfWork} className="placeOfWork"/>
            </div>
            </div>

                <div className="placeOfWorkFields">
                    <div className="row">
           <select value={placeOfWork} className="register__date2" onChange={placeOfWorkSet}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
                    <div style={{display: "flex",marginTop:-15}}  className="cancelAndSaveButtons">
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapsePlaceOfWork} >Cancel</button>
                        <button onClick={placeOfWorkUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>   



        
            
              </div>

        <div class="row py-2">
        <div class="col-md-6 pt-md-0 pt-3"> <label for="">Gender</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text"  onClick={addBirthday}  class="bg-light form-control" value={`${profileUserData?.gender}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}} onClick={addBirthday} className="birthday"/>
            </div>
            </div>
            <div className="birthdayFields">


<div className="row">
      <select value={birthday} className="register__date2" onChange={birthdaySet}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>

        </select>

        
    </div>
    <div style={{display: "flex",marginTop:-15}} className="cancelAndSaveButtons">
        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapseBirthday} >Cancel</button>
        <button onClick={birthdayUpdate} className="saveButton">Save</button>
    </div>
</div>   

            </div> 

            <div class="col-md-6 pt-md-0 pt-3"> <label for="">Profesional Level</label> 
            <div style={{display: 'flex',alignItems: "center"}}>
            <div><input type="text" onClick={addSchool} class="bg-light form-control" value={`${profileUserData?.others}`}/>
            </div>
            <div><EditIcon style={{color: "#3f51b5",cursor:"pointer"}} onClick={addSchool} className="school"/>
            </div>
            </div>

                <div className="schoolFields">
                    <textarea value={school} placeholder="Update your professional level" onChange={schoolSet} className="bioInput" />
                    <p style={{fontSize:15}}>{`${101 - school.length} characters remaining`}</p>
                    <div style={{display: "flex",marginTop:-15}} className="cancelAndSaveButtons">
                        <button style={{backgroundColor: "#3f51b5",color: "#fff"}} onClick={collapseSchool} >Cancel</button>
                        <button onClick={schoolUpdate} className="saveButton">Save</button>
                    </div>
                </div>
            </div>        
            </div>
        <div class="py-3 pb-4 border-bottom">  
        <button onClick={handleCloseUpdateProfile} class="btn border button" style={{color: "#3f51b5"}}>Cancel</button> </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate">
            <div> <p><b>UoN_ACES</b></p><p>MOTIVATE || INSPIRE || INNOVATE</p>
            </div>
            <div class="ml-auto"> <button onClick={deleteUser1} class="btn danger">Deactivate</button> </div>
        </div>
    </div>
</div>
          </Typography>


          <DialogActions style={{flexDirection: "column"}}>
        <Typography gutterBottom style={{marginTop:20}}>
          <i style={{fontWeight:"600",color: "#fff"}}>" Survey and test a prospective action before undertaking it. Before you proceed, step back and look at the big picture, lest you act rashly on raw impulse."</i>
          <center style={{color: "#3f51b5"}}>MOTIVATE || INSPIRE || INNOVATE</center>
          </Typography>

        </DialogActions>
        </DialogContent>
 
      </BootstrapDialog>
</>


    )
}

export default Profileview
