import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreateUsersCard from "./components/CreateUsersCard";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import UpdateUser from "./components/Users/updateUsers";
import DeleteUser from "./components/deleteUser/index";
import User from "./components/Model";
// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const token = sessionStorage.getItem("token");
//   return token ? JSON.parse(token) : null;
// }
function App() {
  // const token = getToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="/CreateUsersCard" element={<CreateUsersCard />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
