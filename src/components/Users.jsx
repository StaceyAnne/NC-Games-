import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { useContext } from "react";
import { SignInContext } from "../contexts/SignIn";
import UserCard from "./UserCard";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(SignInContext);
  const [className, setClassName] = useState();

  const signIn = (event) => {
    event.preventDefault();
    if (user) {
      if (user.name === event.target.name.value) {
        setUser();
        event.target.button.innerText = `Sign In`;
        return;
      } else {
        return;
      }
    }

    const name = event.target.name.value;
    const avatar = event.target.avatar.value;
    setUser({ name: name, avatar: avatar });
    event.target.button.innerText = "Sign Out";
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
      <ul className="userCard">
        {allUsers.map((userData, index) => {
          return (
            <UserCard
              username={userData.username}
              name={userData.name}
              avatar={userData.avatar_url}
              index={index}
              signIn={signIn}
              className={className}
              user={user}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
