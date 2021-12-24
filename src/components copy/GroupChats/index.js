import React from 'react';
import "./styles.css"
import Posts from  "./Posts"
import SearchBar from "material-ui-search-bar";
import CreateIcon from '@mui/icons-material/Create';
function GroupChats() {
    return (
        <>
        <div style={{display: "flex",justifyContent: "space-between",flex:1,alignItems:"center"}}>
        <div style={{flex:0.9}}>
        <SearchBar
    value=""
    placeholder="Group chats..."
  />       
            </div>
            <div>
            <CreateIcon style={{color: "#3f51b5"}}/>
            </div>
        </div>

        <div>
            <Posts />

        </div>
        </>
    )
}

export default GroupChats
