import React from 'react';
import "./styles.css"
import Posts from  "./Posts"
import SearchBar from "material-ui-search-bar";

function Notificationspage() {
    return (
        <>
        <div style={{marginTop:75}}>
            <Posts read={false}/>
            
            <Posts read={true}/>
            
            <Posts read={false}/>
        </div>
        </>
    )
}

export default Notificationspage
