import React, { useEffect, useRef, useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../api/PostsRequests";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { commentGet, comments } from "../../actions/CommentAction";
import Comments from "../Comments/Comments";

const Post = ({ data}) => {
   const dispatch=useDispatch()
   const initialState = {
    text: "",
    userid: "",
    postid: "",
    username:"",
  };
  const desc=useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const allcomment=useSelector((state)=>state.cmntReducer.comments)
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)
  const [d,setd]=useState(initialState);
  const [comment,setComment]=useState("");
  const [temp,settemp]=useState(false);

// console.log(allcomment);
  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  const handleComment=()=>{
    // console.log(temp);
    settemp(!temp)
    // console.log(temp);
  }
  const handleClick=()=>{
    setd({
      text: comment,
      userid: user._id,
      postid: data._id,
      username: user.username,
    });
    console.log(d.username);
    console.log(d.text);
    console.log(d.postid);
    console.log(d.userid);
    settemp(true);
    desc.current.value = "";
    // dispatch(comments(d))
  }
  useEffect(() => {
    if (d.text && d.userid && d.postid && d.username) {
      dispatch(comments(d));
    }
    dispatch(commentGet());
  }, [dispatch, d]);
   useEffect(() => {
    // Fetch updated comments from the backend after handleClick
    // Adjust this logic based on your backend API
    // dispatch(fetchComments(data._id));
  }, [allcomment, data._id, dispatch]);
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="detail">
        <Link to={`/person/${data.userId}`} >
          <b>@{data.username} </b>
        </Link>
        <span>{data.desc}</span>
      </div>

      <div className="postReact" >
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} 
        onClick={handleComment}
        alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <b>Comment Section:</b>
       <div className="Search">
          <input type="text" val={comment} placeholder="#Comment" ref={desc} onChange={(e)=>{setComment(e.target.value)}}/>
          <button className="s-icon" onClick={handleClick}>
                Comment
          </button>
      </div>
      
      {allcomment && allcomment?.map((cmt,id)=>{
        if(cmt.postid===data._id)
        {
          return <Comments cmt={cmt} temp={temp} key={id}/>
        }
        // return <div>hii</div>
      })}
    </div>
  );
};

export default Post;
