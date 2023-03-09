import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
import axios from "axios";
import API from './globalapi';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul class="nav">
        <li class="nav-item">
          <a className="home" aria-current="page" href="/">
            Password Reset Flow
          </a>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">
            Login
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">
            Register
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/logout'>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
