import React, { forwardRef, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import Like from "../../../assets/images/like.png";
import Love from "../../../assets/images/love.png";
import Care from "../../../assets/images/care.png";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "./Style";
import { db } from "../../../firebase"
import "./styles.css"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const Post = forwardRef(
  ({ ownerId, title, timestamp, description, fileType, fileData,noLikes }, ref) => {
    const classes = Style();

    const [likesCount, setLikesCount] = useState(1);
    const [commentsCount, setCommentsCount] = useState(1);
    const [sharesCount, setSharesCount] = useState(1);
    const [likeIconOrder, setLikeIconOrder] = useState(1);
    const [loveIconOrder, setLoveIconOrder] = useState(1);
    const [careIconOrder, setCareIconOrder] = useState(1);
    const [profileUserData, setProfileUserData] = useState();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [show, setShow] = useState('like2');
    const [show2, setShow2] = useState('textforlike');
    const [posterImage, setPosterImage] = useState('')

    const [postUser, setPostUser] = useState();

    useEffect(() => {
      db.collection('users').doc(`${ownerId}`).onSnapshot((doc) => {
          setProfileUserData(doc.data());
      });
  }, [])

    useEffect(() => {
      setLikesCount(Math.floor(Math.random() * 1000) + 1);
      setCommentsCount(Math.floor(Math.random() * 100) + 1);
      setSharesCount(Math.floor(Math.random() * 10) + 1);
      setLikeIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
      setLoveIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
      setCareIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    }, []);

    const Reactions = () => {
      return (
        <div className={classes.footer__stats}>
          <div>
            <img src={Like} style={{ order: `${likeIconOrder} ` }} alt="like-icon" />
            {/* <img src={Love} style={{ order: `${loveIconOrder} ` }} alt="love-icon" />
            <img src={Care} style={{ order: `${careIconOrder} ` }} alt="care-icon" /> */}
          </div>
          <h4 style={{marginTop:10}}>{likesCount}</h4>
          <section>
            <h4>{commentsCount} Comments</h4>
            <h4>{sharesCount} Shares</h4>
          </section>
        </div>
      );
    };

    return (
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profileUserData?.photoURL} style={{marginTop:-30}}/>
          <div className={classes.header__info}>
            <h4>{profileUserData?.firstName} {profileUserData?.lastName}</h4>
            <p style={{marginLeft:-3}}>
              <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} units="minute" />
            </p>
          </div>
          <MoreHorizOutlinedIcon style={{marginTop:-40}}/>
        </div>
        <div className={classes.post__body}>
          {/* <div className={classes.body__description}>
            <p>{description}</p>
          </div> */}
                <CardContent>
        <Typography paragraph style={{fontWeight:"600"}}>{title}</Typography>
       <hr/>
        <Typography paragraph>
         {description}
        </Typography>

      </CardContent>
          {fileData && (
            <div className={classes.body__image}>
              {fileType === "image" ? (
                <img src={fileData} alt="post" />
              ) : (
                <ReactPlayer url={fileData} controls={true} />
              )}
            </div>
          )}
        </div>



<div className={classes.post__footer}>
          <Reactions />

        </div> 

            <div className="post__likeoptions">
                <div className="like1" >
                    <i className={show} />
                    <h3 className={show2}>Like</h3>
                </div>
                <div className="comment1" style={{alignItems:"center"}}>
                    <i className="comment2" />
                    <h3 class="dope">Comment</h3>
                </div>
                <div className="share1" >
                    <i className="share2" />
                    <h3>Share</h3>
                </div>
            </div>
      </Paper>
    );
  }
);

export default Post;
