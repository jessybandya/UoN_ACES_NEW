import React from 'react'
import "./styles.css"
import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
  import { useState,useEffect } from "react";
//   import { db,auth } from "../firebase"
  import { useParams } from "react-router";


function Posts({read}) {
    return (
        <>
        {read === false &&(
          <>
                  <a href={`#`}>
        <div style={{display:"flex",marginTop:15,width:"100%"}}>
            <div>

            <Avatar
              alt="Jessy Bandya"
              src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
            />
  </div>

            <div style={{marginLeft:20,borderBottom: "1px solid #C5C5C5",backgroundColor: "#3f51b5",padding:8}}>
                <div style={{display: "flex",justifyContent:"space-between",width:200,alignItems:"center"}}>
                <div style={{marginTop:-10,fontWeight:"600",color:"#fff"}}>Jessy Bandya </div>
                {/* <div style={{marginTop:-10,color:"#979797",fontWeight:"600"}}>9:06 PM</div>  */}
                </div>
              {/* <Badge badgeContent={1} color="secondary"> */}
                <div style={{color: "#AEAEAE",marginLeft:10}}>@jessybandya commented on your post <span style={{color: "#AEAEAE",marginLeft:0,fontWeight:"600"}}>2 hours ago</span></div>
                
                {/* </Badge> */}

            </div>
        </div>
        </a>
          </>
        )}
        {read === true &&(
          <>
                  <a href={`#`}>
        <div style={{display:"flex",marginTop:15,width:"100%"}}>
            <div>

            <Avatar
              alt="Jessy Bandya"
              src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
            />
  </div>

            <div style={{marginLeft:20,borderBottom: "1px solid #C5C5C5",backgroundColor: "#fff",padding:8}}>
                <div style={{display: "flex",justifyContent:"space-between",width:200,alignItems:"center"}}>
                <div style={{marginTop:-10,fontWeight:"600"}}>Odero Phelix</div>
                {/* <div style={{marginTop:-10,color:"#979797",fontWeight:"600"}}>9:06 PM</div>  */}
                </div>
              {/* <Badge badgeContent={1} color="secondary"> */}
                <div style={{color: "#AEAEAE",marginLeft:10}}>@nyatieng' started following you <span style={{color: "#AEAEAE",marginLeft:0,fontWeight:"600"}}>2 hours ago</span></div>
                
                {/* </Badge> */}

            </div>
        </div>
        </a>
          </>
        )}
        </>
    )
}

export default Posts
