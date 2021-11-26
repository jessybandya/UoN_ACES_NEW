import React from 'react'
import "../styles.css"
function index() {
  return (
    <div className="login1">
    <div className="loginForm">
   
     <a href="/year1">
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 1</span></button>
     </a>

        
     <a href={`/year2`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 2</span></button>
     </a>

     <a href={`/year3`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 3</span></button>
     </a>

     <a href={`/year4`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 4</span></button>
     </a>

     <a href={`/year5`}>
     <button style={{marginLeft: 10,marginTop:10}} class="custom-btn btn-3"><span style={{fontSize:13,fontWeight:"900"}}>YEAR 5</span></button>
     </a>
    </div>
  </div>
  )
}

export default index
