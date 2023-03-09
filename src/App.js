import "./App.css";
import {Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import Register from "./Component/Register";
import ForgotPassword from "./Component/ForgotPassword";
import ResetPassword from "./Component/ResetPassword";
import Logout from "./Component/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<h3 className="main-heading">Password reset flow app</h3>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/passwordReset" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
