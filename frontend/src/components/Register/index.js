import React, { useState } from "react";
import css from "./style.module.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const defaultPort = 4000;
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    e.persist();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password, Confirm Password адил биш байна.");
      return;
    }
    const data = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    try {
      const response = axios.post("http://localhost:4000/register", data);
      Navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={css.loginSection}>
      <div className={css.formBox}>
        <div className={css.formValue}>
          <form className="form" onSubmit={handleSubmit}>
            <h2>
              <strong>Бүртгүүлэх</strong>
            </h2>
            <div className={css.inputBox}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <label>username:</label>
            </div>
            <div className={css.inputBox}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label>Email:</label>
            </div>
            <div className={css.inputBox}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <label>Password:</label>
            </div>
            <div className={css.inputBox}>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <label>Confirm Password:</label>
            </div>
            <div>
              <button className={css.button} type="submit">
                Бүртгүүлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
