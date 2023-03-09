import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "./globalapi";

export default function ResetPassword() {

    const [userData, setUserData] = useState({
      userId: "",
      token: "",
      password: "",
    });
    const navigate = useNavigate();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");
    const userId = new URLSearchParams(search).get("id");

    useEffect(() => {
      setUserData({ ...userData, userId: userId, token: token });
    }, []);

    const handleLogin = async (event) => {
      try {
        event.preventDefault();
        const response = await axios.post(
          `${API}/resetPassword`,
          userData,
          { withCredentials: true }
        );
        if (response) {
          navigate("/login");
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };

  return (
    <div className="forgot-pass-container">
      <h3 className="heading">Enter your new password</h3>
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="forgot-email form-label"
          >
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter new password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Reset your password
        </button>
      </form>
    </div>
  );
}
