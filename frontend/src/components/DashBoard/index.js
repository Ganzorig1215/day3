import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const onClick = () => {
    Navigate("/createUsersCard");
  };
  const [userData, setUserData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchUserData = () => {
    fetch("http://localhost:4000")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data.data);
        console.log(data.data);
      });
  };

  useEffect(() => {
    fetchUserData();
    axios
      .get("http://localhost:4000/update" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const filteredUserData = userData.filter((user) => {
    return (
      user.number.toLowerCase().includes(searchInput) ||
      user.username.toLowerCase().includes(searchInput) ||
      user.address.toLowerCase().includes(searchInput) ||
      user.enjury.toLowerCase().includes(searchInput)
    );
  });

  return (
    <div className={css.dashboard}>
      <div className={css.buttonContainer}>
        <input
          type="search"
          placeholder="Search"
          className={css.searchInput}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button onClick={onClick} className={css.item}>
          <FaPlus className={css.icons} />
        </button>
      </div>
      <table id="myTable">
        <thead>
          <tr>
            <th>№</th>
            <th>Номер</th>
            <th>Хэрэглэгчийн нэр</th>
            <th>Хаяг</th>
            <th>Гарсан гэмтэл</th>
            <th>Огноо</th>
            <th>Засах</th>
            <th>Устгах</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.number}</td>
              <td>{user.username}</td>
              <td>{user.address}</td>
              <td>{user.enjury}</td>
              <td>{user.date}</td>
              <td>
                <Link to={`/update/${user.id}`}>
                  <button className={css.editButton}>
                    <AiOutlineEdit className={css.icons} />
                  </button>
                </Link>
              </td>
              <td>
                <Link to={`/delete/${user.id}`}>
                  <button className={css.deleteButton}>
                    <MdDelete className={css.icons} />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
