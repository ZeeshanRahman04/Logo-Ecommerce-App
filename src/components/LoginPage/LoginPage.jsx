import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login__page">
      <div className="login__page__container">
        <h1>Sign In</h1>
        <p>Enter your credentials to access your account</p>
        <div className="login__input">
          <input type="email" id="mail" placeholder="Email Address" />
          <input type="password" id="password" placeholder="Password" />
        </div>
      </div>
      <div className="login--btn">
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default LoginPage;
