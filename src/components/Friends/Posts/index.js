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
            <div class="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155"/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Posts</span> <span class="number1">38</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">200</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <button class="btn btn-sm btn-outline-primary w-100">Chat</button> <button class="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
            </div>
        </div>
    </div>


    <div class="card1 p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" class="rounded" width="155"/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Jessy Bandya</h4> <span>@jessybandya</span>
                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Posts</span> <span class="number1">38</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Following</span> <span class="number3">200</span> </div>
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
