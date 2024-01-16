import React, { useState, useEffect } from "react";
import css from "./updateUsers.module.css";
import MyInput from "../myInput";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const defaultPort = 4000;

const UpdateUser = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    usernumber: "",
    username: "",
    address: "",
    enjury: "",
    date: "",
  });
  const [usernumber, setUsernumber] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [enjury, setEnjury] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/update?id=${id}`)
      .then((res) => {
        const userData = res.data.data;
        setUsernumber(userData[0].number);
        setDate(userData[0].date);
        setUsername(userData[0].username);
        setAddress(userData[0].address);
        setEnjury(userData[0].enjury);
      })
      .catch((err) => console.log(Error));
  }, [id]);
  const handleInput = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      number: user.usernumber,
      name: user.username,
      address: user.address,
      enjury: user.enjury,
      date: user.date,
    };
    console.log(data);
    const apiUrl = `http://localhost:${
      process.env.PORT || defaultPort
    }/update/${id}`;
    axios.put(apiUrl, data).then((res) => {
      if (res.data.updated) {
        alert(res.data.message);
        Navigate("/");
      } else {
        alert("Not updated");
      }
    });
    console.log(apiUrl);
    console.log("qqqqqqqqqqqqqqqqq");
  };
  return (
    <div>
      <div className={css.container}>
        <div className={css.row}>
          <div className={css.col12}>
            <div className={css.card}>
              <div className={css.cardHeader}>
                <h3>
                  Хэрэглэгчийн мэдээлэл өөрчлөх
                  <button>back</button>
                </h3>
              </div>
              <div className={css.cardBody}>
                <form onSubmit={handleSubmit}>
                  <div className={css.inputBox}>
                    <label>Номер</label>
                    <MyInput
                      type="number"
                      name="usernumber"
                      defaultValue={usernumber}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Хэрэглэгчийн нэр:</label>
                    <MyInput
                      type="text"
                      name="username"
                      defaultValue={username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Хаяг:</label>
                    <MyInput
                      type="text"
                      name="address"
                      defaultValue={address}
                      onChange={handleInput}
                    />
                  </div>

                  {/* Section for "Гарсан гэмтэл" */}
                  <h3>Гарсан гэмтэл</h3>
                  <div className={css.inputBox}>
                    <label>Юуны тухай:</label>
                    <MyInput
                      type="text"
                      name="enjury"
                      defaultValue={enjury}
                      onChange={handleInput}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Он сар өдөр:</label>
                    <MyInput
                      type="date"
                      defaultValue={date}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit">Хадгалах</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;
