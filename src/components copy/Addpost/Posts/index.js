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
// import "./styles.css"
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
        <div style={{marginTop: 70,display:"flex",flexWrap: "wrap"}}>

<Card sx={{ maxWidth: 345,margin:1, borderTop: "2px solid #808080" }}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            <DeleteForeverIcon onClick={handleToggle}/>
          </IconButton>
        }
        title="Title"
        subheader="September 14, 2016"
      />
      <CardMedia
      style={{padding:5}}
        component="img"
        image="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="
        alt="Title"
      />

          <CardActions disableSpacing>
          <b>4000</b>
        <IconButton style={{marginLeft:-8}} aria-label="add to favorites">
           <FavoriteIcon />
        </IconButton>
        <b>102</b>
        <IconButton style={{marginLeft:-5}} aria-label="share">
          <InsertCommentIcon />
        </IconButton> 

          <IconButton style={{marginLeft: 90}} aria-label="settings">
          <ShareIcon onClick={handleToggle}/>
        </IconButton> 
            </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 345,margin:1, borderTop: "2px solid #808080" }}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            <DeleteForeverIcon />
          </IconButton>
        }
        title="Title"
        subheader="September 14, 2016"
      />
      <CardMedia
      style={{padding:5}}
        component="img"
        image="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="
        alt="Title"
      />

          <CardActions disableSpacing>
          <b>4000</b>
        <IconButton style={{marginLeft:-8}} aria-label="add to favorites">
           <FavoriteIcon />
        </IconButton>
        <b>102</b>
        <IconButton style={{marginLeft:-5}} aria-label="share">
          <InsertCommentIcon />
        </IconButton> 

          <IconButton style={{marginLeft: 90}} aria-label="settings">
          <ShareIcon onClick={handleToggle}/>
        </IconButton> 
            </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 345,margin:1,width:400, borderTop: "2px solid #808080" }}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            <DeleteForeverIcon />
          </IconButton>
        }
        title="Title"
        subheader="September 14, 2016"
      />


      
          <CardActions disableSpacing>
          <b>4000</b>
        <IconButton style={{marginLeft:-8}} aria-label="add to favorites">
           <FavoriteIcon />
        </IconButton>
        <b>102</b>
        <IconButton style={{marginLeft:-5}} aria-label="share">
          <InsertCommentIcon />
        </IconButton> 
          <IconButton style={{marginLeft: 90}} aria-label="settings">
          <ShareIcon onClick={handleToggle}/>
        </IconButton> 
            </CardActions>


     
      
    </Card>
    




    
    <Backdrop
     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
     open={open2}
     onClick={handleClose2}
   >
     <div style={{display: "flex",padding:10,justifyContent:"space-between",width:250,borderRadius:40}}>

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
        </div>

        
    )
}

export default Addpost
