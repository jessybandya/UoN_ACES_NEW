import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    TextField,
    makeStyles,
    Typography,
    Avatar
  } from "@material-ui/core";
import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NumberFormat from 'react-number-format';
import Backdrop from '@mui/material/Backdrop';
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
import React, { forwardRef, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
// import Like from "../../../components/assets/images/like.png";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import { db, auth1 } from "../../../firebase"
import { useParams } from "react-router-dom"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Moment from 'react-moment';
import moment from 'moment'


function Post({ fromId, commentId, postId, timestamp, comment}) {
  const [profileUserData, setProfileUserData] = useState();
  useEffect(() => {
    db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])
    return (
        <div>
                      <Typography paragraph>
          
          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5,backgroundColor:"white"}}>
            <div style={{display: "flex"}}>
              <Avatar src={profileUserData?.photoURL} alt={`${profileUserData?.firstName} ${profileUserData?.lastName}`}/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>{profileUserData?.firstName} {profileUserData?.lastName} <span style={{fontWeight:"100",color:"#AEAEAE"}}>@{profileUserData?.username}</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
                {comment}
                <div style={{color: "white",marginTop:-8}}>
                UoN_ACES in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat.
                </div>
          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>{moment(timestamp).fromNow()}</div>

              <div style={{display:"flex",justifyContent:"space-between",padding:8,width:100}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><span style={{fontWeight:"500",marginLeft:0}}>4.5K</span></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:15}}><a href={`#`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><span style={{fontWeight:"500",marginLeft:0,marginBottom:10}}>10K</span></div>
         </div>
            </div>
            </div>

            <div>
              <MoreHorizIcon/>
            </div>
          </div>
          </Typography>
        </div>
    )
}

export default Post
