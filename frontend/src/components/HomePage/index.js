import React, { useState } from "react";
import SideBar from "../SideBar";
import User from "../Model/index";
import css from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import DashBoard from "../DashBoard";

import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLight, CiSettings } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import img from "../assets/images/logo_white.png";
import DarkMode from "../DarkMode";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };
  return (
    <div className={css.container}>
      <SideBar />
      <div className={css.main}>
        <div>
          <header className={css.header}>
            <div>
              <img src={img} alt="Logo" className={css.logo} />
            </div>
            <div>
              <DarkMode />
            </div>
            <div className={css.icons}>
              <div className={css.iconContainer}>
                <IoIosNotificationsOutline className={css.icon} />
              </div>

              <div onClick={onClick}>
                <FaUserCircle className={css.icon} />
                {show && <User />}
              </div>
            </div>
            <div></div>
          </header>
        </div>
        <div>
          <DashBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
