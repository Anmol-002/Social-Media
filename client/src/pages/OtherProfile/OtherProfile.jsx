import React from 'react'
import "./OtherProfile.css";
import OtherSide from '../../components/OtherSide/OtherSide';
import OtherProfileCard from "../../components/OtherProfileCard/OtherProfileCard"
const OtherProfile = () => {
    return (
    <div className="Profile">
      <div></div>
      <div className="Profile-center">
        <OtherProfileCard location = 'profilePage'/>
       <OtherSide/>
      </div>
      <div></div>
    </div>
  );
}

export default OtherProfile
