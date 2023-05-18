import image from "./user.png";
import { Link, Navigate } from "react-router-dom";
import { SignInContext } from "../contexts/SignIn";
import { useContext } from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const { user, setUser } = useContext(SignInContext);
  const [signedInLogo, setSignedInLogo] = useState(image);
  const [loginButton, setLoginButton] = useState("Sign In");

  useEffect(() => {
    if (user) {
      setSignedInLogo(user.avatar);
      setLoginButton("Sign Out");
    }
    else {
      setSignedInLogo(image)
      setLoginButton("Sign In")
    }

  }, [user]);

  const HandleSignIn = () => {
    if (user) {
      setUser()
      setSignedInLogo(image);
      setLoginButton("Sign In");
  };
}

  return (
    <div className="header">
       
     <Link to="/reviews">
      <div className="menu">
        <p>Reviews</p>
      </div>
      </Link>
      <Link to="/">
        <h1>NC Games</h1>
      </Link>
       <div className="userIcon">
      <Link to="/users"><img src={signedInLogo} alt="user icon" className="signInImage"></img>
      </Link> 
        {!user ? (
          <Link to="/users">
            <button className="signInButton">{loginButton}</button>
          </Link>
        ) : (
          <button className="signInButton" onClick={HandleSignIn}>{loginButton}</button>
        )}
        
      </div>
      
    </div>
  );
};

export default Header;
