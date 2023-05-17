 const UserCard = ( { username, name, avatar, index, signIn }) => {
     return (
            <li key={index}>
              <img src={avatar} alt={name}></img>
              <h3>Username: {username}</h3>
              <p>Name: {name}</p>
              <form name="userForm" onSubmit={signIn}>
                <input type="hidden" name="name" value={username}></input>
                <input
                  type="hidden"
                  name="avatar"
                  value={avatar}
                ></input>
                
                <button type="submit" id={name} name="button">
                  Sign In as {username}
                </button>
              </form>
            </li>
          );
 }

 export default UserCard; 