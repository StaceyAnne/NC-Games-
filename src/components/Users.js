
import { useState, useEffect } from "react";
import { getUsers } from "../api";


const Users = () => {
  //const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true)
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
     setAllUsers(users);
     setLoading(false)
    });
  }, []);

  const signIn = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    // const avatar = event.target.avatar.value; 
   // setUser({ name: name, avatar: avatar })
    
  };

 if (loading) return <p>Loading users...</p>

  return (
    <div className="users">
        <p>Current users:</p>
      <ul className="userCard">
        {allUsers.map((user, index) => {
            console.log(user)
          return (
            <li key={index}>
              <img src={user.avatar_url} alt={user.name}></img>
              <h3>{user.name}</h3>
              <form name="userForm" onSubmit={signIn}>
                <input type="hidden" name="name" value={user.name}></input>
                <input
                  type="hidden"
                  name="avatar"
                  value={user.avatar_url}
                ></input>
                <button type="submit" id={user}>
                  Sign in
                </button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
