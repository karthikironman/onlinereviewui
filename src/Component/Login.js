import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log({ username, password });
    if (username === "rayees" && password === "sarkar") {
      navigate("home");
    } else alert("username or password is wrong");
  };
  return (
    <div className="login-container">
      <p>LOGIN</p>
      <div className="login-container-row">
        <p className="login-container-row-label">USERNAME</p>
        <input
          className="login-container-row-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="login-container-row">
        <p className="login-container-row-label">PASSWORD</p>
        <input
          className="login-container-row-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button className="login-container-row-button" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
};
export default Login1;
