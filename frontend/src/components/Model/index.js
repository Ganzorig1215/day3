import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
// import { response } from "express";
// import axios from "axios";
const User = () => {
  //   const { id } = useParams();
  //   const [userInfo, setUserInfo] = useState([]);
  const Navigate = useNavigate();
  const onClick = () => {
    Navigate("/Login");
  };
  //   const fetchUserInfo = () => {
  //     fetch("http://localhost:4000/userInfo")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setUserInfo(data.data);
  //         console.log(data.data);
  //       });
  //   };
  //   useEffect(() => {
  //     fetchUserInfo();
  //     axios
  //       .get("http://localhost:4000/userInfo" + id)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div className={css.userContainer}>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>

      <button type="button" className={css.logoutButton} onClick={onClick}>
        <FaPowerOff />
        Гарах
      </button>
    </div>
  );
};

export default User;
