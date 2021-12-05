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
  import * as React from 'react';
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
import { auth } from "../../firebase"



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
  
  const Postview = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [comments, setComments] = React.useState(false);

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

      
    return (
      <>
 <Card sx={{ maxWidth: 345 }} style={{marginBottom:5,borderTop: "1px solid #C5C5C5",marginTop:70,padding:10}}>
      <CardHeader
        avatar={
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>

        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Jessy Bandya"
        
        subheader="@jessybandya"
      />
                    <div style={{fontWeight:"600",color:"#808080",marginBottom:10,fontSize:15,marginLeft:10}}>Fri, 02.09.2022 at 11:30 PM</div>
                    <Typography gutterBottom variant="h5" style={{color: "#525252",marginLeft:10}}>
              Title
            </Typography>

      <CardContent>

      </CardContent>
      <CardActions disableSpacing style={{alignItems: "center",border: "1px solid #AEAEAE",borderTopLeftRadius:5,borderTopRightRadius:5}}>
      <div style={{display:"flex",justifyContent:"space-between",padding:8,width:"100%"}}>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"700",color: "#808080"}}>
           <NumberFormat value={2555} displayType={'text'} thousandSeparator={true}  />
            </div><ThumbUpAltOutlinedIcon style={{color: "#3f51b5",cursor:"pointer"}}/></div>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"700",color: "#808080"}}>
           <NumberFormat value={188} displayType={'text'} thousandSeparator={true}  />
             </div>        

        <ChatBubbleOutlineOutlinedIcon expand={comments} onClick={handleExpandClick1} aria-expanded={comments} aria-label="show more" style={{color: "#3f51b5",marginRight:0,cursor:"pointer"}}/>
        </div>
           <div style={{alignItems:"center"}}><div style={{fontWeight:"600",color: "#808080"}}>share</div><ShareOutlinedIcon onClick={handleToggle} style={{color: "#3f51b5",cursor:"pointer"}}/></div>
         
        <div style={{alignItems:"center",color: "#808080"}}>
        <div style={{fontWeight:"600"}}>view</div>
          <ExpandMoreIcon aria-expanded={expanded} onClick={handleExpandClick} expand={expanded} style={{color: "#3f51b5",marginTop:0,cursor:"pointer"}}/>
        </div>
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph style={{fontWeight:"600"}}>Title</Typography>
         <hr/>

          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
      {auth?.currentUser?.uid &&(
      <div style={{display:"flex",marginTop:10,alignItems:"center",justifyContent:"space-between"}}>
      <div>
      <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>    
      </div>
      <div style={{marginLeft:0,display:"flex",alignItems:"center",justifyContent:"space-between"}}>            
              <TextField
              multiline
              rows={2}
              placeholder="@jessybandya comment here"
              size="small"
              style={{ width: 200 }}
            /></div>
            <div><SendIcon style={{color: "#3f51b5",cursor:"pointer"}}/></div>
  </div>
      )}

      <Collapse in={comments} timeout="auto" unmountOnExit>
        <CardContent style={{marginTop:20}}>
        <Typography paragraph style={{fontWeight:"600"}}>Comments</Typography>
         <hr/>

          <Typography paragraph>
          
          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5}}>
            <div style={{display: "flex"}}>
              <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>Jessy Bandya <span style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>30 mins ago</div>

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


          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5}}>
            <div style={{display: "flex"}}>
              <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>Jessy Bandya <span style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a

          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>30 mins ago</div>

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



          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5,marginTop:5}}>
            <div style={{display: "flex"}}>
              <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>Jessy Bandya <span style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a

          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>30 mins ago</div>

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


          <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5,border: "2px solid #C5C5C5",borderRadius:5,marginTop:5}}>
            <div style={{display: "flex"}}>
              <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Jessy Bandya"/>
              <div style={{marginLeft:10}}>
              <div style={{fontWeight:"600"}}>Jessy Bandya <span style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</span></div>
              <div style={{fontWeight:"600",color:"#808080",marginTop:5,fontSize:13,marginLeft:10}}>
              <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
   
          </Typography>
              </div>
              <div style={{fontWeight:"400",color:"#696969",marginBottom:-15,marginTop:15,fontSize:13,marginLeft:10}}>30 mins ago</div>
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
        </CardContent>
      </Collapse>

    </Card>



    <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={open2}
     onClick={handleClose2}
   >
     <div style={{display: "flex",padding:15,justifyContent:"space-between",width:250,backgroundColor:"#fff",borderRadius:30}}>

     <div>
       <EmailShareButton
        title={`title`}
        url={`#`}
        hashtag={"#academicsurvey"}
        description={`formdescription`}
      >
        <EmailIcon  size={32} round />
      </EmailShareButton>
       </div>

       <div>
       <FacebookShareButton
        title={`title`}
        url={`#`}
        // quote={"Talking is easy just show me the codes."}
        hashtag={"#academicsurvey"}
        description={`formdescription`}
        className=""
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
       </div>
       <div>
       <TwitterShareButton
        title={`title`}
        url={`#`}
        hashtag={"#academicsurvey"}
        description={`formdescription`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
       </div>
       <div>
       <WhatsappShareButton
        title={`title`}
        url={`#`}
        hashtag={"#academicsurvey"}
        description={`formdescription`}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
       </div>

              <div>
       <LinkedinShareButton
        title={`title`}
        url={`#`}
        hashtag={"#academicsurvey"}
        description={`formdescription`}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
       </div>  

     </div>
   </Backdrop>
      </>
    );
  };
  
  export default Postview;