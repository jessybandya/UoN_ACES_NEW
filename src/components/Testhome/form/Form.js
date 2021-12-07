import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chip, Paper, Divider, LinearProgress } from "@material-ui/core";
import imageCompression from "browser-image-compression";
import Avatar from "@material-ui/core/Avatar";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PhotoRoundedIcon from "@material-ui/icons/PhotoRounded";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import {db, storage } from "../../firebase";
import Styles from "./Style";
import swal from "@sweetalert/with-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


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


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Form = () => {
  const classes = Styles();
  const { displayName, photoURL } = useSelector((state) => state.user);
  const [image, setImage] = useState("");
  const [whoToComment, setWhoToComment] = useState("");
  const [visible, setVisible] = useState("");
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [imageURL, setImageURL] = useState('');
  const [uploadData, setUploadData] = useState({
    description: "",
    file: {
      type: "",
      name: "",
      data: "",
    },
  });


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [progress, setProgress] = useState("");

  const uploadToFirebaseDB = (fileData) => {
    // uploading to collection called posts
    db.collection("posts")
      .add({
        profile: photoURL,
        username: displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        description: uploadData.description,
        fileType: uploadData.file.type,
        fileName: uploadData.file.name,
        fileData: fileData,
      })
      .then(() => resetState());
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    // verify atleast one of the input fields are not empyt
    if (uploadData.description || uploadData.file.data) {
      // if file input is true...upload the file to Fire-Store
      if (uploadData.file.data) {
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`).putString(uploadData.file.data, "data_url");
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const value = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(value);
          },

          (error) => {
            alert(error);
          },

          () => {
            storage
              .ref("posts")
              .child(id)
              .getDownloadURL()
              .then((url) => uploadToFirebaseDB(url));
          }
        );

        // do not go further..
        return;
      }
      // if not file input provided
      uploadToFirebaseDB(uploadData.file.data);
    } else {
      swal("😕 Input field can not be empty");
    }
  };

  // if file name is too long.. compress it
  const fileNameCompressor = (str, limit) => {
    let fileName = str;
    const arr = str.split(".");
    const name = arr[0];
    const ext = arr[arr.length - 1];

    if (name.length > limit) {
      fileName = name.substring(0, limit).trim() + "... ." + ext;
    }
    return fileName;
  };

  const imageUploadHandler = async (e, type) => {
    const inputFile = e.target.files[0];
    const _inputFile = inputFile.type.split("/");
    const inputFileType = _inputFile[0];
    const inputFileExec = _inputFile[1];
    const inputFileName = fileNameCompressor(inputFile.name, 20);

    const fileSize = inputFile.size / (1024 * 1024);

    const acceptedImageFormats = ["png", "jpg", "jpeg", "gif"];
    const acceptedVideoFormats = ["mp4", "mkv", "3gp", "avi", "webm"];

    switch (type) {
      case "video":
        if (!acceptedVideoFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select video format of mp4 , mkv , av ");
          e.target.value = "";
          return;
        }
        if (fileSize > 10) {
          swal("🔴 Please select a video less than 10MB file size");
          e.target.value = "";
          return;
        }
        break;
      case "image":
        if (!acceptedImageFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select image format of png , jpg , jpeg , gif ");
          e.target.value = "";
          return;
        }
        if (fileSize > 2) {
          swal("🔴 Please select an image less than 2MB file size");
          e.target.value = "";
          return;
        }
        break;
      default:
        swal("😮 OOPS...!!! Invalid file format");
        e.target.value = "";
        return;
    }

    let compressedInputFile = inputFile;
    if (inputFileType === "image") {
      //compression algorithm
      const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        compressedInputFile = await imageCompression(inputFile, compressionOptions);
      } catch (error) {
        alert(error);
      }
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setUploadData({
          ...uploadData,
          file: {
            type: inputFileType,
            name: inputFileName,
            data: inputFileDataBase64,
          },
        });
      };
      file.readAsDataURL(compressedInputFile);
    }

    // clear the file input event value
    e.target.value = "";
  };

  const resetState = () => {
    setUploadData({
      description: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });
    setProgress("");
  };

  return (
    <>
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar src={photoURL} />
        <form className={classes.header__form} onSubmit={handleSubmitButton}>
          <input
            placeholder={`What's on your mind, ${displayName}?`}
            onClick={handleExpandClick}
            style={{cursor: "pointer"}}
            // value={uploadData.description}
            // onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => imageUploadHandler(e, "image")}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => imageUploadHandler(e, "video")}
          />
          {/* <button type="submit">Post</button> */}
          <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      {/* <button type="submit">Post</button>  */}



      
        </form>
      </div>



<Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                value={title}
                size="small"
                style={{ width: "100%" }}
                onChange={(e) => {
                  setTitle(e.target.value)
              }}
              />
            </div>
            <div className={classes.item} style={{marginTop:10}}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Tell your story..."
                variant="outlined"
                label="Description"
                value={descriptions}
                size="small"
                onChange={(e) => {
                  setDescriptions(e.target.value)
              }}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value={visible} style={{width:100}}
            onChange={(e) => setVisible(e.target.value)} type="text" 
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                {/* <MenuItem value="Unlisted">Unlisted</MenuItem> */}

              </TextField>
              
            </div>
            <div style={{marginLeft:"40%",marginRight:"60%",justifyContent:"center"}}><Button variant="outlined">Post</Button></div>
            <div style={{marginTop:15}}>
            {uploadData.file.name && !progress && (
        <div className={classes.selectedFile}>
          <Chip
            color="primary"
            size="small"
            onDelete={resetState}
            icon={uploadData.file.type === "image" ? <PhotoRoundedIcon /> : <VideocamRoundedIcon />}
            label={uploadData.file.name}
          />
        </div>
      )}
            {progress ? (
        <div className={classes.uploading}>
          <LinearProgress variant="determinate" value={progress} className={classes.progress} />
          <p>{progress} %</p>
        </div>
      ) : (
        ""
      )}
      </div>
      </CardContent>
    </Collapse>
      <Divider />

      <div className={classes.upload__media}>
        <label htmlFor="upload-video" className={classes.media__options}>
          <VideocamRoundedIcon style={{ color: "#3f51b5" }} />
          <span style={{fontSize:20,fontWeight:"700"}}>Video</span>
        </label>
        <label htmlFor="upload-image" className={classes.media__options}>
          <PhotoRoundedIcon style={{ color: "#3f51b5" }} />
          <span style={{fontSize:20,fontWeight:"700"}}>Photo</span>
        </label>

      </div>


    </Paper>
    
    </>
  );
};

export default Form;
