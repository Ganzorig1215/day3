import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();
  const register = () => {
    Navigate("/Register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const login = async (email, password) => {
      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.status === 200) {
          alert("Login Successfully");
          Navigate("/");
        } else if (response.status === 401) {
          alert("Нууц үг буруу байна.!!!");
        } else if (response.status === 404) {
          alert("Мэйл хаяг буруу байна.!!!");
        }
      } catch (error) {
        console.error("Login Failed", error);
        alert("Login Failed");
      }
    };

    await login(email, password);
  };

  return (
    <section className={css.loginSection}>
      <div className={css.formBox}>
        <div className={css.formValue}>
          <form className="form" onSubmit={handleSubmit}>
            <h2>
              <strong>Нэвтрэх</strong>
            </h2>
            <p className={css.result}>{validationError}</p>
            <br />
            <div className={css.inputBox}>
              <input
                type="text"
                className="email"
                name="email"
                value={email}
                // onChange={handleInputChange}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Нэвтрэх нэр</label>
            </div>
            <div className={css.inputBox}>
              <input
                type="password"
                className="password"
                name="password"
                value={password}
                // onChange={handleInputChange}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Нууц үг</label>
            </div>
            <div className={css.forget}>
              <label>
                <input
                  type="checkbox"
                  className="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  // onChange={handleInputChange}
                />
                Намайг сана
              </label>
              <label>
                <p>Нууц үг мартсан</p>
              </label>
            </div>
            <div>
              <button className={css.button} type="submit">
                Нэвтрэх
              </button>
            </div>

            <div>
              <button className={css.button} onClick={register}>
                Бүртгүүлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
