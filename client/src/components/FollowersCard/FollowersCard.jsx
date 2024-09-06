import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
import { createChat, getAllChats } from "../../api/ChatRequests";
const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const [chats,setChats]=useState([])
  const { user } = useSelector((state) => state.authReducer.authData);

  // useEffect(() => {
  //   const fetchPersons = async () => {
  //     const { data } = await getAllUser();
  //     console.log(data);
  //     setPersons(data);
  //   };
  //   fetchPersons();
  //   const fetchChats = async () => {
  //     const { data } = await getAllChats();
  //     console.log(data);
  //     setChats(data);
  //   };
  //   fetchChats();

  //   {persons.map((person,id)=>{
  //       if(person._id!==user._id)
  //       {
  //         let temp=false;
  //         console.log("first");
  //         chats.map((chat,id)=>{
  //           const containsUser = chat.members.includes(user._id);
  //           const containsPerson = chat.members.includes(person._id);
  //           if(containsUser && containsPerson)
  //           {
  //             temp=true;
  //           }
  //         })
  //         console.log("second");
  //         if(temp===false)
  //         {
  //           const hehe={
  //             senderId:user._id,
  //             receiverId:person._id
  //           }
  //           createChat(hehe);
  //         }
  //       }
  //     })}
  // }, []);
  useEffect(() => {
  const fetchPersons = async () => {
    const { data } = await getAllUser();
    console.log(data);
    setPersons(data);
  };
  const fetchChats = async () => {
    const { data } = await getAllChats();
    console.log(data);
    setChats(data);
  };
  const fetchData = async () => {
    await fetchPersons();
    await fetchChats();
  };  
  fetchData();
}, []);

useEffect(() => {
  const createNewChat = async (person) => {
    let temp = false;
    console.log("first");
    chats.map((chat, id) => {
      const containsUser = chat.members.includes(user._id);
      const containsPerson = chat.members.includes(person._id);
      if (containsUser && containsPerson) {
        temp = true;
      }
    });
    console.log("second");
    if (temp === false) {
      const hehe = {
        senderId: user._id,
        receiverId: person._id,
      };
      await createChat(hehe);
    }
  };
  const fetchData = async () => {
    await Promise.all(
      persons.map(async (person) => {
        if (person._id !== user._id) {
          await createNewChat(person);
        }
      })
    );
  };
  fetchData();
}, [persons, chats]);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.slice(0, 3).map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
      {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default FollowersCard;
