import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React,{useState,useEffect} from 'react'
import MuiAlert from "@material-ui/lab/Alert";
import "./styles.css"


const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const [image, setImage] = useState("");
  const [whoToComment, setWhoToComment] = useState("");
  const [visible, setVisible] = useState("");
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState('');


  const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
    setImageURL(URL.createObjectURL(e.target.files[0]));
};





  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container} style={{height:600}}>
          <form className={classes.form} autoComplete="off">
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
            <div className={classes.item}>
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

            <div class="form-group form-item webform-component webform-component-textfield webform-component--contact-person-name inputForUpload" > 
                    <label for="edit-submitted-contact-person-name">
                      <button style={{border: "none",cursor: "pointer"}}>Upload Image</button></label> 
                   {/* <div style={{display: "flex"}}> */}
                    <input  onChange={handleChange} type="file" accept="image/*" className='four' />
                    <div class={`card-img-top navbar-brand previewImage ${!image && "vanish"}`}>
                      <img class="card-img-top navbar-brand previewImaage" style={{height:150,width:150,objectFit: "cover"}} src={imageURL} className="" />
                  </div>
                  {/* </div> */}
                  </div>
            {/* <div className={classes.item}> */}
              {/* <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup> */}
            {/* </div> */}
            <div className={classes.item} style={{marginRight:70,marginBottom:100}}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 10 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;