import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom"
import "../styles.css"
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Backdrop from '@mui/material/Backdrop';
import FormSelect from '../../forms/FormSelect';
import { Form, FormGroup, Label, Input , Modal, ModalHeader, ModalBody,Table} from 'reactstrap';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import { MailIcon } from 'react-mail-icon'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
function Addpost() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [loading, setLoading] = useState(false)
    const [open2, setOpen2] = React.useState(false);
    const handleClose2 = () => {
      setOpen2(false);
    };
    const handleToggle = () => {
      setOpen2(true);
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

    return (
      <>
<section style={{justifyContent:"center"}} class="results-shown"> 
<Form inline className="Search-header">

<div style={{display: "flex",alignItems: "center",marginTop:80,marginLeft:20}}>


<FormGroup>


<FormSelect  style={{color: "#555",border: "1px solid #888888",borderRadius: 5}}
                 
                 
                  
                 options={[{
                   value: "",
                   name: "Browse"
                 },
                       {
                         value: "Mentor",
                         name: "Mentor"
                       }, {
                         value: "Mentee",
                         name: "Mentee"
                       }]} 
                 required=""             
                //  onChange={(e) => setBusinessCategory(e.target.value)} type="text" 
               />




</FormGroup>
<FormGroup>
<p className="card-text"><small className="text-muted">Find people</small></p>

</FormGroup>
</div>

</Form>
</section>
        <div style={{marginTop: 0,display:"flex",flexWrap: "wrap"}}>

<div class="card1 p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg"  style={{borderRadius:155/2,height:155,width:155}}/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div class="p-2 mt-2  d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{abbrNum(1200,1)}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">{abbrNum(2200,1)}</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
            </div>
        </div>
    </div>


    <div class="card1 p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg"  style={{borderRadius:155/2,height:155,width:155}}/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div style={{justifyContent:"space-between"}} class="p-2 mt-2  d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{abbrNum(1200,1)}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">{abbrNum(2200,1)}</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
            </div>
        </div>
    </div>

    <div class="card1 p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg"  style={{borderRadius:155/2,height:155,width:155}}/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div style={{justifyContent:"space-between"}} class="p-2 mt-2  d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{abbrNum(1200,2)}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">{abbrNum(2200,2)}</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
            </div>
        </div>
    </div>


        <div class="card1 p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg"  style={{borderRadius:155/2,height:155,width:155}}/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div style={{justifyContent:"space-between"}} class="p-2 mt-2  d-flex justify-content-between rounded text-white stats">
                <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">{abbrNum(1200,2)}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">{abbrNum(2200,2)}</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
            </div>
        </div>
    </div>

    
        </div>






    </>    
    )
}

export default Addpost
