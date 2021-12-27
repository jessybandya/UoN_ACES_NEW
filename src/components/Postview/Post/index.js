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
import Like from "../../../components/assets/images/like.png";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "../../../components/Testhome/posts/post/Style";
import { db, auth1 } from "../../../components/firebase"
import { useParams, Link } from "react-router-dom"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Moment from 'react-moment';
import Comments from "../Comments"
import swal from "@sweetalert/with-react";
import "react-responsive-modal/styles.css";
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
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
  
  const Postview = (ref) => {
    const [expanded, setExpanded] = React.useState(false);
    const [comments, setComments] = React.useState(false);
    const { id, uid } = useParams();
    const handleExpandClick = () => {
      setExpanded(!expanded);
      setComments(false);
    };
    const handleExpandClick1 = () => {
        setComments(!comments);
        setExpanded(false);
      };
      const [open2, setOpen2] = React.useState(false);
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleToggle = () => {
        setOpen2(true);
      };



      const classes = Style();

      const [likesCount, setLikesCount] = useState(1);
      const [commentsCount, setCommentsCount] = useState(0);
      const [sharesCount, setSharesCount] = useState(1);
      const [likeIconOrder, setLikeIconOrder] = useState(1);
      const [loveIconOrder, setLoveIconOrder] = useState(1);
      const [careIconOrder, setCareIconOrder] = useState(1);
      const [profileUserData, setProfileUserData] = useState();
      const [comments1, setComments1] = useState('');
      const [comment, setComment] = useState('');
      const [show, setShow] = useState('like2');
      const [show2, setShow2] = useState('textforlike');
      const [posterImage, setPosterImage] = useState('')
      const [post, setPost] = useState("")
      const [postUser, setPostUser] = useState();
      const [profile, setProfile] = useState("")
      const [shares, setShares] = useState('');
      const [shareCount, setShareCount] = useState(0);
  
      const share = (event) => {
        event.preventDefault(); 
  
          db.collection("posts").doc(`${id}`).collection("shares").add({
            ownerId: uid,
            read: false,
            count:false,
            postId:id,
            shared:true,
            timestamp: Date.now(),
        })
        setExpanded(false)  
  
    }
    useEffect(() => {
      db.collection('posts').doc(id).collection("shares").where("shared", "==",true)
     .onSnapshot(snapshot => (
      setShareCount(snapshot.docs.length)
     ))
  }, []);

  useEffect(() => {
    db.collection('posts').doc(id).collection("comments").where("count", "==",false)
   .onSnapshot(snapshot => (
    setCommentsCount(snapshot.docs.length)
   ))
  }, []);

  const commentPost = (event) => {
    event.preventDefault(); 

    if(!comments1){
      swal("🔴 You cannot add an empty comment!")
    }else{
      db.collection("posts").doc(`${id}`).collection("comments").add({
        ownerId: uid,
        read: false,
        count:false,
        postId:id,
        comment: comments1,
        fromId:auth1?.currentUser?.uid,
        timestamp: Date.now(),
    }).then(() => setComments1(""));
    setComment(true) 
    db.collection("notifications").add({
      ownerId: uid,
      read: false,
      count:false,
      postId:id,
      comment: comments1,
      type:"comment",
      fromId:auth1?.currentUser?.uid,
      timestamp: Date.now(),
  }).then(() => setComments1(""));
    setComment(true) 
    setComments1("")
}

setComment(true) 
setComments1("")

}

      useEffect(() => {
        db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
          setProfile(doc.data());
        });
    }, [])

  
      useEffect(() => {
        db.collection('posts').doc(id).onSnapshot((doc) => {
          setPost(doc.data());
        });
    }, [])
    
      useEffect(() => {
        db.collection('users').doc(`${uid}`).onSnapshot((doc) => {
            setProfileUserData(doc.data());
        });
    }, [])
  
  // useEffect(() => {
  //     let unsubscribe;
  //     if (id) {
  //         unsubscribe = db.collection("posts").doc(id).collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
  //             setComments(snapshot.docs.map((doc) => doc.data()));
  //         });
  //     }
  //     return () => {
  //         unsubscribe();
  //     }
  // }, [id]);
  
  useEffect(() => {
      db.collection("posts")
          .doc(id)
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
  }, [id, `${auth1?.currentUser?.uid}`]);
  
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
          .doc(id)
          .get()
          .then(docc => {
              const data = docc.data()
              console.log(show)
              if (show == 'like2') {
                  db.collection("posts")
                      .doc(id)
                      .collection("likes")
                      .doc(`${auth1?.currentUser?.uid}`)
                      .get()
                      .then(doc2 => {
                          if (doc2.data()) {
                              console.log(doc2.data())
                          } else {
                              db.collection("posts").doc(id).collection("likes").doc(`${auth1?.currentUser?.uid}`).set({
                                  likes: 1,
                                  likedId: auth1?.currentUser?.uid
                              });
                              db.collection('posts').doc(id).update({
                                  noLikes: data.noLikes + 1
                              });
                          }
                      })  
              } else {
                  db.collection('posts').doc(id).collection('likes').doc(`${auth1?.currentUser?.uid}`).delete().then(function () {
                      db.collection('posts').doc(id).update({
                          noLikes: data.noLikes - 1
                      });
                  })
              }
          })
  
  }
  

  
      const Reactions = () => {
  
        return (
          <div className={classes.footer__stats}>
            <div>
              <img src={Like} style={{ order: `${likeIconOrder} ` }} alt="like-icon" />
              {/* <img src={Love} style={{ order: `${loveIconOrder} ` }} alt="love-icon" />
              <img src={Care} style={{ order: `${careIconOrder} ` }} alt="care-icon" /> */}
            </div>
            <h4 style={{marginTop:10}}>{post?.noLikes} {post?.noLikes == 1 ? "Like" : "Likes"}</h4>
            <section>
              <h4>{commentsCount} Comments</h4>
              <h4>{shareCount} Shares</h4>
            </section>
          </div>
        );
      };

      
    return (
      <>


<Paper  className={classes.post}>
        <div className={classes.post__header}>
          <Link to={`/profileview/${uid}`}>
          <Avatar src={profileUserData?.photoURL} style={{marginTop:-30}}/>
          </Link>
          <div className={classes.header__info}>
          <Link to={`/profileview/${uid}`}>
            <h4>{profileUserData?.firstName} {profileUserData?.lastName}</h4>
            </Link>
            <p style={{marginLeft:-3}}>
            <Moment format='MMMM Do YYYY, h:mm:ss a'>{post?.timestamp}</Moment>             </p>
          </div>
          <MoreHorizOutlinedIcon style={{marginTop:-40}}/>
        </div>
        <div className={classes.post__body}>


                <CardContent>
        <Typography paragraph style={{fontWeight:"600"}}>{post?.title}</Typography>
       <hr/>
        <Typography paragraph>
         {post?.description}
        </Typography>
    
      </CardContent>
          {post?.fileData && (
            <div className={classes.body__image}>
              {post?.fileType === "image" ? (
                <img src={post?.fileData} alt="post" />
              ) : (
                <ReactPlayer url={post?.fileData} controls={true} />
              )}
            </div>
          )}

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

                <div className="comment1" style={{alignItems:"center"}}>
                    <i className="comment2" expand={comments} onClick={handleExpandClick1} />
                    <h3 class="dope">Comment</h3>
                </div>
                <div className="share1" >
                    <i onClick={handleExpandClick} className="share2" />
                    <h3 onClick={handleExpandClick}>Share</h3>
                </div>
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <div style={{display: "flex",padding:2,justifyContent:"space-between"}}>

<div>
  <EmailShareButton
   title={post?.title}
   url={`https://odero-85bdb.web.app/postview/${id}/${uid}`}
   hashtag={"#UoN_ACES"}
   description={post?.description}
 >
   <EmailIcon onClick={share} size={32} round />
 </EmailShareButton>
  </div>

  <div>
  <FacebookShareButton
   title={post?.title}
   url={`https://odero-85bdb.web.app/postview/${id}/${uid}`}
   // quote={"Talking is easy just show me the codes."}
   hashtag={"#UoN_ACES"}
   description={post?.description}
   className=""
 >
   <FacebookIcon onClick={share} size={32} round />
 </FacebookShareButton>
  </div>
  <div>
  <TwitterShareButton
   title={post?.title}
   url={`https://odero-85bdb.web.app/postview/${id}/${uid}`}
   hashtag={"#UoN_ACES"}
   description={post?.description}
 >
   <TwitterIcon onClick={share} size={32} round />
 </TwitterShareButton>
  </div>
  <div>
  <WhatsappShareButton
   title={post?.title}
   url={`https://odero-85bdb.web.app/postview/${id}/${uid}`}
   hashtag={"#UoN_ACES"}
   description={post?.description}
 >
   <WhatsappIcon onClick={share} size={32} round />
 </WhatsappShareButton>
  </div>

         <div>
  <LinkedinShareButton
   title={post?.title}
   url={`https://odero-85bdb.web.app/postview/${id}/${uid}`}
   hashtag={"#UoN_ACES"}
   description={post?.description}
 >
   <LinkedinIcon onClick={share} size={32} round />
 </LinkedinShareButton>
  </div>  

</div>
      </CardContent>
      </Collapse>
      </Paper>
      {auth1?.currentUser &&(
      <div style={{display:"flex",marginTop:10,alignItems:"center",justifyContent:"space-between",width: "100%"}}>
      <div>
      <Avatar src={profile?.photoURL} alt={profile?.username}/>    
      </div>
      <div style={{marginLeft:0,display:"flex",alignItems:"center",justifyContent:"space-between"}}>            
              <TextField
              multiline
              rows={1}
              placeholder={`@${profile?.username} comment here...`}
              size="small"
              style={{ width: 250 }}
              onChange={(e) => {
                setComments1(e.target.value)
            }}
            /></div>
            <div><SendIcon onClick={commentPost} style={{color: "#3f51b5",cursor:"pointer"}}/></div>
  </div>
      )}


  <Collapse in={comments} timeout="auto" unmountOnExit>
        <CardContent style={{marginTop:20}}>
        <Typography paragraph style={{fontWeight:"600"}}>Comments</Typography>
         <hr/>
     <Comments postId={id}/>

        </CardContent>
      </Collapse>

      </>
    );
  };
  
  export default Postview;