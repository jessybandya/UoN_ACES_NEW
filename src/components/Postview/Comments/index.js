import React, { useState, useEffect} from 'react'
import Post from "./Post"
import {db} from "../../firebase";

function Comments({postId}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
      return unsubscribe;
    }, []);
    return (
        <div>
        {Array.from(posts).map((post) => (
          <Post
            key={post.id}
            fromId={post.data.fromId}
            commentId={post.id}
            postId={postId}
            timestamp={post.data.timestamp}
            comment={post.data.comment}

          />
        ))}
        </div>
    )
}

export default Comments
