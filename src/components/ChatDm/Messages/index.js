import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../firebase'
import SendMessage from '../../ChatDm'
import "./styles.css"
import { Avatar } from '@material-ui/core'
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Messages({message, fromId, toId, timestamp, user}) {

	const messageRef = useRef();


useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  })
    const parseTimestamp = (timestamp) => {
        try {
            let date = new Date(timestamp)
            return date.toUTCString()
        } catch (error) {
            console.error(error)
            return timestamp
        }
    }


    return (
        <div >
        <div  style={{marginTop:130,marginBottom:70}}>
			
        <div   class="card-body height3" ref={messageRef}>
        			<ul   class="chat-list">
						{fromId === user?.uid  &&(
							<>
                        <li class="in">
																	<>

						<div class="chat-img">
							<Avatar src="https://www.afritechmedia.com/wp-content/uploads/2021/01/Tech-Entrepreneur-Elon-Musk-overtakes-Bezos-as-worlds-richest-person.jpg" alt=""/>
						</div>
						<div class="chat-body">
							<div class="chat-message">
                                 {/* <div style={{marginBottom:5,fontWeight:"700"}}>@jessybandya</div> */}
								 <div>Hello here guys I have a suggestion to help me out plz. Hello here guys I have a suggestion to help me out plz. Hello here guys I have a suggestion to help me out plz</div>
								 <div style={{marginTop:10,color: "#C5C5C5"}}>{parseTimestamp(timestamp)}</div>
							</div>
						</div>
						</>
						
					</li>


					                       
					</>
						)}
        				{fromId == user?.uid  &&(
							<>
                        <li style={{marginBottom: 50}} class="out">
						<div class="chat-img">
							<Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt=""/>
						</div>
						<div  class="chat-body">
							<div  class="chat-message1">
							<div style={{justifyContent:"space-between"}}>
								<div style={{marginBottom:5,fontWeight:"700"}}></div>
								{/* <div><MoreVertIcon/></div>								 */}
								</div>
								<div>Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good</div>
								<div style={{marginTop:10,color: "#C5C5C5"}}>{parseTimestamp(timestamp)}</div>
							</div>
						</div>
					</li>
					<li style={{marginBottom: 50}} class="out">
						<div class="chat-img">
							<Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt=""/>
						</div>
						<div  class="chat-body">
							<div  class="chat-message1">
							<div style={{justifyContent:"space-between"}}>
								<div style={{marginBottom:5,fontWeight:"700"}}></div>
								{/* <div><MoreVertIcon/></div>								 */}
								</div>
								<div>Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good</div>
								<div style={{marginTop:10,color: "#C5C5C5"}}>{parseTimestamp(timestamp)}</div>
							</div>
						</div>
					</li>

					<li style={{marginBottom: 50}} class="out">
						<div class="chat-img">
							<Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGDUX1VtyLM1Q/profile-displayphoto-shrink_800_800/0/1608232974636?e=1644451200&v=beta&t=uuPBUIcpbhP1ivBDW1ayyI_I46dmdER84IPuMYzYHBg" alt=""/>
						</div>
						<div  class="chat-body">
							<div  class="chat-message1">
							<div style={{justifyContent:"space-between"}}>
								<div style={{marginBottom:5,fontWeight:"700"}}></div>
								{/* <div><MoreVertIcon/></div>								 */}
								</div>
								<div>Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good. Hello Bro man hope you peple are out here feeling good</div>
								<div style={{marginTop:10,color: "#C5C5C5"}}>{parseTimestamp(timestamp)}</div>
							</div>
						</div>
					</li>
					</>
						)}
        				
        				
        			</ul>
        		</div>
        </div>  
        </div>
    )
}

export default Messages
