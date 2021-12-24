import React from 'react';
import "./styles.css"
import Posts from  "./Posts"
import SearchBar from "material-ui-search-bar";

function Directmessagespage() {
    return (
        <>
          <SearchBar
    value=""
    placeholder="Search person..."
  />
        <div>
            <Posts />
            
            <Posts />
            
            <Posts />
        </div>
        </>
    )
}

export default Directmessagespage
