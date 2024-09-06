// import React from "react";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  const [noTransitionOpened, setNoTransitionOpened] = useState(modalOpened);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      // console.log(data);
      setPersons(data);
    };
    fetchPersons();
  }, []);
  const theme = useMantineTheme();
  return (
    <Modal
      // style={{borderRadius:"50%"}}
      overlayColor={
        theme.primaryColor="dark"
      }
      overlayOpacity={0.35}
      overlayBlur={2}
      size="50%"
      opened={modalOpened}
      onClose={() => {
        setModalOpened(false);
        setNoTransitionOpened(false);
      }
    }
      transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}

    >
      <h1>People you may know:</h1>
      {persons.map((person, id) => {
        if (person._id !== user._id) return(
          <div>
            <br/>
            <User person={person} key={id} />
            <br/>
          </div>
        ) 
      })}
    {/* <FollowersCard location='modal'/> */}
    </Modal>
  );
};

export default FollowersModal;
