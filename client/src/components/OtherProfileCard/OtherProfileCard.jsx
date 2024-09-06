import React, { useEffect ,useState} from "react";
import "./OtherProfileCard.css";
// import Cover from "../../img/cover.jpg";
// import Profile from "../../img/profileImg.jpg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../api/UserRequests";
// import { getUser } from "../../actions/UserAction";

const OtherProfileCard = ({location}) => {
  const params=useParams()
//   const { user } = useSelector((state) => state.userReducer.otherDetails);
  const [user, setuser] = useState({});
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log(params.id);
    const fetchPersons = async () => {
      const { data } = await getUser(params.id);
      setuser(data);
    };
    fetchPersons();
    // dispatch(getUser(params.id))  
  },[])
  return (
    <div className="OtherProfileCard">
      <div className="OtherProfileImages">
        <img src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          } alt="CoverImage" />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </div>
      <div className="OtherProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="OtherfollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user?.followers?.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="Otherfollow">
            <span>{user?.following?.length}</span>
            <span>Following</span>
          </div>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <div className="Othervl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
      </div>

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default OtherProfileCard;
