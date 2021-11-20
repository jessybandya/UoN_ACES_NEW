import { Grid, makeStyles } from "@material-ui/core";
import Add from "../Grid/Add";
import Feed from "../Grid/Feed";
import Leftbar from "../Grid/Leftbar";
import Navbar from "../Grid/Navbar";
import Rightbar from "../Grid/Rightbar";
import { auth } from "../firebase"
import { useHistory } from "react-router";
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
  const classes = useStyles();

  return (
    <div>
      {auth?.currentUser?.uid &&(
       <>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar user={user}/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
       </>
      )}
      {!auth?.currentUser?.uid &&(
       <>

      {/* <Add /> */}
      <Grid container className="mobile">

          <Feed />

      </Grid>
      {/* <Add /> */}
       </>
      )}

    </div>
  );
};

export default Home;