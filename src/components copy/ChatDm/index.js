import React, {useState, useEffect, useRef} from 'react'
import { db, auth1 } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import "./styles.css"
import Messages from "../ChatDm/Messages"
// import Header from './../Header';
import {useParams,Link} from 'react-router-dom'
import {Avatar, Badge, TextField} from '@material-ui/core';
import ScrollableFeed from 'react-scrollable-feed'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';

function ChatDm({ user }) {
    const [post, setPost] = useState(null)
    const [toUser, setToUser] = useState(null)
    const [posts, setPosts]= useState([]);
    const [posts1, setPosts1]= useState([]);
    const [fromUser, setFromUser]= useState([]);
    const [profileUserData, setProfileUserData] = useState();


    
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

    const [ text , setText] = useState("");

    let { id1 } = useParams();
    let { uid } = useParams();
  
  
    useEffect(() => {
      db.collection('chats').where(`users.${id1}`, '==', true).where(`users.${user?.uid}`, '==', true).get().then(
          snapshot => {
              if (snapshot.docs.length >= 1) {
                  setPost(snapshot.docs[0].id)
              } else {
                  db.collection('chats').add({users:{[id1]:true, [auth1.currentUser.uid]:true}}).then(ref => setPost(ref.id))
                  console.log(snapshot.docs)
              }
          }
      )
      db.collection('users').doc(id1).get().then(
          doc => {
              setToUser({id:doc.id, data:doc.data()})
          }
      )
      db.collection('users').doc(user?.uid).get().then(
        doc => {
          setFromUser({id:doc.id, data:doc.data()})
        }
    )
      
    
  
  }, []);



  useEffect(() => {
    db.collection('users').doc(uid).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
  }, [])
  const addTodo = (event) => {
    event.preventDefault();
  
  db.collection('messages').add({
      //
    message: text,
    timestamp:  Date.now(),
    
    // chat: post,
    // read: false,
    // read1:false,
    // toId: id1,
    // fromId: uid,

    
  }).then(
      db.collection('users1').where("fromId", "==", user.uid).where("toId", "==", toUser.id).get().then(
          snap => {
            if (snap.docs.length > 0) {
              
            } else {
              db.collection('users1').add({
                  //
                message: text,
                timestamp:  Date.now(),
                chat: post,
                read: false,
                read1:false,
                toId: id1,
                fromId: uid,                
              })
            }
          }
        )
  )
    setText("");
  
  };
  

  useEffect(() => {

      const unsub = db.collection('messages').where('chat', '==', post).orderBy('timestamp', 'asc').onSnapshot(snapshot => {
          console.log(snapshot)
          let messages = []
          snapshot.forEach(doc => {
              messages.push({id:doc.id, data:doc.data()})
              if (doc.data().fromId !== uid) {
                  doc.ref.update({read1:true})
              }
          })
          setPosts1(messages)
      }, error => console.error(error))
      return function cleanup () {
          unsub()
      }
  }, [post, text]);


    return (
        <div ref={messageRef}>

<div style={{marginTop:50}} className="fixed-header">
          {/* <div className="blocks">
            <div className="current-chatting-user">
                
              <Avatar style={{marginLeft:5}}
                isOnline="active"
                src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
              />
              <div style={{height:10,width:10,borderRadius:10/2,backgroundColor:"#00FF00",marginTop:-20}}>
              </div>
              <p style={{marginLeft:5}}>Jessy Bandya </p>
            </div>
            <span style={{marginRight:20}}>hey</span>
          </div> */}
          <div style={{alignItems:"center",justifyContent:"space-between",display:"flex",maxWith:500}}>
            <div>
            <div className="current-chatting-user">
                
                <Avatar style={{marginLeft:5}}
                  isOnline="active"
                  src="https://www.afritechmedia.com/wp-content/uploads/2021/01/Tech-Entrepreneur-Elon-Musk-overtakes-Bezos-as-worlds-richest-person.jpg"
                />
                <div style={{height:10,width:10,borderRadius:10/2,backgroundColor:"#00FF00",marginTop:-20}}>
                </div>
                <span style={{marginLeft:5}}>Elon Musk</span>
              </div>
            </div>
            <div></div>
            <div><CallIcon style={{marginRight:20,color:"#3f51b5"}}/>  <VideocamIcon style={{color:"#3f51b5"}}/></div>
          </div>

        </div>
<ScrollableFeed>
<Messages />
</ScrollableFeed>
{posts1.map((post) => {
                        

                            <Messages
                            message={post.data.message}
                            fromId={post.data.fromId}
                            user={user}
                            timestamp={post.data.timestamp}
                            toId={post.data.toId}
                             /> 
                              
                            
            } )} 
                <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <TextField 
            value={text} onChange={(e) => setText(e.target.value)}
                              multiline
                              rows={2}
                              variant="outlined"
                              label="Write Text"
                              style={{ width: "100%" }}
            style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text"   />

            <button  style={{marginLeft:5,marginTop:8}} className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>


            
        </div>
    )
}

export default ChatDm
