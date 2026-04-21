import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import Cookies from "js-cookie";

import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();

    const userDetails = { username, password };

    const apiUrl = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(apiUrl, options);
    const responseData = await response.json();
    console.log(responseData);
    if (response.ok === true) {
      const jwtToken = Cookies.set("jwt_token", responseData.jwt_token, {
        expires: 30,
      });
      navigate("/", { replace: true });
    } else {
      setErrorMsg(responseData.error_msg);
      setShowErrorMsg(true);
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <form className="login__page" onSubmit={submitForm}>
      <div className="login__page__container">
        <h1>Sign In</h1>
        <p>Enter your credentials to access your account</p>
        <div className="login__input">
          <input
            type="text"
            id="sign-in"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {showErrorMsg && <p className="error-msg">**{errorMsg}</p>}
      <div className="login--btn">
        <button>Sign In</button>
      </div>
    </form>
  );
}

export default LoginPage;
