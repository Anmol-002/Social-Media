import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
// import { createChat, getAllChats } from "../../api/ChatRequests";
import { Link } from "react-router-dom";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  // const [data,setdata]=useState();
  
  const [following, setFollowing] = useState()

  // const {data}=createChat(hehe)
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
    //  window.location.reload();
  };

  useEffect(()=>{
    setFollowing(person.followers.includes(user._id))
  },[setFollowing])

  // useEffect(()=>{
  //   const fetchPersons = async () => {
  //     const {data}=await getAllChats();
  //     // console.log("hi");
  //     console.log(data);
  //     setdata(data);
  //   };
  //   fetchPersons();
  //     {data?.map((d)=>{
  //     // console.log("hehe");
  //     const containsUser = d.members.includes(user._id);
  //     const containsPerson = d.members.includes(person._id);
  //     if (!containsUser || !containsPerson) {
  //       const hehe={
  //       senderId:user._id,
  //       receiverId:person._id
  //     }
  //       createChat(hehe)
  //     }
  //   })}
  // },[])


  return (
    <div className="follower">
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <Link to={`/person/${person._id}`} style={{textDecoration: "none", color:"black"}} >
          <span>@{person.username}</span>
          </Link>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;

//  <div className="name">
//           <span>{person.firstname}</span>
//           <Link to={`/person/${person._id}`} >@{person.username}</Link>
//         </div>