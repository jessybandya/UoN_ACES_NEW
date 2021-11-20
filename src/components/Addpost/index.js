import * as React from 'react';
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
import "./styles.css"
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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
    return (
        <div style={{marginTop: 70,display:"flex",flexWrap: "wrap"}}>

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
        <IconButton style={{marginLeft:-8}} aria-label="share">
          <InsertCommentIcon />
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
        <IconButton style={{marginLeft:-8}} aria-label="share">
          <InsertCommentIcon />
        </IconButton>

      </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 345,margin:1,width:500, borderTop: "2px solid #808080" }}>
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
        <IconButton style={{marginLeft:-8}} aria-label="share">
          <InsertCommentIcon />
        </IconButton>

      </CardActions>
      
    </Card>
    
        </div>

        
    )
}

export default Addpost
