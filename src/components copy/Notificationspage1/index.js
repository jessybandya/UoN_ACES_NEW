import { Grid, makeStyles } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Hidden, Paper } from "@material-ui/core";
import Add from "../Grid/Add";
import Feed from "../Notificationspage";
import Leftbar from "../Grid/Leftbar";
import Navbar from "../Grid/Navbar";
import Rightbar from "../Grid/Rightbar";
import { auth1 } from "../firebase"
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
import Testhome from  "../Testhome"


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
    },
  });

  useEffect(() => {
    auth1.onAuthStateChanged((authUser) => {
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
      {auth1?.currentUser?.uid &&(
       <>
  <Testhome/>
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

 
              <Grid item container  className={classes.body__feed} sm={7} xs={20}>


                <Grid item container >
                  {/* ----Posts---- */}
                  <Feed/>
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
      {!auth1?.currentUser?.uid &&(
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