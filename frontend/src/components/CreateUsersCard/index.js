// import React from "react";
// import css from "./style.module.css";

// import MyInput from "../myInput";
// import MyButton from "../myButton";

// const CreateUsersCard = () => {
//   return (
//     <section className={css.createUsersCardSection}>
//       {/* Heading */}
//       <h1 className={css.heading}>
//         <strong>NGN-Телефон Хэрэглэгчийн карт үүсгэх</strong>
//       </h1>

//       {/* Form */}
//       <label>№:</label>
//       <form className={css.form}>
//         {/* Input boxes for user information */}
// <div className={css.inputBox}>
//   <MyInput type="number" />
//   <label>Хэрэглэгчийн нэр:</label>
// </div>
// <div className={css.inputBox}>
//   <MyInput type="text" />
// </div>
// <label>Хаяг:</label>
// <div className={css.inputBox}>
//   <MyInput type="text" />
// </div>

// {/* Section for "Гарсан гэмтэл" */}
// <h3>Гарсан гэмтэл</h3>
// <div className={css.inputBox}>
//   <label>Юуны тухай:</label>
//   <MyInput type="text" />
// </div>
// <div className={css.inputBox}>
//   <label>Он сар өдөр:</label>
//   <MyInput type="date" />
// </div>
// <div className={css.inputBox}>
//   <label>Цаг минут:</label>
//   <MyInput type="time" />
// </div>

// {/* Section for "Шалгалт" */}
// <h3 className={css.subHeading}>Шалгалт</h3>
// <div className={css.inputBox}>
//   <label>Шалгалтын ширээнээс Гарсан гэмтлийн байдал:</label>
//   <MyInput type="text" />
// </div>
// <div className={css.inputBox}>
//   <label>Цаг минут:</label>
//   <MyInput type="date" />
// </div>
// <div className={css.inputBox}>
//   <label>Гарын үсэг:</label>
//   <MyInput type="time" />
// </div>

// {/* Section for "Засуулахаар өгсөн" */}
// <h3 className={css.subHeading}>Засуулахаар өгсөн</h3>
// <div className={css.inputBox}>
//   <label>Хэнд:</label>
//   <MyInput type="text" />
// </div>
// <div className={css.inputBox}>
//   <label>Он сар өдөр:</label>
//   <MyInput type="date" />
// </div>
// <div className={css.inputBox}>
//   <label>Цаг минут:</label>
//   <MyInput type="time" />
// </div>

// {/* Section for "Зассан" */}
// <h3 className={css.subHeading}>Зассан</h3>
// <div className={css.inputBox}>
//   <label>Гэмтлийн байдал:</label>
//   <MyInput type="text" />
// </div>
// <div className={css.inputBox}>
//   <label>Хэнд:</label>
//   <MyInput type="date" />
//   <label>Он сар өдөр:</label>
//   <MyInput type="date" />
// </div>
// <div className={css.inputBox}>
//   <label>Цаг минут:</label>
//   <MyInput type="time" />
// </div>
// <div className={css.inputBox}>
//   <label>Тайлбар:</label>
//   <MyInput type="date" />
// </div>

// {/* Submit button */}
// <MyButton submit>Submit</MyButton>
//       </form>
//     </section>
//   );
// };

// export default CreateUsersCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./style.module.css";

import MyInput from "../myInput";
import MyButton from "../myButton";
import axios from "axios";
import { Navigate } from "react-router-dom";
const defaultPort = 4000;
const CreateUsersCard = () => {
  const Navigate = useNavigate();
  // Хэрэглэгчийн мэдээллийг хадгалах state-г тохируулна
  const [users, setUsers] = useState({
    usernumber: "",
    username: "",
    address: "",
    enjury: "",
  });

  // Input өгөгдлүүдээр state-г шинэчилж өгөх үйлдэл
  const handleInput = (e) => {
    e.persist();
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  console.log(setUsers);
  // Формыг submit хийх үйлдэл
  const save = (e) => {
    console.log("console");
    e.preventDefault();
    // HTTP POST хүсэлт илгээх өгөгдлийг бэлдэх
    const data = {
      number: users.usernumber,
      name: users.username,
      address: users.address,
      enjury: users.enjury,
    };
    console.log(data);
    // Сервертэй холбох хаяг
    const apiUrl = `http://localhost:${
      process.env.PORT || defaultPort
    }/users/create`;

    console.log(apiUrl);
    // Axios ашиглан сервертэй холбох үйлдэл
    axios
      .post(apiUrl, data)
      .then((res) => {
        alert(res.data.message);
        Navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className={css.container}>
        <div className={css.row}>
          <div className={css.col12}>
            <div className={css.card}>
              <div className={css.cardHeader}>
                <h3>
                  Хэрэглэгч нэмэх
                  <button>back</button>
                </h3>
              </div>
              <div className={css.cardBody}>
                <form onSubmit={save}>
                  <div className={css.inputBox}>
                    <label>Номер</label>
                    <MyInput
                      type="number"
                      name="usernumber"
                      onChange={handleInput}
                      value={users.usernumber}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Хэрэглэгчийн нэр:</label>
                    <MyInput
                      type="text"
                      name="username"
                      onChange={handleInput}
                      value={users.username}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Хаяг:</label>
                    <MyInput
                      type="text"
                      name="address"
                      onChange={handleInput}
                      value={users.address}
                    />
                  </div>

                  {/* Section for "Гарсан гэмтэл" */}
                  <h3>Гарсан гэмтэл</h3>
                  <div className={css.inputBox}>
                    <label>Юуны тухай:</label>
                    <MyInput
                      type="text"
                      name="enjury"
                      onChange={handleInput}
                      value={users.enjury}
                    />
                  </div>
                  <div className={css.inputBox}>
                    <label>Он сар өдөр:</label>
                    <MyInput type="date" />
                  </div>
                  {/* <MyButton
                    onClick={save}
                    label="Click me "
                    type="submit"
                    onSubmit="save"
                  >
                    dsfsfs
                  </MyButton> */}
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
export default CreateUsersCard;
