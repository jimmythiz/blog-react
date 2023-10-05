import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BlogContent = (props) => {
  const { list } = props.location.state;

  return (
    <div>
      <h2 style={{textAlign : "center"}}>{list.title}</h2>
      <p style={{textAlign : "center"}}>By: {list.author}</p>
      <div style={{display : "flex", justifyContent: "space-between"}}>
      <Link to="/">
        <button style={{
            color: "aliceblue",
            backgroundColor :"#f1356d",
            height: "fit-content",
            outline: "none",
            padding: ".4rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: ".2rem",
            margin: "1rem",
            cursor: "pointer"
            }}>  Back 
        </button>
      </Link>
      <Link to="/newblog">
        <button style={{
            color: "aliceblue",
            backgroundColor :"#f1356d",
            height: "fit-content",
            outline: "none",
            padding: ".4rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: ".2rem",
            margin: "1rem",
            cursor: "pointer"
            }}>  New Blog 
        </button>
      </Link>
      
      </div>
      
      <p style={{width : "90%", margin : "auto"}}>{list.body}</p>
    </div>
  );
}

export default BlogContent;
