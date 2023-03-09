import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./globalapi";
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    return setInput({ ...input, ...e });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${API}/register`,
      input,
      { withCredentials: true }
    );
    if (response) {
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <h3 className="heading">Register</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="label form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => handleChange({ name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="label form-label">
            Email
          </label>
          <input
            type="email"
            className="label form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange({ email: e.target.value })}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="label form-control"
            id="mobile"
            onChange={(e) => handleChange({ mobileNumber: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
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
    </div>
  );
}
