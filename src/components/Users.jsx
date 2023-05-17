import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { useContext } from "react";
import { SignInContext } from "../contexts/SignIn";
import { Link } from 'react-router-dom'; 
import UserCard from "./UserCard";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(SignInContext);
  const [loginButton, setLoginButton] = useState("Sign In");

  const signIn = (event) => {
    event.preventDefault();
    // if (user) {
    //   setUser();
    // }

    //map through all the buttons in the list
    //disable that any are not the one that we are
    // signed in as 
    const allButtons = allUsers.map((user) => {
      return user.name; 
    })

    allButtons.map((user) => {
      button.user.disabled = "true"
    })

    console.log(allButtons)
   
    const name = event.target.name.value;
    const avatar = event.target.avatar.value;
    setUser({ name: name, avatar: avatar });
    const button = event.target.button;
    button.className = "selectedClass";
    event.target.button.innerText = "Sign Out";
    console.log(button.id.happyamy2016)
    
  };

  // Displays all users

  useEffect(() => {
    getUsers().then((users) => {
      setAllUsers(users);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users">
      {user && (
        <div className="signedInAs">You are now signed in as: {user.name}</div>
      )}
      <p>Current users:</p>
      <ul className="userCard">
        {allUsers.map((user, index) => {
        return <UserCard username={user.name} name={user.name} avatar={user.avatar} index={index} signIn={signIn}/>
        })}
      </ul>
    </div>
  );
};

export default Users;
