import React from 'react'
import "../styles.css"
function index() {
  return (
    <div className="login">
    <form className="loginForm">
   
     <a href="/home">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 1</span></button>
     </a>

        
     <a href={`/home`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 2</span></button>
     </a>

     <a href={`/home`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 3</span></button>
     </a>

     <a href={`/home`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 4</span></button>
     </a>

     <a href={`/home`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 5</span></button>
     </a>
    </form>
  </div>
  )
}

export default index
