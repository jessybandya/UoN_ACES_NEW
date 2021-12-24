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
import { db, auth1 } from "../../../firebase"
import "./styles.css"
import LinesEllipsis from 'react-lines-ellipsis'
import dayjs from 'dayjs';

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
import moment from 'moment'
import ReadMoreReact from 'read-more-react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
const Post = forwardRef(
  ({ ownerId, title, timestamp, description, fileType, fileData,noLikes,postId }, ref) => {
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
    let unsubscribe;
    if (postId) {
        unsubscribe = db.collection("posts").doc(postId).collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
        unsubscribe();
    }
}, [postId]);

useEffect(() => {
    db.collection("posts")
        .doc(postId)
        .collection("likes")
        .doc(`${auth1?.currentUser?.uid}`)
        .get()
        .then(doc2 => {
            if (doc2.data()) {
                if (show == 'like2') {
                    setShow('like2 blue');
                    setShow2('textforlike bluetextforlike')
                } else {
                    setShow('like2');
                    setShow2('textforlike')
                }
            }
        })
}, [postId, `${auth1?.currentUser?.uid}`]);

const likeHandle = (event) => {
    event.preventDefault();
    if (show == 'like2') {
        setShow('like2 blue');
        setShow2('textforlike bluetextforlike')
    } else {
        setShow('like2');
        setShow2('textforlike')
    }

    db.collection('posts')
        .doc(postId)
        .get()
        .then(docc => {
            const data = docc.data()
            console.log(show)
            if (show == 'like2') {
                db.collection("posts")
                    .doc(postId)
                    .collection("likes")
                    .doc(`${auth1?.currentUser?.uid}`)
                    .get()
                    .then(doc2 => {
                        if (doc2.data()) {
                            console.log(doc2.data())
                        } else {
                            db.collection("posts").doc(postId).collection("likes").doc(`${auth1?.currentUser?.uid}`).set({
                                likes: 1,
                                likedId: auth1?.currentUser?.uid
                            });
                            db.collection('posts').doc(postId).update({
                                noLikes: data.noLikes + 1
                            });
                        }
                    })

            } else {
                db.collection('posts').doc(postId).collection('likes').doc(`${auth1?.currentUser?.uid}`).delete().then(function () {
                    db.collection('posts').doc(postId).update({
                        noLikes: data.noLikes - 1
                    });
                })
            }
        })

}

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
          <h4 style={{marginTop:10}}>{noLikes} {noLikes == 1 ? "Like" : "Likes"}</h4>
          <section>
            <h4>{commentsCount} Comments</h4>
            <h4>{sharesCount} Shares</h4>
          </section>
        </div>
      );
    };

    var str="";
    var cleanStr=str.trim();
    const text = str;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <>
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profileUserData?.photoURL} style={{marginTop:-30}}/>
          <div className={classes.header__info}>
            <h4>{profileUserData?.firstName} {profileUserData?.lastName}</h4>
            <p style={{marginLeft:-3}}>

                {/* <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} units="minute" /> */}
                 {moment(timestamp).fromNow()}
            </p>
          </div>
          <MoreHorizOutlinedIcon style={{marginTop:-40}}/>
        </div>
        <div className={classes.post__body}>
          {/* <div className={classes.body__description}>
            <p>{description}</p>
          </div> */}
                            <a href={`/postview/${postId}/${ownerId}`}>

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
                  </a>

        </div>



<div className={classes.post__footer}>
          <Reactions />

        </div> 

            <div className="post__likeoptions">
            {auth1?.currentUser &&(
                <div className="like1" onClick={likeHandle}>
                    {show2 ==! "textforlike" ?(
                    <ThumbUpOutlinedIcon className={show} />
                    ):(
                      <ThumbUpAltIcon style={{marginTop:-10}} className={show2}/>
                    )}
                    <h3 className={show2}>Like</h3>
                </div>
            )}

                <a href={`/postview/${postId}/${ownerId}`}>
                <div className="comment1" style={{alignItems:"center"}}>
                    <i className="comment2" />
                    <h3 class="dope">Comment</h3>
                </div>
                </a>
                <div className="share1" >
                    <i className="share2" />
                    <h3>Share</h3>
                </div>
            </div>
            {/* <div style={{width:"100%",flex:1,alignItems: "center",border: "2px solid #88888888",borderRadius:15,height:100,padding:8,marginTop:5,marginBottom:5}} className={`comments__show `}>
             <Avatar src="" alt="" style={{marginTop:-15}}/>
              <div>
                <div><span><b>Jessy Bandya</b></span></div>
                <div>
                <div style={{color: "#8888888",width: "90%"}}> <span>
              <Typography  paragraph>
              <span style={{color: "#696969"}}>{isReadMore ? text.slice(0, 25) : text}</span>
      <span style={{color: "#3f51b5",cursor:"pointer"}} onClick={toggleReadMore} className="read-or-hide">
        {text.length > 25 &&(
          <>
        {isReadMore ? "...more" : "...less"}
        </>
        )}
      </span>
        </Typography>
                </span></div>
                </div>
              </div>

            </div> */}

      </Paper>
      </>
    );
  }
);

export default Post;
