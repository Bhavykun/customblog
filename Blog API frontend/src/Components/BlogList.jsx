import React ,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { deletePost,getPosts } from "../API";

const BlogList = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    getPosts()
      .then((postsData)=>{
        setPosts(postsData);
      })
      .catch((err)=>console.error("error fetching posts:",err));
  },[]);

  const handleDelete = (id)=>{
    deletePost(id)
     .then(()=>{
      setPosts(posts.filter((post)=>post.id!==id));
     })
     .catch((err) => console.err("Error deleting post:",err));
  }


  return (
    <div className="container">
      <h1>My Blog</h1>
      <Link id="newPostBtn" to="/new">New Post</Link>
      <ul id ="postsList">
          {posts.map((post)=>(
            <li key={post.id}>
              <h2>{post.title}</h2>
              <small>{new Date(post.date).toLocaleString()}</small>
              <p>{post.content}</p>
              <small>By: {post.author}</small>
              <Link className ="edit" to={`/edit/${post.id}`}>Edit</Link>
              <br></br>
              <br></br>
              <button className="delete" onClick={()=>handleDelete(post.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogList;
