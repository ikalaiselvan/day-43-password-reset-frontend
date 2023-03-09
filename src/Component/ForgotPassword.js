import React, { useState } from 'react'
import API from './globalapi';
import axios from "axios";

export default function ForgotPassword() {
    
    const [email, setEmail]=useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${API}/forgotPassword`, { email: email }, { withCredentials: true });
        alert(response.data.message)
    };
  return (
    <div className="forgot-pass-container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className=" forgot-email form-label">
            Enter your email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Reset password
        </button>
      </form>
    </div>
  );
}
