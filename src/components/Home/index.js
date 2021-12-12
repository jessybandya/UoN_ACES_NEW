import { Grid, makeStyles } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Hidden, Paper } from "@material-ui/core";
import Add from "../Grid/Add";
import Feed from "../Grid/Feed";
import Leftbar from "../Grid/Leftbar";
import Navbar from "../Grid/Navbar";
import Rightbar from "../Grid/Rightbar";
import { auth } from "../firebase"
import { useHistory } from "react-router";
import Header from "../Testhome/header/Header";
import Sidebar from "../Testhome/sidebar/Sidebar";
import Contacts from "../Testhome/contacts/Contacts";
import Stories from "../Testhome/stories/Stories";
import Form from "../Testhome/form/Form";
import Posts from "../Testhome/posts/Posts";
import { LoginAction, LogoutAction } from "../Testhome/store/actions/auth";
import { lightPrimary } from "../assets/Colors";
import Style from "../Testhome/Style"
import "./styles.css"
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Home = ({user}) => {
  const history = useHistory("")
  const classes1 = useStyles();

  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.user);

  const mode = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
      type: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(LoginAction(authUser));
      } else {
        dispatch(LogoutAction());
      }
    });
  }, [dispatch]);

  const classes = Style();

  return (
    <div>
      {auth?.currentUser?.uid &&(
       <>
      {/* <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar user={user}/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid> */}


<ThemeProvider theme={muiTheme}>
      <Paper
        elevation={0}
        className={classes.root}
        style={{ backgroundColor: !mode && lightPrimary }}
      >

          <Grid  className={classes.app}>

            <Grid item  className={classes.app__body}>
              {/* ----Body---- */}
              <Hidden smDown>
                <Grid item container className={classes.body__right}  sm={2} xs={2}>
                  {/* ----Sidebar---- */}
                  <Leftbar user={user}/>
                </Grid>
                </Hidden>
              <Grid item container  className={classes.body__feed} xs={12} sm={8} md={6}>
                {/* ----Feed---- */}
                <Grid item container className={classes.feed__stories}>
                  <Stories />
                </Grid>
                <Grid item container className={classes.feed__form}>
                  {/* ----Upload Form---- */}
                  <Form />
                </Grid>
                <Grid item container className={classes.feed__posts}>
                  {/* ----Posts---- */}
                  <Posts />
                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item container className={classes.body__right} md={3} >
                  {/* ----Right sidebar---- */}
                  <Rightbar />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
  
      </Paper>
    </ThemeProvider>
       </>
      )}
      {!auth?.currentUser?.uid &&(
       <>

      {/* <Add /> */}
      <Grid container className="mobile">

      <Posts />

      </Grid>
      {/* <Add /> */}
       </>
      )}

    </div>
  );
};

export default Home;