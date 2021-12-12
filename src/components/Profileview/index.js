import React from 'react'
import "./styles.css"
import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    fontSize: 16,
  },
}));


function Profileview() {
  const classes = useStyles();

  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}
    
function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "K", "M", "B", "T" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}

    return (
<div  class="container">
    <div class="main-body">
    
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Jessy Bandya</h4>
                      <span style={{fontSize: 18,color: "#808080"}} >@jessybandya</span>
                      <div style={{fontSize: 18, color: "#808080"}}>Year 3</div>
                      <div>
                      <span style={{display: "flex",justifyContent: "space-between"}}> 

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Follower(s)</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(123456789,1)}
                      </div>
                      </div>

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Following</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(1200000,1)}
                      </div>
                      </div>

                      <div style={{margin: 5}}>                   
                      <div style={{color: "#3f51b5"}}><b>Post(s)</b></div>
                      <div style={{fontWeight: "700",color: "#808080"}}>
                      {abbrNum(1500,1)}
                      </div>
                      </div>
                      </span>
                      </div>
                      <button style={{backgroundColor: "#3f51b5",color: "#fff"}} class="btn ">Follow</button>
                      <a href={`/messages`}>
                      <button style={{marginLeft:10,color: "#3f51b5",border: "1px solid #3f51b5",backgroundColor: "#fff"}} class="btn ">Message</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="mt-3">
                <ul class="list-group list-group-flush">

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary">@jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary">jessybandya</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">Jessy Alex</span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div class="col-md-8">
              <div class="mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Uwimana Jessy Bandya
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      bandya@students.uonbi.ac.ke
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +254 (0)746749307
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Reg No.</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      F16/137437/2019
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      M
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Other Professional levels</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Software Dev.
                    </div>
                  </div>
                  <hr/>
                  {/* <div class="row">
                    <div class="col-sm-12">
                      <a class="btn" style={{backgroundColor: "#3f51b5",color: "#fff"}}  href={`/profileedit`}>Edit</a>
                    </div>
                  </div> */}
                </div>
              </div>
              

                <div class="col-sm-612 mb-3">
                  <div class=" h-100">
                    <div class="card-body">
                      <small>Posts</small>
                      <div class="progress mb-3" style={{height: 5}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: 50}} aria-valuenow={1000} aria-valuemin={0} aria-valuemax={2000000}></div>
                      </div>
                      <small>Followers</small>
                      <div class="progress mb-3" style={{height: 5}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: 150}} aria-valuenow={1000} aria-valuemin={0} aria-valuemax={2000000}></div>
                      </div>
                      <small>Following</small>
                      <div class="progress mb-3" style={{height: 5}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: 200}} aria-valuenow={1000} aria-valuemin={0} aria-valuemax={2000000}></div>
                      </div>
                      <small>Contributions</small>
                      <div class="progress mb-3" style={{height: 5}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: 300}} aria-valuenow={1000} aria-valuemin={0} aria-valuemax={2000000}></div>
                      </div>
                    </div>
                </div>



{/* <div class="hover04 column" style={{display: "flex",flexWrap: "wrap"}}>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>    
      <div>Hover </div> 
       <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div>
         </span>
  </div>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>      <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div></span>
  </div>
  <div style={{padding:10}}>
    <figure><img src="https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=" /></figure>
    <span>      <div style={{display:"flex",padding:8}}>
           <div style={{alignItems:"center",display:"flex"}}><ThumbUpAltOutlinedIcon style={{color: "#3f51b5"}}/><div style={{fontWeight:"600",marginLeft:3}}>4.5K</div></div>
           <div style={{alignItems:"center",display:"flex",marginTop:10,marginLeft:50}}><a href={`/postview`}><ChatBubbleOutlineOutlinedIcon style={{color: "#3f51b5"}}/></a><div style={{fontWeight:"600",marginLeft:3,marginBottom:10}}>10K</div></div>
         </div></span>
  </div>
</div> */}
                    </div>
                  </div>
                </div>

              </div>
              </div>


    )
}

export default Profileview
