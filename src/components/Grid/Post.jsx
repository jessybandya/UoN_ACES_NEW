import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
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

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import "./styles.css"
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

const Post = ({ img, title }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
    {/* <Card className={classes.card}>
      <CardActionArea>
        <div style={{display: "flex",marginBottom:0,justifyContent:"space-between",padding:5}}>
          <div style={{display: "flex"}}>
            <Avatar src="https://ict.uonbi.ac.ke/sites/ict.uonbi.ac.ke/files/2020-06/UniversityOfNairobiTowersProject_banner.jpg" alt="Jessy Bandya"/>
            <div style={{marginLeft:10}}>
            <div style={{fontWeight:"600"}}>Jessy Bandya</div>
            <div style={{fontWeight:"100",color:"#AEAEAE"}}>@jessybandya</div>
            <div style={{fontWeight:"600",color:"#808080",marginTop:12,fontSize:15}}>10 hours ago</div>
          </div>
          </div>

          <div>
            <MoreHorizIcon/>
          </div>
        </div>
        <a href={`/postview`}>
        <CardMedia className={classes.media} image={img} title="My Post" />
        </a>
        <a href={`/postview`}>
        <CardContent>
          <Typography gutterBottom variant="h5" style={{color: "#000"}}>
            {title}
            <hr />
          </Typography>
          <Typography variant="body2" style={{color: "#000"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur earum est....
          </Typography>
        </CardContent>
        </a>
      </CardActionArea>
    <hr/>
      <>
       <div style={{display:"flex",justifyContent:"space-between",padding:8}}>
         <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>4.5K</div><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/></div>
         <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>10K</div><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a></div>
         <div style={{alignItems:"center"}}><div style={{fontWeight:"600"}}>share</div><ShareOutlinedIcon style={{color: "#3f51b5"}}/></div>
       </div>
      </>

    </Card> */}




<Card sx={{ maxWidth: 345 }} style={{marginBottom:5,borderTop: "1px solid #C5C5C5"}}>
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
                  <div style={{fontWeight:"600",color:"#808080",marginBottom:10,fontSize:15,marginLeft:10}}>10 hours ago</div>
                  <a href={`/postview`}>
                  <Typography gutterBottom variant="h5" style={{color: "#525252",marginLeft:10}}>
            {title}
          </Typography>
          </a>
          <a href={`/postview`}>
          <CardMedia className={classes.media} style={{height:300}} image="https://ict.uonbi.ac.ke/sites/ict.uonbi.ac.ke/files/2020-06/UniversityOfNairobiTowersProject_banner.jpg" title="My Post" />
           </a>
    <CardContent>

    </CardContent>
    <CardActions disableSpacing style={{alignItems: "center"}}>
    <div style={{display:"flex",justifyContent:"space-between",padding:8,width:500}}>
         <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><span style={{fontWeight:"600",marginLeft:3}}>4.5K</span></div>
         <div style={{alignItems:"center",display:"flex",marginTop:10}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><span style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</span></div>
         <div style={{alignItems:"center",display:"flex"}}><ShareOutlinedIcon style={{color: "#3f51b5"}}/><span style={{fontWeight:"600",marginLeft:3,marginBottom:5}}>share</span></div>
       </div>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon style={{color: "#3f51b5",marginBottom:10}}/>
      </ExpandMore>
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
  </Card>
    </>
  );
};

export default Post;