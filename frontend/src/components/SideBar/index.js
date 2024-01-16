import React from "react";
import css from "./style.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = ({ onClose }) => {
  const Navigate = useNavigate();
  // const onClick = () => {
  //   Navigate("/createUsersCard");
  // };
  return (
    <div className={css.sidebar}>
      <button onClick={onClose} className={css.closeButton}>
        Close &times;
      </button>
      <NavLink className={css.sidebarItem}>Хэрэглэгчийн карт харах</NavLink>
      <NavLink className={css.sidebarItem}>Хэрэглэгчийн карт үүсгэх</NavLink>
      <NavLink className={css.sidebarItem}>Хэрэглэгчийн карт устгах</NavLink>
    </div>
  );
};

export default SideBar;
