import './register.css';

function Register() {
  return (
    <div className="register_container">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Zed Social</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Zed Social
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input type="text" className="registerInput" placeholder="Username" />
            <input type="email" className="registerInput" placeholder="Email" />
            <input type="password" className="registerInput" placeholder="Password" />
            <input type="password" className="registerInput" placeholder="Password Again" />
            <button className="registerButton">Sign Up</button>
            <button className="logIntoAccount">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
