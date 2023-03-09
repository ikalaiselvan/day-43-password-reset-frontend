import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./globalapi";
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    return setInput({ ...input, ...e });
  };
  console.log(input);
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const response = await axios.post(
      `${API}/signin`,
      input,
      { withCredentials: true }
    );
    if (response) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h3 className="heading">Login</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="label form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange({ email: e.target.value })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="label form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange({ password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <div className="login-forgot">
        <a href="/forgot-password">forgot password ?</a>
        <a href="/register">Register ?</a>
      </div>
    </div>
  );
}
